import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Expertise from "./components/expertise/Expertise";
import Additional from "./components/additional/Additional";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expertise />
      <Additional />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
