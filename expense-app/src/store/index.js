import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from './middlewares/logger';
// import rootReducer from './reducers';
import counterReducer from './reducers/counter.reducer';
import resultReducer from './reducers/result.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer)

const store = createStore(combineReducers({
    ctr: counterReducer,
    res: resultReducer
}), composeWithDevTools(applyMiddleware(logger)))

export default store;


// npm i redux-devtools-extension -D