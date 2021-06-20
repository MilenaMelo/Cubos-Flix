import './style.css'
import logo from '../../assets/images/logo.svg'

function Navbar() {
    return (
        <header className='navbar'>
            <img src={logo} alt="logo" />
            <div className='search'>
                <input type="search" name="Pesquisa" id="input" placeholder="Pesquise filmes..." aria-live="polite"/>
            </div>
            <div className='profile'>

            </div>
        </header>
    );
}

export default Navbar;