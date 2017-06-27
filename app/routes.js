import React from 'react'
import {
    Route,
    Router,
    IndexRoute,
} from 'react-router'
import App from './containers/App';
import BookBox from './containers/BookBox'
import ListBox from './containers/ListBox'
import Show from './containers/Show'
// const routes = [{
//     path: '/',
//     component: App
// }, {
//     path: '/index',
//     component: Index
// }, {
//     path: '/list',
//     component: List
// }, {
//     path: '/set(/:id)',
//     component: App
// }, {
//     path: '/a/:id',
//     component: App
// }];
const routes = <Router>
    <Route path="/" component={App}></Route>
    <Route path="/book" component={BookBox}></Route>
    <Route path="/list" component={ListBox}>
        <Route path="show(/:id)" component={Show}></Route>
    </Route>
  </Router>;

export default routes;