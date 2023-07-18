/* eslint-disable react/prop-types */
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const ImageUpload = ({ image, handleImageChange, handleRemoveImage }) => {
    const [previewImage, setPreviewImage] = useState(null);
    const previewImageRef = useRef(null);

    useEffect(() => {
        if (previewImageRef.current && typeof previewImageRef.current !== 'string') {
            URL.revokeObjectURL(previewImageRef.current);
        }

        if (image) {
            let imageUrl;
            if (typeof image === 'string') {
                // Se a imagem é um URL, use-a diretamente
                imageUrl = image;
            } else {
                // Se a imagem é um objeto File, crie um URL
                imageUrl = URL.createObjectURL(image);
            }
            setPreviewImage(imageUrl);
            previewImageRef.current = imageUrl;
        } else {
            setPreviewImage(null);
            previewImageRef.current = null;
        }
    }, [image]);

    return (
        <div className="image-upload-container">
            <div className="header-image-upload-blog">
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    id="image-upload-input-text"
                    className="up-upload-input "
                />
                <label 
                    htmlFor="image-upload-input-text" 
                    className="up-upload-label-blog"
                >
                  Inserir Imagem
                </label>
                {image && 
                    <button type="button" onClick={handleRemoveImage} className="remove-image-button">
                        Remover Imagem
                    </button>
                }
            </div>
            {previewImage && 
                <Image
                    src={previewImage} 
                    alt="Pré-visualização da imagem" 
                    className="image-preview-blog-editor"
                    width={500}
                    height={500}
                />
            }
        </div>
    );
};

export default ImageUpload;
