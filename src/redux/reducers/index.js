import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
  allData: productReducer,
});

export default reducers;
