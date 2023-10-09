import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" class="dark-mode-switch">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Works />}></Route>
          <Route path="/about-me" element={<Aboutme />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
        {/* <Hero />
        <Info />
        <Skills />
        <Works />
        <Aboutme />
        <Contact />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
