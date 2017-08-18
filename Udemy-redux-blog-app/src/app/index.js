import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}> 
		<div className="container">
			<Router>
				<Switch>
					<Route path="/posts/new" component={PostNew} />
					<Route path="/posts/:id" component={PostShow} />
					<Route path="/" component={PostIndex}/>
				</Switch>
			</Router>
		</div>
	</Provider>,
	 window.document.getElementById('app')
);