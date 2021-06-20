import './style.css'
import card_movie from '../../assets/images/golden-star.svg'

function Card({ title, vote_average, price, poster_path, handleMovieBuy }) {

    const background = "linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3)100%), url('" + poster_path + "') no-repeat center / cover";

    return (
        <div className='card-container'>
            <div className='movie-card' style={{ background }}>
                <div className='info-card'>
                    <h6 title={title} className='name-movie'>{title}</h6>
                    <div className='pointing-movie'>
                        <img src={card_movie} alt='Ícone de estrela' />
                        <span>{ vote_average }</span>
                    </div>
                </div>
                <button className='button-movie'>
                    <span className='tag-button'>Sacola</span>
                    <span className='price'>{ price }</span>
                </button>
            </div>
        </div>
    );
}

export default Card;