import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import { IMovie } from "./components/Main";
import Search from "./components/Search";
import AdminPage from "./components/AdminPage";

const App: React.FC = () => {
  const defaultValue: IMovie[] = [];
  const [cart, setCart] = useState(defaultValue);

  /* adding movies to cart  */
  const updateChildCart = (movie: IMovie) => {
    const cartItem = cart.slice();
    let productInCart = false;
    cartItem.forEach((item) => {
      if (item.id === movie.id) {
        item.count++;
        productInCart = true;
      }
    });
    if (!productInCart) {
      cartItem.push({ ...movie, count: 1 });
    }
    setCart(cartItem);
  };

  /* removing movie from cart */
  const removeFromCart = (product: IMovie) => {
    const cartItem = cart.slice();
    let productInCart = false;
    cartItem.forEach((item) => {
      if (item.id === product.id && item.count > 1) {
        item.count--;
        productInCart = true;
      }
      setCart(cartItem);
    });
    if (!productInCart) {
      const cartItem = cart.slice().filter((x) => x.id !== product.id);
      setCart(cartItem);
    }
  };
  /* clearing the cart after order placing */
  const clearItemFrom = (product: IMovie) => {
    setCart([]);
  };

  return (
    <Router>
      <div
        style={{
          display: "grid",
          height: "100vh",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <div>
          <Header myValue={cart} />
          <Search />
        </div>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart
              myValue={cart}
              removeItem={removeFromCart}
              clearItem={clearItemFrom}
            />
          </Route>
          <Route exact path="/">
            <Main updateParentCart={updateChildCart} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
