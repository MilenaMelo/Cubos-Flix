import './style.css'
import bag_logo from '../../assets/images/person-illustration.svg'

function Bag() {
    return (
        <div className='bag-container'>
          <header className='bag-header'>

          </header>
          <div className='bag-content'>
            <h1>Sua sacola está vazia</h1>
            <h3>Adicione filmes agora</h3>
            <img src={bag_logo} alt="" />
          </div>
        </div>
    );
}

export default Bag;