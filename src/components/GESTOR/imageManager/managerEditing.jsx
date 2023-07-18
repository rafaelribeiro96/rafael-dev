/* eslint-disable react/prop-types */
import React from 'react';
import { updateImage } from '../../../services/apiUpload';

const ManagerEditing = ({ 
    isEditing, 
    selectedImage,
    setSelectedImage,
    setIsEditing,
    fetchUploadedImages  

}) => {

    const handleSaveImage = async () => {
        try {
            await updateImage(
                selectedImage.id, 
                selectedImage.title, 
                selectedImage.description, 
                selectedImage.price
            );
            setIsEditing(false);
            fetchUploadedImages();
        } catch (error) {
            console.error('Erro ao atualizar a imagem:', error);
        // Tratar o erro adequadamente
        }
    };

    return (
        <>
            {isEditing && selectedImage && (
                <div className="up-edit-image-select">
                    <input
                        type="text"
                        value={selectedImage.title}
                        onChange={(event) => setSelectedImage({ ...selectedImage, title: event.target.value })}
                        className="up-input-edit"
                        placeholder='Título'
                    />
                    <input
                        type="text"
                        value={selectedImage.description}
                        onChange={(event) => setSelectedImage({ ...selectedImage, description: event.target.value })}
                        className="up-input-edit"
                        placeholder='Descrição'
                    />
                    <input
                        type="number"
                        value={selectedImage.price}
                        onChange={(event) => setSelectedImage({ ...selectedImage, price: event.target.value })}
                        className="up-input-edit"
                        placeholder='Preço'
                    />
                    <button 
                        className="up-button-edit-image-select" 
                        onClick={handleSaveImage}>
                      Salvar
                    </button>
                </div>
            )}
        </>
    );
};

export default ManagerEditing;
