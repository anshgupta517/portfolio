import "./css/footer.css";

const footer = () => {
  return (
    <>
      <div className="footer-svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,160L40,170.7C80,181,160,203,240,208C320,213,400,203,480,170.7C560,139,640,85,720,96C800,107,880,181,960,218.7C1040,256,1120,256,1200,261.3C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer" id="about">
        <div className="left-footer">
          <div className="more">More About Me</div>

          <div className="info">
            Hi, I am Ansh, a Fullstack Developer. I am familiar with Mern Stack.
          </div>
        </div>
        <br />
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
            href="https://twitter.com/ansh27dev"
            className="icon-button twitter"
          >
            <i className="fab fa-twitter"></i>
            <span></span>
          </a>

          <a
            href="https://www.linkedin.com/in/anshgupta7225"
            className="icon-button linkedin"
          >
            <i className="fab fa-linkedin"></i>
            <span></span>
          </a>
          <a href="https://github.com/ansh27dev" className="icon-button github">
            <i className="fab fa-github"></i>
            <span></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default footer;
