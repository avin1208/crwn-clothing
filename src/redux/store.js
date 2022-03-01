import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middelewars = [];
 
if (process.env.NODE_ENV === 'development') {
    middelewars.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middelewars))

export const persistor = persistStore(store);

