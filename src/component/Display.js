import React, { Component } from 'react';
import  "./Display.css";

export default function Display(props){


    return(
        <div className='Display'>
                <div className='weather-item'>
                    <p>City</p>

                    <p> {props.weather.location.name}</p>
                   
                    
                </div>

                <div className='weather-item'>
                <p>Region</p>
                <p>{props.weather.location.region}</p>
                
                </div>
                <div className='weather-item'>
                <p>Country</p>
                <p>{props.weather.location.country}</p>
                
                </div>
                <div className='weather-item'>
                <p>Time</p>
                <p>{props.weather.location.localtime.split(" ")[0]}</p>
                
                </div>
                <div className='weather-item'>
                    <p>Condition</p>
                    <p>{props.weather.current.condition.text}</p>
                    
                </div>
                <div className='weather-item'>

                <p>Temperature</p> 

                <p>
                {props.weather.current.temp_c}
                </p>
                
                </div>
                <div className='weather-item'>

                <p>Humidity</p> 
                <p>
                {props.weather.current.humidity}
                </p>
                
                </div>
                <div className='weather-item'>
                <p>Wind Speed</p> 
                <p>
                {props.weather.current.wind_kph}
                </p>
               
                </div>
                <div></div>
                <div></div>
            </div>
    )
}