import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '.'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

const history = createHistory()
const router = routerMiddleware(history)
const loggerMiddleware = createLogger()

export default (initialState = {}) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			router,
			thunk,
			loggerMiddleware
		)
	)

	store.subscribe(() => {
		if (typeof localStorage !== 'undefined')
			localStorage.setItem('reduxState', JSON.stringify(store.getState()))
	})

	if (module.hot) {
		module.hot.accept('.', () =>
			store.replaceReducer(require('.').default)
		)
	}

	return store
}
