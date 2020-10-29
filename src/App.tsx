import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Login from './components/Login';
import Sigup from './components/Sigup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';


const App: React.FC = () => {
  return (
    
      <Router>
        <div className="layout">
          <Header />

          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/categories">
              <Categories/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/sigup">
              <Sigup/>
            </Route>
            <Route exact path="/">
              <Main/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    
  );
};

export default App;
