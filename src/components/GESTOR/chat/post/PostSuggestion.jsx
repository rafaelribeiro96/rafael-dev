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

const PostSuggestion = ({theme}) => {
    const [temaPost, setTemaPost] = useState('');
    const [suggestion, setSuggestion] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiInsta = 'api/chatGpt/suggestionPostInstagram';
    const apiSite = 'api/chatGpt/suggestionPostSite';

    let apiSuggestion;

    if (theme === 'Instagram') {
        apiSuggestion = apiInsta;
    } else if (theme === 'Site') {
        apiSuggestion = apiSite;
    }

    const getSuggestion = async () => {
        setLoading(true);

        try {
            const response = await api.post(apiSuggestion, {
                temaPost,
                ramo,
                website,
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
        <div className="post-suggestion-chat">
            <div className="header-post-suggestion-chat">
                <h3 className="title-chat">Gerador de texto para post no {theme}</h3>
                <p className="text-chat">Digite o tema desejado e obtenha uma sugestão de conteúdo para seu post.</p>
                <input 
                    className="input-chat"
                    type="text" 
                    placeholder="Digite aqui o tema do post" 
                    value={temaPost} 
                    onChange={e => setTemaPost(e.target.value)} 
                />
                <ButtonGenerate text={loading ? 'Criando sugestão...' : 'Obter Sugestão'} onClick={getSuggestion} disabled={loading} />
            </div>
            <div className="content-post-suggestion-chat">
                {loading ? (
                    <div className="default-image-container-chat">
                        <Image src={imageChat} alt="Imagem de Carregamento" className="default-image-chat" />
                    </div>
                ) : suggestion ? (
                    <div className="suggestion-chat">
                        <h3 className="suggestion-title-chat">Sugestão:</h3>
                        {suggestion.map((paragraph, i) => (
                            <p key={i} className="suggestion-text-chat">
                                {paragraph.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
                            </p>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PostSuggestion;
