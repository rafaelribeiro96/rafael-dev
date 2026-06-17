/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — Dark Studio Palette
// ─────────────────────────────────────────────────────────────────────────────
export const T = {
  bg: '#09101f',
  sidebar: '#060c18',
  card: '#0f1828',
  cardHover: '#141e30',
  border: 'rgba(255,255,255,0.07)',
  borderStrong: 'rgba(255,255,255,0.13)',
  inputBg: 'rgba(255,255,255,0.04)',
  inputBgFocus: 'rgba(255,255,255,0.06)',
  primary: '#06b6d4',
  primaryBg: 'rgba(6,182,212,0.1)',
  primaryBorder: 'rgba(6,182,212,0.28)',
  text: '#e2e8f0',
  textSub: '#94a3b8',
  textMuted: '#4b5563',
  green: '#10b981',
  greenBg: 'rgba(16,185,129,0.1)',
  greenBorder: 'rgba(16,185,129,0.25)',
  red: '#ef4444',
  redBg: 'rgba(239,68,68,0.1)',
  redBorder: 'rgba(239,68,68,0.25)',
  amber: '#f59e0b'
};

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
export function slugify(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function fmtCurrency(val) {
  return Number(val || 0).toLocaleString('pt-BR');
}

// ─────────────────────────────────────────────────────────────────────────────
// BASE STYLES
// ─────────────────────────────────────────────────────────────────────────────
const inputBase = {
  background: T.inputBg,
  border: `1px solid ${T.border}`,
  borderRadius: '8px',
  color: T.text,
  outline: 'none',
  width: '100%',
  padding: '9px 12px',
  fontSize: '13.5px',
  fontFamily: 'inherit',
  transition: 'border-color 0.15s, box-shadow 0.15s, background 0.15s',
  boxSizing: 'border-box'
};

// ─────────────────────────────────────────────────────────────────────────────
// UI PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────
export function Field({ label, hint, error, children, style }) {
  return (
    <div style={{ marginBottom: '18px', ...style }}>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '7px'
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: T.textSub,
            letterSpacing: '0.07em',
            textTransform: 'uppercase'
          }}
        >
          {label}
        </span>
        {hint && (
          <span
            style={{
              fontSize: '11px',
              color: T.textMuted,
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: 'normal'
            }}
          >
            {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          style={{
            fontSize: '11.5px',
            color: T.red,
            marginTop: '5px',
            marginBottom: 0
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({ style, onFocus, onBlur, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={(e) => {
        setFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        onBlur?.(e);
      }}
      style={{
        ...inputBase,
        borderColor: focused ? T.primary : T.border,
        background: focused ? T.inputBgFocus : T.inputBg,
        boxShadow: focused ? `0 0 0 3px ${T.primaryBg}` : 'none',
        ...style
      }}
    />
  );
}

export function Textarea({
  maxLength,
  onFocus,
  onBlur,
  value,
  style,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const len = (value || '').length;
  const near = maxLength && len > maxLength * 0.88;

  return (
    <div>
      <textarea
        value={value}
        maxLength={maxLength}
        rows={3}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        style={{
          ...inputBase,
          resize: 'vertical',
          borderColor: focused ? T.primary : T.border,
          background: focused ? T.inputBgFocus : T.inputBg,
          boxShadow: focused ? `0 0 0 3px ${T.primaryBg}` : 'none',
          ...style
        }}
      />
      {maxLength && (
        <div
          style={{
            textAlign: 'right',
            fontSize: '11px',
            marginTop: '4px',
            color: near ? T.amber : T.textMuted
          }}
        >
          {len}/{maxLength}
        </div>
      )}
    </div>
  );
}

export function CurrencyInput({ value, onChange, placeholder }) {
  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          left: '11px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '12px',
          fontWeight: 800,
          color: T.primary,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        R$
      </span>
      <Input
        type="number"
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        style={{ paddingLeft: '32px' }}
      />
    </div>
  );
}

export function SelectInput({ value, onChange, options, placeholder, style }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        cursor: 'pointer',
        appearance: 'none',
        borderColor: focused ? T.primary : T.border,
        boxShadow: focused ? `0 0 0 3px ${T.primaryBg}` : 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center',
        paddingRight: '28px',
        ...style
      }}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => {
        const v = opt.value ?? opt;
        const l = opt.label ?? opt;
        return (
          <option key={v} value={v} style={{ background: T.card }}>
            {l}
          </option>
        );
      })}
    </select>
  );
}

export function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      style={{
        width: '38px',
        height: '21px',
        borderRadius: '999px',
        background: checked ? T.primary : 'rgba(255,255,255,0.1)',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background 0.2s',
        flexShrink: 0,
        padding: 0
      }}
      aria-checked={checked}
      role="switch"
    >
      <span
        style={{
          position: 'absolute',
          top: '2.5px',
          left: checked ? '19px' : '2.5px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s cubic-bezier(.4,0,.2,1)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.35)'
        }}
      />
    </button>
  );
}

