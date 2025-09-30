import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";

import projectEventManagement from "./images/Event-management.png"; // new project
import projectWiggles from "./images/projectWiggles.jpg";
import projectGlassmorphism from "./images/projectGlassmorphism.png";
import projectRogfree from "./images/projectRogfree.png";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />

        {/* Projects Section */}
        <ProjectCard
          id="project"
          className="even" // new project at top, starts the pattern
          projectTitle="Event Management System"
          projectDesc="A full-stack MERN application to host and manage events. Users can create, view, and register for events. The app is fully deployed and live."
          projectLink="https://github.com/yashveerdalal/Event-management-system"
          deployedProjectLink="https://yashveerdalal.github.io/Event-management-system"
          projectImg={projectEventManagement}
        />

        <ProjectCard
          id="project"
          className="odd"
          projectTitle="Inventory Management & Visualisation"
          projectDesc="Processed raw inventory data, cleaned it using SQL, performed exploratory data analysis (EDA), and visualised insights in Excel dashboards."
          projectLink="https://yashveerdalal.github.io/InventoryManagement-Visualisation/"
          deployedProjectLink="https://yashveerdalal.github.io/InventoryManagement-Visualisation/"
          projectImg={projectWiggles}
        />

        <ProjectCard
          className="even"
          projectTitle="Customer Support Data Analysis"
          projectDesc="Performed data cleaning and exploratory data analysis (EDA) on customer support records using Python libraries, uncovering patterns and insights."
          projectLink="https://github.com/yashveerdalal/Customer-Support-Extract/blob/main/Analysis.ipynb"
          deployedProjectLink="https://github.com/yashveerdalal/Customer-Support-Extract"
          projectImg={projectGlassmorphism}
        />

        <ProjectCard
          className="odd"
          projectTitle="YDrive: Cloud Storage Platform"
          projectDesc="A cloud storage platform inspired by Google Drive. Built with MongoDB for user authentication and Supabase for file storage."
          projectLink="https://github.com/yashveerdalal/YDrive"
          deployedProjectLink="https://yashveerdalal.github.io/YDrive/"
          projectImg={projectRogfree}
        />

        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
