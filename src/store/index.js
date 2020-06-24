import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
// import loggerMiddleware from '../middleware/logger'
import loggerMiddleware from 'redux-logger';

export default store = createStore(rootReducer, applyMiddleware(loggerMiddleware))