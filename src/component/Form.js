import React, { Component, Suspense } from 'react';
import axios from 'axios';
import Display from './Display.js';

export default function Form(){
    const [weather, setWeather] = React.useState({});
    const [status, setStatus] = React.useState(false);
    const [city, setCity] = React.useState("");

    async function getWeather(city){
  
      try{
       const res = await axios.get('https://api.weatherapi.com/v1/current.json?key=51fb9fb1bcad4441b0c213452230105&q='+city)
       setWeather(<Display weather = {res.data} />)
       setStatus(true); 
      }catch(e){
       console.log(e)
      }     
     }

    function handleButton(){

        getWeather(city)
     }

     const handleChange = event => {
        setCity(event.target.value);
       
      };
  
    return(

        <div>

            <Suspense>  
            {
               status ? weather : <div></div>
            }
            </Suspense>

             <div className='Form'>

                <input  onChange={handleChange} className='cityName' ></input> 
                <button onClick={handleButton}>GO</button>

                </div>

        </div>
       
    )
}