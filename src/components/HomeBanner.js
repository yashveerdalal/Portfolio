import React from "react";
import "./HomeBannerStyle.css";
import backgroundVideo from "../images/background.mp4";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Yashveer Dalal</div>
          <div className="staticTitle">
            Data Analyst
            <div className="hrLine"></div>
          </div>
          <ul className="dynamicTitle">
            <li>
              +<span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href="https://www.linkedin.com/in/yashveer-dalal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>
      </div>

      <div className="mask">
        <video
          className="bg"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
