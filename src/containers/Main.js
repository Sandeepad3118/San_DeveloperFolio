import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import SkillProgress from "./skillProgress/SkillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";

import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";


import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <SkillProgress />
        {/* <WorkExperience /> */}
        <Projects />
        {/* <StartupProject /> */}

        <Blogs />



        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
