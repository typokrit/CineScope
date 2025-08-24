import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ fetchUrl, limit = 5 }) => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, limit)))
      .catch((err) => console.error(err));
  }, [fetchUrl, limit]);

  if (!movies.length) return null;

  const movie = movies[current];

  const next = () => setCurrent((prev) => (prev + 1) % movies.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + movies.length) % movies.length);

  return (
    <div
      className="relative h-[50vh] md:h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-4xl px-6">
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
          <span>{movie.release_date?.split("-")[0]}</span>
          <span>•</span>
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-3">{movie.title}</h1>
        <p className="text-gray-200 mb-4 line-clamp-3">{movie.overview}</p>
        <Link
          to={`/movie/${movie.id}`}
          className="inline-block bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-white"
        >
          View Details
        </Link>
      </div>

      {/* navigation buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full text-white text-xl transition"
          aria-label="Previous movie"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full text-white text-xl transition"
          aria-label="Next movie"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
