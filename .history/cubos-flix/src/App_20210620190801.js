/* ---------------------- IMPORTS --------------------------- */
import React, { useState, useEffect } from "react";

// --- import pages
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';

// --- import data
import defaultMovies from './data/data.js';


/* ---------------------- APPLICATION ----------------------- */
function App() {
  // --- states
  const [movies, setMovies] = useState(defaultMovies);
  const [moviesFilter, setMoviesFilter] = useState("");
  const [moviesInBag, setMoviesInBag] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  // --------------------------------------------- main functions

  // --- import API
  useEffect(() => {
    async function carregarFilmes() {
      const reponse = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR');

      const { results } = await reponse.json();

      setMovies(results);
    }
    // --- call
    carregarFilmes();
  }, []);

  // --- filter movies 
  function filterMovie(movie) {
    if (!moviesFilter) return movie;

    if (movie.title.includes(moviesFilter)) {
      return movie;
    }
  }


  function sendPurchase(movie) {
    const newMovies = [...moviesInBag];
    const storedMovies = newMovies.find(
      ({ title }) => title === movie.title,
    );

    if (storedMovies) {
      storedMovies.count++;
      setMoviesInBag(newMovies);
      const newPrice = roundPrice(
        storedMovies.price + finalPrice,
      );
      setFinalPrice(newPrice);
      return;
    }

    newMovies.push({
      title: movie.title,
      cover: movie.poster_path,
      price: movie.price,
      count: 1,
    });
    setMoviesInBag(newMovies);
    const newPrice = roundPrice(movie.price + finalPrice);
    setFinalPrice(newPrice);
  }

  function addMovie(movieTitle) {
    const newMovies = [...moviesInBag];
    const storedMovies = newMovies.find(
      ({ title }) => title === movieTitle,
    );

    storedMovies.count++;
    setMoviesInBag(newMovies);
    const newPrice = roundPrice(
      storedMovies.price + finalPrice,
    );
    setFinalPrice(newPrice);
  }

  function removeMovie(movieTitle) {
    const newMovies = [...moviesInBag];
    const storedMovies = newMovies.find(
      ({ title }) => title === movieTitle,
    );
    const newPrice = roundPrice(
      finalPrice - storedMovies.price,
    );
    setFinalPrice(newPrice);

    storedMovies.count--;
    if (storedMovies.count === 0) {
      setMoviesInBag(
        newMovies.filter(({ title }) => title !== movieTitle),
      );
      return;
    }

    setMoviesInBag(newMovies);
  }

  // --------------------------------------------- auxiliary functions
  // --- manage prices in bag
  function roundPrice(price) {
    return Number(price.toFixed(2));
  }

  // --------------------------------------------- main page
  return (
    <div className='App'>
      <header className='header'>
        <Navbar setMoviesFilter={setMoviesFilter} />
      </header>
      <section className='content'>
        <div className='top-movies'>
          <h1>Top Filmes</h1>
          <div className='movie-grid'>
            {movies.slice(0, 5).map((movie) => (
              <Cards {...movie} sendPurchase={sendPurchase} />
            ))}
          </div>
        </div>
        <div className='all-movies'>
          <h1>Filmes</h1>
          <div className='movie-grid'>
            {movies.filter(filterMovie).map((movie) => (
              <Cards {...movie} sendPurchase={sendPurchase} />
            ))}
          </div>
        </div>
      </section>
      <section className='side-content'>
        <Bag className="bag-button"
          moviesInBag={moviesInBag}
          finalPrice={finalPrice}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
      </section>
    </div>
  );
}

export default App;
