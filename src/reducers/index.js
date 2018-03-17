import ProductsReducer from './productsReducer';
import CartReducer from './cartReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({products: ProductsReducer, cart: CartReducer});

export default rootReducer;
