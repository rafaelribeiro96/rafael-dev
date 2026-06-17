import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const T = {
  bg: '#09101f',
  card: '#0f1828',
  border: 'rgba(255,255,255,0.07)',
  primary: '#06b6d4',
  primaryBg: 'rgba(6,182,212,0.1)',
  primaryBorder: 'rgba(6,182,212,0.28)',
  text: '#e2e8f0',
  textSub: '#94a3b8',
  red: '#ef4444',
  redBg: 'rgba(239,68,68,0.1)',
  redBorder: 'rgba(239,68,68,0.25)'
};

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.replace('/admin');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Senha incorreta.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Erro de conexão. Tente novamente.');
    }
  };

  return (
    <>
      <Head>
        <title>Login Administrativo — Rafael Tech</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: ${T.bg}; }
      `}</style>

      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          color: T.text
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '380px',
            background: T.card,
            border: `1px solid ${T.border}`,
            borderRadius: '16px',
            padding: '32px 28px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '28px'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(6,182,212,0.35)',
                marginBottom: '14px'
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '20px',
                  fontStyle: 'italic'
                }}
              >
                R
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              Painel Administrativo
            </h2>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: '12.5px',
                color: T.textSub
              }}
            >
              Digite a senha para acessar o painel
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {errorMsg && (
              <div
                style={{
                  background: T.redBg,
                  border: `1px solid ${T.redBorder}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                  fontSize: '12.5px',
                  color: T.red,
                  marginBottom: '16px',
                  lineHeight: 1.4
                }}
              >
                {errorMsg}
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de Acesso"
                disabled={status === 'submitting'}
                autoFocus
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${T.border}`,
                  borderRadius: '8px',
                  color: T.text,
                  outline: 'none',
                  padding: '11px 14px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = T.primary;
                  e.target.style.boxShadow = `0 0 0 3px ${T.primaryBg}`;
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = T.border;
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || !password.trim()}
              style={{
                width: '100%',
                padding: '11px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
                color: '#fff',
                border: 'none',
                fontWeight: 700,
                fontSize: '13.5px',
                fontFamily: 'inherit',
                cursor:
                  status === 'submitting' || !password.trim()
                    ? 'not-allowed'
                    : 'pointer',
                opacity: !password.trim() ? 0.65 : 1,
                boxShadow: '0 4px 14px rgba(6,182,212,0.22)',
                transition: 'all 0.2s'
              }}
            >
              {status === 'submitting' ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
