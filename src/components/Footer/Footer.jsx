import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20SoftLuna%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';

  return (
    <footer className="border-t border-border-thin bg-white px-margin-page pb-8 pt-14 md:pt-16">
      <div className="mx-auto mb-10 grid max-w-container-wide grid-cols-12 gap-8 lg:gap-12">
        <div className="col-span-12 lg:col-span-6">
          <Link
            href="/"
            className="inline-flex w-fit items-center"
            aria-label="SoftLuna - Inicio"
          >
            <img
              src="/softluna-logo-full-cropped.png"
              alt="SoftLuna Solucoes Digitais"
              className="h-14 w-auto sm:h-16"
            />
          </Link>
          <p className="mt-5 max-w-sm font-body-lg text-[15px] leading-6 text-secondary">
            Engenharia web de alta performance para marcas que desejam elevar
            seu padrao digital com design, velocidade e autonomia.
          </p>
          <div className="mt-7 flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/softlunadigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-[12px] uppercase tracking-[0.05em] text-secondary transition-colors hover:text-primary"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-3">
          <h2 className="mb-5 font-label-md text-[10px] uppercase tracking-[0.08em] text-on-surface">
            Company
          </h2>
          <ul className="space-y-3 font-body-md text-[14px] text-secondary">
            <li>
              <Link
                href="/#diferenciais"
                className="transition-colors hover:text-primary"
              >
                Diferencial
              </Link>
            </li>
            <li>
              <Link
                href="/#servicos"
                className="transition-colors hover:text-primary"
              >
                Servicos
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="transition-colors hover:text-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-primary"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-3">
          <h2 className="mb-5 font-label-md text-[10px] uppercase tracking-[0.08em] text-on-surface">
            Contact
          </h2>
          <ul className="space-y-3 font-body-md text-[14px] text-secondary">
            <li>
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Chamar no WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/softlunadigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Instagram
              </a>
            </li>
            <li>
              <p>Belo Horizonte, MG</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-container-wide flex-col items-center justify-between gap-5 border-t border-border-thin pt-6 font-label-md text-[10px] uppercase tracking-[0.08em] text-secondary/70 md:flex-row">
        <p>&copy; {year} SoftLuna. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <Link href="/blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
          <a href={ctaLink} className="transition-colors hover:text-primary">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
