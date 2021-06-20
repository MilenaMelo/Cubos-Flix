/* ---------------------- IMPORTS --------------------------- */
import React from 'react';

// --- import pages
import './styles.css';

/* ---------------------- APPLICATION ----------------------- */
function PriceButton({ onClickHandler, text, price }) {
    return (
        <button className='button-movie' onClick={onClickHandler}>
            <empty>{text}</empty>
            AQQQ{price} 
            <span className="price">R$ {price} </span>
        </button>
    );
}

export default PriceButton;