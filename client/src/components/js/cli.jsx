import { useEffect } from "react";

export const useCli = () => {
  useEffect(() => {
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");

    const commands = {
      help: "Available commands: about, summary, skills, projects, education, awards, contact, clear, whoami, motto. Try 'projects <project_name>' for details.",
      whoami: "Ansh Gupta - A proactive and results-oriented Full-Stack Developer.",
      about: "I'm Ansh, a passionate Software Developer specializing in MERN and Django stacks. I thrive on transforming ideas into functional, user-centric web applications and am always eager to learn and adapt to new technologies to deliver impactful solutions.",
      summary: "Results-oriented Software Developer with a robust foundation in Python, Django, and the MERN stack, focusing on the full software development lifecycle. Proven ability to design, develop, and deploy full-stack web applications. Quick learner, team player, and dedicated to creating efficient and scalable software solutions.",

      skills: "My core competencies include:\n" +
              "  LANGUAGES   : Python, JavaScript (ES6+), HTML5, CSS3, SQL, C/C++, Java\n" +
              "  MERN STACK  : React.js, Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, Axios\n" +
              "  DJANGO STACK: Django, Django ORM, Django REST Framework (DRF), Jinja2\n" +
              "  DATABASES   : MongoDB, PostgreSQL (Familiar), MySQL (Familiar), SQLite, Database Design\n" +
              "  TOOLS/OTHER : Git, GitHub, Docker (Familiar), Vite, RESTful APIs, WebRTC, WSGI/ASGI, Linux, MVT/MVC",
      projects: () => {
        const projectList = "Key Projects (Type 'projects <name>' for tech stack):\n" +
                          "  - ChatApp (MERN) - Real-time messaging application.\n" +
                          "  - SocialMediaApp (MERN) - Full-stack social engagement platform.\n" +
                          "  - VideoCallingApp (MERN) - Peer-to-peer video communication.\n" +
                          "  - JobPortal (Django) - Multi-user job listing and application platform.\n" +
                          "  - OnlineQuiz (Django) - Interactive quiz website.\n" +
                          "  - FileSharing (Django) - Secure file upload and categorization.\n" +
                          "See all on GitHub: https://github.com/anshgupta517";

        const projectDetails = {
          chatapp: "ChatApp Tech: MongoDB, Express.js, React, Node.js, Socket.IO, JWT",
          socialmediaapp: "SocialMediaApp Tech: MongoDB, Express.js, React, Node.js, JWT, bcrypt, Vite.js",
          videocallingapp: "VideoCallingApp Tech: React.js, Node.js, Express.js, Socket.IO, WebRTC (SimplePeer), Vite",
          jobportal: "JobPortal Tech: Python, Django, Django ORM, HTML, CSS, Bootstrap, SQLite",
          onlinequiz: "OnlineQuiz Tech: Python, Django, Django ORM, HTML, CSS, Bootstrap, SQLite",
          filesharing: "FileSharing Tech: Python, Django, Django ORM, HTML, CSS, Bootstrap, SQLite"
        };
        return (args) => {
            if (args && projectDetails[args.toLowerCase()]) {
                return projectDetails[args.toLowerCase()];
            }
            return projectList;
        };
      },

      education: "Bachelor of Technology in Computer Science - Bhilai Institute of Technology (BIT), Durg (Expected Aug 2027).",
      awards: "Winner - Website Design Competition: Developed a highly responsive and dynamic college website using React.js, showcasing skills in front-end development and user experience design.",

      contact: "Get in touch or see more of my work:\n" +
      "  EMAIL    : anshgupta51713@gmail.com\n" +
      "  LINKEDIN : https://www.linkedin.com/in/ansh-gupta-957a3635a/\n" +
      "  GITHUB   : https://github.com/Anshgupta517\n" +
      "  PORTFOLIO: https://glowing-frangipane-355553.netlify.app/",


      motto: "Driven to learn, build, and solve. I embrace new technologies to create efficient and impactful software.",

    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); 
        const fullInput = commandInput.value.trim().toLowerCase(); 
        commandInput.value = ""; 

        if (!fullInput) {
          return;
        }

        
        const outputLine = document.createElement("div");
        outputLine.textContent = `$ ${fullInput}`;
        output.appendChild(outputLine);

        
        let responseText;
        const parts = fullInput.split(" ");
        const command = parts[0];
        const arg = parts[1]; 

        if (command === "clear") {
          output.innerHTML = ""; 
          output.scrollTop = output.scrollHeight;
          return;
        }

        if (command === "projects") {
          const projectsFunction = commands.projects(); 
          responseText = projectsFunction(arg); 
        } else if (commands[command]) {
          responseText = typeof commands[command] === 'function' 
            ? commands[command]() 
            : commands[command]; 
        } else {
          responseText = `Command not found: ${command}. Type 'help' for available commands.`;
        }

        
        const responseElement = document.createElement("div");
        
        responseText.split('\n').forEach(line => {
          const lineDiv = document.createElement('div');
          lineDiv.textContent = line;
          responseElement.appendChild(lineDiv);
        });
        output.appendChild(responseElement);
        output.scrollTop = output.scrollHeight; 
      }
    };

    commandInput.addEventListener("keydown", handleKeyDown);

    
    return () => {
      commandInput.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 

  
};