import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import { Switch, Route,Redirect } from "react-router-dom"; //or below
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";



const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
