import { data } from './reducer';
import { createStore, applyMiddleware } from 'redux';
let myloger = (store) => {
  return (next) => {
    return (action) => {
      console.log(store);
      if (store.getState() >= 10) {
        return next({
          type: 'DEL',
        });
      } else {
        return next(action);
      }
    };
  };
};

const store = createStore(data, applyMiddleware(myloger));
export default store;
