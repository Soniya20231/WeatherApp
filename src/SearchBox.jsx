import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  './searchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY=import.meta.env.VITE_API_KEY;
    console.log(API_KEY)

    let getWeather=async()=>{
        try{
             let response=await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse=await response.json();
            //console.log(jsonResponse);
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin:  jsonResponse.main.temp_min,
                humidity:  jsonResponse.main.humidity,
                feelsLike:  jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
       
    }

    function handelChange(event){
        setCity(event.target.value);
    }
    async function handelSubmit(event){
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let NewInfo=await getWeather();
            updateInfo(NewInfo);
        }
        catch(err){
            setErr(true);
        }
        
    }

    return (
        <div className='searchBox'>
            <h2>Search for weather application</h2>
            <form onSubmit={handelSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handelChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {err && <p style={{color:'red'}}>No such place exist!</p>}
            </form>
        </div>
    )
}