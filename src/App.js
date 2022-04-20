import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
