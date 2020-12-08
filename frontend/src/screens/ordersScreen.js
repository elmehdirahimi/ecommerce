import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listOrders } from "../actions/shopAction";

function OrdersScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { orders, loading, error } = orderList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div class="d-flex justify-content-center text-center" id="pluswrap">
      <div class="spinner-border text-secondary plus" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="">
      {orders.map((order) => (
        <div
          key={order._id}
          className="wrap-table-shopping-cart  mx-auto"
          style={{ width: "80%" }}
        >
          <table className="table-shopping-cart p-3 mb-2 bg-light">
            <tbody>
              <tr className="table_row">
                <td className="column-2">prenom : {order.prenom} </td>
                <td className="column-1">nom : {order.nom}</td>
                <td className="column-3">tel : {order.numero}</td>
                <td className="column-4">email : {order.email}</td>
                <td className="column-5"> adresse : {order.livraison}</td>
              </tr>
              <tr className="table_row">
                <td className="column-1">
                  <div className="how-itemcart1">
                    <img src="images/item-cart-04.jpg" alt="IMG" />
                  </div>
                </td>
                <td className="column-2">prodit</td>
                <td className="column-3">prix : 333 DH</td>
                <td className="column-4">quantite : 10</td>
                <td className="column-5"> totale 100DH</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

// function OrdersScreen(props) {
//   const orderList = useSelector(state => state.orderList);
//   const { orders, loading, error } = orderList;
//   console.log ("  ddd  "+ orders);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(listOrders());
//     return () => {
//       //
//     };
//   }, []);

//   return loading ? (
//     <div>loading ...</div>
//   ) : error ? (
//     <div>{error}</div>
//   ) : (
//     <div>
//       {orders.map((order) => (
//         <div key={order._id}>
//           <ul>
//             <li>nom : {order.nom}</li>
//             <li>nom : {order.nom}</li>
//             <li>prenom : {order.prenom}</li>
//             <li>numero : {order.numero}</li>
//             <li>email : {order.email}</li>
//             <li>livraison : {order.email}</li>
//           </ul>
//           <br />
//         </div>
//       ))}
//     </div>
//   );
// }

export default OrdersScreen;
