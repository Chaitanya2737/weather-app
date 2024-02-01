import React, { useState } from 'react'
import "./component.css"
import TextField from '@mui/material/TextField';
import Card from './Card';
import axios from "axios"
const WeatherData = () => {
    const [data,  setData]=useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const getAPICall= async (data)=>{
        try {
            const response = await axios.post(`https://api.weatherapi.com/v1/current.json?key=ce13ff3e0818482b9d271308240102&q=${data}&aqi=no`)
            setData([response.data])
        } catch (error) {
            console.log(error)
        }
    }

    const deBounce = (e) => {
        const location = e.target.value;
    
        clearTimeout(debounceTimeout);
        const newTimeout = setTimeout(() => {
          getAPICall(location);
        }, 700);
    
        setDebounceTimeout(newTimeout);
      };
  return (
    <>
    <div className='container'>
        <TextField name='data' onChange={deBounce} id="outlined-basic" sx={{width:"500px"}} label="Enter location" variant="outlined"/>
        
    </div>
        <Card data={data}/>
    </>
  )
}

export default WeatherData