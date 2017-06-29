import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './Components/App'

const history = createHistory()
const Routes = () => (
	<ConnectedRouter history={history}>
    	<Route path='/' component={App}>
    		{/* <IndexRoute component={mainComponent} /> */}
			{/* <Route path='/otherRoute' component={otherComponent} /> */}
    	</Route>
    </ConnectedRouter>
);

export default Routes
