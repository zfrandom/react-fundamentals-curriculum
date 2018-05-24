import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			query:''
		}
		this.inputChanged = this.inputChanged.bind(this)
		//his.submitQuery = this.submitQuery.bind(this)
	}
	inputChanged(event) {
    	this.setState({query: event.target.value})
  	}

	// submitQuery(event){
	// 	this.setState({query: ''})
	// 	this.props.searchingcallback(this.state.query);
	// }

  render() {
  	
    return (
      <div>
        <input id="input_city" placeholder="Champaign, IL" type='text' onChange={this.inputChanged} value={this.state.query}/>
       	<Link to={{pathname:'/forecast', search:`city=${this.state.query}`}}> <button id='search'>Search</button> </Link>
      </div>
    )
  }
}


export default SearchBar
