import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "./js/loader";
import "./css/first.css";

let Model = async () => {
  let gltf = await useLoader(GLTFLoader, "/models/pc/scene.gltf");
  console.log("DEBUG: gltf scene loaded:", gltf);
  console.log("DEBUG: gltf scene:", gltf.scene);

  return (
    <>
      <primitive object={gltf.scene} scale={[1, 1, 1]} />
    </>
  );
};

function typewriter() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
}

const First = () => {
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) {
      loadModel();
    }
  }, [loading]);

  const loadModel = async () => {
    console.log("DEBUG: loadModel function called");
    await Model()
      .then((MyModel) => {
        console.log("DEBUG: MyModel:", MyModel);
        setModel(MyModel);
      })
      .catch((err) => {
        setError(err);
        console.log("DEBUG: error occurred:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log("DEBUG: Rendering ThreeScene component");
  typewriter();

  return (
    <div className="first" id="first">
      <div className="custom-shape-divider-top-1720703134">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="responsive-container">
        <div className="main">
          <div className="canvas-container">
            {loading ? (
              <div className="loading">
                <h1>Loading...</h1>
              </div>
            ) : (
              <Canvas
                camera={{ position: [0, 50, 100], fov: 60 }}
                style={{ height: "50vh", width: "100%" }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                {model}
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={5}
                  enableZoom={false}
                />
              </Canvas>
            )}
          </div>
          <div className="intro card">
            <div className="text">
              {" "}
              <h2>
                <a
                  href=""
                  className="typewrite"
                  data-period="2000"
                  data-type='[ "Hi, I am Ansh.", "I am a Fullstack Developer.", "I Love to code.", "I Love to Develop." ]'
                >
                  <span className="wrap"></span>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
