import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';


function App() {

  useEffect(() => {
    includeFilms();
  }, [])

  async function includeFilms() {
    fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR").then(r => console.log(r))
    console.log(await fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR", {
      method: 'GET', 
      headers: {
        'content-type': 'application/json'
      }
    }).json());

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
