/* eslint-disable react/prop-types */
import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: 'Landing Page',
      icon: 'conversion_path',
      description:
        'Página de alta conversão focada em um único produto ou serviço. Ideal para campanhas no Google Ads, Meta Ads e tráfego pago. Carregamento instantâneo para não perder nenhuma venda.',
      features: [
        'Otimizada para Conversão',
        'Design Persuasivo',
        'Integração de Leads',
        'Foco em Vendas'
      ],
      badge: 'Ideal para Anúncios'
    },
    {
      title: 'Site Institucional',
      icon: 'business',
      description:
        'A presença online completa que sua marca precisa. Múltiplas páginas explicando sua história, diferenciais, portfólio e formas de contato. Passa máxima credibilidade para novos clientes.',
      features: [
        'Múltiplas Páginas',
        'SEO Avançado (Google)',
        'Identidade Visual Premium',
        'Área de Blog opcional'
      ],
      badge: 'Mais Vendido'
    },
    {
      title: 'Sistemas Personalizados',
      icon: 'dashboard_customize',
      description:
        'Soluções robustas sob medida para automatizar sua empresa. Plataformas de agendamento e reservas, sistemas de vendas, lojas virtuais (e-commerce), portais de membros, CRMs e ERPs dedicados.',
      features: [
        'Painel de Controle Rápido',
        'Banco de Dados Seguro',
        'Regras de Negócio Dedicadas',
        'Automação de Processos'
      ],
      badge: 'Sob Medida'
    }
  ];

  return (
    <section
      className="py-24 px-margin-page bg-surface-slate relative border-t border-white/5 overflow-hidden"
      id="servicos"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>

      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Nossas Soluções
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            Os Serviços que Oferecemos
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Desenvolvemos soluções digitais exclusivas focadas em gerar
            resultados reais e acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <a
              key={index}
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('planos')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              {/* Top border highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold tracking-wider uppercase text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-headline-md text-2xl text-on-surface font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 mt-auto">
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2.5 text-xs text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
