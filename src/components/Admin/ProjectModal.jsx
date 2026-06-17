/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { T, Field, Input, Textarea, SelectInput, slugify } from './ui';

export const CATEGORIES = [
  'Gastronomia',
  'Advocacia',
  'Serviços',
  'Saúde',
  'Comércio Local',
  'Educação',
  'Tecnologia',
  'Outro'
];

export default function ProjectModal({ project, onSave, onClose }) {
  const isEdit = !!project;
  const autoSlug = useRef(!isEdit);
  const [form, setForm] = useState(
    project || {
      id: '',
      title: '',
      category: '',
      image: '',
      description: '',
      liveUrl: '',
      whatsappMessage: ''
    }
  );
  const [errors, setErrors] = useState({});
  const [imgError, setImgError] = useState(false);

  const upd = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  useEffect(() => {
    if (autoSlug.current && !isEdit) upd('id', slugify(form.title));
  }, [form.title, isEdit]);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Campo obrigatório';
    if (!form.category) e.category = 'Campo obrigatório';
    if (!form.description.trim()) e.description = 'Campo obrigatório';
    setErrors(e);
    return !Object.keys(e).length;
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '92vh',
          background: T.card,
          border: `1px solid ${T.borderStrong}`,
          borderRadius: '16px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '18px 22px 15px',
            borderBottom: `1px solid ${T.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: '15.5px',
                fontWeight: 700,
                color: T.text
              }}
            >
              {isEdit ? 'Editar Projeto' : 'Novo Projeto'}
            </h3>
            <p
              style={{
                margin: '3px 0 0',
                fontSize: '12px',
                color: T.textMuted
              }}
            >
              Preencha os dados para o portfólio
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${T.border}`,
              color: T.textMuted,
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'inherit'
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 22px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}
          >
            <div style={{ gridColumn: 'span 2' }}>
              <Field label="Título do Projeto" error={errors.title}>
                <Input
                  value={form.title}
                  onChange={(e) => upd('title', e.target.value)}
                  placeholder="Ex: Dr. Pablo Rezende — Coloproctologista"
                />
              </Field>
            </div>
            <Field label="Slug / ID" hint="(auto-gerado)">
              <Input
                value={form.id}
                onChange={(e) => {
                  autoSlug.current = false;
                  upd('id', e.target.value);
                }}
                placeholder="dr-pablo-rezende"
                style={{ fontFamily: 'monospace', fontSize: '12.5px' }}
              />
            </Field>
            <Field label="Categoria" error={errors.category}>
              <SelectInput
                value={form.category}
                onChange={(e) => upd('category', e.target.value)}
                options={CATEGORIES}
                placeholder="Selecione..."
              />
            </Field>
          </div>

          <Field label="Descrição" error={errors.description}>
            <Textarea
              value={form.description}
              onChange={(e) => upd('description', e.target.value)}
              placeholder="Website institucional desenvolvido para..."
            />
          </Field>

          {/* Image preview / input */}
          <Field
            label="Imagem de Capa"
            hint="(URL externa ou /images/portfolio/...)"
            style={{ marginBottom: '16px' }}
          >
            <div
              style={{
                border: `2px dashed ${
                  form.image ? T.primaryBorder : 'rgba(255,255,255,0.1)'
                }`,
                borderRadius: '10px',
                padding: '14px',
                transition: 'border-color 0.2s'
              }}
            >
              {form.image && !imgError ? (
                <div style={{ position: 'relative', marginBottom: '12px' }}>
                  {/* Using native img - admin panel only, not part of public site */}
                  <img
                    src={form.image}
                    alt="Preview"
                    style={{
                      width: '100%',
                      height: '130px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      display: 'block'
                    }}
                    onError={() => setImgError(true)}
                    onLoad={() => setImgError(false)}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      upd('image', '');
                      setImgError(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.65)',
                      border: 'none',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    height: '90px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: T.textMuted,
                    marginBottom: '12px'
                  }}
                >
                  <span style={{ fontSize: '24px', marginBottom: '6px' }}>
                    🖼️
                  </span>
                  <span style={{ fontSize: '12px' }}>
                    {imgError
                      ? 'URL inválida — verifique o endereço'
                      : 'Cole a URL da imagem abaixo'}
                  </span>
                </div>
              )}
              <Input
                value={form.image || ''}
                onChange={(e) => {
                  upd('image', e.target.value);
                  setImgError(false);
                }}
                placeholder="https://... ou /images/portfolio/projeto.webp"
              />
            </div>
          </Field>

          <Field label="URL do Site (Live)">
            <Input
              value={form.liveUrl || ''}
              onChange={(e) => upd('liveUrl', e.target.value)}
              placeholder="https://projeto.com.br/"
            />
          </Field>

          <Field
            label="Mensagem WhatsApp"
            hint="(texto pré-preenchido do 'Quero um parecido')"
          >
            <Textarea
              value={form.whatsappMessage || ''}
              onChange={(e) => upd('whatsappMessage', e.target.value)}
              placeholder="Olá! Vi o projeto X no portfólio da Rafael Tech e quero algo parecido para o meu negócio..."
              maxLength={320}
            />
          </Field>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '14px 22px',
            borderTop: `1px solid ${T.border}`,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '8px'
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'transparent',
              border: `1px solid ${T.border}`,
              color: T.textSub,
              cursor: 'pointer',
              fontSize: '13px',
              fontFamily: 'inherit',
              transition: 'all 0.15s'
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => {
              if (validate()) onSave(form);
            }}
            style={{
              padding: '8px 22px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'inherit',
              boxShadow: '0 4px 14px rgba(6,182,212,0.28)'
            }}
          >
            {isEdit ? 'Salvar Alterações' : 'Adicionar Projeto'}
          </button>
        </div>
      </div>
    </div>
  );
}
