import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie)
    return (
      <div className="min-h-screen bg-[#202020] text-white flex items-center justify-center">
        Loading...
      </div>
    );

  const year = movie.release_date?.split("-")[0] || "N/A";
  const rating = movie.vote_average?.toFixed(1) || "N/A";

  return (
    <div className="min-h-screen bg-[#202020] text-white p-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back
        </Link>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="w-64 rounded shadow-md"
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {movie.title}
            </h1>
            <p className="text-gray-400 mb-4">
              {year} • ⭐ {rating}
            </p>
            <p className="mb-4">{movie.overview}</p>

            <div className="text-gray-300 space-y-1 text-sm">
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
              </p>
              <p>
                <strong>Runtime:</strong>{" "}
                {movie.runtime ? `${movie.runtime} mins` : "N/A"}
              </p>
              <p>
                <strong>Status:</strong> {movie.status || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
