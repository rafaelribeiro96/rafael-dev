/* eslint-disable react/prop-types */
import React from 'react';

const Pricing = ({ ctaLink }) => {
  return (
    <section
      className="py-24 px-margin-page bg-surface-slate relative border-t border-white/5"
      id="planos"
    >
      <div className="max-w-container-max mx-auto text-left">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Investimento
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            Planos e Preços
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Soluções completas com tecnologia de ponta. Preço fechado — sem
            surpresas.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 bg-error/10 border border-error/20 text-on-error-container px-4 py-2 rounded-full text-sm font-semibold">
            <span
              className="material-symbols-outlined text-error text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              schedule
            </span>
            Vagas limitadas — apenas 3 projetos por mês
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch">
          {/* Plan 1 */}
          <div
            className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative"
            data-aos="fade-right"
          >
            <div className="mb-8">
              <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">
                Landing Page de Conversão
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-body-md text-sm text-text-muted">
                  A partir de
                </span>
                <span className="font-headline-xl text-4xl text-primary font-bold">
                  R$ 750
                </span>
                <span className="font-body-md text-sm text-text-muted">
                  (Setup)
                </span>
              </div>
              <p className="font-label-md text-secondary text-sm font-semibold">
                + R$ 40/mês
              </p>
            </div>

            <div className="flex-grow">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Design Exclusivo e Focado em Conversão
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Copywriting Persuasivo
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Integração CRM / WhatsApp
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    PageSpeed 100 Garantido
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Gestor de Conteúdo (CMS)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Domínio Grátis por 1 Ano
                  </span>
                </li>
              </ul>

              <div className="bg-surface-deep/50 rounded-xl p-4 mb-8 border border-white/5">
                <p className="font-label-md text-xs text-text-muted flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                    info
                  </span>
                  <span>
                    <strong>Nota de Manutenção:</strong> Inclui hospedagem edge
                    e atualizações de segurança automáticas.
                  </span>
                </p>
              </div>
            </div>

            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center font-label-md text-sm bg-transparent border-2 border-primary text-primary py-4 rounded-xl hover:bg-primary/10 transition-colors font-bold mt-auto inline-block"
            >
              Selecionar Plano
            </a>
          </div>

          {/* Plan 2 */}
          <div
            className="glass-panel rounded-3xl p-8 md:p-10 border border-primary/50 relative flex flex-col h-full shadow-[0_0_40px_rgba(6,182,212,0.15)] transform md:-translate-y-4 bg-gradient-to-b from-surface-slate to-surface-deep"
            data-aos="fade-left"
          >
            <div className="absolute -top-4 right-8">
              <span className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md text-xs px-4 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg">
                Mais Popular
              </span>
            </div>

            <div className="mb-8">
              <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">
                Site Institucional Completo
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-body-md text-sm text-text-muted">
                  A partir de
                </span>
                <span className="font-headline-xl text-4xl text-primary font-bold">
                  R$ 1.500
                </span>
                <span className="font-body-md text-sm text-text-muted">
                  (Setup)
                </span>
              </div>
              <p className="font-label-md text-secondary text-sm font-semibold">
                + R$ 75/mês
              </p>
            </div>

            <div className="flex-grow">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Múltiplas Páginas (Até 5)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Blog Integrado
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Seção de Projetos/Portfólio
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Formulários de Contato Avançados
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Otimização para Google Meu Negócio
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    Gestão de LGPD
                  </span>
                </li>
              </ul>

              <div className="bg-surface-deep/50 rounded-xl p-4 mb-8 border border-white/5">
                <p className="font-label-md text-xs text-text-muted flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                    info
                  </span>
                  <span>
                    <strong>Nota de Manutenção:</strong> Inclui hospedagem edge
                    e atualizações de segurança automáticas.
                  </span>
                </p>
              </div>
            </div>

            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center font-label-md text-sm bg-primary text-on-primary py-4 rounded-xl shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:shadow-[0_0_30px_rgba(76,215,246,0.5)] transition-all font-bold mt-auto inline-block"
            >
              Selecionar Plano
            </a>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="max-w-3xl mx-auto mt-16" data-aos="fade-up">
          <div className="glass-panel border border-primary/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-center bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl">
                verified_user
              </span>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-headline-md text-lg text-on-surface mb-1 font-bold">
                100% Seu — Garantia de Propriedade
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Você é o dono do site e do código-fonte. Sem contratos de
                aprisionamento, sem letras miúdas. Segurança jurídica total para
                sua empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
