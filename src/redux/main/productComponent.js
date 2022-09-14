import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SetProducts } from '../actions/index';
function ProductComponent() {
  const products = useSelector((state) => state.allData.products);

  const renderlist = products.map((item, id) => {
    return (
      <div key={id}>
        <h1>productComponent</h1>
        <Link to={`/products/${id}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  });
  return <div> {renderlist}</div>;
}
export default ProductComponent;
