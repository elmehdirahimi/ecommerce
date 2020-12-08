import {DECREMENT, INCREMENT} from "../constants/contants"; 

const Increment = (product) => (dispatch) =>
{
    dispatch({type :INCREMENT , payload : product});
}

const Decrement =  (product) => (dispatch) =>
{
    dispatch({type :DECREMENT , payload : product});
}

export {Increment, Decrement}