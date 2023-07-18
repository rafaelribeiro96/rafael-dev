import React, { useState, useEffect } from 'react';
import { fetchImages, fetchCategoriesData } from '../../../services/apiUpload';
import ManagerUpload from './managerUpload';
import ManagerPreview from './managerPreview';
import ManagerUploaded from './managerUploaded';
import ManagerImageOpen from './managerImageOpen';
import ManagerEditing from './managerEditing';

const ImageManager = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadError, setUploadError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUploadedImages();
        fetchCategories();
    }, []);

    const fetchUploadedImages = async () => {
        try {
            const response = await fetchImages();
            setUploadedImages(response.data.images);
        } catch (error) {
            console.error('Erro ao obter as imagens:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const categoriesData = await fetchCategoriesData();
            setCategories(categoriesData);
        } catch (error) {
            console.error('Erro ao obter as categorias:', error);
        }
    };

    return (
        <div className="up-container">

            <div className="up-header-container">
                <ManagerUpload 
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                    uploadedImages={uploadedImages}
                    setUploadedImages={setUploadedImages}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    uploadError={uploadError}
                    setUploadError={setUploadError}
                    fetchUploadedImages={fetchUploadedImages}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}

                />
                <ManagerPreview 
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                    isLoading={isLoading}
                />
            </div>
            <ManagerUploaded
                categories={categories}
                uploadedImages={uploadedImages}
                setIsImageOpen={setIsImageOpen}
                setSelectedImage={setSelectedImage}
                setIsEditing={setIsEditing}
                fetchUploadedImages={fetchUploadedImages}
            />
        
            <ManagerImageOpen
                isImageOpen={isImageOpen}
                setIsImageOpen={setIsImageOpen}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />

            <ManagerEditing
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                fetchUploadedImages={fetchUploadedImages}
            />
        </div>
    );
};

export default ImageManager;
