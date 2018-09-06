import { combineReducers } from 'redux';
import placeReducer from './placeReducer';

const rootReducer = combineReducers({
  placeReducer,
})

export default rootReducer;