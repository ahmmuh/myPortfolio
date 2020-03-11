import React, { Component } from "react";
import "../components/Header.css";
import Slide from "react-reveal/Slide";

class Header extends Component {
  state = {
    title: "Välkommen till Code Anytime",
    message:
      "Jag bygger fina webbplatser med senast tekniker som t.ex. css flex-box,css grid system, Bootstrap, Javascript, JQuery, React och Angular, bygger även mobil applikationer med hjälp av React native"
  };
  render() {
    return (
      <header className="header">
        <h1>{this.state.title}</h1>
        <Slide right delay={100}>
          <p>{this.state.message}</p>
        </Slide>
      </header>
    );
  }
}

export default Header;
