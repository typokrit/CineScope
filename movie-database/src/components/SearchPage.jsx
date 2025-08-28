import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      setError(null);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        );
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchQuery(query.trim());
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center gap-2 font-semibold"
      >
        ← Back to Home
      </button>

      {/* search input */}
      <div className="mb-8 flex justify-center">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for movies..."
          className="w-full max-w-3xl px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      {/* results */}
      {searchQuery === "" ? (
        <div className="text-center text-gray-400 text-xl">
          Start typing to search for movies!
        </div>
      ) : loading ? (
        <p className="text-center text-white">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : movies.length === 0 ? (
        <p className="text-center text-gray-400">No results found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
