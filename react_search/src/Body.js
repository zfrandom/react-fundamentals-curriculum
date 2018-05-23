import React from 'react'
import SearchBar from './SearchBar'
import Display from './Display'
import axios from 'axios'


class Body extends React.Component {

  // constructor(props){
  // 	super(props)
 	// this.state={
 	// 	isSearching:false,
 	// 	isDisplaying:false,
 	// 	content:''
 	// }
  // 	this.searching = this.searching.bind(this)

  // 	this.queryWeather = this.queryWeather.bind(this)
  // }


  render() {
    return (
      <div id="mainpart">
        {!this.props.isSearching && !this.props.isDisplaying &&
        	<div> 
        		<h3>Enter a City and State </h3>
        		<SearchBar searchingcallback={this.props.searching} foundcallback={this.props.found} />
    		</div>
    	}	
        {this.props.isSearching && <h2> Loading ... </h2>}
        {this.props.isDisplaying && !this.props.isSearching &&<Display result={this.props.content} detail={false}/>}
      </div>
    )
  }
}


export default Body
