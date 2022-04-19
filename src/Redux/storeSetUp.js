import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

const reducer1 = {};
const reducer2 = {};

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ reducer1, reducer2 });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
