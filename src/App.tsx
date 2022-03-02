import React, { useState, useEffect, useCallback } from "react";
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
  const [searchItem, setSearchItem] = useState("");
  const [drinks, setDrinks] = useState([]);

  const callAPI = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}${searchItem}`);
      if (response.status === 200) {
        setDrinks(response.data.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchItem]);

  useEffect(() => {
    callAPI();
  }, [searchItem, callAPI]);

  const searchDinkItem = (itemName: string) => {
    setSearchItem(itemName);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home drinks={drinks} searchDinkItem={searchDinkItem} />}
        />
        <Route path="about" element={<About />} />
        <Route path="/cocktail/:cocktailID" element={<CocktailDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
