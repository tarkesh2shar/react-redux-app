import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware,createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import Reducer from './reducers';

import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';


const store=createStore(Reducer,{},applyMiddleware(thunk));
ReactDOM.render(
<Provider store={store}>
<App/>

</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
