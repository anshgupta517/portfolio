import { useCli } from "./js/cli";
import "./css/cli.css";

const terminal = () => {
  useCli();
  const handleFocus = (event) => {
    event.target.parentElement.parentElement.parentElement
      .querySelector(".command")
      .focus();
  };

  return (
    <div className="terminal-window" onClick={handleFocus}>
      <div class="container">
        <div class="topbar">
          <div class="text">CLI About Me</div>
        </div>
        <div class="terminal">
          <div class="pre">Hello, type help for commands</div>
          <div class="output" id="output"></div>
          <div class="input-line">
            <input type="text" class="command" id="commandInput" autofocus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default terminal;
