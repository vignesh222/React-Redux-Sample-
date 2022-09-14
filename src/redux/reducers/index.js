import { combineReducers } from 'redux';
import { productReducer, setProduct } from './productReducer';

const reducers = combineReducers({
  allData: productReducer,
  setData: setProduct,
});

export default reducers;
