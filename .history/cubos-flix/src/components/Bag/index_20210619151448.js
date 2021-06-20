import './style.css'
import bag_logo from '../../assets/images/person-illustration.svg'
import bag_icon from '../../assets/images/bag-icon.svg'


function Bag() {
    return (
        <div className='bag-container'>
          <header className='bag-header'>
            <img src={bag_icon} alt="Ícone de sacola" />
            <h1>Sacola</h1>
          </header>
          <div className='bag-content'>
            <h1>Sua sacola está vazia</h1>
            <h5>Adicione filmes agora</h3>
            <img src={bag_logo} alt="Ilustração" />
          </div>
        </div>
    );
}

export default Bag;