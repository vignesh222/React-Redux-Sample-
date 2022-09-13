import React, { useEffect } from 'react';
import axios from 'axios';
import { SetProducts } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(SetProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>productListing</h1>
    </div>
  );
};
export default ProductList;
