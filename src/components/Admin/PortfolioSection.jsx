/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import { T, Input, SelectInput, SectionHeader } from './ui';
import ProjectModal, { CATEGORIES } from './ProjectModal';

export default function PortfolioSection({ initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('');
  const [modal, setModal] = useState(null); // null | { mode: 'add' | 'edit', project? }

  const catOptions = [
    { value: '', label: 'Todas as categorias' },
    ...CATEGORIES.map((c) => ({ value: c, label: c }))
  ];

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const ms =
          !search || item.title.toLowerCase().includes(search.toLowerCase());
        const mc = !filterCat || item.category === filterCat;
        return ms && mc;
      }),
    [items, search, filterCat]
  );

  const handleSave = async (formData) => {
    const isNew = !items.find((i) => i.id === formData.id);
    const existing = items.find((i) => i.id === formData.id);
    const data = {
      ...formData,
      order: isNew ? items.length + 1 : existing?.order ?? items.length + 1
    };

    try {
      if (isNew) {
        await fetch('/api/content/portfolio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        setItems((prev) => [...prev, data]);
      } else {
        await fetch(`/api/content/portfolio/${data.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        setItems((prev) => prev.map((i) => (i.id === data.id ? data : i)));
      }
    } catch (e) {
      console.error('Error saving project:', e);
    }
    setModal(null);
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Remover "${title}" do portfólio? Essa ação é irreversível.`))
      return;
    try {
      await fetch(`/api/content/portfolio/${id}`, { method: 'DELETE' });
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (e) {
      console.error('Error deleting project:', e);
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <SectionHeader
        emoji="💼"
        title="Projetos do Portfólio"
        subtitle={`${items.length} projeto${
          items.length !== 1 ? 's' : ''
        } cadastrado${items.length !== 1 ? 's' : ''}`}
        actions={
          <button
            onClick={() => setModal({ mode: 'add' })}
            style={{
              padding: '9px 18px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 700,
              fontFamily: 'inherit',
              boxShadow: '0 4px 14px rgba(6,182,212,0.28)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <span style={{ fontSize: '16px', lineHeight: 1 }}>+</span> Adicionar
            Projeto
          </button>
        }
      />

      {/* Filters */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <span
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '14px',
              pointerEvents: 'none'
            }}
          >
            🔍
          </span>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar projeto..."
            style={{ paddingLeft: '36px' }}
          />
        </div>
        <SelectInput
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          options={catOptions}
          style={{ width: '200px' }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
          gap: '16px'
        }}
      >
        {filtered.map((project) => (
          <div
            key={project.id}
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'border-color 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = T.borderStrong;
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = T.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                height: '155px',
                background: '#080f1e',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {project.image ? (
                // Using native img intentionally in admin panel
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
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
                    fontSize: '28px',
                    color: T.textMuted
                  }}
                >
                  🖼️
                </div>
              )}
              <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    background: 'rgba(0,0,0,0.65)',
                    color: T.textSub,
                    padding: '3px 9px',
                    borderRadius: '999px',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {project.category}
                </span>
              </div>
              {project.liveUrl && (
                <div
                  style={{ position: 'absolute', bottom: '10px', left: '10px' }}
                >
                  <span
                    style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: T.greenBg,
                      color: T.green,
                      border: `1px solid ${T.greenBorder}`,
                      padding: '2px 8px',
                      borderRadius: '999px'
                    }}
                  >
                    ● LIVE
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ padding: '15px' }}>
              <h4
                style={{
                  margin: '0 0 4px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: T.text,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {project.title}
              </h4>
              <p
                style={{
                  margin: '0 0 10px',
                  fontSize: '12px',
                  color: T.textMuted,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {project.description}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11px',
                    color: T.primary,
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '10px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {project.liveUrl}
                </a>
              )}
              <div style={{ display: 'flex', gap: '7px' }}>
                {['Editar', 'Remover'].map((lbl) => {
                  const isDel = lbl === 'Remover';
                  return (
                    <button
                      key={lbl}
                      onClick={() =>
                        isDel
                          ? handleDelete(project.id, project.title)
                          : setModal({ mode: 'edit', project })
                      }
                      style={{
                        flex: 1,
                        padding: '7px',
                        borderRadius: '7px',
                        background: 'rgba(255,255,255,0.03)',
                        border: `1px solid ${T.border}`,
                        color: T.textSub,
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontFamily: 'inherit',
                        transition: 'all 0.15s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isDel
                          ? T.redBg
                          : T.primaryBg;
                        e.currentTarget.style.color = isDel ? T.red : T.primary;
                        e.currentTarget.style.borderColor = isDel
                          ? T.redBorder
                          : T.primaryBorder;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          'rgba(255,255,255,0.03)';
                        e.currentTarget.style.color = T.textSub;
                        e.currentTarget.style.borderColor = T.border;
                      }}
                    >
                      {lbl}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              gridColumn: '1 / -1',
              padding: '64px 20px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '14px' }}>💼</div>
            <p
              style={{
                fontSize: '14px',
                color: T.textMuted,
                marginBottom: '16px'
              }}
            >
              {search || filterCat
                ? 'Nenhum projeto encontrado com esses filtros.'
                : 'Nenhum projeto cadastrado ainda.'}
            </p>
            {!search && !filterCat && (
              <button
                onClick={() => setModal({ mode: 'add' })}
                style={{
                  background: 'none',
                  border: 'none',
                  color: T.primary,
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  textDecoration: 'underline'
                }}
              >
                + Adicionar o primeiro projeto
              </button>
            )}
          </div>
        )}
      </div>

      {modal && (
        <ProjectModal
          project={modal.mode === 'edit' ? modal.project : null}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
