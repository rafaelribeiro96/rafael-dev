import React from 'react';

const servicesList = [
  {
    title: 'Landing Pages',
    icon: 'conversion_path',
    description:
      'Paginas de alta conversao para campanhas, lancamentos e ofertas com foco direto em leads e vendas.',
    features: ['Copy persuasiva', 'Integracao WhatsApp/CRM', 'Alta performance']
  },
  {
    title: 'Sites Institucionais',
    icon: 'business',
    description:
      'Presenca digital completa para consolidar autoridade, apresentar servicos e ranquear no Google.',
    features: ['Multipaginas', 'Blog opcional', 'SEO local']
  },
  {
    title: 'Sistemas Custom',
    icon: 'dashboard_customize',
    description:
      'Aplicacoes web, dashboards, e-commerce, portais e automacoes moldadas ao seu processo.',
    features: ['Regras sob medida', 'APIs e webhooks', 'Painel dedicado']
  }
];

const Services = () => {
  return (
    <section className="bg-bg-secondary px-margin-page py-24" id="servicos">
      <div className="mx-auto max-w-container-max">
        <div className="mx-auto mb-16 max-w-3xl text-center" data-aos="fade-up">
          <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
            Solucoes em engenharia web
          </span>
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            Produtos digitais para empresas que nao aceitam o comum.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-md text-[17px] leading-[27px] text-secondary">
            Da pagina de campanha ao sistema sob medida, cada entrega nasce com
            design premium, performance e conteudo editavel pelo seu painel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {servicesList.map((service) => (
            <a
              key={service.title}
              href="#planos"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById('planos')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex min-h-[390px] flex-col rounded-[24px] border border-border-thin bg-white p-8 text-left transition-colors hover:border-primary-container md:p-10"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-surface-container-low text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
                <span className="material-symbols-outlined text-[30px]">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-[26px] leading-9 text-on-surface">
                {service.title}
              </h3>
              <p className="mt-4 flex-grow font-body-md text-[15px] leading-6 text-secondary">
                {service.description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-border-thin pt-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 font-body-md text-[14px] text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      done
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="rt-button rt-button-secondary mt-8">
                Ver planos
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
