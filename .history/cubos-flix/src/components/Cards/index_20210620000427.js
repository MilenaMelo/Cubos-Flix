import './style.css'
import card_movie from '../../assets/images/golden-star.svg'

function Card({ title, vote_average, price, poster_path, handleMovieBuy }) {

    const background = "linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%), url('" + poster_path + "') no-repeat center / cover";
    
    return (
        <div className='card-container'>
            <div className='movie-card'style={{ background }}>
                <div className='info-card'>
                    <h3 className='name-movie'>Joker</h3>
                    <div className='pointing-movie'>
                        <img src={card_movie} alt='Ícone de estrela' />
                        <span>8.5</span>
                    </div>
                </div>
                <button className='button-movie'>
                    <span className='tag-button'>Sacola</span>
                    <span className='price'>R$ 9,5</span>
                </button>
            </div>
        </div>
    );
}

export default Card;