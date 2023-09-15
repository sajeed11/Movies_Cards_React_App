import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import axios from "axios";
import SideBar from "./SideBar";

//const apiKey = "9c0c8c12";

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
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovie = async (title = null) => {
    if (title) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    } else {
      axios
        .get(API_URL)
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error:", error));
    }
  };
  /*const searchAndSortMovies = async (title = null, sortBy = null) => {
    let apiUrl = `${API_URL}`;

    if (title) {
      apiUrl += `&s=${title}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (title) {
      setMovies(data.Search); // Handle the case where data.Search is undefined
    } else if (sortBy === "popularity") {
      const test = data.Search.sort((a, b) => a.Title.localeCompare(b.Title));
      setMovies(test); // Make sure to create a new array to trigger re-render
    }
  };*/

  // Call this function in the useEffect to fetch and handle data
  useEffect(() => {
    searchMovie(null); // By default, it sorts by popularity
  }, []);

  return (
    <div className="app">
      <SideBar></SideBar>
      <div className="mainContainer">
        <nav>
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Blog">Blog</a>
          <a href="Contact">Contact</a>
        </nav>

        <h1>Movie Land</h1>
        <div className="search">
          <input
            placeholder="Search for a Movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovie(searchTerm)}
          />
        </div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
