import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Menu from "./components/menu/menu";
import Home from "./pages/home/home";
import Movies from "./pages/movies/movies";
import Series from "./pages/series/series";
import Details from "./pages/details/details";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
