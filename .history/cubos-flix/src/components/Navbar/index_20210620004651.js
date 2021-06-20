import './styles.css'
import logo from '../../assets/images/logo.svg'
import profile_img from '../../assets/images/profile.jpg'
import SearchInput from "../SearchInput/index";

function Navbar({ setMoviesFilter }) {
    return (
        <header className='navbar'>
            <img className='logo' src={logo} alt="logo"/>
            <div className='search-container'>
                <SearchInput setMoviesNameFilter={ setMoviesFilter } />
            </div>
            <div className='profile-container'>
                <span>Bem vinda, Nina!</span>
                <img className='profile-img' src={profile_img} alt="Foto de perfil"/>
            </div>
        </header>
    );
}

export default Navbar;