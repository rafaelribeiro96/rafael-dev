/* eslint-disable react/prop-types */
import React from 'react';

const formatCurrency = (value) =>
  Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

const fallbackCta = (id) => {
  if (id === 'landing-page') return 'Quero uma landing page';
  if (id === 'site-institucional') return 'Quero um site institucional';
  if (id === 'projetos-personalizados') return 'Quero um projeto personalizado';
  return 'Iniciar projeto';
};

const PricingCard = ({ tier, ctaLink }) => {
  const {
    id,
    title,
    description,
    setupPrice,
    maintenancePrice,
    features = [],
    badge,
    highlighted,
    maintenanceNote,
    ctaText
  } = tier;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-200 md:p-10 ${
        highlighted
          ? 'z-10 border-2 border-primary shadow-[0_24px_60px_rgba(30,27,23,0.12)] lg:scale-[1.04]'
          : 'border-border-thin hover:border-primary/40 hover:shadow-[0_18px_44px_rgba(30,27,23,0.08)]'
      }`}
    >
      {badge && (
        <span
          className={`font-label-md text-[10px] uppercase tracking-[0.08em] ${
            highlighted
              ? 'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-white'
              : 'mb-5 inline-flex w-fit rounded-lg bg-surface-container-low px-3 py-1 text-primary'
          }`}
        >
          {badge}
        </span>
      )}

      <div>
        <h3 className="font-headline-md text-[22px] leading-8 text-on-surface">
          {title}
        </h3>
        <p className="mt-3 min-h-[72px] font-body-md text-[14px] leading-6 text-secondary">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <p className="font-body-md text-[13px] uppercase tracking-[0.05em] text-text-secondary">
          A partir de
        </p>
        <p className="mt-2 font-headline-md text-[34px] font-bold leading-[42px] text-on-surface">
          {formatCurrency(setupPrice)}
        </p>
        <p className="mt-2 font-body-md text-[13px] leading-5 text-secondary">
          + {formatCurrency(maintenancePrice)}/mes para hospedagem, manutencao e
          suporte.
        </p>
      </div>

      <ul className="mt-6 flex-grow space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 font-body-md text-[14px] leading-6 text-on-surface-variant"
          >
            <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
              done
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {maintenanceNote && (
        <p className="mt-6 rounded-xl bg-bg-secondary p-4 font-body-md text-[12px] leading-5 text-secondary">
          {maintenanceNote}
        </p>
      )}

      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`rt-button rt-button-full mt-8 ${
          highlighted ? 'rt-button-primary' : 'rt-button-secondary'
        }`}
      >
        {ctaText || fallbackCta(id)}
      </a>
    </article>
  );
};

const Pricing = ({ ctaLink, tiers = [] }) => {
  const activeTiers = tiers.filter((tier) => tier.active !== false);

  return (
    <section className="bg-bg-secondary px-margin-page py-24" id="planos">
      <div className="mx-auto max-w-container-max">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            Investimento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-md text-[17px] leading-[27px] text-secondary">
            Precos transparentes para projetos de alta demanda.
          </p>
          <p className="mx-auto mt-3 max-w-2xl font-body-md text-[15px] leading-6 text-secondary">
            Escolha o ponto de partida. O painel admin continua controlando
            precos, features, destaque e disponibilidade dos planos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {activeTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} ctaLink={ctaLink} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
