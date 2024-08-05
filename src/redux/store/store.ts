import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducer/Index.ts';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
