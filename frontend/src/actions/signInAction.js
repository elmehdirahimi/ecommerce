import axios from "axios";
import Cookie from "js-cookie";
const { sign } = require("jsonwebtoken");
const {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} = require("../constants/contants");

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST, payload: { email, password } });
  try {
   
    const { data } = await axios.post("/api/user/signin", { email, password });
    dispatch({ type: SIGN_IN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGN_IN_FAIL, payload: error.message });
  }
};
export default signin;
