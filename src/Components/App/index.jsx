import React from 'react'
import './App.scss'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<h1>React Redux</h1>
				{this.props.children}
			</section>
		)
	}
}

export default App