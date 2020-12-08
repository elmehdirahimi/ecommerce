import React from "react";
import "../css/nav.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Cookie from "js-cookie";

export const MainNav = () => {
  const signin = useSelector((state) => state.signIn);
  const { userInfo } = signin;
  const productCart = useSelector((state) => state.ProductCart);
  const { cartItems } = productCart;
  return (
    <header>
      {/* Header desktop */}
      <div className="container-menu-desktop">
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">Free shipping to eljadida</div>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help &amp; FAQs
              </a>
              {userInfo ? (
                <a href={"/orders"} className="flex-c-m p-lr-10 trans-04">
                  {userInfo.name}
                </a>

              ) : (
                <a href="/signin" className="flex-c-m p-lr-10 trans-04">
                  Sign IN
                </a>
              )}
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                DH
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <a href="#" className="logo">
              <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
            </a>
            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/all">Shop</a>
                </li>
                <li className="label1" data-label1="hot">
                  <a href="/cart">Features</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                {userInfo ? (
                <a href={"/newproduct"} className="flex-c-m p-lr-10 trans-04">
                  creat new product
                </a>

              ) : null}
                </li>
              </ul>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search" />
              </div>
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                data-notify={2}
              >
                <i className="zmdi zmdi-shopping-cart" />
              </div>
              {/* <a
                href="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify={0}
              >
                <i className="zmdi zmdi-favorite-outline" />
              </a> */}
            </div>
          </nav>
        </div>
      </div>
      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo moblie */}
        <div className="logo-mobile">
          <a href="/">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </div>
        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search" />
          </div>
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify={cartItems.length}
          >
            <i className="zmdi zmdi-shopping-cart" />
          </div>
          {/* <a
            href="#"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            data-notify={0}
          >
            <i className="zmdi zmdi-favorite-outline" />
          </a> */}
        </div>
        {/* Button show menu */}
        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
      </div>
      {/* Menu Mobile */}
      <div className="menu-mobile">
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">Free shipping to eljadida</div>
          </li>
          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                Help &amp; FAQs
              </a>

              {userInfo ? (
                <a href={"/orders"} className="flex-c-m p-lr-10 trans-04">
                  {userInfo.name}
                </a>
              ) : (
                <a href="/signin" className="flex-c-m p-lr-10 trans-04">
                  Sign IN
                </a>
              )}

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                DH
              </a>
            </div>
          </li>
        </ul>
        <ul className="main-menu-m">
          <li>
            <a href="/">Home</a>
            <span className="arrow-main-menu-m">
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
          </li>
          <li>
            <a href="/all">Shop</a>
          </li>
          <li>
            <a href="/cart" className="label1 rs1" data-label1="hot">
              Features
            </a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      {/* Modal Search */}
      <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
        <div className="container-search-header">
          <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
            <img src="images/icons/icon-close2.png" alt="CLOSE" />
          </button>
          <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search" />
            </button>
            <input
              className="plh3"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export const CategoryNav = () => {
  return (
    <Navbar className="subNav myNav">
      <Nav className="align-items-center">
        <Nav.Link href="#t_shirts">t_shits</Nav.Link>
        <Nav.Link href="#t_shirts">t_shits</Nav.Link>
        <Nav.Link href="#t_shirts">t_shits</Nav.Link>
        <Nav.Link href="#t_shirts">t_shits</Nav.Link>
        <Nav.Link href="#t_shirts">t_shits</Nav.Link>
        <Nav.Link href="#t_shirts">t_shits</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export const SideCart = () => {
  const productCart = useSelector((state) => state.ProductCart);
  const { cartItems } = productCart;
  return (
    <div className="wrap-header-cart js-panel-cart">
      <div className="s-full js-hide-cart" />
      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Your Cart</span>
          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
            <i className="zmdi zmdi-close" />
          </div>
        </div>
        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {cartItems.map((item) => (
              <li
                key={item.product}
                className="header-cart-item flex-w flex-t m-b-12"
              >
                <div className="header-cart-item-img">
                  <img src="images/item-cart-01.jpg" alt="IMG" />
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <a
                    href={"/details/" + item.product}
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    {item.name}
                  </a>
                  <span className="header-cart-item-info">
                    {item.productQty} x {item.price}DH
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              Total: {cartItems.reduce((a, c) => a + c.price * c.productQty, 0)}
              DH
            </div>
            <div className="header-cart-buttons flex-w w-full">
              <a
                href="/cart"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
              >
                View Cart
              </a>
              <a
                href="shoping-cart.html"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default { MainNav, CategoryNav, SideCart };
