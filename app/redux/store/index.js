import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import basketItems from '../reducer/basketItems';

const logger = createLogger();
const store = createStore(basketItems, applyMiddleware(logger));
export default store;
