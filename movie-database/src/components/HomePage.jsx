import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import HeroSection from "./HeroSection";
import MovieList from "./MovieList";
import Footer from "./Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const HomePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-700 flex justify-between items-center relative">
        {/* hamburger menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-700"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <h1 className="text-2xl font-bold">CineScope</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#trending" className="hover:text-gray-300">
            Trending
          </a>
          <a href="#top-rated" className="hover:text-gray-300">
            Top Rated
          </a>
          <a href="#upcoming" className="hover:text-gray-300">
            Upcoming
          </a>
        </nav>

        <button
          onClick={goToSearchPage}
          className="p-2 rounded-full hover:bg-gray-700"
        >
          <FaSearch className="text-white" />
        </button>

        {/* mobile nav*/}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1e1e1e] border-t border-gray-700 flex flex-col items-start p-4 space-y-4 md:hidden z-50">
            <a
              href="#home"
              className="hover:text-gray-300 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#trending"
              className="hover:text-gray-300 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Trending
            </a>
            <a
              href="#top-rated"
              className="hover:text-gray-300 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Top Rated
            </a>
            <a
              href="#upcoming"
              className="hover:text-gray-300 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Upcoming
            </a>
          </div>
        )}
      </header>

      {/* Hero*/}
      <div id="home">
        <HeroSection
          fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
          limit={5}
        />
      </div>

      {/* movies section */}
      <section className="px-6 py-8 space-y-12 max-w-6xl mx-auto">
        <div id="trending">
          <MovieList
            title="Trending"
            fetchUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`}
          />
        </div>
        <div id="top-rated">
          <MovieList
            title="Top Rated"
            fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
          />
        </div>
        <div id="upcoming">
          <MovieList
            title="Upcoming"
            fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
