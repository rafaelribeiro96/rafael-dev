/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

const SavedPost = ({ post, handleEdit, handlePublish }) => (
    <div className="saved-post-container">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Image src={post.image} alt="Imagem do post" className="saved-post-image" width={500} height={500} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <button onClick={() => handleEdit(post._id)} className="button-edit-text-editor saved-post-container-button">Editar</button>
        <button onClick={handlePublish} className="button-publish-text-editor saved-post-container-button">Publicar</button>
    </div>
);


export default SavedPost;
