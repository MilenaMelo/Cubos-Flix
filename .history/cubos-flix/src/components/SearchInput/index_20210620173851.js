/* ---------------------- IMPORTS --------------------------- */
import { useState } from 'react';

// --- import pages
import './styles.css';
import search_icon from '../../assets/images/search-icon.svg'

/* ---------------------- APPLICATION ----------------------- */
function SearchInput({ setMoviesNameFilter }) {
  const [searchName, setSearchName] = useState('');

  // --- get value
  function keyPress(state) {
    if (state.key !== 'Enter') return;
    
    setMoviesNameFilter(searchName);
  }

  return (
    <div className="search-container">
      <input className='search-input' type="text" name="Pesquisa" placeholder="Pesquise filmes..." onChange={event => setSearchName(event.target.value)} onKeyPress={event => keyPress(event)} />
      <img className='search-img' src={search_icon} alt="Input de pesquisa" />
    </div>
  );
}

export default SearchInput;