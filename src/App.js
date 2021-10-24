//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
//import Products from "./components/Products";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Location from "./components/Location";
import About from "./components/About";
import Shimadzu from "./components/Shimadzu";
import Genuine from "./components/Genuine";
import Pixxgen from "./components/Pixxgen";
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
                src="../../assets/indelect logo legacy.png"
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
                  <Link class="nav-link" to="/shimadzu">
                    Shimadzu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/genuine">
                    Genuine
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/pixxgen">
                    Pixxgen
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
            <div>
            <span>Get connected with us on social networks:</span>
            <SocialMedia />
          </div>
          </nav>
          <Switch>
            <Route path="/shimadzu">
              <Shimadzu />
            </Route>
            <Route path="/genuine">
              <Genuine />
            </Route>
            <Route path="/pixxgen">
              <Pixxgen />
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
    </Router>
  );
}

export default App;
