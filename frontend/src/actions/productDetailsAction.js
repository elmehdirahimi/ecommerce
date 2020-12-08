import axios from "axios";
const { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS } = require("../constants/contants");

const productDetailsAction = (productId) => async (dispatch) =>
{
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId});
    const { data } = await axios.get("/api/details/" + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}
export {productDetailsAction};