export function DynamicList({ items, onChange, placeholder }) {
  const add = () => onChange([...items, '']);
  const upd = (i, v) => {
    const n = [...items];
    n[i] = v;
    onChange(n);
  };
  const rem = (i) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '8px'
          }}
        >
          <span
            style={{
              fontSize: '13px',
              color: T.textMuted,
              userSelect: 'none',
              cursor: 'default'
            }}
          >
            ⠿
          </span>
          <div style={{ flex: 1 }}>
            <Input
              value={item}
              onChange={(e) => upd(i, e.target.value)}
              placeholder={placeholder || 'Item...'}
            />
          </div>
          <button
            onClick={() => rem(i)}
            style={{
              width: '29px',
              height: '29px',
              borderRadius: '7px',
              background: 'transparent',
              border: `1px solid ${T.border}`,
              color: T.textMuted,
              cursor: 'pointer',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = T.redBg;
              e.currentTarget.style.color = T.red;
              e.currentTarget.style.borderColor = T.redBorder;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = T.textMuted;
              e.currentTarget.style.borderColor = T.border;
            }}
          >
            ×
          </button>
        </div>
      ))}
      <button
        onClick={add}
        type="button"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          background: 'none',
          border: 'none',
          color: T.textMuted,
          cursor: 'pointer',
          fontSize: '12.5px',
          padding: '3px 0',
          transition: 'color 0.15s',
          fontFamily: 'inherit'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = T.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = T.textMuted;
        }}
      >
        <span
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '5px',
            border: `1.5px dashed ${T.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px'
          }}
        >
          +
        </span>
        Adicionar item
      </button>
    </div>
  );
}

export function SaveBtn({ status, onClick, label = 'Salvar' }) {
  const cfgs = {
    idle: {
      text: label,
      bg: T.primaryBg,
      border: T.primaryBorder,
      color: T.primary
    },
    saving: {
      text: 'Salvando...',
      bg: 'rgba(255,255,255,0.04)',
      border: T.border,
      color: T.textMuted
    },
    saved: {
      text: '✓ Salvo!',
      bg: T.greenBg,
      border: T.greenBorder,
      color: T.green
    },
    error: { text: '✗ Erro', bg: T.redBg, border: T.redBorder, color: T.red }
  };
  const { text, bg, border, color } = cfgs[status] || cfgs.idle;
  return (
    <button
      onClick={onClick}
      disabled={status === 'saving'}
      style={{
        padding: '8px 18px',
        fontSize: '13px',
        fontWeight: 600,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: '8px',
        color,
        cursor: status === 'saving' ? 'wait' : 'pointer',
        transition: 'all 0.2s',
        fontFamily: 'inherit',
        whiteSpace: 'nowrap'
      }}
    >
      {text}
    </button>
  );
}

export function Card({ children, style }) {
  return (
    <div
      style={{
        background: T.card,
        border: `1px solid ${T.border}`,
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '16px',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export function CardHeading({ letter, label }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        marginBottom: '20px'
      }}
    >
      <div
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '5px',
          background: T.primaryBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span style={{ fontSize: '10px', color: T.primary, fontWeight: 800 }}>
          {letter}
        </span>
      </div>
      <span style={{ fontSize: '13px', fontWeight: 600, color: T.textSub }}>
        {label}
      </span>
    </div>
  );
}

export function SectionHeader({ emoji, title, subtitle, actions }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '28px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '11px',
            background: T.primaryBg,
            border: `1px solid ${T.primaryBorder}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}
        >
          {emoji}
        </div>
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '19px',
              fontWeight: 700,
              color: T.text
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              style={{
                margin: '3px 0 0',
                fontSize: '12.5px',
                color: T.textMuted
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {actions && (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {actions}
        </div>
      )}
    </div>
  );
}
