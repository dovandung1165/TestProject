import { ADD_TO_CART, DEL_TO_CART } from "../action/cartActions";

const initialState = {
  total: 0,
  items: [
    // {
    //   id: "",
    //   name: "",
    //   image: "",
    //   image2: "",
    //   category: "",
    //   discountPrice: "",
    //   price: 0,
    //   quantity: 0
    // }
  ]
};
let localStorageState = initialState;
if (localStorage.cartItem) {
  localStorageState.items = JSON.parse(localStorage.getItem("cartItem"));
} else {
  localStorage.setItem("cartItem", JSON.stringify(localStorageState));
}

export default function cartProduct(state = localStorageState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action;
      const { items } = state;
      let updatedCart;
      const cartProduct = items.find(item => item.id === product.id);
      if (cartProduct) {
        // item has been added before
        updatedCart = items.map(item => {
          if (item.id === cartProduct.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }

          return item;
        });
      } else {
        // add new item
        updatedCart = [
          ...items,
          {
            ...product,
            quantity: 1
          }
        ];
      }

      const total = calculateTotal(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      return { items: updatedCart, total };
    }

    case DEL_TO_CART: {
      const { product } = action;
      const { items } = state;
      const updatedCart = items.filter(item => item.id !== product.id);
      const total = calculateTotal(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      return { items: updatedCart, total };
    }
    default:
      return state;
  }
}
//Total = 0 + price * quantity;
function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.discountPrice || item.price) * item.quantity;
  }, 0);
}
