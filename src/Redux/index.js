import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
	postsBySubreddit,
	selectedSubreddit
} from './Reducers/Reddit'

export default combineReducers({
	router: routerReducer,
	postsBySubreddit: postsBySubreddit,
	selectedSubreddit: selectedSubreddit
})