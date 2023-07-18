/* eslint-disable react/prop-types */
import React from 'react';
import { uploadImages  } from '../../../services/apiUpload';

const ManagerUpload = ({
    selectedFiles,
    setSelectedFiles,
    categories,
    selectedCategory,
    setSelectedCategory,
    uploadError,
    setUploadError,
    fetchUploadedImages,
    setIsLoading,
    isLoading,
}) => {
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
        // limpa a descrição e o titulo
        const files = event.target.files;
        const updateFiles = Array.from(files).map((file) => {
            file.title = '';
            file.description = '';
            file.price = '';
            return file;
        }
        );
        setSelectedFiles(updateFiles);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleUpload = async () => {
        const imageDataArray = [];

        for (let i = 0; i < selectedFiles.length; i++) {
            const imageData = {
                images: selectedFiles[i],
                category: selectedCategory,
                title: selectedFiles[i].title,
                description: selectedFiles[i].description,
                price: selectedFiles[i].price,
            };
            imageDataArray.push(imageData);
        }
  
        try {
            setIsLoading(true);
            await uploadImages(imageDataArray);
            setSelectedFiles([]);
            setSelectedCategory('');
            fetchUploadedImages();
        } catch (error) {
            console.error('Erro ao enviar as imagens:', error);
            setUploadError('Erro ao enviar as imagens. Por favor, tente novamente mais tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="up-header-container-menu">
            <div className="up-menu-container">
                <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange} 
                    id="upload-input" 
                    className="up-upload-input"
                    disabled={isLoading} 
                />
                <label 
                    htmlFor="upload-input" 
                    className="up-upload-label"
                >
                  Escolher Arquivo
                </label>
                <select 
                    value={selectedCategory} 
                    onChange={handleCategoryChange} 
                    className="up-upload-select"
                    disabled={isLoading}
                >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleUpload}
                    disabled={!selectedCategory || !selectedFiles.length || isLoading}
                    className="up-upload-button"
                >
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
            {uploadError && <div className="up-error">{uploadError}</div>}
        </div>
    );
};

export default ManagerUpload;