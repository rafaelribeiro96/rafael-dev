/* eslint-disable react/prop-types */
import React from 'react';
import deleteSvg from '../../../assets/images/delete.svg';
import Image from 'next/image';

const ManagerPreview = ({ 
    selectedFiles, 
    setSelectedFiles,
    isLoading,
}) => {

    const handleTitleChange = (event, index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles[index].title = event.target.value || '';
        setSelectedFiles(updatedFiles);
    };

    const handleDescriptionChange = (event, index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles[index].description = event.target.value || '';
        setSelectedFiles(updatedFiles);
    };

    const handlePriceChange = (event, index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles[index].price = event.target.value || '';
        setSelectedFiles(updatedFiles);
    };

    const handleRemoveSelected = (index) => {
        setSelectedFiles((prev) => {
            const updatedFiles = [...prev];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });
    };

    return (
        <div className="up-div-preview-container">
            {selectedFiles.length > 0 && (
                <div className="up-div-preview-container-2">
                    <h2>Imagens selecionadas:</h2>
                    <div className="up-preview-container">
                        {Array.from(selectedFiles).map((file, index) => (
                            <div key={index} className="up-preview-image">
                                <Image src={URL.createObjectURL(file)} alt={file.name} className="up-preview-image-src" width={500} height={500} />
                                <input
                                    type="text"
                                    value={file.title}
                                    onChange={(event) => handleTitleChange(event, index)}
                                    className="up-input-preview"
                                    placeholder="Título"
                                    disabled={isLoading}
                                />
                                <textarea
                                    value={file.description}
                                    onChange={(event) => handleDescriptionChange(event, index)}
                                    className="up-input-preview"
                                    placeholder="Descrição"
                                    disabled={isLoading}
                                />
                                <input
                                    type="number"
                                    value={file.price}
                                    onChange={(event) => handlePriceChange(event, index)}
                                    className="up-input-preview"
                                    placeholder="Preço"
                                    disabled={isLoading}
                                />
                                <div className="up-button-preview-image">
                                    <button 
                                        onClick={() => handleRemoveSelected(index)} 
                                        className="up-button-remover"
                                        disabled={isLoading}
                                    >
                                        <Image src={deleteSvg} alt="Remover"
                                            className="delete-svg-up" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerPreview;