import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-[#121212] px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-[#121212] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorMessage;
