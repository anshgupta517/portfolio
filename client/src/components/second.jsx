import library from "../assets/project_img/homepage.png";
import food from "../assets/project_img/foodpage.png";
import VideoCall from "../assets/project_img/videoCall.png";
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
              <img src={library} alt="Community Library" />
            </div>
            <div className="pright text">
              A platform/portal that allows donating and pooling used books in
              local community library, so that books need not to be
              discarded/wasted and will be borrowed and used in meaningful way,
              thereby fostering a vibrant and inclusive local community of
              readers.
            </div>
          </div>
          <span className="pr-name">Community Library</span>

          <Icon
            path={mdiDotsVertical}
            title="User Profile"
            size={3}
            horizontal
            vertical
            color="white"
            className="dots-icon"
          />

          <div className="pr p2">
            <div className="pleft text">
              A food distribution platform that allows restaurants to donate the
              (to be wasted) food at the end of the day, to the needful ones for
              its best utilisation.
            </div>
            <div className="pright pic">
              <img src={food} alt="Food Distribution platform" />
            </div>
          </div>

          <span className="pr-name">Food Distribution platform</span>

          <Icon
            path={mdiDotsVertical}
            title="User Profile"
            size={3}
            horizontal
            vertical
            color="white"
            className="dots-icon"
          />

          <div className="pr p3">
            <div className="pleft pic ">
              <img src={VideoCall} alt="Video calling app" />
            </div>
            <div className="pright text">
              A video calling app that provides seamless video communication,
              allowing you to connect with anyone, anywhere, at any time.
            </div>
          </div>
          <span className="pr-name">Video calling app</span>
        </div>

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
