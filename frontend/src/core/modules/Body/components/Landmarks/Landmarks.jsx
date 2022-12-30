import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as faceApi from 'face-api.js';
import './Landmarks.css'


const Landmarks = () => {
    const [viewport, setViewport] = useState(0)
    const videoRef = useRef()
    const canvaRef = useRef()
    const selectedCamera = useRef()
    let idInterval = null

    const loadModels = () => {
        const MODEL_URL = `http://localhost:3000/models`;
        Promise.all([
            faceApi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceApi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceApi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceApi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            faceApi.nets.ageGenderNet.loadFromUri(MODEL_URL),
            faceApi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        ]).catch((err) => console.log(err));
    };

    useEffect(() => {
        navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                for (const device of devices) {
                    if (device.kind === 'videoinput' && device.deviceId) {
                        const deviceOption = document.createElement('option');
                        deviceOption.value = device.deviceId;
                        deviceOption.innerText = device.label;
                        selectedCamera.current.appendChild(deviceOption)
                    }
                }
            }
            ).catch(err => alert(err))

        loadModels()

        window.addEventListener('resize', () => {
            setViewport(window.innerWidth)
        })
    }, [])

    const handleStart = () => {
        const deviceId = selectedCamera.current.value
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                deviceId,
                width: { max: viewport <= 784 ? 300 : 640 },
                height: { max: viewport <= 748 ? 300 : 480 },
            }
        }).then(stream => {
            videoRef.current.srcObject = stream
            videoRef.current.play().then(() => {
                idInterval = setInterval(async () => {
                    canvaRef.current.innerHTML = faceApi.createCanvasFromMedia(
                        videoRef.current
                    );

                    faceApi.matchDimensions(canvaRef.current, {
                        width: viewport <= 784 ? 300 : 640,
                        height: viewport <= 748 ? 300 : 480,
                    });

                    const detections = await faceApi.detectAllFaces(
                        videoRef.current,
                        new faceApi.TinyFaceDetectorOptions()
                    ).withFaceLandmarks().withFaceExpressions();


                    const resizedDetections = faceApi.resizeResults(
                        detections,
                        {
                            width: viewport <= 784 ? 300 : 640,
                            height: viewport <= 748 ? 300 : 480,
                        }
                    );
                    canvaRef.current
                        .getContext('2d')
                        .clearRect(0, 0, viewport <= 784 ? 300 : 640, viewport <= 748 ? 300 : 480);
                    faceApi.draw.drawDetections(canvaRef.current, resizedDetections);
                    faceApi.draw.drawFaceLandmarks(
                        canvaRef.current,
                        resizedDetections
                    );
                    faceApi.draw.drawFaceExpressions(
                        canvaRef.current,
                        resizedDetections
                    );

                }, 100)
            })
        })

        window.removeEventListener('resize', () => { })
        selectedCamera.current.disabled = true
    }

    const handleStop = () => {
        videoRef.current.pause()
        window.clearInterval(idInterval)
        videoRef.current.srcObject.getTracks()[0].stop()
        canvaRef.current.getContext('2d').clearRect(0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight)
        videoRef.current.srcObject = null
        selectedCamera.current.disabled = false

    }


    return (
        <section className="mt-5 mb-5">
            <div className="container p-2">
                <motion.h3 className="fs-3 text-start"
                    animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                >
                    Landmarks detection
                </motion.h3>

                <motion.div
                    className="mt-3 border-5 shadow p-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1 }
                    }}
                    viewport={{ once: true }}
                >
                    <div className="container mb-3">
                        <div id="form-connect" className="d-lg-flex d-block align-content-center">
                            <select id="selection" ref={selectedCamera} className="form-control w-50">
                            </select>
                            <button className="btn btn-info m-2" type="button" onClick={handleStart}>Start</button>
                            <button className="btn btn-warning m-2" type="button" onClick={handleStop}>Stop</button>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <video id="video-frame" ref={videoRef} className="widthXheight" />
                        <canvas id="canvas-detection" ref={canvaRef} className="position-absolute widthXheight" />
                    </div>
                </motion.div>

            </div>

        </section>

    );
};
export default Landmarks;