import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//9c0c8c12

const API_URL = "http://www.omdbapi.com?apikey=9c0c8c12";

const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};
const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovie("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="Search for a Movie"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;
