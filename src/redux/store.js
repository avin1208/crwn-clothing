import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middelewars = [logger];

const store = createStore(rootReducer, applyMiddleware(...middelewars))

export default store;