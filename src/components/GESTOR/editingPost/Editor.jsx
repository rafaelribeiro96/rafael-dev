import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ImageUpload from './ImageUpload';
import 'react-quill/dist/quill.snow.css';

// Importação dinâmica do ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor = ({
  title,
  handleTitleChange,
  description,
  handleDescriptionChange,
  image,
  handleImageChange,
  handleRemoveImage,
  content,
  handleContentChange,
  handleSave
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    await handleSave();
    setIsSaving(false);
  };

  return (
    <div className="post-editor-container">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="header-text-editor">
          <div className="title-subtitle-text-editor">
            <label className="label-title-text-editor">
              Título:
              <input
                className="title-text-editor"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Digite o título do post"
              />
            </label>
            <label className="label-description-text-editor">
              Descrição:
              <textarea
                className="description-text-editor"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Digite a descrição do post"
              />
            </label>
          </div>
          <ImageUpload
            image={image}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
          />
        </div>
        <ReactQuill value={content} onChange={handleContentChange} className="react-quill-container" />
        <br />
        <button type="submit" className="button-save-text-editor" disabled={isSaving}>
          {isSaving ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </div>
  );
};

export default Editor;
