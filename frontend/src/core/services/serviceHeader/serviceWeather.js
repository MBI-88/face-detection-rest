
const Url = process.env.REACT_APP_API_WEATHER
const Key = process.env.REACT_APP_WEATHER_KEY


export const apiWeather = (latitude,longitude) => {
    const urlApi = `${Url}onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,dail,alerts,minutely&appid=${Key}`
    return fetch(urlApi)
}
