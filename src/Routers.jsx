import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './Components/App'
import Reddit from './Containers/Reddit'

const history = createHistory()
const Routes = () => (
	<ConnectedRouter history={history}>
    	<App>
			<Route path='/' component={Reddit} />
    	</App>
    </ConnectedRouter>
);

export default Routes
