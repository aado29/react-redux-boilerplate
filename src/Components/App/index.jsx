import React, { Component } from 'react'
import './App.scss'

export default class App extends Component {

	render() {
		return (
			<section>
				<h1>React Redux</h1>
				{this.props.children}
			</section>
		)
	}
}