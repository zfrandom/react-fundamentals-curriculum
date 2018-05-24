import React from 'react'
import SimpleWeather from './SimpleWeather'
import DetailWeather from './DetailWeather'
import axios from 'axios'
import DisplayChild from './DisplayChild'
const BASE_URL= 'http://api.openweathermap.org/data/2.5/weather?type=accurate&APPID=62cd57f9f04079ffc5d6e78c9c6c1511&q='
const BASE_FIVEDAY_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
const BASE_FIVEDAY_URL_TAIL = '&type=accurate&APPID=62cd57f9f04079ffc5d6e78c9c6c1511'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Display extends React.Component {
	constructor(props){
		super(props)
    this.state={
      city:'',
      isSearching: true,
      date:[],
      details:[],
      selected:0,
      city:this.props.city
    }
    this.queryWeather = this.queryWeather.bind(this)
	}


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("============= in componentDidUpdate =================")
    var city = this.props.location.search.slice(6)
    if(city === prevProps.location.search.slice(6)){
      console.log("Two cities are the same")
      return null
    }
    console.log("Ready to query weather of " + city)
    this.queryWeather(city)
    //return {city:city, isSearching:true}
  }

  componentDidMount(){
    console.log("============= in componentDidMount =================")
    var city = this.props.location.search.slice(6)
    this.queryWeather(city)
  }
  
  queryWeather(city){
    console.log("inside query weather")
    axios.get(BASE_FIVEDAY_URL+city+BASE_FIVEDAY_URL_TAIL)
        .then(response=>{
            console.log("found the weather of "+city)
            var Result = response.data
            var listOfWeather = Result.list
            var ldetails = []
            var ldate = []
            for(let x=0;x<40;x+=8){
              ldate.push(listOfWeather[x].dt_txt)
              ldetails.push(listOfWeather[x].weather[0])
            }
            console.log(Result)
            this.setState({isSearching:false, date:ldate, details:ldetails, detail:false, selected:0, city:city})
      })
      .catch(err=>{
        console.log("error is here")
        console.log(err)
        return null
      })
  }


  render() {
    var ListOFWeatherDisplay=()=>(<div> LOADING... </div>)
    if(!this.state.isSearching){
      var listOfWeather=[]
      for(let x = 0; x<5; x++){
        listOfWeather.push(<SimpleWeather key={x} index={x} icon={this.state.details.length!=0? this.state.details[x].icon: ''} date={this.state.date.length!=0?this.state.date[x]:''} />)
      }
      ListOFWeatherDisplay =()=>(<div>
        <h3>{this.state.city}</h3>
          <ul>
            {listOfWeather}
          </ul>
      </div>)
    }
    console.log("============ in Display render ==============")
    console.log(this.state)
    return(
      <div>
        <Route exact path='/forecast' render={()=>{
           return <ListOFWeatherDisplay />
          }}/>
        <Route path='/forecast/detail' render={(props)=>{
          console.log("================= in forecast/detail =================== \nThe props = ")
          console.log(props)
          var idx = parseInt(props.location.search.slice(7))
          console.log("idx = ")
          console.log(idx)
          return (
            <DetailWeather date={this.state.date[idx]} city={this.state.city} detail={this.state.details[idx]} />
          
          )
        }} />
      </div>
    )
  }
}

export default Display
