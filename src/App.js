import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/home.component';
import Movie from './pages/movie-detail/movie-detail.component';
import Header from './components/header/header.component';
import MovieList from './components/movie-list/movie-list.component';
import { useState } from 'react';


function App() {
  const [toggle, setToggle] = useState(true);
  const getColor = (colorPicker) => {
    return colorPicker ^ toggle ? "black" : "white";
  }
  return (
    <div className="App" style={{ backgroundColor: getColor(true), color: getColor(false) }}>
      <Header setToggle={setToggle} toggle={toggle} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
