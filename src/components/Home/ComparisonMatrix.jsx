import React from 'react';

const rows = [
  [
    'Performance',
    'Lento com plugins e temas pesados',
    'Next.js otimizado e entrega edge-first'
  ],
  [
    'SEO & Google',
    'Dependente de ajustes manuais e extensoes',
    'Arquitetura pensada para indexacao desde o inicio'
  ],
  [
    'Seguranca',
    'Superficie maior de ataques e atualizacoes',
    'Menos dependencias, deploy versionado e codigo controlado'
  ],
  [
    'Edicao',
    'Painel inchado e dificil para o cliente',
    'Git-CMS simples para textos, planos, FAQ e portfolio'
  ],
  [
    'Design',
    'Limitado por templates e blocos prontos',
    'Interface exclusiva alinhada a marca e conversao'
  ]
];

const ComparisonMatrix = () => {
  return (
    <section className="bg-white px-margin-page py-24" id="arquitetura">
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div data-aos="fade-up">
            <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
              O fim das limitacoes
            </span>
            <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
              Por que engenharia web supera qualquer solucao de template.
            </h2>
          </div>
          <p className="max-w-md font-body-md text-[17px] leading-[27px] text-secondary">
            Cada decisao tecnica afeta velocidade, SEO, autonomia e conversao. A
            diferenca aparece no codigo e no resultado.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-[24px] border border-border-thin bg-white"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1fr]">
            <div className="hidden bg-bg-secondary p-6 font-label-md text-[13px] uppercase tracking-[0.05em] text-text-secondary md:block">
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
      </div>
    </section>
  );
};

export default ComparisonMatrix;
