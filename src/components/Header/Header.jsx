import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Diferencial', href: '/#diferenciais', targetId: 'diferenciais' },
  { label: 'Portfolio', href: '/#portfolio', targetId: 'portfolio' },
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
      <div className="mx-auto grid h-20 max-w-container-wide grid-cols-[1fr_auto_1fr] items-center px-margin-page">
        <Link
          href="/"
          className="inline-flex w-fit items-center"
          aria-label="SoftLuna - Inicio"
        >
          <img
            src="/Logo%20Preta%20-%20fundo%20transparente.svg"
            alt="SoftLuna"
            className="h-9 w-auto md:h-10"
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
            Iniciar projeto
          </a>
        </div>

        <button
          type="button"
          className="fixed right-4 top-[18px] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border-thin bg-white text-on-surface md:hidden"
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
              Iniciar projeto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
