import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Diagnostico & estrategia',
    text: 'Mapeamos objetivos, publico, concorrencia, oferta e estrutura ideal para crescimento.'
  },
  {
    number: '02',
    title: 'Design & desenvolvimento',
    text: 'Criamos a interface, programamos com performance e validamos responsividade, SEO e conteudo.'
  },
  {
    number: '03',
    title: 'Lancamento & evolucao',
    text: 'Publicamos em infraestrutura moderna, treinamos o painel e mantemos suporte para evoluir.'
  }
];

const Workflow = () => {
  return (
    <section className="bg-white px-margin-page py-24" id="processo">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
            Nossa metodologia
          </span>
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            O caminho da concepcao a excelencia tecnica.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-md text-[17px] leading-[27px] text-secondary">
            Um processo objetivo, com aprovacao visual, desenvolvimento limpo e
            publicacao preparada para escala.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="border-t border-border-thin pt-8"
              data-aos="fade-up"
              data-aos-delay={90 * index}
            >
              <p className="font-headline-md text-[42px] leading-none text-primary-container">
                {step.number}
              </p>
              <h3 className="mt-8 font-headline-md text-[24px] leading-8 text-on-surface">
                {step.title}
              </h3>
              <p className="mt-4 font-body-md text-[15px] leading-6 text-secondary">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
