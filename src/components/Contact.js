import React from "react";
import "../components/Contact.css";
function Contact() {
  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <div className="container">
      <h2>Kontakta mig</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            className="fname"
            id="name"
            placeholder="namn:"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="companyName">Företagsnamn:</label>
          <input type="text" id="companyName" placeholder="Företag" required />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-post:</label>
          <input type="text" id="email" placeholder="Din e-post" required />
        </div>

        <div className="form-control" id="btn">
          <input type="submit" className="submitbtn" value="Skicka" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
