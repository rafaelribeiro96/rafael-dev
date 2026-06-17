import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (e, targetId) => {
    // If not on homepage, navigate to homepage first, then scroll
    if (router.pathname !== '/') {
      return; // Let normal Link behavior navigate to /#id
    }

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Rafael%20Tech%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-deep/90 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(76,215,246,0.1)] transition-all duration-300">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-page h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="material-symbols-outlined text-primary text-3xl transition-transform duration-300 group-hover:rotate-12"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            hexagon
          </span>
          <span className="text-body-lg font-headline-xl font-bold text-on-surface tracking-tighter">
            Rafael Tech
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/#servicos"
            onClick={(e) => handleNavClick(e, 'servicos')}
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="/#portfolio"
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Portfólio
          </Link>
          <Link
            href="/#planos"
            onClick={(e) => handleNavClick(e, 'planos')}
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Planos
          </Link>
          <Link
            href="/blog"
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-md bg-primary text-on-primary px-6 py-3 rounded-full shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] transition-all duration-300 transform hover:scale-[0.98] inline-block font-semibold"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-xs bg-primary-container text-on-primary-container px-3 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all active:scale-95 duration-200 font-semibold"
          >
            Especialista
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 p-1"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden w-full absolute top-20 left-0 bg-surface-deep border-b border-white/10 px-margin-page py-6 flex flex-col gap-4 shadow-2xl transition-all duration-300">
          <Link
            href="/#servicos"
            onClick={(e) => handleNavClick(e, 'servicos')}
            className="font-label-md text-base text-on-surface-variant hover:text-primary py-2 transition-colors border-b border-white/5"
          >
            Serviços
          </Link>
          <Link
            href="/#portfolio"
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="font-label-md text-base text-on-surface-variant hover:text-primary py-2 transition-colors border-b border-white/5"
          >
            Portfólio
          </Link>
          <Link
            href="/#planos"
            onClick={(e) => handleNavClick(e, 'planos')}
            className="font-label-md text-base text-on-surface-variant hover:text-primary py-2 transition-colors border-b border-white/5"
          >
            Planos
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="font-label-md text-base text-on-surface-variant hover:text-primary py-2 transition-colors"
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
