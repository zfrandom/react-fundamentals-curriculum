import React from 'react'
import SimpleWeather from './SimpleWeather'
import DetailWeather from './DetailWeather'
import axios from 'axios'

const BASE_URL= 'http://api.openweathermap.org/data/2.5/weather?type=accurate&APPID=62cd57f9f04079ffc5d6e78c9c6c1511&q='
const BASE_FIVEDAY_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
const BASE_FIVEDAY_URL_TAIL = '&type=accurate&APPID=62cd57f9f04079ffc5d6e78c9c6c1511'

class DisplayChild extends React.Component{
  constructor(props){
    super(props)
    this.state=this.queryWeather(this.props.city) || {isSearching:false, date:[], details:[], selected:0, city:this.props.city}
    this.queryWeather = this.queryWeather.bind(this)
  }

  // queryWeather(city){
  //   console.log("haha")
  //   axios.get(BASE_FIVEDAY_URL+city+BASE_FIVEDAY_URL_TAIL)
  //       .then(response=>{
  //           console.log("found")
  //           var Result = response.data
  //           var listOfWeather = Result.list
  //           var ldetails = []
  //           var ldate = []
  //           for(let x=0;x<40;x+=8){
  //             ldate.push(listOfWeather[x].dt_txt)
  //             ldetails.push(listOfWeather[x].weather[0])
  //           }
  //           console.log(Result)
  //           this.props.foundCallback();
  //           return {isSearching:false, date:ldate, details:ldetails, selected:0, city:Result.city.name}
  //     })
  //     .catch(err=>{
  //       console.log("error is here")
  //       console.log(err)
  //       return {isSearching:false, date:[], details:[], selected:0, city:''}
  //     })
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if(!prevState && nextProps.city === prevState.city || nextProps.isSearching === false){
  //     return null
  //   }
  //   return null
  // }
  render(){
    console.log(this.state)
    console.log("DisplayChild renders again "+this.props.isSearching)
    var ListOFWeatherDisplay=()=>(<div> LOADING... </div>)
    if(!this.props.isSearching || (this.state &&this.state.isSearching)){
      var listOfWeather=[]

      for(let x = 0; x<5; x++){
        listOfWeather.push(<SimpleWeather key={x} index={x} icon={this.state.details.length!=0? this.state.details[x].icon: ''} date={this.state.date.length!=0?this.state.date[x]:''} />)
      }
      ListOFWeatherDisplay =()=>(<div>
        <h3>{this.props.city}</h3>
          <ul>
            {listOfWeather}
          </ul>
      </div>)
    }
    
    return <ListOFWeatherDisplay/>
  }
}
export default DisplayChild