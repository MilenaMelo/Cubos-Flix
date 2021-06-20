import './styles.css'
import PriceButton from '../PrinceButton/index';


function Bag({ className = "", moviesInBasket, finalPrice, handleMovieAdd, handleMovieRemoval }) {

    const basketNotEmpty = moviesInBasket.length > 0;

    return (
        <div className='bag-container'>
            <header className='bag-header'>
                <img className='bag-icon' src={bag_icon} alt="Ícone de sacola" />
                <h1>Sacola</h1>
            </header>
            <div className='bag-content'>
                {
                    basketNotEmpty ?
                        (
                            moviesInBasket.map(({ title, backgroundImg, price, count }) => (
                                <div className="bag__movie">
                                    <img src={process.env.PUBLIC_URL + backgroundImg} alt={title} />
                                    <div className="bag__movie__info">
                                        <span className="bag__movie__title">{title}</span>
                                        <span className="bag__movie__price">R$ {price.toString().replace('.', ',')}</span>
                                    </div>
                                    <div className="bag__movie__actions">
                                        <PlusIcon onClick={() => handleMovieAdd(title)} />
                                        {count}
                                        {count > 1 ? <MinusIcon onClick={() => handleMovieRemoval(title)} /> : <TrashIcon onClick={() => handleMovieRemoval(title)} />}
                                    </div>
                                </div>
                            ))
                        )
                        : (
                            <>
                                <h2>Sua sacola está vazia</h2>
                                <h3>Adicione filmes agora</h3>
                                <PersonIllustration className="bag__illustration" />
                            </>
                        )
                }
                {basketNotEmpty ? <PriceButton text="Confirme seus dados" type="basket" price={finalPrice} /> : ''}
            </div>
        </div>
    );
}

export default Bag;