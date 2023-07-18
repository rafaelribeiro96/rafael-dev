import React, { useState, useEffect } from 'react';
import EditingPost from '../editingPost/EditingPost';
import { getPosts, deletePost, createPost, updatePost, deleteMultiplePosts } from '../../../services/apiBlog';
import deleteSvg from '../../../assets/images/delete.svg';
import Modal from 'react-modal';
import ButtonDelete from '../extras/ButtonDelete';
import ButtonNewPost from '../extras/ButtonNewPost';

Modal.setAppElement('#__next');

const GestorBlog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [selectionActive, setSelectionActive] = useState(false);
    const [editingPostId, setEditingPostId] = useState(null);
    const [creatingNewPost, setCreatingNewPost] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [postsToDelete, setPostsToDelete] = useState([]);


    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        if (loadMore) {
            fetchPosts();
            setLoadMore(false);
        }
    }, [loadMore]);

    const fetchPosts = async () => {
        try {
            const fetchedPosts = await getPosts();
            setPosts(fetchedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleLoadMore = () => {
        console.log('Carregar mais posts');
        setLoadMore(true);
    };

    const handlePostSelect = (postId) => {
        const isSelected = selectedPosts.includes(postId);
        if (isSelected) {
            setSelectedPosts((prevSelected) => {
                const newSelected = prevSelected.filter((id) => id !== postId);
                setSelectionActive(newSelected.length > 0);
                return newSelected;
            });
        } else {
            setSelectedPosts((prevSelected) => {
                const newSelected = [...prevSelected, postId];
                setSelectionActive(newSelected.length > 0);
                return newSelected;
            });
        }
    };

    const handleEditPost = (postId) => {
        setEditingPostId(postId);
    };

    const handleDoneEditing = () => {
        setEditingPostId(null);
        setCreatingNewPost(false);
        fetchPosts();
    };

    const handleDeleteSelected = () => {
        setPostsToDelete(selectedPosts);
        setIsModalOpen(true);
    };
    

    const handleDeletePost = (postId) => {
        setPostsToDelete([postId]);
        setIsModalOpen(true);
    };
    
    const handleConfirmDelete = async () => {
        try {
            if (postsToDelete.length === 1) {
                await deletePost(postsToDelete[0]);
            } else {
                await deleteMultiplePosts(postsToDelete);
            }

            setPosts((prevPosts) => prevPosts.filter((post) => !postsToDelete.includes(post._id)));
            setSelectedPosts((prevSelected) => prevSelected.filter((id) => !postsToDelete.includes(id)));
            setIsModalOpen(false);
            setPostsToDelete([]);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    

    const handleNewPost = () => {
        setCreatingNewPost(true);
        setEditingPostId(null);
        setSelectionActive(false);
    };

    const handleCreatePost = async () => {
        try {
            const newPost = await createPost();
            const updatedPost = await updatePost(newPost._id, { _id: newPost._id, status: 'publicado' });
            setPosts((prevPosts) => [...prevPosts, updatedPost]);
            setCreatingNewPost(false);
            setEditingPostId(updatedPost._id);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    

    if (editingPostId !== null || creatingNewPost) {
        return <EditingPost postId={editingPostId} onDone={handleDoneEditing} creatingNewPost={creatingNewPost} setEditingPostId={setEditingPostId} />;
    } else {
        return (
            <div className="gestor-blog-container">
                <div className="gestor-blog-header">
                    <input type="text" placeholder="Procurar por título" className="gestor-blog-search" />
                    <ButtonNewPost className="button-new-css" onClick={handleNewPost} />
                </div>
                <div className="gestor-blog-list">
                    <div className={`gestor-blog-card ${selectionActive ? 'gestor-blog-selected-info-active' : ''}`}>
                        {selectedPosts.length === 0 && posts.length > 0 ? (
                            <>
                                <span className="gestor-blog-select-label">Selecionar</span>
                                <span className="gestor-blog-status-label">Status</span>
                                <span className="gestor-blog-title-label">Título</span>
                                <span className="gestor-blog-date-label">Data da Publicação</span>
                                <span className="gestor-blog-delete-label">Excluir</span>
                            </>
                        ) : (
                            <span className="gestor-blog-selected-info">
                                <span
                                    className="gestor-blog-selected-info-span"
                                >{selectedPosts.length} selecionado(s)</span>
                                <button 
                                    className="gestor-blog-selected-info-button"
                                    onClick={handleDeleteSelected}>Excluir selecionados</button>
                            </span>
                        )}
                    </div>
                    {posts.map((post) => (
                        <div className="gestor-blog-card" key={post._id}>
                            <input
                                type="checkbox"
                                checked={selectedPosts.includes(post._id)}
                                onChange={() => handlePostSelect(post._id)}
                                className="gestor-blog-checkbox"
                            />
                            <span className="gestor-blog-status">{post.status}</span>
                            <span className="gestor-blog-title" onClick={() => handleEditPost(post._id)}>
                                {post.title}
                            </span>
                            <span className="gestor-blog-date">{new Date(post.createdAt).toLocaleDateString()}</span>
                            <div className="gestor-blog-delete-column">
                                <ButtonDelete onClick={() => handleDeletePost(post._id)} />
                            </div>
                        </div>
                    ))}
                </div>
                {!loadMore && posts.length > 0 && (
                    <button className="gestor-blog-loadmore" onClick={handleLoadMore}>
                        Carregar mais posts
                    </button>
                )}
                {creatingNewPost && (
                    <button className="gestor-blog-create" onClick={handleCreatePost}>
                        Criar novo post
                    </button>
                )}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    style={customStyles}
                >
                    <h4 className="h2-modal-delete">Você tem certeza que deseja excluir este(s) post?(s)</h4>
                    <div className="div-modal-buttons-delete">
                        <button className="button-modal-delete-yes" onClick={handleConfirmDelete}>Sim, excluir</button>
                        <button className="button-modal-delete-no"  onClick={() => setIsModalOpen(false)}>Cancelar</button>
                    </div>
                </Modal>
            </div>
        );
    }
};

export default GestorBlog;
