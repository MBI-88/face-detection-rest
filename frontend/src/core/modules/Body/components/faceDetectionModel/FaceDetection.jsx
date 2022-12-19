import { useState, useEffect,useCallback } from "react";
import './FaceDetection.css';
import { motion } from 'framer-motion';
import { Stage, Layer, Rect } from 'react-konva';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { dataFace } from "../../../../interfaces/Body/faceDetection/faceDetectionInterface";



const UrlWebSocket = process.env.REACT_APP_WEBSOKET
const options = {
  fromSocketIO: true,
}

const FaceDetection = () => {
  const [start, setStart] = useState(false)
  const [data, setData] = useState(dataFace)
  const { sendMessage, lastMessage, readyState } = useWebSocket(UrlWebSocket,options)

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];



  const handleStart = () => setStart(true)
  const handleStop = () => setStart(false)
  const handleSendMessages = useCallback(() => sendMessage(),[])



  useEffect(() => {
    if (start !== false) {

    } else {
      return
    }

  }, [start])

  return (
    <section className="container mt-5 mb-5">


    </section>
  );
};
export default FaceDetection;