export const SetProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const SelectProduct = (product) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: product,
  };
};

export const RemoveProduct = () => {
  return {
    type: 'Remove_PRODUCT',
  };
};
