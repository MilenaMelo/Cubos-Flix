import './style.css'
import logo from '../../assets/images/logo.svg'

function Navbar() {
    return (
        <header className='navbar'>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Navbar;