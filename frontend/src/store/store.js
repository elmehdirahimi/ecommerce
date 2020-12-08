import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { productsListReducer } from "../reducers/productReducer";
import thunk from "redux-thunk";
import { ProductDetailsReducer } from "../reducers/productDetailsReducer";
import { ProductCartReducer } from "../reducers/productCartReducer";
import { SignInReducer } from "../reducers/signInReducer";
import Cookie from "js-cookie";
import { ShopReducer,ordersListReducer } from "../reducers/shopReducer";
import UploadProductReducer from "../reducers/uploadProductReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initailState = { ProductCart: { cartItems }, signIn: { userInfo } };

const reducer = combineReducers({
  productsList: productsListReducer,
  ProductDetails: ProductDetailsReducer,
  ProductCart: ProductCartReducer,
  signIn: SignInReducer,
  shop: ShopReducer,
  orderList: ordersListReducer,
  uploadProduct: UploadProductReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // extention test

const store = createStore(
  reducer,
  initailState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
