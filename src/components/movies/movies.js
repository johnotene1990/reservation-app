import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movies.css";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "bb22f5b69e8286b08ae5ec91def45a7e", // Replace with your TMDB API key
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mov">
      <h1>Popular Movies</h1>
      <ul className="movie-grid">
        {movies.map((movie) => (
          <li className="movie-item" key={movie.id}>
            <h2 className="movi">{movie.title}</h2>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
