import './Header.css'
import Time from './components/time/Time'
import Weather from './components/weather/Weather'
import { motion } from 'framer-motion'



const Header = () => (
  <nav className="navbar bg-transparent align-content-center">
    <div className="container-fluid">
      <motion.h1
        className="navbar-brand text-start fs-1"
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      >
        AI
      </motion.h1>
      <div className='d-flex g-2'>
        <Time />
        <Weather />
      </div>

    </div>
  </nav>
)







export default Header
