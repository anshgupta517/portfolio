import IDE from "../assets/project_img/pr1.png";
import VideoCall from "../assets/project_img/pr2.png";
import Pr3 from "../assets/project_img/pr3.png";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import "./css/second.css";

const Second = () => {
  return (
    <div className="second" id="projects">
      <div className="responsive-container">
        <div className="title">My Projects</div>
        <div className="projects">
          <div className="pr p1">
            <div className="pleft pic">
              <img src={IDE} alt="Cloud IDE" />
            </div>
            <div className="pright text">
              A lightweight open-source IDE viewable from web browsers. ☁️💻 It will feature essential coding functionalities, such as an editor, terminal, and file system, allowing code development at ease, all without the need for local installations.
              <br />
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn"
                href="https://github.com/anshgupta517/cloud-ide.git"
              >
                Source Code
              </a>
            </div>
          </div>
          <span className="pr-name">Cloud IDE</span>
<div>
          <Icon
            path={mdiDotsVertical}
            title="User Profile"
            size={3}
            horizontal
            vertical
            color="white"
            className="dots-icon"
          />
          </div>

          

<div className="pr p3">
            <div className="pleft pic ">
              <img src={Pr3} alt="Flood Evacuation Route Optimisation Using Graph theory" />
            </div>
            <div className="pright text">
              Web application to calculate shortest, safest evacuation routes during floods. ⚠️
              <br />
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn"
                href="https://github.com/anshgupta517/flood-evacuation.git"
              >
                Source Code
              </a>
            </div>
          </div>
          <span className="pr-name">Flood Evacuation Route Optimisation Using Graph theory</span>
          <Icon
            path={mdiDotsVertical}
            title="User Profile"
            size={3}
            horizontal
            vertical
            color="white"
            className="dots-icon"
          />
        </div>

        

          <div className="pr p2">
          <div className="pright pic">
              <img src={VideoCall} alt="Video Calling App" />
            </div>
            <div className="pleft text">
              A video calling app made with Reactjs and WebRTC. 
              <br />
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn"
                href="https://github.com/anshgupta517/Video-calling-V2.git"
              >
                Source Code
              </a>
            </div>
            
          </div>
          <div className="space"></div>
          <center>
          <span  className="pr-name">Video Calling App</span>
          </center>

         

          

        <div className="stack">
          <span>My Skills</span>
          <div className="slider">
            <div className="slide-wrap">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt=""
                  />
                </div>
                <div className="slide" id="express">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
