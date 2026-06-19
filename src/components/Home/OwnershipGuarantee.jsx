import React from 'react';

const OwnershipGuarantee = () => {
  return (
    <section className="bg-white px-margin-page py-16 md:py-20">
      <div className="mx-auto max-w-container-max">
        <div className="grid items-center gap-8 rounded-2xl border border-border-thin bg-bg-secondary p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_30px_rgba(30,27,23,0.08)]">
            <span
              className="material-symbols-outlined text-[28px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
          </div>

          <div>
            <span className="mb-3 block font-label-md text-[12px] uppercase tracking-[0.06em] text-primary">
              Garantia de propriedade
            </span>
            <h2 className="font-headline-md text-[28px] leading-9 text-on-surface md:text-[32px] md:leading-10">
              O site e realmente seu.
            </h2>
            <p className="mt-4 max-w-2xl font-body-md text-[16px] leading-[26px] text-secondary">
              Ao final do projeto, voce tem um ativo digital da sua empresa:
              codigo-fonte, conteudo, imagens aprovadas e acesso ao painel. Sem
              aprisionamento, sem letras miudas e com liberdade para evoluir o
              site quando precisar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipGuarantee;
