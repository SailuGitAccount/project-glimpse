import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Projects from "./Projects";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
