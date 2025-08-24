import HeroSection from "./HeroSection";
import MovieList from "./MovieList";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const HomePage = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Header */}
      <header className="px-8 py-4 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CineScope</h1>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Trending
          </a>
          <a href="#" className="hover:text-gray-300">
            Top Rated
          </a>
          <a href="#" className="hover:text-gray-300">
            Upcoming
          </a>
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 rounded text-[#121212] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </nav>
      </header>

      {/* Hero */}
      <HeroSection
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
        limit={5}
      />

      {/* Movie sections */}
      <section className="px-6 py-8 space-y-12 max-w-6xl mx-auto">
        <MovieList
          title="Trending"
          fetchUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`}
        />
        <MovieList
          title="Top Rated"
          fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
        />
        <MovieList
          title="Upcoming"
          fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
        />
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#121212] px-6 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">Welcome to CineScope</h3>
            <p className="text-gray-600 mb-4">Made with love by typokrit</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <a href="#" className="block hover:text-gray-600 mb-1">
                  Trending
                </a>
                <a href="#" className="block hover:text-gray-600 mb-1">
                  Top Rated
                </a>
                <a href="#" className="block hover:text-gray-600">
                  Upcoming
                </a>
              </div>
              <div>
                <a href="#" className="block hover:text-gray-600 mb-1">
                  About
                </a>
                <a href="#" className="block hover:text-gray-600">
                  Donate
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Contact</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-2 py-1 rounded text-[#121212] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#121212]"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-2 py-1 rounded text-[#121212] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#121212] resize-none"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
