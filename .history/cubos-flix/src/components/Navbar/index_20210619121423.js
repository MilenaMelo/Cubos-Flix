import './style.css'
import logo from '../../assets/images/logo.svg'
import icon_search from '../../assets/images/search-icon.svg'
import img_profile from '../../assets/images/search-icon.svg'


function Navbar() {
    return (
        <header className='navbar'>
            <img src={logo} alt="logo" />
            <div className='search-container'>
                <input type="search" name="Pesquisa" id="input" placeholder="Pesquise filmes..." aria-live="polite"/>
                <img src={icon_search} alt="Input de pesquisa" />
            </div>
            <div className='profile-container'>
                Bem vindo, Dina
                <img src={img_profile} alt="Foto de perfil" />
            </div>
        </header>
    );
}

export default Navbar;