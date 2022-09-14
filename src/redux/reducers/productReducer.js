const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const setProduct = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return { ...state, ...action.payload };
    case 'Remove_PRODUCT':
      return {};
    default:
      return state;
  }
};
