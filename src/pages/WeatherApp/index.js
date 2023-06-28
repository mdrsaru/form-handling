import axios from "axios"
import { useEffect } from "react"
// require('dotenv').config()

const WeatherApp = () =>{

    const API_KEY = process.env.REACT_APP_WEATHER_APP_API_SECRET_KEY
    const city = 'kathmandu'
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then((response)=>{
            console.log(response)
        })
    },[])

    const handleSubmit = () =>{
        
    }
    return(
        <>
        WeatherApp
        <form onSubmit={handleSubmit}>
            <input />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default WeatherApp