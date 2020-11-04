import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main  from "./components/Main";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import { IMovie } from './components/Main';
import Search from './components/Search';


const App: React.FC = () => {
  const defaultValue: IMovie[] = [];
  const [cart, setCart] = useState(defaultValue);
  console.log(cart);

  const updateChildCart = (movie: IMovie) => {
     setCart([...cart, movie]);
  }
  return (
    <Router>
      <div
        style={{
          display: "grid",
          height: "100vh",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header myValue={cart}></Header>
        <Search/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart myValue={cart} />
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
