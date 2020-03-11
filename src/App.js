import React from "react";
import "./App.css";
import { Element } from "react-scroll";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Header from "./components/Header";
import History from "./components/History";
import Practice from "./components/Practice";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Header />
        <Element name="history">
          <History />
        </Element>
        <Element name="practice">
          <Practice />
        </Element>
        <Github />
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="map">
          <Map />
        </Element>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
