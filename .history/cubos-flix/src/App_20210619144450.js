import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar/>
      </header>
      <section className="content">
        <div>
          <h1>Top Filmes</h1>

        </div>
        <div>
          <h1>Filmes</h1>
          
        </div>

      </section>
      <section className="side-content">
        
      </section>
    </div>
  );
}

export default App;
