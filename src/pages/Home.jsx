import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import '../styles/Home.css';


const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);

                setError("Failed to load popular movies.");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed to search movies.");
        } finally {
            setLoading(false);
        }


        // Implement search functionality here
    }
    return (
        <div className='home'>
            <form onSubmit={handleSearch}
                className='search-form'>

                <input type="text"
                    placeholder='Search movies...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />



                <button type="submit" className='search-button'>Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div>Loading movies...</div>
            ) : (<div className="movies-grid">

                {
                    movies.map((movie) => (
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        (<MovieCard key={movie.id} movie={movie} />)
                    ))
                }
            </div>)}
        </div>

    )
}

export default Home