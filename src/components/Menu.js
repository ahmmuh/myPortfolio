import React from "react";
import "../components/Menu.css";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

import $ from "jquery";
const Menu = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -200
    });
  };

  setTimeout(function() {
    window.location.reload(1);
  }, 10000);

  const toggleMenu = () => {
    $(".menuList").toggle("slow");
  };
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Code Anytime
      </Link>
      <ul className="menuList">
        <li>
          <Link to="/" className="link" onClick={() => scrollToElement("home")}>
            Hem
          </Link>
        </li>
        <li>
          <Link
            to="/practice"
            className="link"
            onClick={() => scrollToElement("practice")}
          >
            Om mig själv
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className="link"
            onClick={() => scrollToElement("history")}
          >
            Vad jag gör nu
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="link"
            onClick={() => scrollToElement("contact")}
          >
            Kontakt mig
          </Link>
        </li>
        <li>
          <Link
            to="/map"
            className="link"
            onClick={() => scrollToElement("map")}
          >
            Map
          </Link>
        </li>
      </ul>
      <button className="toggleMenu" onClick={() => toggleMenu("toggle menu")}>
        Meny
      </button>
    </nav>
  );
};

export default Menu;
