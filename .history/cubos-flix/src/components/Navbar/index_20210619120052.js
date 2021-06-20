import './style.css'
import logo from '../../assets/images/logo.svg'

function Navbar() {
    return (
        <header className='navbar'>
            <img src={logo} alt="logo" />
            <div className='search'>
            <input id="input" type="search" autocomplete="off" spellcheck="false" role="combobox" placeholder="Pesquise no Google ou digite um URL" aria-live="polite">
                <input type="search" name="Pesquise" id="" />
            </div>
            <div className='profile'>

            </div>
        </header>
    );
}

export default Navbar;