import React from 'react'
import {Link} from 'react-router-dom'
class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			query:''
		}
		this.inputChanged = this.inputChanged.bind(this)
	}

	inputChanged(event) {
    this.setState({query: event.target.value})
  }

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
