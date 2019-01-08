import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer} from 'redux-persist';

import reducers from './reducer/index';
import middleware from './middleware';

const store = createStore(
    reducers, 
    applyMiddleware(...middleware)
);
export default store;
