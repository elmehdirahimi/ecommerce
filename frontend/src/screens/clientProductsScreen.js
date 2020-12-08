import React , { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ClientProductsScreen = () => {

    const productId = props.match.params.id;
    const productQty = props.location.shearch ? Number(props.location.shearch.splite("=")[1]):1;
    const {products,loading,error} =  useSelector(state => state.clientCart);
    const dispatch = useDispatch();

    useEffect(() => {
        effect
        return () => {
          //
        }
    }, [])

  return (
    <ul>
      shopping cart
      <li>
        <img src="../img/market.jpg" alt="the product" />
      </li>
      <li>
        <h3> iphone</h3>
      </li>
      <p> 16 hhfdfklefme</p>
      <li>
        qty:
        <select>
          <option>1</option>
        </select>
      </li>
      <button>annule</button>
      <li></li>
      <div>prix</div>
      <div>16000dh</div>
      <li>
        <button>processd to checkout</button>
      </li>
    </ul>
  );
};

export default ClientProductsScreen;
