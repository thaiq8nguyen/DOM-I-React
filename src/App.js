import React from "react";
import { render } from "react-dom";
import "bulma/css/bulma.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("app"));
