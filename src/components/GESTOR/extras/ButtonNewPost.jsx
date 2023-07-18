/* eslint-disable react/prop-types */
import React from 'react';

const ButtonNewPost = ({onClick}) => {
    return (
        <button className="button-new-post" onClick={onClick}>
  
            <div className="more"><svg viewBox="0 0 100 100" width="256" height="256"><path fill="#fff" d="M53.42 32.81L53.42 46.85L69.44 46.85Q69.62 47.39 69.84 48.11Q70.07 48.83 70.07 49.64L70.07 49.64Q70.07 52.79 66.92 52.79L66.92 52.79L53.42 52.79L53.42 70.16Q52.70 70.43 52.02 70.61Q51.35 70.79 50.36 70.79L50.36 70.79Q48.56 70.79 47.70 69.98Q46.85 69.17 46.85 67.19L46.85 67.19L46.85 52.79L30.56 52.79Q30.29 52.16 30.11 51.48Q29.93 50.81 29.93 49.91L29.93 49.91Q29.93 46.85 33.08 46.85L33.08 46.85L46.85 46.85L46.85 29.84Q47.57 29.57 48.33 29.39Q49.10 29.21 50.18 29.21L50.18 29.21Q51.89 29.21 52.66 30.02Q53.42 30.83 53.42 32.81L53.42 32.81Z"></path></svg></div>
  
            <div className="button-new-post-text">Novo Post</div>
        </button>

    );
};

export default ButtonNewPost;