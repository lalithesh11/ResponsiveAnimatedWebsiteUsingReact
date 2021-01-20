import React from "react";
import homeImg from "./Images/Home.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={homeImg}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
