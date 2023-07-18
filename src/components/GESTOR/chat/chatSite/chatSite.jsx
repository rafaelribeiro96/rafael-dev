import React from 'react';
import PostThemeSuggestion from '../theme/PostThemeSuggestion';
import PostSuggestion from '../post/PostSuggestion';


const ChatSite = () => {
    return (
        <div className="container-chat">
            <section className="div-post-theme-suggestion">
                <PostThemeSuggestion theme="Site" />
            </section>
            <section className="div-post-suggestion">
                <PostSuggestion theme="Site" />
            </section>
        </div>
    );
};

export default ChatSite;
