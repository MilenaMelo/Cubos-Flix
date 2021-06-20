import './style.css'
import logo from '../../assets/images/logo.svg'

function Navbar() {
    return (
        <header className='navbar'>
            <img src={logo} alt="logo" />
            <div className='search'>
                <input type="search" name="Pesquise" id="" />
            </div>
        </header>
    );
}

export default Navbar;