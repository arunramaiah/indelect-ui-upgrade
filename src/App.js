//import logo from './logo.svg';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
import Construction from "./components/Construction";
import Gelpad from "./components/Gelpad";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar class="navbar-color" expand="lg">
        <div>
          <img
                  class="navbar-logo"
                  src="../../assets/logos/indelect logo legacy.png"
                  height="100px"
                  alt="navbar-logo"
                  href="/home"
          ></img>
        </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/shimadzu">Shimadzu</NavDropdown.Item>
                  <NavDropdown.Item href="/genuine">Genuine</NavDropdown.Item>
                  <NavDropdown.Item href="/pixxgen">Pixxgen</NavDropdown.Item>
                  <NavDropdown.Item href="/ctsp">Neuro Surgical Stereotactic Device(CTSP)</NavDropdown.Item>
                  <NavDropdown.Item href="/gelpads">Surgical Instruments and Gel Pads</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/customers">Customers</Nav.Link>
                <Nav.Link href="/location">Location</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>           
            </Navbar.Collapse>
          </Navbar>
          <hr/>
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
            <Route path="/ctsp">
              <Construction />
            </Route>
            <Route path="/gelpads">
              <Gelpad />
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
          <hr/>
      <footer class="page-footer">
      <SocialMedia/>
      </footer>
      </div>
    </Router>
  );
}

export default App;
