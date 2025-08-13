import "./App.css";
import Homepage from "./components/HomePage";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-gray-900 text-white">
      <Homepage />
    </div>
  );
}

export default App;
