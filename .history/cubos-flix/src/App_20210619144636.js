import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar/>
      </header>
      <section className="content">
        <section className="top-movies">
          <h1>Top Filmes</h1>

        </section>
        <section className="all-movies">
          <h1>Filmes</h1>
          
        </section>

      </section>
      <section className="side-content">
        
      </section>
    </div>
  );
}

export default App;
