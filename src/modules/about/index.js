import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './index.css'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front End Developer.", "React Js Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div id="About" className="home-section">
      <div className="d-flex flex-column gap-2">
        <p className="">WELCOME TO MY WORLD</p>
        <h1 className="">
          Hi, I'm <span className="">Menjith</span>
        </h1>
        <h2 className="">
          a <span className='text-info'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="professional-summary">
        Proficient in HTML5, JavaScript (ES6+), CSS3, and Bootstrap for creating captivating web solutions. Well-versed in React, Redux,
and component-based architecture. Experienced in unit testing (Jest, React Testing Library) and integration testing. Actively seeking
roles to apply my skills in frontend technologies, including responsive design, RESTful APIs, Git, and modern UI/UX principles, to
contribute effectively to dynamic frontend development projects.

        </p>
      </div>
    </div>
  );
}

export default LeftBanner