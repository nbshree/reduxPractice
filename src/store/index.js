import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import filters from './reduce/filter';
import inputValue from './reduce/inputValue';
import list from './reduce/todoList';
import thunk from 'redux-thunk'
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(combineReducers({
    filters,
    inputValue,
    list
}),enhancer);
export default store;
