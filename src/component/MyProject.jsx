import React from "react";
import styled from "styled-components";
import containerCSS from "../component/Component.module.css";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";

const MyProject = () => {
  return (
    <div className={containerCSS.gridTiga}>
      <div>
        <h1>-- My Project --</h1>
      </div>
      <div className={containerCSS.project}>
        <div>
          <img src={project1} alt="" />
        </div>
        <div>
          <img src={project2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyProject;
