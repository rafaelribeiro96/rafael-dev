/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import Editor from './Editor';
import SavedPost from './SavedPost';
import { getPost, createPost, updatePost } from '../../../services/apiBlog';

const EditingPost = ({ postId, onDone, creatingNewPost, setEditingPostId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState('rascunho');
    const [content, setContent] = useState('');
    const [savedPost, setSavedPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreatingNewPost, setIsCreatingNewPost] = useState(creatingNewPost);

    const fetchPost = useCallback(async () => {
        try {
            const fetchedPost = await getPost(postId);
            setSavedPost(fetchedPost);
            setIsEditing(true);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    }, [postId]);

    useEffect(() => {
        if (postId) {
            fetchPost();
        }
    }, [postId, fetchPost]);

    useEffect(() => {
        if (savedPost && isEditing) {
            setTitle(savedPost.title);
            setDescription(savedPost.description);
            setImage(savedPost.image);
            setContent(savedPost.content);
        }
    }, [savedPost, isEditing]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            console.log('estado imagem', image);
        }
    };
 
    const handleSave = async () => {
        let updatedPost;
        const postData = {
            title,
            description,
            image,
            content,
            status
        };        
    
        try {
            if (isCreatingNewPost) {
                updatedPost = await createPost(postData);
                setIsCreatingNewPost(false);
                // aqui atualizamos o postId
                postId = updatedPost._id;
            } else {
                updatedPost = await updatePost(postId, postData);
            }
            setSavedPost(updatedPost);
            setTitle('');
            setDescription('');
            setImage(null);
            setContent('');
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };
    

    const handlePublish = async () => {
        try {
            setStatus('publicado');
            if (isCreatingNewPost) {
                const newPost = await createPost({
                    ...savedPost,
                    status: 'publicado',
                });
                setSavedPost(newPost);
                setIsCreatingNewPost(false);
            } else {
                const updatedPost = await updatePost(savedPost._id, {
                    ...savedPost,
                    status: 'publicado',
                });
                setSavedPost(updatedPost);
            }
            alert('Post publicado com sucesso!');
        } catch (error) {
            console.error('Error publishing post:', error);
        }
    };
    

    const handleEdit = (postId) => {
        setEditingPostId(postId);
        setIsEditing(true);
    };

    const handleNewPost = () => {
        setSavedPost(null);
        setTitle('');
        setDescription('');
        setImage(null);
        setContent('');
        setIsEditing(false);
        setIsCreatingNewPost(true);
    };

    const renderBackButton = () => (
        <button onClick={onDone} className="button-back">
            Voltar
        </button>
    );

    const editorProps = {
        postId,
        title,
        handleTitleChange,
        description,
        handleDescriptionChange,
        image,
        handleImageChange,
        handleRemoveImage,
        content,
        handleContentChange,
        handleSave,
    };

    return (
        <div className="post-manager-container">
            {renderBackButton()}
            {!savedPost && !isEditing && <Editor {...editorProps} />}
            {savedPost && !isEditing && (
                <SavedPost post={savedPost} handleEdit={handleEdit} handlePublish={handlePublish} />
            )}
            {isEditing && <Editor {...editorProps} />}
            {savedPost && (
                <button onClick={handleNewPost} className="button-new-post-editing">
                    Novo Post
                </button>
            )}
        </div>
    );
};

export default EditingPost;
