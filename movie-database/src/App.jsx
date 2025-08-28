import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import SearchPage from "./components/SearchPage";
import ErrorMessage from "./components/ErrorMessage";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<ErrorMessage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
