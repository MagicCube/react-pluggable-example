import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

export default applyMiddleware(promiseMiddleware);
