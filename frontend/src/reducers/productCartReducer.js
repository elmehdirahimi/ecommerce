import {
  PRODUCT_CART_REQUEST,
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAIL,
  DECREMENT,
  INCREMENT,
} from "../constants/contants";

function ProductCartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case PRODUCT_CART_SUCCESS:
      const item = action.payload;
      //console.log("oooooo"+item);
      const prd = state.cartItems.find((x) => x.product === item.product);
      if (prd) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === prd.product ? item : x
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, item] };
      }
    case INCREMENT:
      const iprd = state.cartItems.find((x) => x.product === action.payload);
      if(iprd.countInStock > iprd.productQty)
        iprd.productQty++;
      return {
        cartItems: state.cartItems.map((x) =>
          x.product === action.payload ? iprd : x
        ),
      };
    case DECREMENT:
      const dprd = state.cartItems.find((x) => x.product === action.payload);
      if(dprd.productQty > 1)
      dprd.productQty--;
      return {
        cartItems: state.cartItems.map((x) =>
          x.product === action.payload ? dprd : x
        ),
      };
    default:
      return state;
  }
}

export { ProductCartReducer };

/*

state = { cartItems: [], shipping: {}, payment: {} }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
   
      const product = state.cartItems.find(x => x.product === item.product);
      if (product) {
        return {
          cartItems:
            state.cartItems.map(x => x.product === product.product ? item : x)
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    case CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    default:
      return state
  }
}
*/
