import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg"; // replace with your photo

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span>Yashveer Dalal</span>, a{" "}
        <span>third-year Computer Science Engineering student</span> who loves
        turning ideas into interactive experiences.
        <br /> <br />
        My journey so far has been a mix of{" "}
        <span>exploring data with Python</span> 🐍 and diving deep into{" "}
        <span>frontend development with React</span>. At the same time, I’m
        strengthening my backend skills with <span>Node.js, Express</span>, and
        learning how to structure and query databases efficiently.
        <br /> <br />
        Think of me as a developer in learning phase 🔄 — continuously upgrading
        myself: - Building responsive UIs with React ⚛️ - Analyzing datasets and
        creating insights 📊 - Experimenting with backend APIs & DB design 🗄️ -
        Always curious about “what’s next” in tech 🚀
        <br /> <br />
        Outside of code, I enjoy solving problems that make me think differently
        — whether it’s debugging, optimizing queries, or finding creative
        approaches to projects.
        <br /> <br />
        Want to collaborate or see what I’ve been working on?{" "}
        <a
          className="resume"
          href="https://drive.google.com/file/d/19XGeo7nG7JiBXPxCZDpgZXEjlh32KRtD/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here’s my resume.
        </a>
      </div>

      <div className="profile-photo">
        <div className="heading">About Me</div>
        <img className="img" src={myProfile} alt="Profile of Yashveer Dalal" />
      </div>

      <div className="name">Yashveer</div>
    </div>
  );
}
