import React from 'react'

class SimpleWeather extends React.Component {
	constructor(props){
		super(props)
	}

  render() {
  	var iconname = "images/weather-icons/"+this.props.icon+".svg"
    return (
    	<li onClick={this.props.onClick}>
      		<div >
        		<img src={iconname} />
        		<span>{this.props.date}</span>
      		</div>
      	</li>
    )
  }
}


export default SimpleWeather
