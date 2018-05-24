import React from 'react'
import {Link} from 'react-router-dom'
class SimpleWeather extends React.Component {
  
  
	constructor(props){
		super(props)
	}

  render() {
  	var iconname = "images/weather-icons/"+this.props.icon+".svg"
    return (
    	<li onClick={this.props.onClick}>
        <Link to={{pathname:'/forecast/detail', search:`index=${this.props.index}`}}>
      		<div >
        		<img src={iconname} />
        		<span>{this.props.date}</span>
      		</div>
        </Link>
      	</li>
    )
  }
}


export default SimpleWeather
