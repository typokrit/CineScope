import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="bg-white text-[#121212] px-6 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-2">Welcome to CineScope</h3>
          <p className="text-gray-600 mb-4">Made with love by typokrit</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <a href="#trending" className="block hover:text-gray-600 mb-1">
                Trending
              </a>
              <a href="#top-rated" className="block hover:text-gray-600 mb-1">
                Top Rated
              </a>
              <a href="#upcoming" className="block hover:text-gray-600">
                Upcoming
              </a>
            </div>
            <div>
              <Link to="/about" className="block hover:text-gray-600 mb-1">
                About
              </Link>

              <a href="#" className="block hover:text-gray-600">
                Donate
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Contact</h3>
          {submitted ? (
            <p className="text-green-600 font-medium">
              ✅ Thanks for reaching out! We’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full mb-3 px-2 py-1 rounded text-[#121212] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#121212]"
              />
              <textarea
                rows="4"
                placeholder="Message"
                required
                className="w-full mb-3 px-2 py-1 rounded text-[#121212] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#121212] resize-none"
              />
              <button
                type="submit"
                className="bg-[#121212] text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
