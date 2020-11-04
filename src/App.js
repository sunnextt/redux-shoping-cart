import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// import {DECREMENT, INCREMENT } from "./Action"
import reducer from "./Reducer"
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import { Provider } from "react-redux"

// redux stuff
const initialStore = {
 cart: cartItems,
 total: 100,
 amount: 0,
}



const store = createStore(reducer, initialStore);
console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
