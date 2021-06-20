import './style.css'

function Bag() {
    return (
        <div className='bag-container'>
            <img className='logo' src={logo} alt="logo"/>
            <div className='search-container'>
                <input className='search-input' type="text" name="Pesquisa" placeholder="Pesquise filmes..."/>
                <img className='search-img' src={search_icon} alt="Input de pesquisa"/>
            </div>
            <div className='profile-container'>
                <span>Bem vinda, Nina!</span>
                <img className='profile-img' src={profile_img} alt="Foto de perfil"/>
            </div>
        </div>
    );
}

export default Bag;