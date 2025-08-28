import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center space-y-6">
        {/* title */}
        <h1 className="text-4xl font-bold">About CineScope</h1>

        {/* dscription */}
        <p className="text-lg text-gray-300 leading-relaxed">
          CineScope is your gateway to discovering movies. Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            The Movie Database (TMDb)
          </a>
          , it lets you explore trending films, top-rated gems, and upcoming
          releases all in one place.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          With CineScope, you can browse curated sections, view detailed movie
          info, and stay up to date with the latest in cinema. Our mission is to
          make movie discovery simple, sleek, and enjoyable.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-gray-600 rounded-xl hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
