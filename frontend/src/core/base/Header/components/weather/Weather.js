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

  let latitude = null
  let longitude = null

  const handlerSuccess = pos => {
    latitude = pos.coords.latitude
    longitude = pos.coords.longitude

  }

  navigator.geolocation.getCurrentPosition(handlerSuccess, () => { }, options)

  const [data, setData] = useState(WeatherData)
  const [show, setShow] = useState(true)



  const handlerMouseIn = () => {
    setShow(false)
  }
  const handlerMouseOut = () => {
    setShow(true)
  }

  useEffect(() => {
    if (longitude !== null && latitude !== null) {
      apiWeather(longitude, latitude)
        .then(response => response.json())
        .then(result => {
          setData(result)
        })
    }
  }, [longitude, latitude])

  return (
    <>
      <motion.h1
        className="navbar-brand  text-end fs-1"
        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        onMouseEnter={handlerMouseIn}
        onMouseLeave={handlerMouseOut}
      >
        Weather
      </motion.h1>

      <AnimatePresence>
        {
          !show && data &&
          (<motion.section
            className='rounded-5 shadow p-2 card-weather m-2 text-center'
            initial={{ top: '-450px', display: 'none' }}
            animate={{ top: '60px', display: 'block' }}
            transition={{ duration: 1.2 }}
            exit={{ top: '-450px' }}
            onMouseEnter={handlerMouseIn}
            onMouseLeave={handlerMouseOut}
          >
            <img className="card-img-top w-25 h-25" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="..." loading='lazy' />
            <div className="card-body">
              <p className="card-title text-start pb-2 text-color">{data.name}</p>
              <article className="card-text text-start">
                <p className='text-color'>Temperature: {data.main.temp} C° </p>
                <p className='text-color'>Feel like: {data.main.feels_like} C°</p>
                <p className='text-color'>Min: {data.main.temp_min} C°</p>
                <p className='text-color'>Max: {data.main.temp_max} C°</p>
                <p className='text-color'>Pressure: {data.main.pressure} hPa</p>
                <p className='text-color'>Humidity: {data.main.humidity} HR</p>
                <p className='text-color'>Wind speed: {data.wind.speed} Km/h</p>
                <p className='text-color'>Description: {data.weather[0].description}</p>
              </article>
            </div>

          </motion.section>)
        }
      </AnimatePresence>
    </>
  )
}

export default Weather
