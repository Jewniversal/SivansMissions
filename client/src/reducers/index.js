import { combineReducers } from 'redux';
import itemReducer from './itemReducer';


export default combineReducers({
	item: itemReducer
	/*
   incase we have more reducers for example
   auth: authReducer
  */
});