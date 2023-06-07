import { ADD_TO_CART } from "../ActionTypes/index";
const init = {
  cartTotal: 0,
  itemTotal: 0,
  carts: [],
  loading: true,
};

const CartReducer = (state = init, action) => {
  console.log("carts=====>",state.carts);
  // console.log("carttotal======>", state.cartTotal);
  switch (action.type) {
    case ADD_TO_CART:
      const cartstate = { ...state };
      const cartproducts = action.payload.data;
      console.log("cartproducts", cartproducts);

      if (state.itemTotal == 0) {
        let cart = {
          id: cartproducts?.id,
          title: cartproducts?.title,
          price: cartproducts?.price,
          img: cartproducts?.thumbnail,
          quantity: parseInt(action?.payload?.quantity),
        };
        console.log("quantity", cart.quantity);
        cartstate.carts.push(cart);
      } else {
        let check = false;
        cartstate.carts.map((item, key) => {
          if (item.id == cartproducts.id) {
            cartstate.carts[key].quantity =
              parseInt(cartstate.carts[key].quantity) +
              parseInt(action?.payload?.quantity);

            check = true;
          }
        });

        if (!check) {
          let _cart = {
            id: cartproducts?.id,
            name: cartproducts?.title,
            price: cartproducts?.price,
            img: cartproducts?.thumbnail,
            quantity: parseInt(action?.payload?.quantity),
          };
          cartstate.carts.push(_cart);
        }
      }
      return {
        ...state,
        itemTotal: state.itemTotal + parseInt(action.payload.quantity),
        cartTotal:
          parseInt(cartstate?.cartTotal) +
          parseInt(action?.payload?.quantity) * parseInt(cartproducts?.price),
      };
    
    default:
      return state;
  }
};
export default CartReducer;
