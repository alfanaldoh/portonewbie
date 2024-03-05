// import React from "react";
import styled from "styled-components";
import containerCSS from "../component/Component.module.css";
import me from "../assets/asu.png";
// import html from "../assets/html.svg";
// import CSS from "../assets/css-3.svg";
// import javascript from "../assets/js.png";
// import typescript from "../assets/typescript.svg";
// import reactJS from "../assets/react.svg";
// import nextJS from "../assets/next.png";
// import nodeJS from "../assets/nodejs.png";
// import expressJS from "../assets/express-109.svg";
// import git from "../assets/git-icon.svg";
// import gitHub from "../assets/github-icon.svg";
// import mySQL from "../assets/mysql-6.svg";
// import docker from "../assets/docker.svg";
// import cms from "../assets/cms.svg";
// import redux from "../assets/redux.svg";
// import redis from "../assets/redis-logo.svg";
// import tailwind from "../assets/tailwind-css-1.svg";
// import project1 from "../assets/Project1.png";
// import project2 from "../assets/Project2.png";
// import awan from "../assets/awann.jpg";
// import office from '../assets/office.png'
import { useEffect } from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import Typed from "typed.js";

const Jumbotron = () => {
  useEffect(() => {
    const options = {
      strings: ["Hello Everyone"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed("#typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={containerCSS.gridDua}>
      <div className={containerCSS.leftGrid}>
        <div className={containerCSS.box}>
          <img src={me} alt="me" />
        </div>
        <div className={containerCSS.sosmed}>
          <Instagram />
          <Linkedin />
          <Github />
          <Twitter/>
        </div>
      </div>
      <div className={containerCSS.rightGrid}>
        <div className={containerCSS.aboutMe}>
          <h1 id="typed-text" />
          {/* <h1>
            HELLO
            <span>
              <br />
              EVERYONE :)
            </span>
          </h1> */}
          <h4>Here is what i am & what i do.</h4>
          <p>
            My name is <span>ALFAN ALDO HERNATA</span>, i am a junior who is
            passionate about becoming a full stack web developer,proficient in
            HTML, CSS, JavaScript, React, Node.js, and commit to learn, seek
            opportunities to gain experience,collaborate, and develop in this
            field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
