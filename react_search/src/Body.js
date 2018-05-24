import React from 'react'
import SearchBar from './SearchBar'
import Display from './Display'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const   Home=()=>(
       <div> 
        <h3>Enter a City and State </h3>
        <SearchBar/>
      </div>
    )
class Body extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isSearching:false,
      isDisplaying:false,
      content:''
    }

  }
     

  render() {
    return (
        <div id="mainpart">
          <Route exact path='/' component={Home} />
          <Route path='/forecast' component={Display}></Route>
        </div>
    )
  }
}


export default Body
