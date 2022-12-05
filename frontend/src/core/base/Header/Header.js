import './Header.css'
import Time from './components/time/Time'
import Weather from './components/weather/Weather'
import { motion } from 'framer-motion'



const Header = () => (
  <nav className="navbar bg-transparent">
    <div className="container-fluid  align-content-center">
      <motion.h1
        className="navbar-brand mb-0 text-start fs-2"
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      >
        AI
      </motion.h1>
      <Time />
      <Weather />
    </div>
  </nav>
)







export default Header
