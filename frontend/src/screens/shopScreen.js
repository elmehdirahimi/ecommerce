import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "../actions/shopAction";

const ShopScreen = (props) => {
  const productCart = useSelector((state) => state.ProductCart);
  const { cartItems } = productCart;
  const productsIDs = cartItems.map((item) => item.product);
  const productsQty = cartItems.map((item) => item.productQty);
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [numero, setnumero] = useState();
  const [email, setemail] = useState("");
  const [livraison, setlivraison] = useState("");
  const shop = useSelector((state) => state.shop);
  const { loading, userInfo, error } = shop;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      shopAction(
        productsIDs,
        productsQty,
        nom,
        prenom,
        numero,
        email,
        livraison
      )
    );
  };
  return loading ? (
    <div class="d-flex justify-content-center text-center" id="pluswrap">
      <div class="spinner-border text-secondary plus" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : error ? (
    <div>{error.message}</div>
  ) : cartItems.length ? (
    <form
      onSubmit={submitHandler}
      className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50"
    >
      <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
        <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
        <div className="flex-w flex-t bor12 p-t-15 p-b-30">
          <div className="">
            <div className="p-t-15">
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="nom"
                  id="nom"
                  onChange={(e) => setnom(e.target.value)}
                  placeholder="nom"
                />
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl20 plh3 size-111 p-lr-15"
                  type="text"
                  name="prenom"
                  id="prenom"
                  onChange={(e) => setprenom(e.target.value)}
                  placeholder="prenom"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  ame="numero"
                  id="numero"
                  onChange={(e) => setnumero(e.target.value)}
                  placeholder="numero"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="email"
                />{" "}
              </div>
              <div className="bor8 bg0 m-b-22">
                <textarea
                  className="stext-111 cl8 plh3 size-111 p-lr-15 form-control"
                  type="text"
                  name="livraison"
                  id="livraison"
                  rows="3"
                  onChange={(e) => setlivraison(e.target.value)}
                  placeholder="adresse de livraison"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-w flex-t p-t-27 p-b-33">
          <div className="size-208">
            <span className="mtext-101 cl2">Total:</span>
          </div>
          <div className="size-209 p-t-1">
            <span className="mtext-110 cl2">
              {cartItems.reduce((a, c) => a + c.price * c.productQty, 0)}DH
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </form>
  ) : (
    <div></div>
  );
};

export default ShopScreen;
