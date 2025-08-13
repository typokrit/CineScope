// hero section
import React, { useEffect, useState } from "react";

const HeroSection = ({ fetchUrl, limit = 5 }) => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, limit)))
      .catch((err) => console.error(err));
  }, [fetchUrl, limit]);

  const nextMovie = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  const prevMovie = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  if (!movies.length) return null;

  const movie = movies[currentIndex];

  return (
    <div
      className="relative h-[50vh] md:h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* content */}
      <div className="relative z-10 max-w-4xl px-8">
        <div className="flex items-center space-x-3 mb-3 text-sm text-gray-300">
          <span>{movie.release_date?.split("-")[0]}</span>
          <span>•</span>
          <span>⭐ {movie.vote_average.toFixed(1)} </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-200 mb-6 line-clamp-3">{movie.overview}</p>
        <div className="flex space-x-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>
      {/* navigation button */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        <button
          onClick={prevMovie}
          className="text-white text-lg bg-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-60 transition"
          aria-label="Previous movie"
        >
          ▲
        </button>
        <button
          onClick={nextMovie}
          className="text-white text-lg bg-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-60 transition"
          aria-label="Next movie"
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
