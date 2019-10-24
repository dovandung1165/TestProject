// import React from "react";
// import dataProduct from "../../dataProducts.json";
// import styles from "../css/product/products.module.css";
// import format from "../css/CTBST/ctbst.module.css";
// import { NavLink } from "react-router-dom";
// import store from "../../store/index";
// import { addToCart } from "../../action/cartActions";
// export default class CTBST extends React.Component {
//   handleCartButtonClick(event) {
//     event.preventDefault();
//     store.dispatch(addToCart());
//   }
//   // map(state, arr) {
//   //   return arr.filter(item => {
//   //     switch (item.id) {
//   //       case "001":
//   //         return {
//   //           ...state,
//   //           item
//   //         };
//   //       case "003":
//   //         return {
//   //           ...state,
//   //           item
//   //         };
//   //       case "005":
//   //         return {
//   //           ...state,
//   //           item
//   //         };
//   //       case "006":
//   //         return {
//   //           ...state,
//   //           item
//   //         };
//   //       default:
//   //         console.log("NO PRODUCTS WITH THESE CODE!!!!!!!!!!!");
//   //         break;
//   //     }
//   //     return state;
//   //   });
//   // }
//   render() {
//     console.log(this.map(this.props, dataProduct));
//     const newArr = this.map(this.state, dataProduct);
//     console.log(newArr);
//     return (
//       <div className={format.ctbstItems}>
//         {newArr.map(item => (
//           <NavLink to='/details' activeClassName='active' key={item.id}>
//             <div className={styles.product} id={item.id}>
//               <div className={styles.overflow}>
//                 <div className={styles.productImg}>
//                   <img src={item.img} />
//                   <button
//                     className={styles.btnAddToCart}
//                     onClick={this.handleCartButtonClick}>
//                     Add to card
//                   </button>
//                 </div>
//               </div>
//               <div className={styles.title}>{item.title}</div>
//               <div className={styles.price}>{item.price}</div>
//             </div>
//           </NavLink>
//         ))}
//       </div>
//     );
//   }
// }
