// import { ADD_TO_CART } from "../action/cartActions";
// import { DEL_TO_CART } from "../action/cartActions";
// const defaultState = {
//   cartItemCount: 0
// };

// let stateStored = { ...defaultState };
// if (localStorage.cartItemCount) {
//   stateStored.cartItemCount = localStorage.cartItemCount;
// } else {
//   localStorage.cartItemCount = stateStored.cartItemCount;
// }

// export default function cartReducers(state = stateStored, action) {
//   switch (action.type) {
//     case ADD_TO_CART:
//       localStorage.cartItemCount = Number(localStorage.cartItemCount) + 1;
//       return {
//         ...state,
//         cartItemCount: (state.cartItemCount = localStorage.cartItemCount)
//       };
//     case DEL_TO_CART:
//       localStorage.cartItemCount = Number(localStorage.cartItemCount) - 1;
//       if (localStorage.cartItemCount < 0) {
//         localStorage.cartItemCount = 0;
//       }
//       return {
//         ...state,
//         cartItemCount: (state.cartItemCount = localStorage.cartItemCount)
//       };
//     default:
//       return state;
//   }
// }
