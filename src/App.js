import React, {useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sneakers from "./components/Sneaker/Sneakers";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCardHandler = () => {
    setCartIsShown(false);
    
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCardHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Sneakers />
      </main>
    </CartProvider>
  );
}

export default App;
