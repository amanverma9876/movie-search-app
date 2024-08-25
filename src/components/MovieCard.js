import React, { useState } from 'react';
import '../assets/styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const [details, setDetails] = useState(null);

  const fetchMovieDetails = (imdbID) => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=8417f37d`)
      .then(response => response.json())
      .then(data => setDetails(data));
  };

  return (
    <div className="movie-card" onClick={() => fetchMovieDetails(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        {details && (
          <div className="movie-details">
            <p>{details.Plot}</p>
            <p><strong>Cast:</strong> {details.Actors}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
