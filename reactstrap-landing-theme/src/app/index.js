import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';

import reducers from './reducers';
import App from './components/app.js'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}> 
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
				</Switch>
			</Router>
		</div>
	</Provider>,
	 window.document.getElementById('app')
);