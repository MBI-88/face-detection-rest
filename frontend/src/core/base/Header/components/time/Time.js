import './Time.css'
import { useState } from 'react'
import { motion } from 'framer-motion'


const Time = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
  })
  setInterval(() => {
    const timer = new Date()
    setTime({
      hours: timer.getHours(),
      minutes: timer.getMinutes(),
    })
  }, 1000)

  return (
    <motion.h1
      className="navbar-brand text-end fs-1"
      animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
      transition={{ duration: 10, repeat: Infinity, delay: 1 }}
    >
      {time.hours}:{time.minutes}
    </motion.h1>

  )
}

export default Time
