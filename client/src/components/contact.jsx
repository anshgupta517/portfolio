import React from "react";

const contact = () => {
  return (
    <div className="contact">
      <span>Contact Me</span>
      <br />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <a
        href="https://twitter.com/worldofvicky007"
        className="icon-button twitter"
      >
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>

      <a
        href="https://www.linkedin.com/in/vikram-paul-b27a1b11b/"
        className="icon-button linkedin"
      >
        <i className="fab fa-linkedin"></i>
        <span></span>
      </a>
      <a href="https://github.com/VikramPaul007" className="icon-button github">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
    </div>
  );
};

export default contact;
