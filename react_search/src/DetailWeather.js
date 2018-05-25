import React from 'react'
import SimpleWeather from './SimpleWeather'

const DetailWeather = ()=>{
    var props = this.props.location.state
    return (
    	<div>
        <SimpleWeather icon={props.detail.icon} date={props.date} />
        <p>{props.city}</p>
        <p>{props.detail.main}</p>
      </div>
    )
}


export default DetailWeather
