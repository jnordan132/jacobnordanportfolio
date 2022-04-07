import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <br />
      <Footer />
    </div>
  );
}

export default App;
