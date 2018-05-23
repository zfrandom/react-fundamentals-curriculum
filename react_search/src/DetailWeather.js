import React from 'react'
import SimpleWeather from './SimpleWeather'

class DetailWeather extends React.Component {
	constructor(props){
		super(props)
	}

  render() {
  	var iconname = "images/weather-icons/"+this.props.icon+".svg"
    return (
    	<div>
        <SimpleWeather icon={this.props.icon} date={this.props.date} />
        <p>{this.props.city}</p>
        <p>{this.props.detail.main}</p>
      </div>
    )
  }
}


export default DetailWeather
