import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from './middlewares/logger';
// import rootReducer from './reducers';
import counterReducer from './reducers/counter.reducer';
import resultReducer from './reducers/result.reducer';

// const store = createStore(rootReducer)

const store = createStore(combineReducers({
    ctr: counterReducer,
    res: resultReducer
}), applyMiddleware(logger))
export default store;