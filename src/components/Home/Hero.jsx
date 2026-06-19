/* eslint-disable react/prop-types */
import React from 'react';

const Hero = ({ ctaLink, heroContent = {} }) => {
  const headline =
    heroContent?.headline || 'Sites rapidos, elegantes e prontos para vender.';
  const subheadline =
    heroContent?.subheadline ||
    'A SoftLuna cria landing pages, sites institucionais e solucoes digitais com performance edge, SEO local e painel simples para voce editar sem depender de plugins.';
  const ctaText = heroContent?.ctaText || 'Quero meu site agora';

  return (
    <section className="overflow-hidden bg-white px-margin-page pb-20 pt-32 md:pb-24 md:pt-36">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-center text-center">
        <span className="mb-6 font-label-md text-[11px] uppercase tracking-[0.2em] text-primary">
          Estudio de engenharia web
        </span>
        <h1 className="mx-auto w-full max-w-[330px] whitespace-pre-line break-words font-headline-xl text-[30px] font-bold leading-[38px] tracking-normal text-on-surface sm:max-w-[880px] sm:text-[46px] sm:leading-[56px]">
          {headline}
        </h1>
        <p className="mx-auto mt-8 w-full max-w-[330px] font-body-lg text-[16px] leading-[27px] text-secondary sm:max-w-2xl sm:text-[18px] sm:leading-[30px]">
          {subheadline}
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <div className="w-full rounded-xl border border-border-thin bg-white/70 p-1 shadow-none sm:w-auto">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rt-button rt-button-primary rt-button-lg rt-button-full sm:w-auto"
            >
              {ctaText}
            </a>
          </div>
          <a
            href="#portfolio"
            onClick={(event) => {
              event.preventDefault();
              document
                .getElementById('portfolio')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rt-button rt-button-secondary rt-button-lg w-full sm:w-auto"
          >
            Ver portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
