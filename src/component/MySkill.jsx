import React from "react";
import styled from "styled-components";
import containerCSS from "../component/Component.module.css";
import html from "../assets/html.svg";
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
// import awan from "../assets/awann.jpg";
// import office from "../assets/office.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { SiRedux } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

const MySkill = () => {
  return (
    <div className={containerCSS.gridEmpat}>
      <div>
        <h1>-- My Skill --</h1>
      </div>
      <div className={containerCSS.logo}>
        <div>
          {/* {" "}
            <img src={html} alt="" /> */}
          <FaHtml5 size={70} />
        </div>
        <div>
          {/* <img src={CSS} alt="" /> */}
          <FaCss3Alt size={70} />
        </div>
        <div>
          {/* <img src={tailwind} alt="" /> */}
          <SiTailwindcss size={70} />
        </div>
        <div>
          {/* <img src={javascript} alt="" /> */}
          <TbBrandJavascript size={70} />
        </div>
        <div>
          {/* <img src={typescript} alt="" /> */}
          <TbBrandTypescript size={70} />
        </div>
        <div>
          {/* <img src={reactJS} alt="" /> */}
          <FaReact size={70} />
        </div>
        <div>
          {/* <img src={nodeJS} alt="" /> */}
          <FaNodeJs size={70} />
        </div>
        <div>
          <img src={expressJS} alt="" />
        </div>
        <div>
          {/* <img src={git} alt="" /> */}
          <FaGitSquare size={70} />
        </div>
        <div>
          {/* <img src={gitHub} alt="" /> */}
          <FaGithub size={70} />
        </div>
        <div>
          {/* <img src={mySQL} alt="" /> */}
          <SiMysql size={70} />
        </div>
        <div>
          {/* <img src={docker} alt="" /> */}
          <LiaDocker size={70} />
        </div>
        <div>
          <img src={cms} alt="" />
        </div>
        <div>
          {/* <img src={redux} alt="" /> */}
          <SiRedux size={70} />
        </div>
        <div>
          {/* <img src={redis} alt="" /> */}
          <SiRedis size={70} />
        </div>
        <div>
          {/* <img src={office} alt="" /> */}
          <TbBrandOffice size={70} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
