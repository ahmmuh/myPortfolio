import React from "react";
import "../components/Github.css";
import ahmed from "../images/ahmed.jpg";
function Github() {
  return (
    <div className="gitHub">
      <img src={ahmed} />
      <a href="https://github.com/ahmmuh?tab=repositories">See my Github</a>
    </div>
  );
}

export default Github;
