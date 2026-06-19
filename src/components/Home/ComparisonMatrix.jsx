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

        <div
          className="overflow-hidden rounded-2xl border border-border-thin bg-white md:hidden"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 border-b border-border-thin">
            <div className="bg-error-container/25 px-4 py-4">
              <p className="font-label-md text-[11px] uppercase tracking-[0.06em] text-error">
                Template pesado
              </p>
            </div>
            <div className="bg-surface-container-low px-4 py-4">
              <p className="font-label-md text-[11px] uppercase tracking-[0.06em] text-primary">
                SoftLuna
              </p>
            </div>
          </div>

          {rows.map(([criterion, template, engineering]) => (
            <div
              key={criterion}
              className="border-b border-border-thin last:border-b-0"
            >
              <div className="bg-bg-secondary px-4 py-3">
                <h3 className="font-headline-md text-[17px] leading-6 text-on-surface">
                  {criterion}
                </h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="border-r border-border-thin px-4 py-4">
                  <span className="material-symbols-outlined mb-2 text-[18px] text-error">
                    close
                  </span>
                  <p className="font-body-md text-[13px] leading-5 text-secondary">
                    {template}
                  </p>
                </div>
                <div className="bg-surface-container-lowest px-4 py-4">
                  <span className="material-symbols-outlined mb-2 text-[18px] text-primary">
                    done
                  </span>
                  <p className="font-body-md text-[13px] font-medium leading-5 text-on-surface">
                    {engineering}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
