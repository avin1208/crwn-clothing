import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './root.saga';

import rootReducer from './root-reducer';

const sagaMiddeleware = createSagaMiddleware();

const middelewares = [sagaMiddeleware];
 
if (process.env.NODE_ENV === 'development') {
    middelewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middelewares))

sagaMiddeleware.run(rootSaga);

export const persistor = persistStore(store);

