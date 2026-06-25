/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  T,
  Field,
  Input,
  Textarea,
  Card,
  CardHeading,
  SectionHeader,
  SaveBtn
} from './ui';

export default function GlobalSEOSection({ initialData }) {
  const [data, setData] = useState(initialData || { hero: {}, seo: {} });
  const [status, setStatus] = useState('idle');

  const h = (key) => (val) =>
    setData((d) => ({ ...d, hero: { ...d.hero, [key]: val } }));
  const s = (key) => (val) =>
    setData((d) => ({ ...d, seo: { ...d.seo, [key]: val } }));

  const save = async () => {
    setStatus('saving');
    try {
      const res = await fetch('/api/content/global', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Save failed');
      setStatus('saved');
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 2500);
  };

  const titleLen = (data.seo?.metaTitle || '').length;
  const titleColor =
    titleLen > 60 ? T.red : titleLen > 52 ? T.amber : T.textMuted;

  return (
    <div style={{ padding: '32px', maxWidth: '840px' }}>
      <SectionHeader
        emoji="📑"
        title="Textos Globais & SEO"
        subtitle="Gerencie o copy principal e os metadados da página."
        actions={
          <SaveBtn status={status} onClick={save} label="Salvar Alterações" />
        }
      />

      {/* Hero */}
      <Card>
        <CardHeading letter="H" label="Seção Hero" />
        <Field label="Headline Principal">
          <Input
            value={data.hero?.headline || ''}
            onChange={(e) => h('headline')(e.target.value)}
            placeholder="Sites que vendem. Presença que domina."
          />
        </Field>
        <Field label="Subtítulo" hint="(1-2 frases de suporte)">
          <Textarea
            value={data.hero?.subheadline || ''}
            onChange={(e) => h('subheadline')(e.target.value)}
            placeholder="Desenvolvemos sites profissionais e landing pages..."
            maxLength={220}
          />
        </Field>
        <Field label="Texto do Botão CTA" style={{ marginBottom: 0 }}>
          <Input
            value={data.hero?.ctaText || ''}
            onChange={(e) => h('ctaText')(e.target.value)}
            placeholder="Quero meu site agora"
            style={{ maxWidth: '280px' }}
          />
        </Field>
      </Card>

      {/* SEO */}
      <Card>
        <CardHeading letter="S" label="SEO & Metadados" />
        <Field label="Meta Title">
          <Input
            value={data.seo?.metaTitle || ''}
            onChange={(e) => s('metaTitle')(e.target.value)}
            placeholder="SoftLuna | Sites Profissionais..."
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '4px',
              fontSize: '11px',
              color: titleColor
            }}
          >
            {titleLen}/60 chars{' '}
            {titleLen > 60
              ? '⚠ muito longo'
              : titleLen > 52
              ? '· próximo do limite'
              : '· ideal'}
          </div>
        </Field>
        <Field label="Meta Description" hint="(recomendado: 150–160 chars)">
          <Textarea
            value={data.seo?.metaDescription || ''}
            onChange={(e) => s('metaDescription')(e.target.value)}
            placeholder="SoftLuna cria sites profissionais..."
            maxLength={160}
          />
        </Field>
        <Field
          label="Google Site Verification"
          hint="Código de verificação do Google Search Console (ex: google-site-verification=...)"
        >
          <Input
            value={data.seo?.googleSiteVerification || ''}
            onChange={(e) => s('googleSiteVerification')(e.target.value)}
            placeholder="H9uwBwmBFHdkbyx45FxIUFfIuZYFYajpHX56naP05y0"
          />
        </Field>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}
        >
          <Field label="Nome da Empresa" style={{ marginBottom: 0 }}>
            <Input
              value={data.seo?.businessName || ''}
              onChange={(e) => s('businessName')(e.target.value)}
            />
          </Field>
          <Field label="Cidade" style={{ marginBottom: 0 }}>
            <Input
              value={data.seo?.businessCity || ''}
              onChange={(e) => s('businessCity')(e.target.value)}
            />
          </Field>
          <Field label="Estado (UF)" style={{ marginBottom: 0 }}>
            <Input
              value={data.seo?.businessState || ''}
              onChange={(e) => s('businessState')(e.target.value)}
              placeholder="MG"
            />
          </Field>
          <Field label="Telefone / WhatsApp" style={{ marginBottom: 0 }}>
            <Input
              value={data.seo?.businessPhone || ''}
              onChange={(e) => s('businessPhone')(e.target.value)}
              placeholder="+55 31 99186-9943"
            />
          </Field>
        </div>
      </Card>

      {/* JSON preview */}
      <details>
        <summary
          style={{
            cursor: 'pointer',
            fontSize: '12px',
            color: T.textMuted,
            userSelect: 'none',
            outline: 'none',
            padding: '4px 0'
          }}
        >
          🔍 Visualizar JSON gerado
        </summary>
        <pre
          style={{
            marginTop: '10px',
            fontSize: '11px',
            lineHeight: 1.6,
            color: T.textSub,
            background: 'rgba(0,0,0,0.35)',
            border: `1px solid ${T.border}`,
            borderRadius: '10px',
            padding: '14px',
            overflow: 'auto',
            maxHeight: '220px'
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>
    </div>
  );
}
