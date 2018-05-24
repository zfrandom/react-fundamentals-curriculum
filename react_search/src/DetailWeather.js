import React from 'react'
import SimpleWeather from './SimpleWeather'

class DetailWeather extends React.Component {
	constructor(props){
		super(props)
	}

  render() {
    console.log("=============== in Detail Weather render =====================")
    console.log(this.props)
    return (
    	<div>
        <SimpleWeather icon={this.props.detail.icon} date={this.props.date} />
        <p>{this.props.city}</p>
        <p>{this.props.detail.main}</p>
      </div>
    )
  }
}


export default DetailWeather
