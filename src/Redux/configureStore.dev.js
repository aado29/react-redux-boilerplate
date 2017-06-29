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
		compose(
			applyMiddleware(router),
			applyMiddleware(thunk)
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
