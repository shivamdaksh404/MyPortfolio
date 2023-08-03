import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="header">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
