import { useState, useEffect, useCallback, useRef } from "react";
import './FaceDetection.css';
import { motion } from 'framer-motion';
import { Stage, Layer, Rect, Image } from 'react-konva';
import WebSocket from 'ws';
import { dataFace } from "../../../../interfaces/Body/faceDetection/faceDetectionInterface";


const UrlWebSocket = process.env.REACT_APP_WEBSOKET
const IMAGE_INTERVAL_MS = 42

const FaceDetection = () => {
  const [start, setStart] = useState(false)
  const [detection, setDetection] = useState(dataFace)
  const selectCamera = useRef(null)
  const videoFrame = useRef(null)
  const imageRef = useRef(null)
  const Viedowidth = 640
  const Videoheight = 480
  const ws = new WebSocket(UrlWebSocket)
  let socket = null
  const [optionCamera, setOptionCamera] = useState([])

  const handleStart = (event) => {
    event.preventDefault()
    setStart(true)
  }

  const handleStop = () => setStart(false)

  const startFaceDetection = (video, canvas, deviceId) => {
    let intervalId;
    ws.on('open', () => {
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
          intervalId = setInterval(() => {
            canvas.current.image = video
            canvas.current.toBlob({
            }).then(blob => ws.send(blob))
          }, IMAGE_INTERVAL_MS)
        })
      }).catch(error => alert(error))
    })
    ws.on('message', e => {
      setDetection(JSON.parse(e.data))
    })
    ws.on('close', () => {
      window.clearInterval(intervalId)
      video.pause()
    })
  }

  const startProcess = (video, canvas) => {
    socket = startFaceDetection(video, canvas, selectCamera.current.value)
  }

  useEffect(() => {
    if (!start) {
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          for (const device of devices) {
            if (device.kind === 'videoinput' && device.deviceId) {
              setOptionCamera(
                optionCamera.push({
                  'deviceId': device.deviceId,
                  'deviceLabel': device.label
                })
              )
              //const optionElement = <option></option>
              //optionElement.value = device.deviceId
              //optionElement.innerText = device.label
              //selectCamera.current.appendChild(optionElement)
            }
          }
        }
        ).catch(err => alert(err))
    }


    if (start) {
      if (socket !== null) socket.close()

      socket = startProcess(videoFrame, imageRef)
    }
  }, [start])

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
          className="mt-3 d-lg-flex d-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1 }
          }}
          viewport={{ once: true }}
        >
          <div className="container">
            <form id="form-connect" className="form-control">
              <select id="selection" ref={selectCamera}>
                {
                  optionCamera !== [] ? (
                    optionCamera.map(op => (
                      <option value={op.deviceId}>{op.deviceLabel}</option>
                    ))
                  ) : ("")
                }
              </select>
              <button className="btn btn-success" type="submit" id="start" onSubmit={e => handleStart(e)}>Start</button>
              <button className="btn btn-close" type="submit" id="stop" onClick={handleStop}>Stop</button>
            </form>
          </div>

          <div className="container-fluid">
            <video id="video-frame" ref={videoFrame}></video>
            {
              detection[0].area !== [null] ? (
                <Stage width={Viedowidth} height={Videoheight}>
                  <Layer>
                    {
                      detection.map(face => (
                        <Rect x={face.area[0]} y={face.area[1]} width={face.area[2]} height={face.area[3]} stroke='#49fb35' />

                      ))
                    }
                    <Image ref={imageRef} />
                  </Layer>
                </Stage>
              ) : <p className="fs-5">Watting...</p>

            }

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