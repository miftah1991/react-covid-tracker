import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import dashboardReducer from './dashboard/dashboardReducer';
import continentsReducer from './continents/continentsReducer';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ allTime: dashboardReducer, continents: continentsReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
