import React from 'react'
import {HashRouter as Router,
		Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Display from './Display'
import DetailWeather from './DetailWeather'

import styles from './stylesheets/style.css'
class App extends React.Component{

	render(){
		return (
			<Router>
			<div className={styles.outcontainer}>
				<Header/>
				<div className={styles.container}>
					<Route exact path='/' component={Home} />
	          		<Route exact path='/forecast' component={Display}/>
	          		<Route path='/forecast/details' component={DetailWeather}/>
          		</div>
			</div>
			</Router>
	)}             
}
export default App