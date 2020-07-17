import React from 'react';
import ReactDOM from 'react-dom'
import App from '../src/components/App'
// import All from '../src/components/test1/All'
import Ex2 from '../src/components/hook/ex2'
import {All} from '../src/components/hook/useContext1/All'
import Apps from '../src/components/mytestApp'
import { Provider } from 'react-redux'
import store from "./store";
// ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
ReactDOM.render(<All/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
