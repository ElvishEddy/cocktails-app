import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";
import Navbar from "./components/header/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import CocktailDetail from "./components/cocktail-detail/CocktailDetail";

import BASE_URL from "./api";

function App() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(BASE_URL);
        if (response.status === 200) {
          setDrinks(response.data.drinks);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home drinks={drinks} />} />
        <Route path="about" element={<About />} />
        <Route path="/cocktail/:cocktailID" element={<CocktailDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
