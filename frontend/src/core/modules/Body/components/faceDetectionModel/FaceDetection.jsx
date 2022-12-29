import { useEffect, useRef } from "react";
import './FaceDetection.css';
import { motion } from 'framer-motion';


const IMAGE_INTERVAL_MS = 60

const FaceDetection = () => {
  const selectCamera = useRef()
  const videoFrame = useRef()
  const canvaRef = useRef()
  let socket = null
  let intervalId = null

  const handleStart = () => {
    if (socket === null) {
      socket = new WebSocket('ws://localhost:8000/face-detection')
      socket.addEventListener('open', () => {
        const deviceId = selectCamera.current.value
        navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            deviceId,
            width: { max: 640 },
            height: { max: 480 },
          }
        }).then(stream => {
          videoFrame.current.srcObject = stream
          videoFrame.current.play().then(() => {
            canvaRef.current.width = videoFrame.current.videoWidth
            canvaRef.current.height = videoFrame.current.videoHeight
            intervalId = setInterval(() => {
              const canvasVirtual = document.createElement('canvas')
              canvasVirtual.width = videoFrame.current.videoWidth
              canvasVirtual.height = videoFrame.current.videoHeight
              const ctx = canvasVirtual.getContext('2d')
              ctx.drawImage(videoFrame.current, 0, 0)
              canvasVirtual.toBlob(blob => socket.send(blob), 'image/jpeg')
            }, IMAGE_INTERVAL_MS)
          })
        }).catch(error => console.log(error))
      })

      socket.addEventListener('message', e => {
        let data = JSON.parse(e.data)
        drawFaceRectangles(videoFrame, canvaRef, data)
      })

      socket.addEventListener('close', () => {
        window.clearInterval(intervalId)
        videoFrame.current.pause()
      })
    } 

  }

  const handleStop = () => {
    if (socket !== null) {
      socket.close()
      videoFrame.current.pause()
      window.clearInterval(intervalId)
      videoFrame.current.srcObject.getTracks()[0].stop()
      canvaRef.current.getContext('2d').clearRect(0,0,videoFrame.current.videoWidth,videoFrame.current.videoHeight)
      videoFrame.current.srcObject = null
      socket = null
    }
    
  }

  const drawFaceRectangles = (video, canvas, data) => {
    const ctx = canvas.current.getContext('2d')
    ctx.width = video.current.videoWidth
    ctx.height = video.current.videoHeight
    ctx.beginPath()

    for (let elem of data.data) {
      ctx.clearRect(0, 0, ctx.width, ctx.height)
      const [x0, y0, x1, y1] = elem.area
      ctx.strokeStyle = '#49fb35'
      ctx.beginPath()
      ctx.font = "10px Lora"
      ctx.fillStyle = '#49fb35'
      ctx.fillText(`Age: ${elem.age} Confi: ${elem.age_confi}`, x0, y0 - 5)
      ctx.fillText(`Gender: ${elem.gender} Confi: ${elem.gender_confi}`, x0 + 150, y0 - 5)
      ctx.rect(x0, y0, x1, y1)
      ctx.stroke()

    }
  }


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
            <div id="form-connect" className="d-lg-flex d-block align-content-center">
              <select id="selection" ref={selectCamera} className="form-control w-50">
              </select>
              <button className="btn btn-info m-2" type="button" onClick={handleStart}>Start</button>
              <button className="btn btn-warning m-2" type="button" onClick={handleStop}>Stop</button>
            </div>
          </div>

          <div className="container m-5">
            <div style={{ display: "flex" }}>
              <video id="video-frame" ref={videoFrame} className="w-auto h-auto"/>
              <canvas id="canvas-detection" ref={canvaRef} className="position-absolute w-auto h-auto"/>
            </div>
          </div>


        </motion.div>
      </div>

    </section>
  );
};


export default FaceDetection;