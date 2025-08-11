import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-700 w-full h-96 rounded-lg flex items-center justify-center mb-6">
            <div className="text-gray-400 text-6xl">🎬</div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Movie Title</h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-gray-600 hover:bg-gray-500 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
            View Details
          </button>
        </div>
      </section>

      {/* Movie Sections */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Trending Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Trending</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-gray-700 rounded-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-600 flex items-center justify-center">
                    <div className="text-gray-400 text-3xl">🎬</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Movie Name</h3>
                    <p className="text-gray-600">2025</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Rated Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Top Rated</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-gray-700 rounded-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-600 flex items-center justify-center">
                    <div className="text-gray-400 text-3xl">🎬</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Movie Name</h3>
                    <p className="text-gray-600">2025</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-gray-700 rounded-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-600 flex items-center justify-center">
                    <div className="text-gray-400 text-3xl">🎬</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">Movie Name</h3>
                    <p className="text-gray-600">2025</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
