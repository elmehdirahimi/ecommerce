import {
  SHOP_REQUEST,
  SHOP_SUCCESS,
  SHOP_FAIL,
  ORDERS_LIST_REQUEST,
  ORDERS_LIST_SUCCESS,
  ORDERS_LIST_FAIL,
} from "../constants/contants";

function ShopReducer(state = {}, action) {
  switch (action.type) {
    case SHOP_REQUEST:
      return { loading: true };
    case SHOP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SHOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function ordersListReducer(state = { orders: [] }, action) {
  switch (action.type) {
    case ORDERS_LIST_REQUEST:
      return { loading: true, orders: [] };
    case ORDERS_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { ShopReducer, ordersListReducer };
