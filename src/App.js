import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <div className="portfolio">
        <h1>My Portfolio</h1>
        <div className="container">
          <Portfolio />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
