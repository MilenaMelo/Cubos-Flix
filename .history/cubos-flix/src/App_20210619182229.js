import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';
import button_up from '#'


function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <section className="content">
        <div className="top-movies">
          <h1>Top Filmes</h1>
          <div className="movie-grid">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="all-movies">
          <h1>Filmes</h1>
          <div className="movie-grid">
            <Cards />
          </div>
        </div>
      </section>
      <section className="side-content">
        <Bag />
        <a href={button_up}id="subir">Topo</a>
      </section>
    </div>
  );
}

export default App;
