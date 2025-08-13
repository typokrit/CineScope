import React from "react";

const MovieCard = ({ movie }) => {
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <div className="w-48 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto"
      />
      <div className="p-2">
        <h3 className="text-white font-semibold text-sm">{movie.title}</h3>
        <div className="flex justify-between mt-1 text-gray-300 text-xs">
          <span>{releaseYear}</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
