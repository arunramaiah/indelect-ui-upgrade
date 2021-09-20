//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <Router>
      <div className="App">
        <div class="flex-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-header">
              <img
                class="navbar-logo"
                src="../../assets/logo-ind.svg"
                height="100px"
                alt="navbar-logo"
              ></img>
            </div>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/customers">
                    Customers
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div class="social-media-icons">
            <SocialMedia />
          </div>
          </nav>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
