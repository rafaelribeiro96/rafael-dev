/* eslint-disable react/prop-types */
import Image from 'next/image';
import React, { useRef } from 'react';

const ManagerImageOpen = ({ 
    isImageOpen, 
    selectedImage, 
    setIsImageOpen, 
    setSelectedImage
}) => {
  
    const modalRef = useRef(null);

    const handleModalClick = (event) => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    };

    const closeModal = () => {
        setIsImageOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            {isImageOpen && (
                <div className="up-modal" ref={modalRef} onClick={handleModalClick}>
                    <div className="up-modal-content">
                        <Image
                            src={`${selectedImage.url}`}
                            alt={selectedImage.originalname}
                            style={{
                                maxWidth: '80vw',
                                maxHeight: '80vh',
                            }}
                        />
                        <button className="up-close" onClick={closeModal}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ManagerImageOpen;
