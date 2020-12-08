import axios from "axios";
const {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAIL,
} = require("../constants/contants");

const UploadProductAction = (newProduct) => async (dispatch, getState) => {
  dispatch({
    type: UPLOAD_PRODUCT_REQUEST,
    payload: newProduct,
  });
  try {
    const {signIn: { userInfo },} = getState();
    const { data } = await axios.post("/api/shop/uploadProduct",newProduct,{
      headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      }
    );

    dispatch({ type: UPLOAD_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPLOAD_PRODUCT_FAIL, payload: error.message });
  }
};
export default UploadProductAction;
