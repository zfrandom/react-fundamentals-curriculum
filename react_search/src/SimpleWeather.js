import React from 'react'
import {Link} from 'react-router-dom'
import './stylesheets/simpleWeatherStyle.css'
const SimpleWeather= (props)=>{
    var iconname = "src/images/weather-icons/"+props.icon+".svg"

    console.log(iconname)
    return (
      <li onClick={props.onClicked}>
          <div >
            <img src={iconname} alt="weather" />
            <span>{props.date}</span>
          </div>
        </li>
    )
}

export default SimpleWeather
