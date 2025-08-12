import React from "react";

const MovieCard = ({ title, year }) => {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="h-48 bg-gray-600 flex items-center justify-center">
        <div className="text-gray-400 text-3xl">🎬</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
