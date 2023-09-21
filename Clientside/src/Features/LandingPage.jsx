import React from "react";
import Navbar from "../componet/Navbar";
import Home from "../componet/Home";
import Why from "../componet/Why";
import Works from "../componet/Works";
import Product from "../componet/Product";
import Footer from "../componet/Footer";

const LandingPage = (props) => {
  return (
    <main>
      <Navbar connect={props.connect} />
      <Home />
      <Why />
      <Works />
      <Product />
      <Footer />
    </main>
  );
};

export default LandingPage;
