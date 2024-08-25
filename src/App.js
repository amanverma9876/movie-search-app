import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './assets/styles/global.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=8417f37d`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      });
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
