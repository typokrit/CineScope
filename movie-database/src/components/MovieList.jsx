// MovieList.jsx
import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieList = ({ movies, title }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollRef.current.offsetWidth
          : scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative my-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white z-10 p-2 rounded-full hover:bg-opacity-75"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft />
      </button>

      {/* Movie Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 px-10"
        style={{ scrollBehavior: "smooth" }}
      >
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white z-10 p-2 rounded-full hover:bg-opacity-75"
        onClick={() => scroll("right")}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default MovieList;
