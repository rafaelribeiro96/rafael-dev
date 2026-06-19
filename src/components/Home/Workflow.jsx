import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Diagnostico & oferta',
    text: 'Entendemos o negocio, a cidade, o publico, os concorrentes e a acao principal que o site precisa gerar.'
  },
  {
    number: '02',
    title: 'Design & desenvolvimento',
    text: 'Criamos a interface, escrevemos a base de copy, programamos com performance e validamos mobile, SEO e conteudo.'
  },
  {
    number: '03',
    title: 'Publicacao & manutencao',
    text: 'Publicamos em infraestrutura moderna, entregamos o painel editavel e mantemos suporte para seguranca e melhorias.'
  }
];

const Workflow = () => {
  return (
    <section className="bg-white px-margin-page py-20 md:py-24" id="processo">
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 text-center md:mb-16" data-aos="fade-up">
          <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
            Nossa metodologia
          </span>
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            Do briefing ao site publicado, sem complicar o processo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-md text-[17px] leading-[27px] text-secondary">
            Voce acompanha as decisoes importantes, aprova a direcao visual e
            recebe um ativo digital pronto para operar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="border-t border-border-thin pt-6 md:pt-8"
              data-aos="fade-up"
              data-aos-delay={90 * index}
            >
              <p className="font-headline-md text-[42px] leading-none text-primary-container">
                {step.number}
              </p>
              <h3 className="mt-6 font-headline-md text-[22px] leading-8 text-on-surface md:mt-8 md:text-[24px]">
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
