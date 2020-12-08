import {
    UPLOAD_PRODUCT_REQUEST,
    UPLOAD_PRODUCT_SUCCESS,
    UPLOAD_PRODUCT_FAIL,
  } from "../constants/contants";
  
  function UploadProductReducer(state = {}, action) {
    switch (action.type) {
      case UPLOAD_PRODUCT_REQUEST:
        return { loading: true };
      case UPLOAD_PRODUCT_SUCCESS:
        return { loading: false, productId: action.payload };
      case UPLOAD_PRODUCT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export default UploadProductReducer;