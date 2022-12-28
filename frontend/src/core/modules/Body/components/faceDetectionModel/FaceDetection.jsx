import { useState, useEffect, useRef } from "react";
import './FaceDetection.css';
import { motion } from 'framer-motion';



const IMAGE_INTERVAL_MS = 42

const FaceDetection = () => {
  const [start, setStart] = useState(null)
  const selectCamera = useRef(null)
  const videoFrame = useRef(null)
  const canvaRef = useRef(null)
  let socket = null

  const handleStart = () => {
    setStart('start')
  }

  const handleStop = () => setStart('stop')

  const drawFaceRectangles = (video, canvas, data) => {
    const ctx = canvas.current.getContext('2d')
    ctx.width = video.current.videoWidth
    ctx.height = video.current.videoHeight
    ctx.beginPath()
    ctx.clearRect(0, 0, ctx.width, ctx.height)

    for (let elem of data.data) {
      const [x, y, width, height] = elem.area
      ctx.strokeStyle = '#49fb35'
      ctx.beginPath()
      ctx.rect(x, y, width, height)
      ctx.stroke()
    }
  }

    const startFaceDetection = (video, canvas, deviceId) => {
      const socket = new WebSocket('ws://localhost:8000/face-detection')
      let intervalId;
      socket.addEventListener('open', () => {
        navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            deviceId,
            width: { max: 640 },
            height: { max: 480 },
          }
        }).then(stream => {
          video.current.srcObject = stream
          video.current.play().then(() => {
            canvas.current.width = video.current.videoWidth
            canvas.current.height = video.current.videoHeight

            intervalId = setInterval(() => {
              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              canvas.width = video.current.videoWidth
              canvas.height = video.current.videoHeight
              ctx.drawImage(video.current, 0, 0)
              canvas.toBlob(blob => socket.send(blob), 'image/jpeg')
            }, IMAGE_INTERVAL_MS)
          })
        }).catch(error => console.log(error))
      })
      socket.addEventListener('message', e => {
        let data = JSON.parse(e.data)
        drawFaceRectangles( video, canvas , data)
      })
      socket.addEventListener('close', () => {
        window.clearInterval(intervalId)
        video.current.pause()
      })
      return socket
    }



    useEffect(() => {
      if (start === 'start' && socket === null) {
        socket = startFaceDetection(videoFrame, canvaRef, selectCamera.current.value)
      }
      if (start === 'stop' && socket !== null) {
        console.log('paso')
        socket.close()

      }
      else {
        return
      }
    }, [start])

    useEffect(() => {
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          for (const device of devices) {
            if (device.kind === 'videoinput' && device.deviceId) {
              const deviceOption = document.createElement('option');
              deviceOption.value = device.deviceId;
              deviceOption.innerText = device.label;
              selectCamera.current.appendChild(deviceOption)
            }
          }
        }
        ).catch(err => alert(err))
    }, [])

    return (
      <section className="mt-5 mb-5">
        <div className="container p-2">
          <motion.h3 className="fs-3 text-start"
            animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          >
            Face Detection local model
          </motion.h3>

          <motion.div
            className="mt-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 1 }
            }}
            viewport={{ once: true }}
          >
            <div className="container">
              <div id="form-connect" className="form-control">
                <select id="selection" ref={selectCamera}>
                </select>
                <button className="btn btn-success ms-2" type="button" id="start" onClick={handleStart}>Start</button>
                <button className="btn btn-close ms-2" type="button" id="stop" onClick={handleStop}>Stop</button>
              </div>
            </div>

            <div className="position-relative">
              <video id="video-frame" ref={videoFrame}></video>
              <canvas id="canvas-detection" ref={canvaRef} className="position-absolute canvas start-0"></canvas>

              {/**
             
                <div className="d-lg-flex d-block align-items-center">
                {
                  detection[0].age_confi !== null && detection[0].gender_conf !== null ? (
                    detection.map(data => (
                      <div className="form-control">
                        <input className="form-control w-50" type="text" value={data.age} readOnly />
                        <input className="form-control w-50" type="text" value={data.age_confi} readOnly />
                        <input className="form-control w-50" type="text" value={data.gender} readOnly />
                        <input className="form-control w-50" type="text" value={data.gender_conf} readOnly />
                      </div>
                    ))
                  ) : <p className="fs-5">Not data to show</p>
                }
                  </div>

             */}


            </div>

          </motion.div>
        </div>

      </section>
    );
};
  

export default FaceDetection;