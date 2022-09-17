import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
    // IMPORTANT – SETUP
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
