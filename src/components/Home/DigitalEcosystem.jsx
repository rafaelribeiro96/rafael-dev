import React from 'react';

const trustBadges = [
  {
    label: '01. Performance',
    title: 'Velocidade Sub-1s',
    text: 'Otimizacao critica para retencao, ranqueamento e conversao.'
  },
  {
    label: '02. Cronograma',
    title: 'Entrega precisa',
    text: 'Processo claro, prazos combinados e entregas acompanhadas.'
  },
  {
    label: '03. Arquitetura',
    title: 'Codigo proprietario',
    text: 'Sem templates prontos. Codigo unico, autoral e escalavel.'
  }
];

const DigitalEcosystem = () => {
  return (
    <>
      <section className="overflow-hidden border-y border-border-thin bg-surface-container-lowest px-margin-page py-16 md:py-20">
        <div className="mx-auto grid max-w-container-wide grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="w-full max-w-[330px] border-l border-primary/20 pl-8 md:max-w-none"
            >
              <span className="font-label-md text-[10px] uppercase tracking-[0.08em] text-primary">
                {badge.label}
              </span>
              <h2 className="mt-4 font-headline-md text-[20px] font-bold leading-7 text-on-surface">
                {badge.title}
              </h2>
              <p className="mt-3 font-body-md text-[14px] leading-6 text-secondary">
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-margin-page py-24" id="diferenciais">
        <div className="mx-auto max-w-container-max">
          <div className="mb-16" data-aos="fade-up">
            <span className="mb-2 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
              Por que nos escolher
            </span>
            <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
              O diferencial SoftLuna
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            <article
              className="col-span-12 rounded-[24px] border border-border-thin bg-surface-container-low p-8 transition-colors hover:border-primary-container md:col-span-8 md:p-10"
              data-aos="fade-up"
            >
              <span className="material-symbols-outlined mb-6 text-[52px] text-primary">
                google
              </span>
              <h3 className="font-headline-md text-[30px] leading-10 text-on-surface">
                Google Business First
              </h3>
              <p className="mt-4 max-w-xl font-body-lg text-[18px] leading-[30px] text-secondary">
                Arquitetura tecnica otimizada para busca organica, Google Meu
                Negocio e velocidade de carregamento desde o primeiro deploy.
              </p>
              <a
                href="#arquitetura"
                className="rt-button rt-button-secondary mt-8 w-fit"
              >
                Ver arquitetura
              </a>
            </article>

            <article
              className="col-span-12 flex min-h-[260px] flex-col items-center justify-center rounded-[24px] bg-primary p-8 text-center text-on-primary md:col-span-4 md:p-10"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <span className="material-symbols-outlined mb-6 text-[60px]">
                bolt
              </span>
              <h3 className="font-headline-md text-[28px] leading-9">
                Absolute Speed
              </h3>
              <p className="mt-3 font-body-md text-[15px] leading-6 opacity-85">
                Stack moderna, imagens otimizadas e entrega edge-first.
              </p>
            </article>

            <article
              className="col-span-12 rounded-[24px] border border-border-thin bg-white p-8 transition-colors hover:bg-surface-container-lowest md:col-span-4 md:p-10"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <span className="material-symbols-outlined mb-4 text-[42px] text-primary">
                edit_document
              </span>
              <h3 className="font-headline-md text-[26px] leading-9 text-on-surface">
                Autonomia total
              </h3>
              <p className="mt-3 font-body-md text-[15px] leading-6 text-secondary">
                Textos, fotos, portfolio, planos e FAQ continuam editaveis pelo
                painel admin via Git-CMS.
              </p>
            </article>

            <article
              className="relative col-span-12 overflow-hidden rounded-[24px] border border-border-thin bg-surface-container p-8 md:col-span-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="relative z-10 max-w-xl">
                <h3 className="font-headline-md text-[30px] leading-10 text-on-surface">
                  AI-ready architecture
                </h3>
                <p className="mt-4 font-body-lg text-[18px] leading-[30px] text-on-surface-variant">
                  Estrutura preparada para SEO moderno, respostas com IA,
                  automacoes e integracoes futuras sem reconstruir o site do
                  zero.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-10 translate-y-10 rounded-full border border-primary-container/60" />
              <div className="absolute bottom-8 right-16 h-24 w-24 rounded-full border border-outline-variant" />
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalEcosystem;
