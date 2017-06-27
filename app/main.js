import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	hashHistory,
	browserHistory
} from 'react-router';
import {
	Provider
} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import configureStore from './store/configureStore';
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} >
		    { routes }
		</Router>
  	</Provider>,
	document.getElementById('app')
);