import { useState, useEffect, useRef } from "react";
import './FaceDetection.css';
import { motion } from 'framer-motion';
import { dataFace } from "../../../../interfaces/Body/faceDetection/faceDetectionInterface";


const UrlWebSocket = process.env.REACT_APP_WEBSOKET
const IMAGE_INTERVAL_MS = 42

const FaceDetection = () => {
  const [start, setStart] = useState(null)
  const [detection, setDetection] = useState(dataFace)
  const selectCamera = useRef(null)
  const videoFrame = useRef(null)
  const imageRef = useRef(null)
  const Viedowidth = 640
  const Videoheight = 480
  let ws = null

  const handleStart = () => {
    setStart('start')
  }

  const handleStop = () => setStart('stop')

  const startFaceDetection = (video, canvas, deviceId, socket) => {
    let intervalId;
    socket.addEventListener('open', () => {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          deviceId,
          width: { max: Viedowidth },
          height: { max: Videoheight },
        }
      }).then(stream => {
        video.current.srcObject = stream
        video.current.play().then(() => {
          canvas.current.width = video.current.viedoWidth
          canvas.current.height = video.current.videoHeight

          intervalId = setInterval(() => {
            const ctx = canvas.current.getContext('2d')
            canvas.current.width = video.current.viedoWidth
            canvas.current.height = video.current.videoHeight
            ctx.drawImage(video.current, 0, 0)
            canvas.current.toBlob(blob => console.log(blob), 'image/jpeg')
          }, IMAGE_INTERVAL_MS)
        })
      }).catch(error => alert(error))
    })
    socket.addEventListener('message', e => {
      setDetection(JSON.parse(e.data))
      drawFaceRectangles(video, canvas)
    })
    socket.addEventListener('close', () => {
      window.clearInterval(intervalId)
      video.current.pause()
    })
  }

  const drawFaceRectangles = (video, canvas) => {
    const ctx = canvas.current.getContext('2d')
    ctx.width = video.current.videoWidth
    ctx.height = video.current.videoHeight
    ctx.beginPath()
    ctx.clearReact(0, 0, ctx.width, ctx.height)
    for (const [x, y, width, height] of detection[0].area) {
      ctx.strokeStyle = '#49fb35'
      ctx.beginPath()
      ctx.rect(x, y, width, height)
      ctx.strock()
    }

  }

  useEffect(() => {
    if (start === 'start') {
      ws = new WebSocket('ws://localhost:8000/face-detection')
      startFaceDetection(videoFrame, imageRef, selectCamera.current.value, ws)
    }
    if (start === 'stop' && ws !== null) {
      console.log('paso')
      ws.close()
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

          <div className="container-fluid">
            <video id="video-frame" ref={videoFrame}></video>
            <canvas id="canvas-detection" ref={imageRef}></canvas>

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

          </div>

        </motion.div>
      </div>

    </section>
  );
};
export default FaceDetection;