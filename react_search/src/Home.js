import React from 'react'
import SearchBar from './SearchBar'
import Display from './Display'
import styles from './stylesheets/style.css'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const Home=()=>(
    <div className={styles.mainpart}> 
        <h3>Enter a City and State </h3>
        <SearchBar/>
    </div>)


export default Home
