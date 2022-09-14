// import React, { useEffect } from 'react';
// import React from 'react';
// import axios from 'axios';
// import { SetProducts } from '../actions/index';
// import { useDispatch } from 'react-redux';
// import ProductComponent from './productComponent';
// const ProductList = () => {
//   const dispatch = useDispatch();

//   const fetchProducts = async () => {
//     const response = await axios
//       .get('https://fakestoreapi.com/products')
//       .catch((err) => {
//         console.log('Err: ', err);
//       });
//     dispatch(SetProducts(response.data));
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <ProductComponent />
//     </div>
//   );
// };
// export default ProductList;

import React from 'react';
import ProductComponent from './productComponent';
const ProductListing = () => {
  return (
    <div>
      <h1>ProductList</h1>
      <ProductComponent />
      <hr />
    </div>
  );
};
export default ProductListing;
