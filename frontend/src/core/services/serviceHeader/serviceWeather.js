
const Url = process.env.REACT_APP_API_WEATHER
const Key = process.env.REACT_APP_WEATHER_KEY


export const apiWeather = (latitude,longitude) => {
    const urlApi = `${Url}weather?lat=${latitude}&lon=${longitude}&appid=${Key}&units=metric`
    return fetch(urlApi)
}
