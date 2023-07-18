import React from 'react';
import PostThemeSuggestion from '../theme/PostThemeSuggestion';
import PostSuggestion from '../post/PostSuggestion';


const ChatInstagram = () => {
    return (
        <div className="container-chat">
            <section className="div-post-theme-suggestion">
                <PostThemeSuggestion theme="Instagram" />
            </section>
            <section className="div-post-suggestion">
                <PostSuggestion theme="Instagram" />
            </section>
        </div>
    );
};

export default ChatInstagram;
