import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/header/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
