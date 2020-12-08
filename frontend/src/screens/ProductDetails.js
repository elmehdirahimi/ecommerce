import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetailsAction } from "../actions/productDetailsAction";
import ProductGallery from "./productGallery";
import Sl from "./sl";

const ProductDetails = (props) => {
  const ProductDetails = useSelector((state) => state.ProductDetails);
  const { products, loading, error } = ProductDetails;

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productId = props.match.params.id;

  const incrementQty = () => {
    if (products.countInStock > qty) {
      setQty(qty + 1);
    }
  };
  const decrementQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  useEffect(() => {
    if (productId) dispatch(productDetailsAction(productId));
    return () => {
      //
    };
  }, []);

  const buttonAddToCart = () => {
    props.history.push("/cart/" + products._id + "?qty=" + qty);
  };

  return loading ? (
    <div className="d-flex justify-content-center text-center" id="pluswrap">
      <div className="spinner-border text-secondary plus" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : error ? (
    <div>error : {error}</div>
  ) : products.image ? (
    <div>
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <ProductGallery image={products.image}></ProductGallery>
            {/* client info */}
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {products.name}
                </h4>
                <span className="mtext-106 cl2">{products.price}DH</span>
                <div className="stext-102 cl3 p-t-23">
                  brand : {products.brand}
                </div>
                <div className="stext-102 cl3 p-t-23">
                  quatity in stock : {products.countInStock}
                </div>
                {/*  */}
                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-203 flex-c-m respon6">quatity</div>
                  <div className="size-204 respon6-next">
                    {" "}
                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                      <div
                        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                        onClick={decrementQty}
                      >
                        <i className="fs-16 zmdi zmdi-minus" />
                      </div>
                      <input
                        className="mtext-104 cl3 txt-center num-product"
                        type="number"
                        name="num-product"
                        defaultValue={qty}
                      />
                      <div
                        className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                        onClick={incrementQty}
                      >
                        <i className="fs-16 zmdi zmdi-plus" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-t-33">
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <button
                        onClick={buttonAddToCart}
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div className="flex-m bor9 p-r-10 m-r-11">
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                      data-tooltip="Add to Wishlist"
                    >
                      <i className="zmdi zmdi-favorite" />
                    </a>
                  </div>
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Twitter"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Google Plus"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bor10 m-t-50 p-t-43 p-b-40">
            {/* Tab01 */}
            <div className="tab01">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                  >
                    Additional information
                  </a>
                </li>
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#reviews"
                    role="tab"
                  >
                    Reviews (1)
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content p-t-43">
                {/* - */}
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">{products.description}</p>
                  </div>
                </div>
                {/* - */}
                <div className="tab-pane fade" id="information" role="tabpanel">
                  <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                      <ul className="p-lr-28 p-lr-15-sm">
                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">Weight</span>
                          <span className="stext-102 cl6 size-206">
                            0.79 kg
                          </span>
                        </li>
                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">
                            Dimensions
                          </span>
                          <span className="stext-102 cl6 size-206">
                            110 x 33 x 100 cm
                          </span>
                        </li>
                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">
                            Materials
                          </span>
                          <span className="stext-102 cl6 size-206">
                            60% cotton
                          </span>
                        </li>
                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">Color</span>
                          <span className="stext-102 cl6 size-206">
                            Black, Blue, Grey, Green, Red, White
                          </span>
                        </li>
                        <li className="flex-w flex-t p-b-7">
                          <span className="stext-102 cl3 size-205">Size</span>
                          <span className="stext-102 cl6 size-206">
                            XL, L, M, S
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* - */}
                <div className="tab-pane fade" id="reviews" role="tabpanel">
                  <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                      <div className="p-b-30 m-lr-15-sm">
                        {/* Review */}
                        <div className="flex-w flex-t p-b-68">
                          <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                            <img src="images/avatar-01.jpg" alt="AVATAR" />
                          </div>
                          <div className="size-207">
                            <div className="flex-w flex-sb-m p-b-17">
                              <span className="mtext-107 cl2 p-r-20">
                                Ariana Grande
                              </span>
                              <span className="fs-18 cl11">
                                <i className="zmdi zmdi-star" />
                                <i className="zmdi zmdi-star" />
                                <i className="zmdi zmdi-star" />
                                <i className="zmdi zmdi-star" />
                                <i className="zmdi zmdi-star-half" />
                              </span>
                            </div>
                            <p className="stext-102 cl6">
                              Quod autem in homine praestantissimum atque
                              optimum est, id deseruit. Apud ceteros autem
                              philosophos
                            </p>
                          </div>
                        </div>
                        {/* Add review */}
                        <form className="w-full">
                          <h5 className="mtext-108 cl2 p-b-7">Add a review</h5>
                          <p className="stext-102 cl6">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <div className="flex-w flex-m p-t-50 p-b-23">
                            <span className="stext-102 cl3 m-r-16">
                              Your Rating
                            </span>
                            <span className="wrap-rating fs-18 cl11 pointer">
                              <i className="item-rating pointer zmdi zmdi-star-outline" />
                              <i className="item-rating pointer zmdi zmdi-star-outline" />
                              <i className="item-rating pointer zmdi zmdi-star-outline" />
                              <i className="item-rating pointer zmdi zmdi-star-outline" />
                              <i className="item-rating pointer zmdi zmdi-star-outline" />
                              <input
                                className="dis-none"
                                type="number"
                                name="rating"
                              />
                            </span>
                          </div>
                          <div className="row p-b-25">
                            <div className="col-12 p-b-5">
                              <label className="stext-102 cl3" htmlFor="review">
                                Your review
                              </label>
                              <textarea
                                className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                                id="review"
                                name="review"
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-sm-6 p-b-5">
                              <label className="stext-102 cl3" htmlFor="name">
                                Name
                              </label>
                              <input
                                className="size-111 bor8 stext-102 cl2 p-lr-20"
                                id="name"
                                type="text"
                                name="name"
                              />
                            </div>
                            <div className="col-sm-6 p-b-5">
                              <label className="stext-102 cl3" htmlFor="email">
                                Email
                              </label>
                              <input
                                className="size-111 bor8 stext-102 cl2 p-lr-20"
                                id="email"
                                type="text"
                                name="email"
                              />
                            </div>
                          </div>
                          <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
          <span className="stext-107 cl6 p-lr-25">SKU: JAK-01</span>
          <span className="stext-107 cl6 p-lr-25">Categories: Jacket, Men</span>
        </div>
      </section>

      {/* <img className="pruductImage" src={products.image} alt="First project" />
      <img className="pruductImage" src={require("../img/market.jpg")} alt="First project" />
      <div className="infoCard">
        <h3>{products.name}</h3>
        <p>{products.description}</p>
        <b>prix : {products.price}$</b>
        <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
          qty :
          {
            [...Array(products.countInStock).keys()].map(x =>
                <option key = {x + 1} value={x + 1}>{x + 1}</option>
            )
          }
      
        </select>
        {
          products.countInStock > 0?
        <button onClick={buttonAddToCart}>add to cart</button>:
        <div>pas de produit</div>
        }
      </div> */}
    </div>
  ) : null;
};

export default ProductDetails;
