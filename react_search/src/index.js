import React from 'react'
import {render} from 'react-dom'

import Body from './Body'
import Header from './Header'
import axios from 'axios'
const BASE_URL= 'http://api.openweathermap.org/data/2.5/weather?type=accurate&APPID=62cd57f9f04079ffc5d6e78c9c6c1511&q='
const BASE_FIVEDAY_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
const BASE_FIVEDAY_URL_TAIL = '&type=accurate&APPID=62cd57f9f04079ffc5d6e78c9c6c1511'
class Index extends React.Component{
  constructor(props){
  	super(props)
 	this.state={
 		isSearching:false,
 		isDisplaying:false,
 		content:''
 	}
  	this.searching = this.searching.bind(this)
  	this.queryWeather = this.queryWeather.bind(this)
  }
 queryWeather(city){
	axios.get(BASE_FIVEDAY_URL+city+BASE_FIVEDAY_URL_TAIL)
		.then(response=>{
			this.setState({content:response.data})
			console.log("found")
		  	this.setState({isDisplaying:true})
		  	this.setState({isSearching:false})	
  	
		})
		.catch(err=>{
			console.log(err)
		})
  }
  searching(city){
  	console.log("searching")
  	this.setState({isSearching:true})			
  	this.queryWeather(city)
  }

	render(){
		return (
		<div id="container">
			<Header searching={this.searching} found={this.found}/>
			<Body content={this.state.content} isSearching={this.state.isSearching} isDisplaying={this.state.isDisplaying} searching={this.searching} found={this.found}/>
		</div>)
	}
}
render(<Index/>, document.getElementById('app'))