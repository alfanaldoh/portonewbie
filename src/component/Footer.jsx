import React from "react";
import styled from "styled-components";
import containerCSS from "../component/Component.module.css";

const Footer = () => {
  return (
    <div className={containerCSS.gridLima}>
      <p>
        © 2024 by alfanaldoh <br />
        Created with reactJS
      </p>
      <p>
        <span>
          <b>CALL</b>
        </span>{" "}
        <br />
        📞 (+62)85171077729
      </p>
      <p>
        <span>
          <b>EMAIL</b>
        </span>{" "}
        <br /> ✉️ alfanaldoh@gmail.com
      </p>
    </div>
  );
};

export default Footer;
