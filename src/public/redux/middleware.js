import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [];

const logger = createLogger();

middlewares.push(logger);
middlewares.push(promiseMiddleware());

export default middlewares;