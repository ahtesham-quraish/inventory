import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';

const rootReducers = combineReducers({
  productReducer,
});

export default function configureReduxStore() {
  return createStore(rootReducers, applyMiddleware(thunk));
}
