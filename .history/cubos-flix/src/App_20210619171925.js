import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Bag from './components/Bag';


function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <section className="content">
        <div className="top-movies">
          <h2>Top Filmes</h2>
          <Cards />
        </div>
        <div className="all-movies">
          <h1>Filmes</h1>

        </div>

      </section>
      <section className="side-content">
        <Bag />
      </section>
    </div>
  );
}

export default App;
