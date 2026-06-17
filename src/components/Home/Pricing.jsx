/* eslint-disable react/prop-types */
import React from 'react';

/**
 * Pricing component — Git-CMS driven.
 * Data comes from content/pricing/*.json via getStaticProps in index.jsx.
 * To add/edit plans, update the JSON files in /content/pricing.
 */
const PricingCard = ({ tier, ctaLink, isSolo }) => {
  const {
    title,
    setupPrice,
    maintenancePrice,
    features = [],
    badge,
    highlighted,
    maintenanceNote
  } = tier;

  return (
    <div
      className={`glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border transition-all duration-300 relative flex flex-col justify-between ${
        highlighted
          ? 'border-primary/50 shadow-[0_0_40px_rgba(6,182,212,0.15)] bg-gradient-to-b from-surface-slate to-surface-deep'
          : 'border-white/10 hover:border-primary/30'
      } ${isSolo ? 'md:col-span-2 lg:col-span-1' : ''}`}
      data-aos="fade-up"
    >
      {badge && (
        <div className="absolute -top-4 right-8">
          <span className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md text-xs px-4 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg">
            {badge}
          </span>
        </div>
      )}

      <div
        className={
          isSolo
            ? 'grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-6 w-full items-stretch'
            : 'flex flex-col h-full justify-between'
        }
      >
        {/* Left side (pricing info) */}
        <div className="w-full flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">
              {title}
            </h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-body-md text-sm text-text-muted">
                A partir de
              </span>
              <span className="font-headline-xl text-4xl text-primary font-bold">
                R$ {setupPrice ? setupPrice.toLocaleString('pt-BR') : '0'}
              </span>
              <span className="font-body-md text-sm text-text-muted">
                (Setup)
              </span>
            </div>
            <p className="font-label-md text-secondary text-sm font-semibold">
              + R$ {maintenancePrice}/mês
            </p>
          </div>

          {/* CTA for horizontal layout on md (solo) */}
          <div
            className={
              isSolo ? 'hidden md:block lg:hidden mt-auto pt-4' : 'hidden'
            }
          >
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center font-label-md text-sm py-4 rounded-xl font-bold inline-block ${
                highlighted
                  ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:shadow-[0_0_30px_rgba(76,215,246,0.5)]'
                  : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10'
              }`}
            >
              Selecionar Plano
            </a>
          </div>
        </div>

        {/* Right side (features) */}
        <div className="w-full flex flex-col justify-between">
          <div className="flex-grow">
            <ul className="space-y-4 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {maintenanceNote && (
              <div className="bg-surface-deep/50 rounded-xl p-4 mb-6 border border-white/5">
                <p className="font-label-md text-xs text-text-muted flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                    info
                  </span>
                  <span>
                    <strong>Nota de Manutenção:</strong> {maintenanceNote}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Standard CTA */}
          <div
            className={isSolo ? 'block md:hidden lg:block w-full' : 'w-full'}
          >
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center font-label-md text-sm py-4 rounded-xl font-bold inline-block ${
                highlighted
                  ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:shadow-[0_0_30px_rgba(76,215,246,0.5)]'
                  : 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10'
              }`}
            >
              Selecionar Plano
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = ({ ctaLink, tiers = [] }) => {
  // Only show active tiers
  const activeTiers = tiers.filter((tier) => tier.active !== false);
  const count = activeTiers.length;

  // Responsive grids based on count
  let gridClasses =
    'grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch';
  if (count === 3) {
    gridClasses =
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch';
  } else if (count === 4) {
    gridClasses =
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch';
  } else if (count === 1) {
    gridClasses = 'grid grid-cols-1 gap-8 max-w-md mx-auto items-stretch';
  }

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
        </div>

        <div className={gridClasses}>
          {activeTiers.map((tier, index) => {
            // The 3rd card is solo if we have exactly 3 cards
            const isSolo = count === 3 && index === 2;
            return (
              <PricingCard
                key={tier.id}
                tier={tier}
                ctaLink={ctaLink}
                isSolo={isSolo}
              />
            );
          })}
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
