import React from "react";
import aboutImg from "./Images/About.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={aboutImg}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
