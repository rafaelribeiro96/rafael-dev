import React, { useState } from 'react';
import ChatInstagram from '../chat/chatInstagram/chatInstagram';
import ChatSite from '../chat/chatSite/chatSite';
import ButtonSlide from '../extras/ButtonSlide';

const GestorHome = () => {
    const [selectedButton, setSelectedButton] = useState(''); // Estado para controlar o botão selecionado

    const handleInstagramChat = () => {
        setSelectedButton('instagram');
    };

    const handleSiteChat = () => {
        setSelectedButton('site');
    };

    return (
        <div className="gestor-home">
            <div className="button-container-gestor-home">
                <ButtonSlide
                    text="Instagram"
                    onClick={handleInstagramChat}
                    isSelected={selectedButton === 'instagram'} // Adicionar a propriedade 'isSelected'
                />
                <ButtonSlide
                    text="Site"
                    onClick={handleSiteChat}
                    isSelected={selectedButton === 'site'} // Adicionar a propriedade 'isSelected'
                />
            </div>
            {selectedButton === 'instagram' && (
                <section className="section-1-gestor-home">
                    <ChatInstagram />
                </section>
            )}
            {selectedButton === 'site' && (
                <section className="section-1-gestor-home">
                    <ChatSite />
                </section>
            )}
        </div>
    );
};

export default GestorHome;
