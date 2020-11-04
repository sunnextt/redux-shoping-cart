import { DECREMENT, INCREMENT, CLEAR_CART, REMOVE, GET_TOTALS } from "./Action"


function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case INCREMENT:
      let tempCart = state.cart.map( cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        } 
        return cartItem;
      })
    return {...state, cart:tempCart}

    case DECREMENT:
      let tempCar = [];

      if (action.payload.amount === 1 ) { 
        tempCar = state.cart.filter( cartItem => cartItem.id !== action.payload.id )

      } else {
        tempCar = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem
        })
      }
      return {...state, cart:tempCar}


    case REMOVE:
    return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)};
    
    case GET_TOTALS:
       let { total, amount } = state.cart.reduce(
         (cartTotal, cartItem) => {
         const {price, amount} = cartItem;
         const itemTotal = price * amount;

         cartTotal.total += itemTotal;
         cartTotal.amount += amount;
         return cartTotal;
       }, {
         total: 0,
         amount: 0,
       });

       total = parseFloat(total.toFixed(2));
    return {...state, total, amount }
  
    default:
      return state;
  }

}
export default reducer;

// if statement for reducer action
// function reducer(state, action) {
//   if {action.type === CLEAR_CART } {
//     return {...state, cart: []}
//   }
//   return state
// }
