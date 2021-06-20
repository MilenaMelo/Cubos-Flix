import React from 'react';

import { ReactComponent as PersonIllustration } from '../../assets/images/person-illustration.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/minus-icon.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/trash-icon.svg';

import './styles.css'
import bag_icon from '../../assets/images/bag-icon.svg'
import PriceButton from '../PrinceButton/index';


function Bag({ moviesInBasket, finalPrice, handleMovieAdd, handleMovieRemoval }) {

    const basketNotEmpty = moviesInBasket.length > 0;
    console.log(moviesInBasket.length)
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
                                <div className='movie-bag'>
                                    <img className='img-movie-bag' src={process.env.PUBLIC_URL + backgroundImg} alt={title} />
                                    <div className='info-bag'>
                                        <span >{title}</span>
                                        <span >R$ {price.toString().replace('.', ',')}</span>
                                    </div>
                                    <div>
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
                                <PersonIllustration />
                            </>
                        )
                }
                {basketNotEmpty ? <PriceButton text="Confirme seus dados" type="basket" price={finalPrice} /> : ''}
            </div>
        </div>
    );
}

export default Bag;