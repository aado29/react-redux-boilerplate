import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '.'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

const history = createHistory()
const router = routerMiddleware(history)

export default (initialState = {}) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			router,
			thunk
		)
	)

	store.subscribe(() => {
		if (typeof localStorage !== 'undefined')
			localStorage.setItem('reduxState', JSON.stringify(store.getState()))
	})

	return store
}
