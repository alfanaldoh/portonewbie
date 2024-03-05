import React from "react";
import styled from "styled-components";
import containerCSS from "../component/Component.module.css";
import me from "../assets/asu.png";
import Typed from "typed.js";
import { useEffect } from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

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
