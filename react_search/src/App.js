import React from 'react'
import {render} from 'react-dom'

import {HashRouter as Router} from 'react-router-dom'
import Header from './Header'
import Body from './Body'
class App extends React.Component{

	render(){
		return (
			<Router>
			<div id="container">
				<Header/>
				<Body/>
			</div>
			</Router>
	)}
}
export default App