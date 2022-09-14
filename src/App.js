import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './redux/main/Header';
import ProductListing from './redux/main/productListing';
import ProductDeatails from './redux/main/productDetails';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDeatails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
