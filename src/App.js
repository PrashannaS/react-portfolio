import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" class="dark-mode-switch">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        <Hero />
        <Info />
        <Skills />
        <Works />
        <Aboutme />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
