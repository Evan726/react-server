var express = require('express'),
	router = express.Router();

var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var Router = require('react-router'),
	match = Router.match,
	RouterContext = Router.RouterContext;

var Redux = require('react-redux');
var Provider = Redux.Provider;

var configureStore = require('./../../app/store/configureStore.js');
var routes = require('./../../app/routes');

import {
	fetchFet
} from "./../../app/actions/action"


router.get('*', function(req, res) {
	match({
		routes,
		location: req.url
	}, (err, redirectLocation, props) => {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (props) {
			const store = configureStore();
			var mypath = JSON.stringify(props.location.pathname);
			var Home = [];
			switch (props.location.pathname) {
				case "/":
					Home = [
						store.dispatch(fetchFet()),
						//store.dispatch(fetchItem(renderProps.params.id))
					];
					break;
				case "/list":
					console.log("list")
					break;
				case "/list/show":
					console.log("show")
					break;
			}
			Promise.all(Home)
				.then(() => {
					const state = store.getState();
					const markup = renderToString(
						<Provider store={store} >
				        <RouterContext { ...props } />
				    </Provider>
					);
					var initialState = JSON.stringify(state);
					res.render('index', {
						markup,
						initialState,
						mypath
					});
				})
		} else {
			res.sendStatus(404);
		}
	});
});


module.exports = router;


// {
// 	"routes": [{
// 		"childRoutes": [{
// 			"path": "/"
// 		}, {
// 			"path": "/book"
// 		}, {
// 			"path": "/list",
// 			"childRoutes": [{
// 				"path": "show(/:id)"
// 			}]
// 		}]
// 	}, {
// 		"path": "/list",
// 		"childRoutes": [{
// 			"path": "show(/:id)"
// 		}]
// 	}],
// 	"params": {},
// 	"location": {
// 		"pathname": "/list",
// 		"search": "",
// 		"hash": "",
// 		"state": null,
// 		"action": "POP",
// 		"key": "5707us",
// 		"query": {},
// 		"$searchBase": {
// 			"search": "",
// 			"searchBase": ""
// 		}
// 	},
// 	"components": [null, null],
// 	"history": {},
// 	"router": {
// 		"__v2_compatible__": true
// 	},
// 	"matchContext": {
// 		"history": {},
// 		"transitionManager": {},
// 		"router": {
// 			"__v2_compatible__": true
// 		}
// 	}
// }