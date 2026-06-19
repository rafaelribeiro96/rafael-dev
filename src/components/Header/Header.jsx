import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Diferencial', href: '/#diferenciais', targetId: 'diferenciais' },
  { label: 'Portfólio', href: '/#portfolio', targetId: 'portfolio' },
  { label: 'Planos', href: '/#planos', targetId: 'planos' },
  { label: 'Processo', href: '/#processo', targetId: 'processo' },
  { label: 'FAQ', href: '/#faq', targetId: 'faq' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, targetId) => {
    if (router.pathname !== '/') return;

    event.preventDefault();
    setIsMenuOpen(false);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20SoftLuna%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-border-thin transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl'
          : 'bg-white/85 backdrop-blur-md'
      }`}
      aria-label="Navegacao principal"
    >
      <div className="mx-auto flex h-20 max-w-container-wide items-center justify-between gap-3 px-margin-page md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="inline-flex min-w-0 shrink items-center"
          aria-label="SoftLuna - Inicio"
        >
          <img
            src="/softluna-logo-mark-cropped.png"
            alt="SoftLuna"
            className="h-auto w-[104px] min-[380px]:w-[116px] sm:w-[132px] md:h-7 md:w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.targetId}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.targetId)}
              className="font-body-md text-[13px] leading-5 text-secondary transition-colors hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden justify-self-end md:block">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rt-button rt-button-primary"
          >
            Quero meu site
          </a>
        </div>

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg border border-primary bg-primary px-3 font-label-md text-[11px] uppercase tracking-[0.04em] text-white transition-colors hover:border-accent-hover hover:bg-accent-hover min-[380px]:px-4 md:hidden"
        >
          Quero meu site
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-thin bg-white text-on-surface md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined text-[22px]">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border-thin bg-bg-primary px-margin-page py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.targetId}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.targetId)}
                className="rounded-lg px-2 py-3 font-body-md text-[16px] text-secondary transition-colors hover:bg-bg-secondary hover:text-on-surface"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rt-button rt-button-primary rt-button-full mt-4"
            >
              Quero meu site
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
