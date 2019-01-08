import {combineReducers} from 'redux';

import getProducts from './product';
import getOrders from './order';

const indexReducer = combineReducers({
    getProducts,
    getOrders
});

export default indexReducer;