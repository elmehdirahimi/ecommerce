import axios from "axios";

const {
  SHOP_REQUEST,
  SHOP_SUCCESS,
  SHOP_FAIL,
  ORDERS_LIST_REQUEST,
  ORDERS_LIST_SUCCESS,
  ORDERS_LIST_FAIL,
} = require("../constants/contants");

const shopAction = (
  productsIDs,
  productsQty,
  nom,
  prenom,
  numero,
  email,
  livraison
) => async (dispatch) => {
  dispatch({
    type: SHOP_REQUEST,
    payload: { nom, prenom, numero, email, livraison },
  });
  try {
    const { message, data } = await axios.post("/api/shop", {
      productsIDs,
      productsQty,
      nom,
      prenom,
      numero,
      email,
      livraison,
    });
    dispatch({ type: SHOP_SUCCESS, payload: { data, message } });
  } catch (error) {
    console.log(error);
    dispatch({ type: SHOP_FAIL, payload: error.message });
  }
};

const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDERS_LIST_REQUEST });
    const {
      signIn: { userInfo },
    } = getState();
    const { data } = await axios.get("/api/shop/orders", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });

    dispatch({ type: ORDERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDERS_LIST_FAIL, payload: error.message });
  }
};

export { shopAction, listOrders };
