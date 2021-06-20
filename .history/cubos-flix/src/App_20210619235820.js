import React, { useState, useEffect } from "react";

import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';

import default_movies from './data/data';

function App() {
  const [movies] = useState(default_movies);


  return (
    <div className='app'>
      <header className='header'>
        <Navbar />
      </header>
      <section className='content'>
        <div className='top-movies'>
          <h1>Top Filmes</h1>
          <div className='movie-grid'>
            {movies.slice(0, 5).map((movie) => (
              <Cards {...movie}/>
            ))}
          </div>
        </div>
        <div className='all-movies'>
          <h1>Filmes</h1>
          <div className='movie-grid'>
            <Cards />
          </div>
        </div>
      </section>
      <section className='side-content'>
        <Bag />
      </section>
    </div>
  );
}

export default App;
