import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartAction } from "../actions/addToCartAction";
import { Link } from "react-router-dom";
import ShopScreen from "./shopScreen";
import {Increment, Decrement} from "../actions/incDecAction"; 

const CartScreen = (props) => {
  const productCart = useSelector((state) => state.ProductCart);
  const { cartItems } = productCart;
  const productId = props.match.params.id;
  const productQty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;


   
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) dispatch(AddToCartAction(productId, productQty));
    return () => {
      //
    };
  }, []);
  return (
    <form className="bg0 p-t-75 p-b-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
            <div className="m-l-25 m-r--38 m-lr-0-xl">
              <div className="wrap-table-shopping-cart">
                <table className="table-shopping-cart">
                  <tbody>
                    <tr className="table_head">
                      <th className="column-1">Product</th>
                      <th className="column-2" />
                      <th className="column-3">Price</th>
                      <th className="column-4">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>
                    {cartItems.map((item) => (
                      
                      <tr key={item.product} className="table_row">
                        <td className="column-1">
                          <div className="how-itemcart1">
                            <img src="images/item-cart-04.jpg" alt="IMG" />
                          </div>
                        </td>
                        <td className="column-2">{item.name}</td>
                        <td className="column-3">{item.price}DH</td>
                        <td className="column-4">
                          <div className="wrap-num-product flex-w m-l-auto m-r-0">
                            <div
                              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                              onClick={()=>dispatch(Decrement(item.product))}
                            >
                              <i className="fs-16 zmdi zmdi-minus" />
                            </div>
                            <input
                              className="mtext-104 cl3 txt-center num-product"
                              type="number"
                              name="num-product1"
                              value={item.productQty}
                            />
                            <div
                              className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                              onClick={()=>dispatch(Increment(item.product))}
                            >
                              <i className="fs-16 zmdi zmdi-plus" />
                            </div>
                          </div>
                        </td>
                        <td className="column-5">
                          {item.productQty * item.price}DH
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ShopScreen></ShopScreen>
        </div>
      </div>
    </form>
    // <ul>
    //   shopping cart
    //   {cartItems.map((item) => (
    //     <li key={item.product}>
    //       <ul>
    //         --------------------
    //         {/* <li>
    //           <img src={require("../img/market.jpg")} alt="the product" />
    //         </li> */}
    //         <li>
    //           <h3> {item.name}</h3>
    //         </li>
    //         <li>qty:{item.productQty}</li>
    //         <button>annule</button>
    //         <li></li>
    //         <div>prix</div>
    //         <div>{item.price}</div>
    //         <li>
    //           <Link to={"/shop/" + productId + "?qty=" + productQty}>processd to checkout</Link>
    //         </li>
    //       </ul>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default CartScreen;
