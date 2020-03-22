import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const checkForDevTools = () => {
  return (
    process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  );
}

export default function configureStore(initialState) {
  let enhancements = [applyMiddleware(thunk)];

  if (checkForDevTools()) {
    enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(rootReducer, initialState, compose(...enhancements));
};
