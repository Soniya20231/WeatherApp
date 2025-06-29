import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLik: 39.91,
        humidity:61,
        temp: 33.01,
        tempMax:33.01,
        tempMin:33.01,
        weather:"haze",
    });
    function updateInfo(result){
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )     
}