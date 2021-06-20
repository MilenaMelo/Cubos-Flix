import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';


function App() {

  useEffect(() => {
    includeFilms();
  }, [])

  async function includeFilms() {
    const response = await fetch('https://www.themoviedb.org/', {
      method: 'GET', 
      headers: {
        'content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className='app'>
      <header className='header'>
        <Navbar />
      </header>
      <section className='content'>
        <div className='top-movies'>
          <h1>Top Filmes</h1>
          <div className='movie-grid'>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
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
