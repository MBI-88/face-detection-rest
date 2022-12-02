import './Weather.css';
import { apiWeather } from '../../../../services/serviceHeader/serviceWeather';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WeatherData from '../../../../interfaces/Header/weatherInterface';




const Weather = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const handlerSuccess = pos => {
    latitude = pos.coords.latitude
    longitude = pos.coords.longitude

  }
  
  navigator.geolocation.getCurrentPosition(handlerSuccess, () => { }, options)
  let latitude = null
  let longitude = null
  const [data, setData] = useState(WeatherData)
  const [show, setShow] = useState(true)

 

  const handlerMouseIn = () => {
    setShow(false)
  }
  const handlerMouseOut = () => {
    setShow(true)
  }

  useEffect(() => {
    apiWeather(longitude, latitude)
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
  }, [])

  return (
    <>
      <motion.h1
        className="navbar-brand mb-0 text-center fs-2"
        initial={{ color: '#ffff00f5' }}
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease-out' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        onMouseEnter={() => handlerMouseIn()}
        onMouseLeave={() => handlerMouseOut()}
      >
        Weather
      </motion.h1>

      <AnimatePresence>
        {
          !show && latitude && longitude &&
          (<motion.div
            style={{ zIndex: 999, position: 'absolute', left: '80%', top: '80%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <section className='container text-center'>
              <img className="card-img-top w-25 h-25" src={`https://openweathermap.org/img/wn/${data.current.weather[3].icon}@2x.png`} alt="..." loading='lazy' />
              <div class="card-body">
                <h4 class="card-title text-start pb-2">{data.timezone ? <span>...</span> : data.timezone}</h4>
                <p class="card-text text-start">
                  <p>Temperature: {data.current.temp ? <span>...</span> : data.current.temp} C° </p>
                  <p>Feel like: {data.current.feels_like ? <span>... </span> : data.current.feels_like} C°</p>
                  <p>Pressure: {data.current.pressure ? <span>... </span> : data.current.pressure} hPa</p>
                  <p>Humidity: {data.current.humidity ? <span>... </span> : data.current.humidity} HR</p>
                  <p>Wind speed: {data.current.wind_speed ? <span>... </span> : data.current.wind_speed} Km/h</p>
                  <p>Description: {data.current.weather[2] ? <span>...</span> : data.current.weather[2]}</p>
                </p>
              </div>
            </section>
          </motion.div>)
        }
      </AnimatePresence>
    </>
  )
}

export default Weather
