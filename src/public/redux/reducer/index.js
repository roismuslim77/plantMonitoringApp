import {combineReducers} from 'redux';

import getProducts from './product';
import getOrders from './order';
import getValues from './value';

const indexReducer = combineReducers({
    getProducts,
    getOrders,
    getValues
});

export default indexReducer;