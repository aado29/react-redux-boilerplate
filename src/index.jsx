import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routers from './Routers'
import configureStore from './Redux/configureStore'

const store = configureStore()

const Root = (
	<Provider store={store}>
		<Routers />
	</Provider>
);

ReactDOM.render(Root, document.getElementById('app'));