import React from 'react';

const rows = [
  [
    'Performance',
    'Sites lentos por excesso de plugins e temas pesados',
    'Next.js/Astro estatico, CDN global e foco em nota alta no PageSpeed'
  ],
  [
    'SEO & Google',
    'SEO depende de extensoes e configuracoes manuais',
    'Estrutura semantica, SEO local e dados prontos para Google e IAs'
  ],
  [
    'Seguranca',
    'Mais plugins, atualizacoes constantes e maior superficie de ataque',
    'Menos dependencias, deploy versionado e infraestrutura mais simples'
  ],
  [
    'Edicao',
    'Painel inchado, confuso e facil de quebrar o layout',
    'Git-CMS simples para editar textos, fotos, planos, FAQ e portfolio'
  ],
  [
    'Design',
    'Limitado por templates, blocos prontos e aparencia repetida',
    'Interface exclusiva, alinhada a marca, conversao e posicionamento'
  ]
];

const ComparisonMatrix = () => {
  return (
    <section
      className="bg-white px-margin-page py-20 md:py-24"
      id="arquitetura"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div data-aos="fade-up">
            <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
              O fim das limitacoes
            </span>
            <h2 className="font-headline-lg text-[30px] leading-[38px] text-on-surface sm:text-headline-lg">
              Por que engenharia web supera template pesado.
            </h2>
          </div>
          <p className="max-w-md font-body-md text-[16px] leading-[26px] text-secondary">
            A SoftLuna cria ativos digitais leves, editaveis e preparados para
            busca local. A diferenca aparece no carregamento, no painel e na
            conversao.
          </p>
        </div>

        <div
          className="hidden overflow-hidden rounded-[24px] border border-border-thin bg-white md:block"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-[0.8fr_1fr_1fr]">
            <div className="bg-bg-secondary p-6 font-label-md text-[13px] uppercase tracking-[0.05em] text-text-secondary">
              Criterio
            </div>
            <div className="bg-bg-secondary p-6 font-label-md text-[13px] uppercase tracking-[0.05em] text-text-secondary">
              Template / WordPress pesado
            </div>
            <div className="bg-surface-container-lowest p-6 font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
              SoftLuna Engineering
            </div>

            {rows.map(([criterion, template, engineering]) => (
              <React.Fragment key={criterion}>
                <div className="border-t border-border-thin p-6 font-headline-md text-[18px] leading-7 text-on-surface">
                  {criterion}
                </div>
                <div className="border-t border-border-thin p-6 font-body-md text-[15px] leading-6 text-secondary">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-error-container text-[12px] text-error">
                    x
                  </span>
                  {template}
                </div>
                <div className="border-t border-border-thin bg-surface-container-lowest p-6 font-body-md text-[15px] leading-6 text-on-surface">
                  <span className="material-symbols-outlined mr-2 align-middle text-[18px] text-primary">
                    done
                  </span>
                  {engineering}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="space-y-4 md:hidden" data-aos="fade-up">
          {rows.map(([criterion, template, engineering]) => (
            <article
              key={criterion}
              className="overflow-hidden rounded-2xl border border-border-thin bg-white"
            >
              <div className="bg-bg-secondary px-5 py-4">
                <h3 className="font-headline-md text-[19px] leading-7 text-on-surface">
                  {criterion}
                </h3>
              </div>
              <div className="space-y-3 p-5">
                <div className="rounded-xl border border-error-container/70 bg-error-container/20 p-4">
                  <p className="mb-2 font-label-md text-[11px] uppercase tracking-[0.08em] text-error">
                    Template / WordPress pesado
                  </p>
                  <p className="font-body-md text-[14px] leading-6 text-secondary">
                    {template}
                  </p>
                </div>
                <div className="rounded-xl border border-primary-container/70 bg-surface-container-lowest p-4">
                  <p className="mb-2 font-label-md text-[11px] uppercase tracking-[0.08em] text-primary">
                    SoftLuna Engineering
                  </p>
                  <p className="font-body-md text-[14px] leading-6 text-on-surface">
                    {engineering}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
