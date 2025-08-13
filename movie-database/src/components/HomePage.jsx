import HeroSection from "./HeroSection";
import MovieList from "./MovieList";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* header */}
      <header className="bg-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">CineScope</div>
          <nav className="flex items-center space-x-8">
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
              className="px-3 py-1 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </nav>
        </div>
      </header>

      {/* hero section */}
      <HeroSection
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
        limit={5}
      />
      {/* movie section */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* trending section */}
          <MovieList
            title="Trending"
            fetchUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`}
          />
          {/* top rated */}
          <MovieList
            title="Top Rated"
            fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
          />
          {/* upcoming */}
          <MovieList
            title="Upcoming"
            fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
          />
        </div>
      </section>

      {/* footer */}
      <footer className="bg-gray-800 px-6 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Welcome to CineScope</h3>
              <p className="text-gray-400 mb-6">Made with love by typokrit</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white mb-2"
                  >
                    Trending
                  </a>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white mb-2"
                  >
                    Top Rated
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white">
                    Upcoming
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block text-gray-300 hover:text-white mb-2"
                  >
                    About
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white">
                    Donate
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full px-3 py-2 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    placeholder="message"
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
