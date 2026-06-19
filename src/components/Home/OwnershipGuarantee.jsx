import React from 'react';

const OwnershipGuarantee = () => {
  return (
    <section className="bg-white px-margin-page py-12 md:py-14">
      <div className="mx-auto max-w-container-max">
        <div className="flex flex-col gap-5 rounded-2xl border border-border-thin bg-bg-secondary p-6 md:flex-row md:items-center md:gap-7 md:p-7 lg:px-9">
          <div className="flex shrink-0 items-center gap-4 md:w-[280px]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_30px_rgba(30,27,23,0.08)]">
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <div>
              <span className="block font-label-md text-[11px] uppercase tracking-[0.06em] text-primary">
                Garantia de propriedade
              </span>
              <h2 className="mt-2 font-headline-md text-[24px] leading-8 text-on-surface md:text-[26px]">
                O site e realmente seu.
              </h2>
            </div>
          </div>

          <p className="max-w-none border-border-thin font-body-md text-[15px] leading-[25px] text-secondary md:border-l md:pl-7 lg:text-[16px] lg:leading-[26px]">
            Ao final do projeto, você tem um ativo digital da sua empresa:
            código-fonte, conteúdo, imagens aprovadas e acesso ao painel. Sem
            aprisionamento, sem letras miúdas e com liberdade para evoluir o
            site quando precisar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OwnershipGuarantee;
