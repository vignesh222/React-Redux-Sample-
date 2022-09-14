import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { SelectProduct } from '../actions/index';
const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const data = useSelector((state) => state.product);
  console.log(data);
  const { image, title, price } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductDetail(productId);
  }, []);

  const fetchProductDetail = async (productId) => {
    console.log('productId', productId);
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(SelectProduct(response.data));
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductDetails;
