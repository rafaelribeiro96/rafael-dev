/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  T,
  Field,
  Input,
  Textarea,
  SelectInput,
  DynamicList,
  SaveBtn,
  SectionHeader,
  Card,
  CardHeading
} from './ui';

export default function BlogSection({ initialPosts = [] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedId, setSelectedId] = useState(initialPosts[0]?.id || null);
  const [status, setStatus] = useState('idle');

  const selected = posts.find((p) => p.id === selectedId);

  const upd = (key, val) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === selectedId ? { ...p, [key]: val } : p))
    );

  const updNested = (parent, key, val) =>
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === selectedId) {
          const nested = p[parent] || {};
          return { ...p, [parent]: { ...nested, [key]: val } };
        }
        return p;
      })
    );

  const save = async () => {
    if (!selected) return;
    setStatus('saving');
    try {
      const res = await fetch(`/api/content/blog/${selected.id}`, {
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

  const addPost = async () => {
    const id = `post-${Date.now()}`;
    const newPost = {
      id,
      order: posts.length + 1,
      slug: `novo-artigo-${Date.now()}`,
      status: 'draft',
      category: 'Geral',
      publishedAt: new Date().toISOString().split('T')[0],
      author: 'Equipe SoftLuna',
      title: 'Novo Artigo do Blog',
      lead: '',
      content: '',
      recommendedPlanIds: ['landing-page', 'site-institucional'],
      whatsappMessage:
        'Olá! Li o artigo no blog e quero saber mais sobre criação de sites.',
      seo: {
        title: 'Novo Artigo | SoftLuna',
        description: '',
        canonical: `https://softluna.com.br/blog/novo-artigo-${Date.now()}`,
        ogImage: '/og-image.png'
      },
      faqs: []
    };

    try {
      await fetch('/api/content/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      setPosts((prev) => [...prev, newPost]);
      setSelectedId(newPost.id);
    } catch (e) {
      console.error('Error adding blog post:', e);
    }
  };

  const deletePost = async () => {
    if (
      !selected ||
      !confirm(
        `Remover o artigo "${selected.title}"? Essa ação é irreversível.`
      )
    )
      return;

    try {
      await fetch(`/api/content/blog/${selected.id}`, { method: 'DELETE' });
      const remaining = posts.filter((p) => p.id !== selected.id);
      setPosts(remaining);
      setSelectedId(remaining[0]?.id || null);
    } catch (e) {
      console.error('Error deleting blog post:', e);
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <SectionHeader
        emoji="📝"
        title="Gestão de Artigos do Blog"
        subtitle={`${posts.length} artigo${
          posts.length !== 1 ? 's' : ''
        } cadastrado${posts.length !== 1 ? 's' : ''}`}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '20px',
          alignItems: 'start'
        }}
      >
        {/* LEFT: Posts list */}
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
              Artigos
            </span>
          </div>
          <div style={{ padding: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
            {posts.map((post) => {
              const on = selectedId === post.id;
              return (
                <button
                  key={post.id}
                  onClick={() => setSelectedId(post.id)}
                  style={{
                    width: '100%',
                    padding: '11px 12px',
                    borderRadius: '8px',
                    background: on ? T.primaryBg : 'transparent',
                    border: on
                      ? `1px solid ${T.primaryBorder}`
                      : '1px solid transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                    marginBottom: '3px',
                    transition: 'all 0.15s',
                    fontFamily: 'inherit'
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
                      fontSize: '13px',
                      fontWeight: 600,
                      color: on ? T.primary : T.text,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {post.title}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '3px'
                    }}
                  >
                    {post.status === 'published'
                      ? '🟢 Publicado'
                      : '🟡 Rascunho'}{' '}
                    · {post.category}
                  </div>
                </button>
              );
            })}
          </div>
          <div style={{ padding: '6px 10px 12px' }}>
            <button
              onClick={addPost}
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
              + Novo Artigo
            </button>
          </div>
        </div>

        {/* RIGHT: Edit form (sticky) */}
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
                    {selected.title}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '2px',
                      fontFamily: 'monospace'
                    }}
                  >
                    content/blog/{selected.id}.json
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
                    onClick={deletePost}
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
                <Card>
                  <CardHeading letter="G" label="Geral" />
                  <Field label="Título do Artigo">
                    <Input
                      value={selected.title || ''}
                      onChange={(e) => upd('title', e.target.value)}
                      placeholder="Ex: Quanto custa um site profissional?"
                    />
                  </Field>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px'
                    }}
                  >
                    <Field label="Slug (URL)">
                      <Input
                        value={selected.slug || ''}
                        onChange={(e) => upd('slug', e.target.value)}
                        placeholder="quanto-custa-site-profissional"
                      />
                    </Field>
                    <Field label="Status">
                      <SelectInput
                        value={selected.status || 'draft'}
                        onChange={(e) => upd('status', e.target.value)}
                        options={[
                          { value: 'published', label: '🟢 Publicado' },
                          { value: 'draft', label: '🟡 Rascunho' }
                        ]}
                      />
                    </Field>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px'
                    }}
                  >
                    <Field label="Categoria">
                      <Input
                        value={selected.category || ''}
                        onChange={(e) => upd('category', e.target.value)}
                        placeholder="Custos, Otimização..."
                      />
                    </Field>
                    <Field label="Autor">
                      <Input
                        value={selected.author || ''}
                        onChange={(e) => upd('author', e.target.value)}
                        placeholder="Equipe SoftLuna"
                      />
                    </Field>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px'
                    }}
                  >
                    <Field label="Data de Publicação">
                      <Input
                        type="date"
                        value={selected.publishedAt || ''}
                        onChange={(e) => upd('publishedAt', e.target.value)}
                      />
                    </Field>
                    <Field label="Ordem de Exibição">
                      <Input
                        type="number"
                        value={selected.order ?? ''}
                        onChange={(e) => upd('order', Number(e.target.value))}
                        placeholder="1"
                      />
                    </Field>
                  </div>
                  <Field label="Mensagem de Lead no WhatsApp">
                    <Input
                      value={selected.whatsappMessage || ''}
                      onChange={(e) => upd('whatsappMessage', e.target.value)}
                      placeholder="Olá! Li o artigo no blog..."
                    />
                  </Field>
                  <Field label="Planos Recomendados (IDs)">
                    <DynamicList
                      items={selected.recommendedPlanIds || []}
                      onChange={(v) => upd('recommendedPlanIds', v)}
                      placeholder="landing-page, site-institucional"
                    />
                  </Field>
                </Card>

                <Card>
                  <CardHeading letter="C" label="Conteúdo & Copy" />
                  <Field label="Introdução / Lead">
                    <Textarea
                      value={selected.lead || ''}
                      onChange={(e) => upd('lead', e.target.value)}
                      placeholder="Resumo do artigo..."
                      rows={3}
                    />
                  </Field>
                  <Field label="Corpo do Artigo (Markdown)">
                    <Textarea
                      value={selected.content || ''}
                      onChange={(e) => upd('content', e.target.value)}
                      placeholder="Escreva seu artigo aqui em formato Markdown..."
                      rows={16}
                      style={{ fontFamily: 'monospace', fontSize: '13px' }}
                    />
                  </Field>
                </Card>

                <Card>
                  <CardHeading letter="S" label="SEO & Metadados" />
                  <Field label="Meta Title">
                    <Input
                      value={selected.seo?.title || ''}
                      onChange={(e) =>
                        updNested('seo', 'title', e.target.value)
                      }
                      placeholder="Título SEO"
                    />
                  </Field>
                  <Field label="Meta Description">
                    <Textarea
                      value={selected.seo?.description || ''}
                      onChange={(e) =>
                        updNested('seo', 'description', e.target.value)
                      }
                      placeholder="Descrição curta para o Google"
                      rows={3}
                    />
                  </Field>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px'
                    }}
                  >
                    <Field label="Canonical URL">
                      <Input
                        value={selected.seo?.canonical || ''}
                        onChange={(e) =>
                          updNested('seo', 'canonical', e.target.value)
                        }
                        placeholder="https://softluna.com.br/blog/..."
                      />
                    </Field>
                    <Field label="OG Image Path">
                      <Input
                        value={selected.seo?.ogImage || ''}
                        onChange={(e) =>
                          updNested('seo', 'ogImage', e.target.value)
                        }
                        placeholder="/og-image.png"
                      />
                    </Field>
                  </div>
                </Card>

                <details style={{ marginTop: '18px' }}>
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontSize: '11px',
                      color: T.textMuted,
                      outline: 'none'
                    }}
                  >
                    🔍 JSON Preview
                  </summary>
                  <pre
                    style={{
                      marginTop: '8px',
                      fontSize: '10.5px',
                      color: T.textSub,
                      background: 'rgba(0,0,0,0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      overflow: 'auto',
                      maxHeight: '160px',
                      border: `1px solid ${T.border}`
                    }}
                  >
                    {JSON.stringify(selected, null, 2)}
                  </pre>
                </details>
              </div>
            </>
          ) : (
            <div style={{ padding: '70px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>📝</div>
              <p style={{ fontSize: '13px', color: T.textMuted }}>
                Selecione um artigo para editar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
