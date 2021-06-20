import './styles.css'
import PriceButton from '../PrinceButton/index';
import card_movie from '../../assets/images/golden-star.svg'

function Card({ title, vote_average, price, poster_path, sendPurchase }) {

    const background = "linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%), url('" + poster_path + "') no-repeat center / cover";

    return (
        <div className='card-container'>
            <div className='movie-card' style={{ background }}>
                <div className='info-card'>
                    <h5 title={title} className='name-movie'>{title}</h5>
                    <div className='pointing-movie'>
                        <img src={card_movie} alt='Ícone de estrela' />
                        <span>{ vote_average }</span>
                    </div>
                </div>
                <PriceButton text='Sacola' type='movie' price={price} onClickHandler={() => sendPurchase({ title, poster_path, price })} />
            </div>
        </div>
    );
}

export default Card;