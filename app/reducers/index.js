import {
	combineReducers
} from 'redux';

import * as TYPE from "../constants/actionTypes";

function fet(state = {
	isFetch: false,
	content: {}
}, action) {
	switch (action.type) {
		case TYPE.FET_REQUEST:
			return Object.assign({}, state, {
				isFetching: true
			})
			break;
		case TYPE.FET_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				content: action.response
			})
			break;
		case TYPE.FET_FAILURE:
			return Object.assign({}, state, {
				isFetching: false
			})
			break;
		default:
			return state
	}
}


function index(state = {
	a: "我是index"
}, action) {
	return state;
}

function urlObj(state = {
	a: "我的App"
}, action) {
	return state;
}

function Activity(state = {
	a: "我是Activeity"
}, action) {
	return state;
}
export const rootReducer = combineReducers({
	urlObj,
	Activity,
	index,
	fet
});

export default rootReducer;