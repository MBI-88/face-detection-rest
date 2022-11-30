import './Header.css'
import Time from './components/time/Time'
import Weather from './components/weather/Weather'
import { useState, useEffect } from 'react'



const Header = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const [headerData, setHeaderData] = useState({})

  const handlerSuccess = pos => {
    setHeaderData(
      {
        latitude: String(pos.coords.latitude),
        longitude: String(pos.coords.longitude),
        timestamp: new Date(pos.timestamp)
      }
    )
    console.log(headerData)
  }

  const handlerError = err => {
    setHeaderData(
      {
        latitude: err.code,
        longitude: err.message,
      }
    )
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handlerSuccess, handlerError, options)
  }, [])

  return (
    <nav className="navbar bg-transparent">
      <div className="container-fluid  align-content-center">
        <h1 className="navbar-brand mb-0 text-start fs-2">AI</h1>
        <Time timer={headerData.timestamp} />
        <Weather longitude={headerData.longitude} latitude={headerData.latitude} />
      </div>
    </nav>

  )
}

export default Header
