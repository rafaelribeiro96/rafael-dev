/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { T, Field, Input, Textarea, SaveBtn, SectionHeader } from './ui';

export default function FAQSection({ initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(initialItems[0]?.id || null);
  const [status, setStatus] = useState('idle');

  const selected = items.find((i) => i.id === selectedId);

  const upd = (key, val) =>
    setItems((prev) =>
      prev.map((i) => (i.id === selectedId ? { ...i, [key]: val } : i))
    );

  const save = async () => {
    if (!selected) return;
    setStatus('saving');
    try {
      const res = await fetch(`/api/content/faq/${selected.id}`, {
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
      id: `faq-${Date.now()}`,
      order: items.length + 1,
      question: 'Nova Pergunta',
      answer: ''
    };
    try {
      await fetch('/api/content/faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      setItems((prev) => [...prev, newItem]);
      setSelectedId(newItem.id);
    } catch (e) {
      console.error('Error adding FAQ item:', e);
    }
  };

  const deleteItem = async () => {
    if (
      !selected ||
      !confirm(
        `Remover a pergunta "${selected.question}"? Essa ação é irreversível.`
      )
    )
      return;
    try {
      await fetch(`/api/content/faq/${selected.id}`, { method: 'DELETE' });
      const remaining = items.filter((i) => i.id !== selected.id);
      setItems(remaining);
      setSelectedId(remaining[0]?.id || null);
    } catch (e) {
      console.error('Error deleting FAQ item:', e);
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <SectionHeader
        emoji="🙋"
        title="Gestão de FAQs"
        subtitle={`${items.length} pergunta${
          items.length !== 1 ? 's' : ''
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
        {/* LEFT: FAQ list */}
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
              Perguntas
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
                    {item.question}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '3px'
                    }}
                  >
                    Ordem: {item.order ?? 99}
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
              + Nova Pergunta
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
                    Editar Pergunta
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
                <Field label="Pergunta">
                  <Input
                    value={selected.question || ''}
                    onChange={(e) => upd('question', e.target.value)}
                    placeholder="Ex: Qual o prazo de entrega?"
                  />
                </Field>
                <Field
                  label="Resposta"
                  hint="(Valores com casas decimais, ex: R$ 749,00)"
                >
                  <Textarea
                    value={selected.answer || ''}
                    onChange={(e) => upd('answer', e.target.value)}
                    placeholder="Ex: O valor é R$ 749,00..."
                    rows={8}
                  />
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
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🙋</div>
              <p style={{ fontSize: '13px', color: T.textMuted }}>
                Selecione uma pergunta para editar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
