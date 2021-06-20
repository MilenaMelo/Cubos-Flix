import './style.css'
import logo from '../../assets/images/logo.svg'
import search_icon from '../../assets/images/search-icon.svg'
import profile_img from '../../assets/images/trash-icon.svg'


function Navbar() {
    return (
        <header className='navbar'>
            <img src={logo} alt="logo" />
            <div className='search-container'>
                <input type="search" name="Pesquisa" id="input" placeholder="Pesquise filmes..." aria-live="polite"/>
                <img src={search_icon} alt="Input de pesquisa" />
            </div>
            <div className='profile-container'>
                Bem vindo, Dina
                <img src={profile_img} alt="Foto de perfil" />
            </div>
        </header>
    );
}

export default Navbar;