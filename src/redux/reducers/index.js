import { combineReducers } from 'redux';
import { productReducer, setProduct } from './productReducer';

const reducers = combineReducers({
  allData: productReducer,
  product: setProduct,
});

export default reducers;
