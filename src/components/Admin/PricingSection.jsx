/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  T,
  Field,
  Input,
  Textarea,
  CurrencyInput,
  Toggle,
  DynamicList,
  SaveBtn,
  SectionHeader,
  fmtCurrency
} from './ui';

export default function PricingSection({ initialTiers = [] }) {
  const [tiers, setTiers] = useState(initialTiers);
  const [selectedId, setSelectedId] = useState(initialTiers[0]?.id || null);
  const [status, setStatus] = useState('idle');

  const selected = tiers.find((t) => t.id === selectedId);

  const upd = (key, val) =>
    setTiers((ts) =>
      ts.map((t) => (t.id === selectedId ? { ...t, [key]: val } : t))
    );

  const save = async () => {
    if (!selected) return;
    setStatus('saving');
    try {
      const res = await fetch(`/api/content/pricing/${selected.id}`, {
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

  const addTier = async () => {
    const newTier = {
      id: `plano-${Date.now()}`,
      order: tiers.length + 1,
      title: 'Novo Plano',
      description: '',
      setupPrice: 0,
      maintenancePrice: 0,
      highlighted: false,
      active: true,
      badge: null,
      features: [''],
      maintenanceNote:
        'Inclui hospedagem edge e atualizações de segurança automáticas.'
    };
    try {
      await fetch('/api/content/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTier)
      });
      setTiers((ts) => [...ts, newTier]);
      setSelectedId(newTier.id);
    } catch (e) {
      console.error('Error adding pricing tier:', e);
    }
  };

  const deleteTier = async () => {
    if (
      !selected ||
      !confirm(`Remover o plano "${selected.title}"? Essa ação é irreversível.`)
    )
      return;
    try {
      await fetch(`/api/content/pricing/${selected.id}`, { method: 'DELETE' });
      const remaining = tiers.filter((t) => t.id !== selected.id);
      setTiers(remaining);
      setSelectedId(remaining[0]?.id || null);
    } catch (e) {
      console.error('Error deleting pricing tier:', e);
    }
  };

  return (
    <div style={{ padding: '32px' }}>
      <SectionHeader
        emoji="💰"
        title="Gestão de Preços"
        subtitle={`${tiers.length} plano${
          tiers.length !== 1 ? 's' : ''
        } cadastrado${tiers.length !== 1 ? 's' : ''}`}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '20px',
          alignItems: 'start'
        }}
      >
        {/* LEFT: Plans list */}
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
              Planos
            </span>
          </div>
          <div style={{ padding: '8px' }}>
            {tiers.map((tier) => {
              const on = selectedId === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedId(tier.id)}
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
                    if (!on)
                      e.currentTarget.style.background = on
                        ? T.primaryBg
                        : 'transparent';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: on ? T.primary : T.text
                      }}
                    >
                      {tier.title}
                    </span>
                    {tier.highlighted && (
                      <span style={{ fontSize: '11px', color: T.primary }}>
                        ★
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: T.textMuted,
                      marginTop: '3px'
                    }}
                  >
                    R$ {fmtCurrency(tier.setupPrice)} · R${' '}
                    {fmtCurrency(tier.maintenancePrice)}/mês
                  </div>
                </button>
              );
            })}
          </div>
          <div style={{ padding: '6px 10px 12px' }}>
            <button
              onClick={addTier}
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
              + Novo Plano
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
                    {selected.id}.json
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}
                >
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      cursor: 'pointer'
                    }}
                  >
                    <Toggle
                      checked={!!selected.highlighted}
                      onChange={(v) => upd('highlighted', v)}
                    />
                    <span style={{ fontSize: '12px', color: T.textSub }}>
                      Destaque
                    </span>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      cursor: 'pointer'
                    }}
                  >
                    <Toggle
                      checked={selected.active !== false}
                      onChange={(v) => upd('active', v)}
                    />
                    <span style={{ fontSize: '12px', color: T.textSub }}>
                      Exibir no Site
                    </span>
                  </label>
                  <SaveBtn status={status} onClick={save} />
                  <button
                    onClick={deleteTier}
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
                <Field label="Título do Plano">
                  <Input
                    value={selected.title || ''}
                    onChange={(e) => upd('title', e.target.value)}
                    placeholder="Ex: Landing Page de Alta Conversão"
                  />
                </Field>
                <Field label="Descrição / Público-alvo">
                  <Textarea
                    value={selected.description || ''}
                    onChange={(e) => upd('description', e.target.value)}
                    placeholder="Ideal para empresas que querem..."
                  />
                </Field>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px'
                  }}
                >
                  <Field label="Setup (R$)">
                    <CurrencyInput
                      value={selected.setupPrice ?? ''}
                      onChange={(e) =>
                        upd('setupPrice', Number(e.target.value))
                      }
                      placeholder="950"
                    />
                  </Field>
                  <Field label="Manutenção / mês (R$)">
                    <CurrencyInput
                      value={selected.maintenancePrice ?? ''}
                      onChange={(e) =>
                        upd('maintenancePrice', Number(e.target.value))
                      }
                      placeholder="79"
                    />
                  </Field>
                </div>
                <Field
                  label="Ordem de Exibição"
                  hint="(números menores aparecem primeiro)"
                >
                  <Input
                    type="number"
                    value={selected.order ?? ''}
                    onChange={(e) => upd('order', Number(e.target.value))}
                    placeholder="1"
                    style={{ maxWidth: '120px' }}
                  />
                </Field>
                <Field label="Badge" hint="(opcional — ex: Mais Popular)">
                  <Input
                    value={selected.badge || ''}
                    onChange={(e) => upd('badge', e.target.value || null)}
                    placeholder="Mais Popular"
                    style={{ maxWidth: '240px' }}
                  />
                </Field>
                <Field label="Funcionalidades Incluídas">
                  <DynamicList
                    items={selected.features || []}
                    onChange={(v) => upd('features', v)}
                    placeholder="Ex: Design exclusivo e focado em conversão"
                  />
                </Field>
                <Field label="Nota de Manutenção" style={{ marginBottom: 0 }}>
                  <Textarea
                    value={selected.maintenanceNote || ''}
                    onChange={(e) => upd('maintenanceNote', e.target.value)}
                    placeholder="Inclui hospedagem edge..."
                  />
                </Field>

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
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>💰</div>
              <p style={{ fontSize: '13px', color: T.textMuted }}>
                Selecione um plano para editar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
