// import { DECREMENT, INCREMENT } from "../constants/contants";

// const IncDecReducer = (state = { cartItems: [] }, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         cartItems: state.cartItems.map((x) =>
//           x.product === action.payload ? x.productQty + 1 : x
//         ),
//       };
//     case DECREMENT:
//       return {
//         cartItems: state.cartItems.map((x) =>
//           x.product === action.payload ? x.productQty - 1 : x
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export { IncDecReducer };