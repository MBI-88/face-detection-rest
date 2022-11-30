import './Weather.css';
import { apiWeather } from '../../../../services/serviceHeader/serviceWeather';
import { useState,useEffect } from 'react';
import {motion} from 'framer-motion';

const Weather = ({longitude,latitude}) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const result  = apiWeather(longitude,latitude)
  }, [])

  return (
    <>
    {data ? <p>Preparando...</p>
    :
    <h1 className="navbar-brand mb-0 text-end fs-2">Weather</h1>
    }
        
      
    </>
  )
}

export default Weather
