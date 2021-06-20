/* ---------------------- IMPORTS --------------------------- */
import React from 'react';

// --- import pages
import './styles.css';

/* ---------------------- APPLICATION ----------------------- */
function PriceButton({ onClickHandler, text, price }) {
    return (
        <button className='button-movie' onClick={onClickHandler}>
            <empty>{text}</empty>
            <span className="price">R$ {price.toString().replace('.', ',')}</span>
        </button>
    );
}

export default PriceButton;