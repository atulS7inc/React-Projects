import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/app.js";
import reducers from "./reducers";

render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	window.document.getElementById('app')
);