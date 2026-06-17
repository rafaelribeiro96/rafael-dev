/* eslint-disable react/prop-types */
import React from 'react';
import { T } from './ui';

const NAV = [
  {
    id: 'seo',
    label: 'Textos & SEO',
    icon: '📑',
    sub: 'Hero, copy e metadados'
  },
  {
    id: 'pricing',
    label: 'Gestão de Preços',
    icon: '💰',
    sub: 'Planos e valores'
  },
  { id: 'portfolio', label: 'Portfólio', icon: '💼', sub: 'Projetos e cases' }
];

export default function Sidebar({ active, onSelect, pubStatus, onPublish }) {
  const btnPublish = {
    idle: {
      text: '🚀  Publicar Alterações',
      style: {
        background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
        color: '#fff',
        border: 'none',
        boxShadow: '0 4px 16px rgba(6,182,212,0.22)'
      }
    },
    publishing: {
      text: 'Publicando...',
      style: {
        background: 'rgba(255,255,255,0.05)',
        color: T.textMuted,
        border: `1px solid ${T.border}`
      }
    },
    published: {
      text: '✓  Publicado com sucesso!',
      style: {
        background: T.greenBg,
        color: T.green,
        border: `1px solid ${T.greenBorder}`
      }
    },
    error: {
      text: '✗  Erro ao publicar',
      style: {
        background: T.redBg,
        color: T.red,
        border: `1px solid ${T.redBorder}`
      }
    }
  };
  const pb = btnPublish[pubStatus] || btnPublish.idle;

  return (
    <aside
      style={{
        width: '258px',
        minWidth: '258px',
        height: '100%',
        background: T.sidebar,
        borderRight: `1px solid ${T.border}`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Brand */}
      <div
        style={{
          padding: '20px 18px 16px',
          borderBottom: `1px solid ${T.border}`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
          <div
            style={{
              width: '37px',
              height: '37px',
              borderRadius: '10px',
              flexShrink: 0,
              background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(6,182,212,0.35)'
            }}
          >
            <span
              style={{
                color: '#fff',
                fontWeight: 900,
                fontSize: '17px',
                fontStyle: 'italic'
              }}
            >
              R
            </span>
          </div>
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: T.text,
                letterSpacing: '-0.01em'
              }}
            >
              Rafael Tech
            </div>
            <div
              style={{ fontSize: '11px', color: T.textMuted, marginTop: '1px' }}
            >
              Admin Panel · v1.0
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
        <div
          style={{
            fontSize: '10px',
            fontWeight: 700,
            color: T.textMuted,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            padding: '0 8px 10px'
          }}
        >
          Conteúdo
        </div>
        {NAV.map((item) => {
          const on = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '11px',
                padding: '9px 10px',
                borderRadius: '9px',
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
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                if (!on) e.currentTarget.style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: '17px', lineHeight: 1 }}>
                {item.icon}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: on ? T.primary : T.textSub
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: T.textMuted,
                    marginTop: '1px'
                  }}
                >
                  {item.sub}
                </div>
              </div>
              {on && (
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: T.primary,
                    flexShrink: 0
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer: Publish + User */}
      <div
        style={{
          padding: '12px 12px 16px',
          borderTop: `1px solid ${T.border}`
        }}
      >
        <button
          onClick={onPublish}
          disabled={pubStatus === 'publishing'}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '10px',
            cursor: pubStatus === 'publishing' ? 'wait' : 'pointer',
            fontFamily: 'inherit',
            fontSize: '12.5px',
            fontWeight: 700,
            marginBottom: '14px',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            ...pb.style
          }}
        >
          {pb.text}
        </button>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            padding: '0 2px'
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              flexShrink: 0,
              background: 'rgba(255,255,255,0.06)',
              border: `1px solid ${T.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              color: T.textSub
            }}
          >
            G
          </div>
          <div style={{ minWidth: 0 }}>
            <div
              style={{ fontSize: '12px', fontWeight: 500, color: T.textSub }}
            >
              Dev Local
            </div>
            <div
              style={{
                fontSize: '10.5px',
                color: T.textMuted,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              git@localhost
            </div>
          </div>
          <span
            title="Online"
            style={{
              marginLeft: 'auto',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: T.green,
              flexShrink: 0,
              boxShadow: `0 0 6px ${T.green}`
            }}
          />
        </div>
      </div>
    </aside>
  );
}
