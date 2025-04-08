import { useEffect } from "react";

export const useCli = () => {
  useEffect(() => {
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");

    const commands = {
      help: "Available commands:  name, bio, skills, contact, clear",
      name: "Hi, I am Ansh Gupta.",
      bio: "I am a fullstack developer",
      skills: "I am proficient MERN stack",
      contact: "linkedin: https://www.linkedin.com/in/anshgupta7225",
    };

    const handleKeyDown = (event) => {
      console.log("Key pressed in command input:", event.key);

      if (event.key === "Enter") {
        const input = commandInput.value.trim();
        console.log("User input:", input);

        if (input === "clear") {
          output.innerHTML = "";
          commandInput.value = "";
          output.innerText = "";
          output.scrollTop = output.scrollHeight;

          return;
        }

        if (input) {
          const outputLine = document.createElement("div");
          outputLine.textContent = `$ ${input}`;
          output.appendChild(outputLine);

          const response = document.createElement("div");
          response.textContent =
            commands[input] || `Command not found: ${input}, Try typing help`;
          output.appendChild(response);

          console.log("Response:", response.textContent);

          commandInput.value = "";
          output.scrollTop = output.scrollHeight;
        }
      }
    };

    commandInput.addEventListener("keydown", handleKeyDown);

    return () => {
      commandInput.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
