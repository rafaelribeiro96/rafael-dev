import React from 'react';

const servicesList = [
  {
    title: 'Landing Pages',
    icon: 'conversion_path',
    description:
      'Pagina unica para campanha, trafego pago ou validacao de oferta, com copy, WhatsApp e SEO basico.',
    features: [
      'Copy orientada a conversao',
      'WhatsApp/CRM',
      'Performance mobile'
    ]
  },
  {
    title: 'Sites Institucionais',
    icon: 'business',
    description:
      'Site multipagina para empresas que precisam apresentar servicos, autoridade e estrutura local no Google.',
    features: ['Ate 5 paginas', 'Painel editavel', 'SEO local']
  },
  {
    title: 'Projetos Personalizados',
    icon: 'dashboard_customize',
    description:
      'Aplicacoes, e-commerce, areas de membros e automacoes quando o projeto exige regra de negocio propria.',
    features: ['Briefing tecnico', 'APIs e webhooks', 'Escopo sob medida']
  }
];

const Services = () => {
  return (
    <section
      className="bg-bg-secondary px-margin-page py-20 md:py-24"
      id="servicos"
    >
      <div className="mx-auto max-w-container-max">
        <div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          data-aos="fade-up"
        >
          <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
            Solucoes em engenharia web
          </span>
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            Solucoes digitais para empresas que precisam vender e ser
            encontradas.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-md text-[17px] leading-[27px] text-secondary">
            Da landing page ao sistema sob medida, cada entrega combina design
            sob medida, performance, SEO local e conteudo editavel.
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
              className="group flex min-h-[330px] flex-col rounded-[24px] border border-border-thin bg-white p-7 text-left transition-colors hover:border-primary-container md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-low text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
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
              <ul className="mt-6 space-y-3 border-t border-border-thin pt-5">
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
              <span className="rt-button rt-button-secondary mt-6">
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
