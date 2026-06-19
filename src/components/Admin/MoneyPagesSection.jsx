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

export default function MoneyPagesSection({ initialPages = [] }) {
  const [pages, setPages] = useState(initialPages);
  const [selectedId, setSelectedId] = useState(initialPages[0]?.id || null);
  const [status, setStatus] = useState('idle');

  const selected = pages.find((p) => p.id === selectedId);

  const upd = (key, val) =>
    setPages((prev) =>
      prev.map((p) => (p.id === selectedId ? { ...p, [key]: val } : p))
    );

  const updNested = (parent, key, val) =>
    setPages((prev) =>
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
      const res = await fetch(`/api/content/money-pages/${selected.id}`, {
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

  const addPage = async () => {
    const id = `money-${Date.now()}`;
    const newPage = {
      id,
      order: pages.length + 1,
      slug: `nova-money-page-${Date.now()}`,
      status: 'draft',
      category: 'Serviços Profissionais',
      primaryKeyword: 'site para advogados',
      secondaryKeywords: ['criação de site', 'site profissional'],
      seo: {
        title: 'Criação de Site Profissional | SoftLuna',
        description: '',
        canonical: `https://softluna.com.br/nova-money-page-${Date.now()}`,
        ogImage: '/og-image.png'
      },
      hero: {
        eyebrow: 'SoftLuna Soluções',
        h1: 'Criação de Site sob medida',
        lead: '',
        primaryCta: 'Falar com Especialista',
        secondaryCta: 'Ver Planos',
        whatsappMessage: 'Olá! Quero saber mais sobre a criação de sites.'
      },
      painPoints: [],
      solution: {
        title: 'Sua presença digital com foco em resultados',
        description:
          'Desenvolvemos uma estrutura completa para captar clientes...',
        items: []
      },
      benefits: [],
      process: [],
      recommendedPlanIds: [
        'landing-page',
        'site-institucional',
        'projetos-personalizados'
      ],
      portfolioIds: [],
      faqs: [],
      internalLinks: []
    };

    try {
      await fetch('/api/content/money-pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPage)
      });
      setPages((prev) => [...prev, newPage]);
      setSelectedId(newPage.id);
    } catch (e) {
      console.error('Error adding money page:', e);
    }
  };

  const deletePage = async () => {
    if (
      !selected ||
      !confirm(
        `Remover a página "${
          selected.seo?.title || selected.id
        }"? Essa ação é irreversível.`
      )
    )
      return;

    try {
      await fetch(`/api/content/money-pages/${selected.id}`, {
        method: 'DELETE'
      });
      const remaining = pages.filter((p) => p.id !== selected.id);
      setPages(remaining);
      setSelectedId(remaining[0]?.id || null);
    } catch (e) {
      console.error('Error deleting money page:', e);
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <SectionHeader
        emoji="🚀"
        title="Gestão de Páginas Transacionais (Money Pages)"
        subtitle={`${pages.length} página${
          pages.length !== 1 ? 's' : ''
        } cadastrada${pages.length !== 1 ? 's' : ''}`}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '20px',
          alignItems: 'start'
        }}
      >
        {/* LEFT: Pages list */}
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
              Money Pages
            </span>
          </div>
          <div style={{ padding: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
            {pages.map((p) => {
              const on = selectedId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
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
                    {p.slug}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '3px'
                    }}
                  >
                    {p.category}
                  </div>
                </button>
              );
            })}
          </div>
          <div style={{ padding: '6px 10px 12px' }}>
            <button
              onClick={addPage}
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
              + Nova Money Page
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
                    {selected.slug}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '2px',
                      fontFamily: 'monospace'
                    }}
                  >
                    content/money-pages/{selected.id}.json
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
                    onClick={deletePage}
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
                        placeholder="site-para-advogados"
                      />
                    </Field>
                    <Field label="Status">
                      <SelectInput
                        value={selected.status || 'draft'}
                        onChange={(e) => upd('status', e.target.value)}
                        options={[
                          { value: 'pilot', label: '🔵 Piloto' },
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
                        placeholder="Saúde e bem-estar, Serviços Profissionais..."
                      />
                    </Field>
                    <Field label="Ordem">
                      <Input
                        type="number"
                        value={selected.order ?? ''}
                        onChange={(e) => upd('order', Number(e.target.value))}
                        placeholder="1"
                      />
                    </Field>
                  </div>
                  <Field label="Palavra-chave Primária">
                    <Input
                      value={selected.primaryKeyword || ''}
                      onChange={(e) => upd('primaryKeyword', e.target.value)}
                      placeholder="site para advogados"
                    />
                  </Field>
                  <Field label="Palavras-chave Secundárias">
                    <DynamicList
                      items={selected.secondaryKeywords || []}
                      onChange={(v) => upd('secondaryKeywords', v)}
                      placeholder="site advocacia"
                    />
                  </Field>
                </Card>

                <Card>
                  <CardHeading letter="H" label="Dobra Principal (Hero)" />
                  <Field label="Eyebrow (Texto acima do H1)">
                    <Input
                      value={selected.hero?.eyebrow || ''}
                      onChange={(e) =>
                        updNested('hero', 'eyebrow', e.target.value)
                      }
                      placeholder="Especialistas em Advocacia"
                    />
                  </Field>
                  <Field label="Título H1">
                    <Input
                      value={selected.hero?.h1 || ''}
                      onChange={(e) => updNested('hero', 'h1', e.target.value)}
                      placeholder="Site profissional para advogados..."
                    />
                  </Field>
                  <Field label="Texto de Apoio (Lead)">
                    <Textarea
                      value={selected.hero?.lead || ''}
                      onChange={(e) =>
                        updNested('hero', 'lead', e.target.value)
                      }
                      placeholder="Apresente sua especialidade e capture clientes..."
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
                    <Field label="CTA Principal">
                      <Input
                        value={selected.hero?.primaryCta || ''}
                        onChange={(e) =>
                          updNested('hero', 'primaryCta', e.target.value)
                        }
                        placeholder="Falar com Especialista"
                      />
                    </Field>
                    <Field label="CTA Secundário">
                      <Input
                        value={selected.hero?.secondaryCta || ''}
                        onChange={(e) =>
                          updNested('hero', 'secondaryCta', e.target.value)
                        }
                        placeholder="Ver Planos"
                      />
                    </Field>
                  </div>
                  <Field label="Mensagem de WhatsApp">
                    <Input
                      value={selected.hero?.whatsappMessage || ''}
                      onChange={(e) =>
                        updNested('hero', 'whatsappMessage', e.target.value)
                      }
                      placeholder="Olá! Quero criar um site de advocacia..."
                    />
                  </Field>
                </Card>

                <Card>
                  <CardHeading letter="P" label="Dores & Solução" />
                  <Field label="Pontos de Dor (Pain Points)">
                    <DynamicList
                      items={selected.painPoints || []}
                      onChange={(v) => upd('painPoints', v)}
                      placeholder="O site atual é lento e perde visitantes..."
                    />
                  </Field>
                  <Field label="Título da Seção de Solução">
                    <Input
                      value={selected.solution?.title || ''}
                      onChange={(e) =>
                        updNested('solution', 'title', e.target.value)
                      }
                      placeholder="Apresentação institucional completa"
                    />
                  </Field>
                  <Field label="Descrição da Solução">
                    <Textarea
                      value={selected.solution?.description || ''}
                      onChange={(e) =>
                        updNested('solution', 'description', e.target.value)
                      }
                      placeholder="O projeto combina..."
                      rows={3}
                    />
                  </Field>
                  <Field label="Itens de Solução">
                    <DynamicList
                      items={selected.solution?.items || []}
                      onChange={(v) => updNested('solution', 'items', v)}
                      placeholder="Integração de agendamento online..."
                    />
                  </Field>
                </Card>

                <Card>
                  <CardHeading
                    letter="C"
                    label="Planos & Portfólio Recomendados"
                  />
                  <Field label="Planos Recomendados (IDs)">
                    <DynamicList
                      items={selected.recommendedPlanIds || []}
                      onChange={(v) => upd('recommendedPlanIds', v)}
                      placeholder="landing-page, site-institucional"
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
                      placeholder="Descrição para buscadores"
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
                        placeholder="https://softluna.com.br/..."
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
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🚀</div>
              <p style={{ fontSize: '13px', color: T.textMuted }}>
                Selecione uma money page para editar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
