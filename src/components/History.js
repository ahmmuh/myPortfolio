import React, { Component } from "react";
import Roll from "react-reveal/Roll";
import "../components/History.css";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

class History extends Component {
  changeColor = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="container">
        <Zoom left delay={890}>
          <h1 className="historyTitle">
            Pågående utbildningar: =>{" "}
            <span
              style={{ fontSize: "22px", color: "white", fontStyle: "normal" }}
            >
              {" "}
              Kör på distans
            </span>
          </h1>
        </Zoom>
        <main className="mainHistory">
          <Roll left>
            <div>
              <h3>Webbredaktör (180 hp)</h3>
              <p>
                Jag läser även denna utbildning som är tre åriga, vi har läst
                kurser om webbteknik,formgivning och layout,bild och
                produktion{" "}
              </p>
            </div>
          </Roll>

          <Zoom right delay={730} duration={2000}>
            <div>
              <h3>Frontendutvecklare</h3>
              <p>
                Att kunna jobba som frontendutvecklare är absolut mitt drömjobb,
                har läst tidigare kurser inom dem plus praktik och kan bygga
                egna webbplatser med hjälp av React och Angular.
              </p>
            </div>
          </Zoom>

          <Rotate right delay={300}>
            <div>
              <h3>Javautvecklare</h3>
              <p>
                Vi kör javautveclöare utbildning, hittils har vi läst de första
                kuser inom java och webben. det är bara början men det käns båda
                bra och roligt att se något man har byggt med hjälp av Java.
              </p>
            </div>
          </Rotate>
        </main>

        {/* section for avslutade utbildningar*/}
        <Roll left delay={920}>
          <h1 className="historyTitle">Avslutade utbildningar</h1>
        </Roll>

        <section className="sectionHistory">
          <Slide delay={300}>
            <div>
              <h3>Mobilhandel</h3>
              <p>
                Läste ganska mycket om webbprogrammering, jobbat med Wordpress,
                Stripe och Woocommerce för att kunna bygga e-handelssystem men
                också försäljning och adminstration.
              </p>
            </div>
          </Slide>
          <Bounce delay={1000}>
            <div>
              <h3>Apputvecklare</h3>
              <p>
                Jag fick läsa olika programmeringsspråk som till exempel swift
                och Kotlin för att kunna programmera applikationer för ios och
                android platformar, men också praktik på 20 veckor
              </p>
            </div>
          </Bounce>
          <Zoom left delay={500} duration={4}>
            <div>
              <h3>Dator-kommunikationsteknik</h3>
              <p>
                Jag fick kunskaper om hur man installerar, administrerar,
                underhåller och reparerar dator- och kommunikationssystem samt
                kunskaper om informationssäkerhet. men också att arbeta med
                system för presentation av data, bild, ljud och interaktiva
                tekniker.
              </p>
            </div>
          </Zoom>
        </section>
      </div>
    );
  }
}

export default History;
