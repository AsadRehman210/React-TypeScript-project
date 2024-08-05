import { combineReducers } from 'redux';
import {userReducer} from './UserReducer.ts';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
