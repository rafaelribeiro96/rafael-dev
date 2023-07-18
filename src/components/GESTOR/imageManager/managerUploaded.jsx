/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { deleteImage } from '../../../services/apiUpload';
import deleteSvg from '../../../assets/images/delete.svg';
import editarPng from '../../../assets/images/editar.png';
import Image from 'next/image';

const ManagerUploaded = ({
    categories,
    uploadedImages,
    setIsImageOpen,
    setSelectedImage,
    setIsEditing,
    fetchUploadedImages
}) => {
    const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' selecionado por padrão
  
    const handleRemoveUploaded = async (id) => {
        try {
            await deleteImage(id);
            fetchUploadedImages();
        } catch (error) {
            console.error('Erro ao remover a imagem:', error);
        }
    };

    const openModal = (image) => {
        setIsImageOpen(true);
        setSelectedImage(image);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredImages = uploadedImages.filter((image) => selectedCategory === 'all' || image.category === selectedCategory);

    return (
        <div className="up-container-body">
            <div className="up-uploaded-container">
                <select 
                    value={selectedCategory} 
                    onChange={handleCategoryChange} 
                    className="up-uploaded-select"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                    <option value="all">Exibir Todas</option>
                </select>
                {filteredImages.length > 0 ? (
                    <div className="up-images-container">
                        {filteredImages.map((image) => (
                            <div key={image.id} className="up-uploaded-image">
                                <Image
                                    src={`${image.url}`}
                                    alt={image.originalname}
                                    className="up-uploaded-image-img"
                                    onClick={() => openModal(image)}
                                    width={300}
                                    height={300}
                                />
                                <span className="image-title-uploaded">
                                    {image.title ? (image.title.length > 30 ? 
                                        image.title.slice(0, 30) + '...' : 
                                        image.title) : 'sem título'}
                                </span>
                                <span>
                                    {image.description ? (image.description.length > 30 ? 
                                        image.description.slice(0, 30) + '...' : 
                                        image.description) : 'sem descrição'}</span>
                                <span>
                                    {image.price ? 
                                        'R$' + image.price.toFixed(2) : 
                                        'sem preço'}
                                </span>
                                <span className="image-category-uploaded">
                                    {'Cat: ' + (image.category ? image.category : 'Sem categoria')}
                                </span>
                                <div className="up-button-uploaded-image">
                                    <button 
                                        onClick={() => handleRemoveUploaded(image.id)} 
                                        className="up-button-remover">
                                        <Image src={deleteSvg} alt="Remover"
                                            className="delete-svg-up" />
                                    </button>
                                    <button onClick={() => {
                                        setIsEditing(true);
                                        setSelectedImage(image);
                                    }}
                                    className="up-button-edit">
                                        <Image src={editarPng} alt="Editar"
                                            className="edit-svg-up" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> 
                ) : (
                    <p>Nenhuma imagem nesta categoria.</p>
                )}
            </div>
        </div>
    );
};

export default ManagerUploaded;