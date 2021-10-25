import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux"; //provider=> keep track of that store which is global state and allows to access that store from anywhere inside of the app 
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App"

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")); //Connect to div with ID of root