import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, [fetchUrl]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide py-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
