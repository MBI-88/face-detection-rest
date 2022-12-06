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
    if (longitude !== null && latitude !== null){
      apiWeather(longitude, latitude)
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
    }
  },[longitude, latitude])

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
          (<motion.div
            className='rounded-5 shadow p-2 card-weather m-2'
            initial={{ top: '-400px' }}
            animate={{ top: '60px' }}
            transition={{ duration: 1.2 }}
            exit={{ top: '-450px' }}
            onMouseEnter={handlerMouseIn}
            onMouseLeave={handlerMouseOut}
          >
            <section className='container-fluid text-center'>
              <img className="card-img-top w-25 h-25" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="..." loading='lazy' />
              <div className="card-body">
                <p className="card-title text-start pb-2">{data.name}</p>
                <article className="card-text text-start">
                  <p>Temperature: {data.main.temp} C° </p>
                  <p>Feel like: {data.main.feels_like} C°</p>
                  <p>Min: {data.main.temp_min} C°</p>
                  <p>Max: {data.main.temp_max} C°</p>
                  <p>Pressure: {data.main.pressure} hPa</p>
                  <p>Humidity: {data.main.humidity} HR</p>
                  <p>Wind speed: {data.wind.speed} Km/h</p>
                  <p>Description: {data.weather[0].description}</p>
                </article>
              </div>
            </section>
          </motion.div>)
        }
      </AnimatePresence>
    </>
  )
}

export default Weather
