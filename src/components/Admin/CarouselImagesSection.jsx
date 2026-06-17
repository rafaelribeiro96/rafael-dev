/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { T, Field, Input, SaveBtn, SectionHeader } from './ui';
import { optimizeImage, sanitizeFilename } from 'src/lib/imageOptimizer';

export default function CarouselImagesSection({ initialImages = [] }) {
  const [items, setItems] = useState(initialImages);
  const [selectedId, setSelectedId] = useState(initialImages[0]?.id || null);
  const [status, setStatus] = useState('idle');
  const fileInputRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle' | 'processing' | 'uploading' | 'success' | 'error'
  const [uploadError, setUploadError] = useState('');

  const selected = items.find((i) => i.id === selectedId);

  const upd = (key, val) =>
    setItems((prev) =>
      prev.map((i) => (i.id === selectedId ? { ...i, [key]: val } : i))
    );

  const save = async () => {
    if (!selected) return;
    setStatus('saving');
    try {
      const res = await fetch(`/api/content/carousel/${selected.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selected)
      });
      if (!res.ok) throw new Error('Save failed');
      setStatus('saved');
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 2500);
  };

  const addItem = async () => {
    const newItem = {
      id: `img-${Date.now()}`,
      order: items.length + 1,
      image: ''
    };
    try {
      await fetch('/api/content/carousel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      setItems((prev) => [...prev, newItem]);
      setSelectedId(newItem.id);
    } catch (e) {
      console.error('Error adding carousel image:', e);
    }
  };

  const deleteItem = async () => {
    if (
      !selected ||
      !confirm(`Remover esta imagem do carrossel? Essa ação é irreversível.`)
    )
      return;
    try {
      await fetch(`/api/content/carousel/${selected.id}`, { method: 'DELETE' });
      const remaining = items.filter((i) => i.id !== selected.id);
      setItems(remaining);
      setSelectedId(remaining[0]?.id || null);
    } catch (e) {
      console.error('Error deleting carousel image:', e);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadStatus('processing');
    setUploadError('');
    try {
      // Optimize image client-side (limits dimensions to 800px for smaller square display)
      const optimized = await optimizeImage(file, 800, 800, 0.85);

      setUploadStatus('uploading');

      // Clean filename
      const cleanName = sanitizeFilename(file.name, optimized.format);

      // Post base64 fileData to serverless upload API
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: cleanName,
          fileData: optimized.base64
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erro ao salvar o arquivo no servidor.');
      }

      const data = await res.json();
      upd('image', data.url);
      setUploadStatus('success');
    } catch (err) {
      console.error(err);
      setUploadStatus('error');
      setUploadError(err.message || 'Falha no processamento.');
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <SectionHeader
        emoji="🖼️"
        title="Imagens do Carrossel (Hero Mobile)"
        subtitle={`${items.length} imagem${
          items.length !== 1 ? 'ns' : ''
        } cadastrada${items.length !== 1 ? 's' : ''}`}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '20px',
          alignItems: 'start'
        }}
      >
        {/* LEFT: Carousel items list */}
        <div
          style={{
            background: T.card,
            border: `1px solid ${T.border}`,
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              padding: '14px 16px',
              borderBottom: `1px solid ${T.border}`
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: T.textSub,
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              Imagens do Carrossel
            </span>
          </div>
          <div style={{ padding: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
            {items.map((item) => {
              const on = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: on ? T.primaryBg : 'transparent',
                    border: on
                      ? `1px solid ${T.primaryBorder}`
                      : '1px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '3px',
                    transition: 'all 0.15s',
                    fontFamily: 'inherit',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!on)
                      e.currentTarget.style.background =
                        'rgba(255,255,255,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    if (!on) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '6px',
                      background: '#080f1e',
                      overflow: 'hidden',
                      flexShrink: 0
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="Thumb"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px'
                        }}
                      >
                        🖼️
                      </div>
                    )}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: on ? T.primary : T.text,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      Slide #{item.order ?? 99}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: T.textMuted,
                        marginTop: '2px'
                      }}
                    >
                      ID: {item.id}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div style={{ padding: '6px 10px 12px' }}>
            <button
              onClick={addItem}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '8px',
                background: 'transparent',
                border: `1.5px dashed rgba(255,255,255,0.1)`,
                color: T.textMuted,
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'all 0.15s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = T.primaryBorder;
                e.currentTarget.style.color = T.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = T.textMuted;
              }}
            >
              + Novo Slide
            </button>
          </div>
        </div>

        {/* RIGHT: Edit form */}
        <div
          style={{
            background: T.card,
            border: `1px solid ${T.border}`,
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'sticky',
            top: '24px'
          }}
        >
          {selected ? (
            <>
              <div
                style={{
                  padding: '15px 20px',
                  borderBottom: `1px solid ${T.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                <div>
                  <div
                    style={{ fontSize: '15px', fontWeight: 700, color: T.text }}
                  >
                    Editar Slide
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '2px',
                      fontFamily: 'monospace'
                    }}
                  >
                    {selected.id}.json
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <SaveBtn status={status} onClick={save} />
                  <button
                    onClick={deleteItem}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: T.redBg,
                      border: `1px solid ${T.redBorder}`,
                      color: T.red,
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontFamily: 'inherit'
                    }}
                  >
                    Remover
                  </button>
                </div>
              </div>

              <div
                style={{
                  padding: '20px',
                  maxHeight: '68vh',
                  overflowY: 'auto'
                }}
              >
                {/* Image upload area */}
                <Field
                  label="Imagem do Protótipo"
                  hint="(Upload do dispositivo ou insira a URL abaixo)"
                >
                  <div
                    style={{
                      border: `2px dashed ${
                        selected.image
                          ? T.primaryBorder
                          : 'rgba(255,255,255,0.1)'
                      }`,
                      borderRadius: '10px',
                      padding: '14px',
                      transition: 'border-color 0.2s',
                      marginBottom: '16px'
                    }}
                  >
                    {selected.image ? (
                      <div
                        style={{ position: 'relative', marginBottom: '12px' }}
                      >
                        <img
                          src={selected.image}
                          alt="Preview"
                          style={{
                            width: '100%',
                            height: '140px',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            background: '#070d19',
                            display: 'block'
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            upd('image', '');
                            setUploadStatus('idle');
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
                          height: '95px',
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
                          Faça upload de uma imagem quadrada
                        </span>
                      </div>
                    )}

                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '10px'
                      }}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={
                          uploadStatus === 'processing' ||
                          uploadStatus === 'uploading'
                        }
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.06)',
                          border: `1px solid ${T.border}`,
                          color: T.textSub,
                          cursor: 'pointer',
                          fontSize: '12.5px',
                          fontFamily: 'inherit',
                          transition: 'all 0.15s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            'rgba(255,255,255,0.1)';
                          e.currentTarget.style.color = T.text;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            'rgba(255,255,255,0.06)';
                          e.currentTarget.style.color = T.textSub;
                        }}
                      >
                        💻 Enviar do Dispositivo
                      </button>
                    </div>

                    {uploadStatus !== 'idle' && (
                      <div
                        style={{
                          fontSize: '11.5px',
                          marginBottom: '10px',
                          color:
                            uploadStatus === 'error'
                              ? T.red
                              : uploadStatus === 'success'
                              ? T.green
                              : T.primary
                        }}
                      >
                        {uploadStatus === 'processing' &&
                          '⚙️ Otimizando e tratando imagem...'}
                        {uploadStatus === 'uploading' &&
                          '⚡ Enviando para o servidor...'}
                        {uploadStatus === 'success' &&
                          '✓ Upload realizado com sucesso!'}
                        {uploadStatus === 'error' && `✗ Erro: ${uploadError}`}
                      </div>
                    )}

                    <Input
                      value={selected.image || ''}
                      onChange={(e) => {
                        upd('image', e.target.value);
                        setUploadStatus('idle');
                      }}
                      placeholder="https://... ou /uploads/imagem.png"
                    />
                  </div>
                </Field>

                <Field
                  label="Ordem de Exibição"
                  hint="(Números menores aparecem primeiro)"
                >
                  <Input
                    type="number"
                    value={selected.order ?? ''}
                    onChange={(e) => upd('order', Number(e.target.value))}
                    placeholder="1"
                    style={{ maxWidth: '120px' }}
                  />
                </Field>
              </div>
            </>
          ) : (
            <div style={{ padding: '70px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🖼️</div>
              <p style={{ fontSize: '13px', color: T.textMuted }}>
                Selecione uma imagem para editar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
