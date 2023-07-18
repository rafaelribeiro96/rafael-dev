/* eslint-disable react/prop-types */
import React from 'react';

const ButtonExtra = ({ text, onClick, isSelected }) => {
    return (
        <button
            data-text="Awesome"
            className={`button-extra ${isSelected ? 'button-extra-select' : ''}`} // Adicionar a classe 'button-extra-select' quando o botão estiver selecionado
            onClick={onClick}
        >
            <span className="actual-text">&nbsp;{text}&nbsp;</span>
            <span className={`hover-text ${isSelected ? 'hover-text-select' : ''}`} // Adicionar a classe 'hover-text-select' quando o botão estiver selecionado
                aria-hidden="true"
            >
        &nbsp;{text}&nbsp;
            </span>
        </button>
    );
};

export default ButtonExtra;
