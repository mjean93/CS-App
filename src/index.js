import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.js";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers';

const middleware = [ thunk ]

const store = createStore(
	rootReducer,
  	applyMiddleware(...middleware)
)
  
ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
	document.getElementById("root")
);