import React from 'react'


class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			query:''
		}
		this.inputChanged = this.inputChanged.bind(this)
		this.submitQuery = this.submitQuery.bind(this)
	}
	inputChanged(event) {
    	this.setState({query: event.target.value})
    	
  	}

	submitQuery(event){
		this.props.searchingcallback(this.state.query);
	}

  render() {
    return (
      <div>
        <input id="input_city" placeholder="Champaign, IL" type='text' onChange={this.inputChanged}/>
        <button id='search' onClick={this.submitQuery}>Search</button>
      </div>
    )
  }
}


export default SearchBar
