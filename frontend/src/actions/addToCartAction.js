import axios from "axios";
import { PRODUCT_CART_REQUEST, PRODUCT_CART_SUCCESS, PRODUCT_CART_FAIL } from "../constants/contants";
import Cookie from "js-cookie";

const AddToCartAction = (productId, productQty) => async (dispatch, getState) => {

  try {
    const { data } = await axios.get("/api/details/" + productId);
    dispatch({
      type: PRODUCT_CART_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,    
        productQty
      },
    });
    const {ProductCart : {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
  }
};
export { AddToCartAction };
