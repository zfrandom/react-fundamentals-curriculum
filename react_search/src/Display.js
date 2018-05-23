import React from 'react'
import SimpleWeather from './SimpleWeather'
import DetailWeather from './DetailWeather'

class Display extends React.Component {
	constructor(props){
		super(props)
    this.state={
      date:[],
      details:[],
      city:'',
      detail:false,
      selected:0
    }
    
	}
  static getDerivedStateFromProps(nextProps, prevState){
    console.log("call")
    var Result = nextProps.result
    var listOfWeather = Result.list
    var ldetails = []
    var ldate = []
    for(let x=0;x<40;x+=8){
      ldate.push(listOfWeather[x].dt_txt)
      ldetails.push(listOfWeather[x].weather[0])
    }
    return {date:ldate, details:ldetails,city:Result.city.name, detail:false, selected:0}
  }

  clicked(x){
    this.setState({detail:true, selected:x})
  }
  render() {
    var listOfWeather=[]
    for(let x = 0; x<5; x++){
      listOfWeather.push(<SimpleWeather key={x} icon={this.state.details[x].icon} date={this.state.date[x]} onClick={this.clicked.bind(this, x)}/>)
    }
    
    return(
      <div>
      {!this.state.detail && 
        <div> 
          <h3>{this.state.city}</h3>
          <ul>
            {listOfWeather}
          </ul>
        </div> 
      }
      {this.state.detail && 
        <DetailWeather icon={this.state.details[this.state.selected].icon} date={this.state.date[this.state.selected]} city={this.state.city} detail={this.state.details[this.state.selected]} />
      }
      </div>
      )
  }
}


export default Display
