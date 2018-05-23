import React from 'react'
import SearchBar from './SearchBar'

class Header extends React.Component {


  render() {
    return (
      <div id="navbar">
      	<h3 className="header_comp">Main.js Header</h3>
      	<SearchBar className="header_comp" searchingcallback={this.props.searching} foundcallback={this.props.found}/>
      </div>
    )
  }
}


export default Header
