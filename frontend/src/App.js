import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/homeScreen";
import AllProductScreen from "./screens/allProductScreen";
import { MainNav, CategoryNav, SideCart } from "./components/Navs";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/cartScreen";
import UserSignInScreen from "./screens/singnInScreen";
import ShopScreen from "./screens/shopScreen";
import OrdersScreen from "./screens/ordersScreen";
import UploadProductScreen from "./screens/UploadProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <MainNav></MainNav>
        <SideCart></SideCart>

        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/all" component={AllProductScreen} />
              <Route path="/shop/:id?" component={ShopScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/details/:id" component={ProductDetails} />
              <Route path="/signin" component={UserSignInScreen} />
              <Route path="/orders" component={OrdersScreen} />
              <Route path="/newproduct" component={UploadProductScreen} />
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
