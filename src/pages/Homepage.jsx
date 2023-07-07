import React from "react";
import '../components/home.css'
import Home from "../components/Home";
import Info from "../components/Info";
import Navbar from "../components/Navbar"
import Choices from "../components/Choices";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <Info />
      <Choices />
      <Footer/>
    </>
  );
};

export default Homepage;
