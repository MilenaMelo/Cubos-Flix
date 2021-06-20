/* ---------------------- IMPORTS --------------------------- */
import React from 'react';

// --- import pages
import './styles.css'
import bag_icon from '../../assets/images/bag-icon.svg'
import { ReactComponent as PersonIllustration } from '../../assets/images/person-illustration.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/minus-icon.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/trash-icon.svg';
import PriceButton from '../PrinceButton/index';

/* ---------------------- APPLICATION ----------------------- */
function Bag({ moviesInBag, finalPrice, addMovie, removeMovie }) {

    const bag_empty = moviesInBag.length > 0;

    return (
        <div className='bag-container'>
            <header className='bag-header'>
                <img className='bag-icon' src={bag_icon} alt="Ícone de sacola" />
                <h1>Sacola</h1>
            </header>
            <div className='bag-content'>
                {bag_empty ?
                    (
                        moviesInBag.map(({ title, backgroundImg, price, count }) => (
                            <div className='movie-bag'>
                                <img className='img-movie-bag' src={process.env.PUBLIC_URL + backgroundImg} alt={title} />
                                <div className='info-bag'>
                                    <span >{title}</span>
                                    <span >R$ {price.toString().replace('.', ',')}</span>
                                </div>
                                <div className='actions-bag'>
                                    <PlusIcon onClick={() => addMovie(title)} />
                                    {count}
                                    {count > 1 ? <MinusIcon onClick={() => removeMovie(title)} /> : <TrashIcon onClick={() => removeMovie(title)} />}
                                </div>
                            </div>
                        ))
                    )
                    :
                    (
                        <empty>
                            <h3>Sua sacola está vazia</h3>
                            <h5>Adicione filmes agora</h5>
                            <PersonIllustration />
                        </empty>
                    )
                }
                {bag_empty ? <PriceButton className='bag-button' text="Confirme seus dados" type="bag" price={finalPrice} /> : ''}
            </div>
        </div>
    );
}

export default Bag;