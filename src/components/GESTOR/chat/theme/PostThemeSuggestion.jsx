/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import imageChat from '../../../../assets/images/gif-chat.gif';
import { ramo, website } from '../dados';
import ButtonGenerate from '../../extras/ButtonGenerate';
import Image from 'next/image';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: `${API_URL}`
});

const PostThemeSuggestion = ({theme}) => {
    const [suggestion, setSuggestion] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiInsta = 'api/chatGpt/suggestionThemePostInstagram';
    const apiSite = 'api/chatGpt/suggestionThemePostSite';

    let apiSuggestion;

    if (theme === 'Instagram') {
        apiSuggestion = apiInsta;
    } else if (theme === 'Site') {
        apiSuggestion = apiSite;
    }

    const getSuggestionPostTheme = async () => {
        setLoading(true);

        try {
            const response = await api.post(apiSuggestion, {
                website,
                ramo,
            });

            if (response.data) {
                setSuggestion(response.data.split('\n\n'));
            }
        } catch (error) {
            console.error('Ocorreu um erro ao fazer a solicitação', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="post-suggestion-chat-theme">
            <div className="header-post-suggestion-chat-theme">
                <h3 className="title-chat-theme">Gerador de Temas para post no {theme}</h3>
                <div className="div-chat-buttons-theme">
                    <ButtonGenerate text={loading ? 'Criando ideias...' : 'Obter ideias'} onClick={getSuggestionPostTheme} disabled={loading} />
                </div>
            </div>
            <div className="content-post-suggestion-chat-theme">
                {loading ? (
                    <div className="default-image-container-chat-theme">
                        <Image src={imageChat} alt="Imagem de Carregamento" className="default-image-chat-theme" />
                    </div>
                ) : suggestion ? (
                    <div className="suggestion-chat-theme">
                        <h3 className="suggestion-title-chat-theme">Sugestões de temas para postagem:</h3>
                        {suggestion.map((paragraph, i) => (
                            <p key={i} className="suggestion-text-chat-theme">
                                {paragraph.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
                            </p>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PostThemeSuggestion;
