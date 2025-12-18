import React from 'react';
import '../styles/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

const MovieCard = ({ movie }) => {
    const { addFavorite, removeFavorite, isFavorite } = useMovieContext();

    const favorite = isFavorite(movie.id);

    const onFavoriteClick = () => {
        if (favorite) {
            removeFavorite(movie.id);
            alert("Removed from favorites!");
        } else {
            addFavorite(movie);
            alert("Added to favorites!");
        }
    };

    const posterUrl = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder-poster.png';

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={posterUrl}
                    alt={movie?.title || 'Movie poster'}
                    onError={(e) => {
                        e.currentTarget.src = '/placeholder-poster.png';
                    }}
                />
                <div className="movie-overlay">
                    <button type="button" className="favorite-btn" onClick={onFavoriteClick}>
                        {favorite ? '★ Remove Favorite' : '☆ Add Favorite'}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie?.title || 'Untitled'}</h3>
                <p>{movie?.release_date?.split('-')[0] || 'N/A'}</p>
            </div>
        </div>
    );
};

export default MovieCard;
