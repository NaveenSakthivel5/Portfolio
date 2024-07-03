// App.js

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Project />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
