import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const year = movie.release_date?.split("-")[0] || "N/A";
  const rating = movie.vote_average?.toFixed(1) || "N/A";

  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative max-w-6xl mx-auto p-6">
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center gap-2 font-semibold"
        >
          ← Back
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="w-full md:w-64 rounded-xl shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {movie.title}
            </h1>
            <p className="text-gray-300 text-lg mb-4">
              {year} • ⭐ {rating} •{" "}
              {movie.runtime ? `${movie.runtime} mins` : "N/A"}
            </p>
            <p className="mb-6 text-gray-200 leading-relaxed">
              {movie.overview}
            </p>

            <div className="text-gray-300 space-y-2 text-sm md:text-base">
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
              </p>
              <p>
                <strong>Status:</strong> {movie.status || "N/A"}
              </p>
              <p>
                <strong>Release Date:</strong> {movie.release_date || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
