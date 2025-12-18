import MovieCard from "./components/MovieCard";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <MovieProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MovieProvider>
    </div>
  );
};

export default App;
