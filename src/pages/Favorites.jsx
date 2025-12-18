import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../styles/Favorites.css";

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites-page">
      <h1>⭐ Your Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet. Add some movies!</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
