import "./css/navbar.css";

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="nav-left">
          <a href="/">
            <div className="logo">PORTFOLIO</div>
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-right-list">
            <li>
              <a href="#first">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
