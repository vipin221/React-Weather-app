import React, { useState } from 'react';
// import WaterIcon from '@mui/icons-material/Water';
import './Weather.css';
import clear_icon from "../Assests/clear.png";
import cloud_icon from "../Assests/cloud.png";
import drizzle_icon from "../Assests/drizzle.png";
import rain_icon from "../Assests/rain.png";
import wind_icon from "../Assests/wind.png";
import snow_icon from "../Assests/snow.png";
import humidity_icon from "../Assests/humidity.png";

const WeatherApp = () => {
    let api_key = "8cb0185c18fbcee7ea41d153f68f1ee4";

    const [wicon, setwicon] = useState(clear_icon);

    let search = async () => {
        const cityIp = document.getElementsByClassName("cityInput");
        if (cityIp[0].value === "") return 0;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityIp[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        let Humidity = document.getElementsByClassName("humidity_percent");
        let wind_speed = document.getElementsByClassName("wind_speed");
        let location = document.getElementsByClassName("Weather_location");
        let temp = document.getElementsByClassName("Weather_temp");
        let desc = document.getElementsByClassName("desc");
        let mini = document.getElementsByClassName("min");
        let maxi = document.getElementsByClassName("max");

    
        Humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
        wind_speed[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        location[0].innerHTML = data.name;
        temp[0].innerHTML = Math.floor(data.main.temp) + "°C";
        desc[0].innerHTML = data.weather[0].description;
        mini[0].innerHTML =  Math.floor(data.main.temp_min) + " °C";
        maxi[0].innerHTML =  Math.floor(data.main.temp_max)+ " °C";


        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setwicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setwicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setwicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setwicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setwicon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setwicon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setwicon(snow_icon);
        }
        else {
            setwicon(clear_icon);
        }

    }
    return (
        <div className='main_container'>
            <div className='container'>
                <div className='top-bar'>
                    <input type="text" className='cityInput' placeholder='Search' />
                    <div className='search_icon' onClick={() => { search() }}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className='Weather_Image'>
                    <img src={wicon} alt='' />
                </div>
                <div className='Info'>
                    <div className='Weather_info'>
                        <div className='temp'>
                            <i class="fa-solid fa-temperature-quarter" ></i>
                            <div className='Weather_temp'>Temp.</div>
                        </div>
                        <div className='Weather_location'>Loc.</div>
                        <div className='max_min_temp'>
                            <div className='min'>min°c</div>
                            <div className='max'>max°c</div>

                        </div>
                    </div>
                    <div className='Additional_info'>
                        <div className='element'>
                            <img src={humidity_icon} className='Info_icon' alt='' />
                            <div className='data'>
                                <div className='text'>Humidity</div>
                                <div className='humidity_percent value'>0 %</div>
                            </div>
                        </div>
                        <div className='element'>
                            <img src={wind_icon} className='Info_icon' alt='' />
                            <div className='data'>
                                <div className='text'>Wind Speed</div>
                                <div className='wind_speed value'>0 km/h</div>
                            </div>
                        </div>
                        <div className='element'>
                            <div className='data'>
                                <div className='desc'>Description</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default WeatherApp;