import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlawares) => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlawares))
    : applyMiddleware(...middlawares);
  return createStore(reducers, enhancer);
};
