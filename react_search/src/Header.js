import React from 'react'
import SearchBar from './SearchBar'
import styles from './stylesheets/style.css'
import {Link} from 'react-router-dom'
class Header extends React.Component {

  constructor(props){
  	super(props)
  	//this.handleClicked = this.handleClicked.bind(this)
  }
 
  render() {
    return (
      <div className={styles.navbar}>
      	<Link to='/'><h3 className={styles.headercomp}>Weather Query Tool</h3></Link>
      	<SearchBar className={styles.headercomp}/>
      </div>
    )
  }
}


export default Header
