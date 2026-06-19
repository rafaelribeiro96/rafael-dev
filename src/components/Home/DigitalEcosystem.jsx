import React from 'react';

const trustBadges = [
  {
    label: '01. Performance',
    title: 'Performance edge',
    text: 'Sites leves, servidos por CDN e pensados para carregar rápido no mobile.'
  },
  {
    label: '02. Cronograma',
    title: 'Escopo claro',
    text: 'Briefing objetivo, aprovação visual e entregas sem abrir margem para retrabalho infinito.'
  },
  {
    label: '03. Arquitetura',
    title: 'Ativo próprio',
    text: 'Código e conteúdo organizados para a empresa manter o site mesmo se trocar de fornecedor.'
  }
];

const DigitalEcosystem = () => {
  return (
    <>
      <section className="overflow-hidden border-y border-border-thin bg-surface-container-lowest px-margin-page py-12 md:py-16">
        <div className="mx-auto grid max-w-container-wide grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
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

      <section
        className="bg-white px-margin-page py-20 md:py-24"
        id="diferenciais"
      >
        <div className="mx-auto max-w-container-max">
          <div className="mb-12 md:mb-16" data-aos="fade-up">
            <span className="mb-2 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
              Por que nos escolher
            </span>
            <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
              O diferencial SoftLuna
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            <article
              className="col-span-12 rounded-[24px] border border-border-thin bg-surface-container-low p-7 transition-colors hover:border-primary-container md:col-span-8 md:p-9"
              data-aos="fade-up"
            >
              <span className="material-symbols-outlined mb-6 text-[52px] text-primary">
                google
              </span>
              <h3 className="font-headline-md text-[30px] leading-10 text-on-surface">
                SEO local desde a estrutura
              </h3>
              <p className="mt-4 max-w-xl font-body-lg text-[18px] leading-[30px] text-secondary">
                Dados estruturados, metas, Open Graph e base semântica para o
                Google entender sua empresa, sua cidade e seus serviços.
              </p>
              <a
                href="#arquitetura"
                className="rt-button rt-button-secondary mt-8 w-fit"
              >
                Ver arquitetura
              </a>
            </article>

            <article
              className="col-span-12 flex min-h-[220px] flex-col items-center justify-center rounded-[24px] bg-primary p-7 text-center text-on-primary md:col-span-4 md:p-9"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <span className="material-symbols-outlined mb-6 text-[60px]">
                bolt
              </span>
              <h3 className="font-headline-md text-[28px] leading-9">
                PageSpeed como prioridade
              </h3>
              <p className="mt-3 font-body-md text-[15px] leading-6 opacity-85">
                Stack moderna, imagens otimizadas e entrega pensada para nota
                alta no mobile.
              </p>
            </article>

            <article
              className="col-span-12 rounded-[24px] border border-border-thin bg-white p-7 transition-colors hover:bg-surface-container-lowest md:col-span-4 md:p-9"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <span className="material-symbols-outlined mb-4 text-[42px] text-primary">
                edit_document
              </span>
              <h3 className="font-headline-md text-[26px] leading-9 text-on-surface">
                Painel sem fricção
              </h3>
              <p className="mt-3 font-body-md text-[15px] leading-6 text-secondary">
                Textos, fotos, portfólio, planos e FAQ ficam editáveis sem
                WordPress, plugins ou risco de desmontar o layout.
              </p>
            </article>

            <article
              className="relative col-span-12 overflow-hidden rounded-[24px] border border-border-thin bg-surface-container p-7 md:col-span-8 md:p-9"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="relative z-10 max-w-xl">
                <h3 className="font-headline-md text-[30px] leading-10 text-on-surface">
                  Arquitetura pronta para busca com IA
                </h3>
                <p className="mt-4 font-body-lg text-[18px] leading-[30px] text-on-surface-variant">
                  Código semântico e dados organizados para Google, respostas
                  generativas, automações e integrações futuras.
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
