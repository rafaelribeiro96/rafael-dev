/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const defaultPrototypeImages = [
  '/uploads/screencapture-glayderibeiro-br-2026-06-17-12-38-12-1781714859760.webp',
  '/uploads/screencapture-jsaadvogados-br-2026-06-17-12-41-04-1781714874632.webp',
  '/uploads/screencapture-localhost-3000-2026-06-17-12-43-40-1781714887158.webp'
];

const Hero = ({ ctaLink, carouselImages = [] }) => {
  const rawImages =
    carouselImages.length > 0
      ? carouselImages.map((item) => item.image).filter(Boolean)
      : defaultPrototypeImages;
  const prototypeImages =
    rawImages.length < 5
      ? [...rawImages, ...rawImages, ...rawImages]
      : rawImages;
  return (
    <section className="relative min-h-[90vh] flex items-center px-margin-page py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-surface-deep to-surface-deep -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10"></div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
        <div
          className="space-y-8 z-10 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-headline-xl text-on-surface leading-tight font-extrabold tracking-tighter">
            Sites Profissionais que{' '}
            <span className="text-gradient">
              Vendem, Ranqueiam e Impressionam.
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
            Criamos sites institucionais e landing pages com tecnologia de
            ponta. Carregamento ultra-rápido, design exclusivo que converte e
            você mesmo atualiza o conteúdo — sem depender de ninguém.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md bg-primary text-on-primary px-8 py-4 rounded-full shadow-[0_0_20px_rgba(76,215,246,0.4)] hover:shadow-[0_0_30px_rgba(76,215,246,0.6)] hover:-translate-y-1 transition-all duration-300 transform font-bold text-center uppercase tracking-wider"
            >
              QUERO MEU SITE DE VENDAS
            </a>
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('servicos')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-label-md text-label-md text-on-surface hover:text-primary transition-all duration-300 inline-flex items-center gap-1.5 underline underline-offset-4 decoration-white/20 hover:decoration-primary font-bold"
            >
              Ver Soluções
              <span className="material-symbols-outlined text-[14px]">
                arrow_downward
              </span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 pt-2">
            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-secondary text-sm sm:text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-xs sm:text-sm font-medium">
                Alto Desempenho
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-secondary text-sm sm:text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                schedule
              </span>
              <span className="text-xs sm:text-sm font-medium">
                Entrega em até 15 dias úteis
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-secondary text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock
              </span>
              <span className="text-sm font-medium">Você é dono do código</span>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 flex justify-center lg:justify-end mt-4 lg:mt-0 w-full"
          data-aos="fade-left"
        >
          {/* Mobile Carousel (Horizontal Marquee) - Visible only on mobile/tablet */}
          <div className="block lg:hidden w-[calc(100vw-10vw)] sm:w-full overflow-hidden py-4 -mx-[5vw] px-[5vw] sm:mx-0 sm:px-0">
            <Marquee gradient={false} speed={30}>
              {prototypeImages.map((src, index) => (
                <div
                  key={index}
                  className="w-28 h-28 mx-3 rounded-2xl overflow-hidden border border-white/10 bg-surface-slate relative aspect-square shadow-lg flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Protótipo ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Desktop Mockup - Visible only on lg screens and up */}
          <div className="hidden lg:block relative w-full max-w-[450px]">
            <div className="absolute -inset-2 bg-gradient-to-b from-primary/30 to-transparent rounded-[2rem] blur-xl opacity-50 pointer-events-none"></div>
            <Image
              alt="Rafael Tech Dashboard and Mobile Mockup"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-700 rounded-2xl border border-primary/20 bg-surface/40 backdrop-blur-sm"
              src="/uploads/hero-professional.png"
              width={500}
              height={450}
              priority={true}
            />

            {/* Float Performance badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-surface-container-high border border-primary/30 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-4 border-secondary flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">A+</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-text-muted font-label-md">
                  Performance
                </span>
                <span className="text-xs text-on-surface font-bold">
                  Otimizada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
