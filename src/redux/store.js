import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [logger, thunk];
// const middlewares = [ thunk];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
