import { ADD_TO_DETAILS } from "../action/cartActions";

const initialState = {
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

export default function detailsProduct(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DETAILS: {
      const { product } = action;
      console.log("Product click:", product);
      return {
        ...product
      };
    }
    default:
      return state;
  }
}
