import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoRafael1 from '../../assets/images/logoRafael1.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-deep/75 backdrop-blur-md h-16 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-surface-deep/85 backdrop-blur-md h-20'
      }`}
    >
      <div
        className={`flex justify-between items-center max-w-container-max mx-auto px-margin-page transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src={logoRafael1}
            alt="Rafael Tech"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
              isScrolled ? 'h-8' : 'h-10'
            }`}
          />
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
            className={`font-label-md text-label-md bg-primary text-on-primary rounded-full shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] transition-all duration-300 transform hover:scale-[0.98] inline-block font-bold uppercase tracking-wider ${
              isScrolled ? 'px-5 py-2.5' : 'px-6 py-3'
            }`}
          >
            ORÇAMENTO
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-xs bg-primary text-on-primary px-4 py-2 rounded-full hover:shadow-[0_0_15px_rgba(76,215,246,0.4)] transition-all active:scale-95 duration-200 font-bold inline-block uppercase tracking-wider"
          >
            ORÇAMENTO
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
        <div
          className={`md:hidden w-full absolute left-0 bg-surface-deep border-b border-white/10 px-margin-page py-6 flex flex-col gap-4 shadow-2xl transition-all duration-300 ${
            isScrolled ? 'top-16' : 'top-20'
          }`}
        >
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
