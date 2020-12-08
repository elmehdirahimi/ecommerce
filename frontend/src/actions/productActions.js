import axios from "axios";

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constants/contants")

const listProducts = (category = '', searchKeyword = '', sortOrder = '') => async (dispatch) => {
    try {
        dispatch({type :PRODUCT_LIST_REQUEST});
        const { data } = await axios.get("/api/all?category="+ category +
        "&searchKeyword=" + searchKeyword + "&sortOrder=" + sortOrder);
        
        dispatch({type :PRODUCT_LIST_SUCCESS , payload : data});
    } catch (error) {
        dispatch({type :PRODUCT_LIST_FAIL , payload : error.message});
    }
    
}

export {listProducts};