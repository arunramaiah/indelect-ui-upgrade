//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Location from "./components/Location";
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
                  <Link class="nav-link" to="/location">
                    Location
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
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
            <Route path="/location">
              <Location />
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

      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-right justify-content-lg-between p-2 border-bottom">
          <div>
          <span>Get connected with us on social networks:</span>
            <SocialMedia />
          </div>
          <div> 
          <div>
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>#15/53, 1st Floor, Thirunagar, Villivakkam, Chennai - 600 095
                </p>
                <p>
                <a href="mailto:sales@indelect.com">
                  <i class="fas fa-envelope me-3"></i>
                  sales@indelect.com
                </a>  
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> Sales:  + 91 93802 43402
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> Service: + 91 93802 43402
                </p>
              </div>
          </div>
        </section>

       
      </footer>
    </Router>
  );
}

export default App;
