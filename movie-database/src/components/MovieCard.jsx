import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const year = movie.release_date?.split("-")[0] || "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="w-48 bg-[#202020] rounded overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform cursor-pointer">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full"
        />
        <div className="p-2">
          <h3 className="text-white font-medium text-sm truncate">
            {movie.title}
          </h3>
          <div className="flex justify-between text-gray-400 text-xs mt-1">
            <span>{year}</span>
            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
