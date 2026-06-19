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

const domainBonus = 'Primeiro ano de domínio grátis';

const PricingCard = ({ tier, ctaLink, variant = 'default' }) => {
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
  const isHorizontal = variant === 'horizontal';

  return (
    <article
      className={`relative rounded-2xl border bg-white p-6 transition-all duration-200 md:p-8 ${
        highlighted
          ? 'z-10 border-2 border-primary shadow-[0_24px_60px_rgba(30,27,23,0.12)]'
          : 'border-border-thin hover:border-primary/40 hover:shadow-[0_18px_44px_rgba(30,27,23,0.08)]'
      } ${
        isHorizontal
          ? 'lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-8 lg:p-7 xl:gap-10'
          : 'flex h-full flex-col'
      }`}
    >
      <div
        className={
          isHorizontal
            ? 'flex min-h-full flex-col justify-between rounded-2xl bg-surface-container-low/60 p-5 md:p-6'
            : ''
        }
      >
        <div>
          {badge && (
            <span
              className={`font-label-md text-[10px] uppercase tracking-[0.08em] ${
                highlighted && !isHorizontal
                  ? 'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-white'
                  : 'mb-4 inline-flex w-fit rounded-lg bg-white px-3 py-1 text-primary ring-1 ring-primary-container/70'
              }`}
            >
              {badge}
            </span>
          )}
          <h3 className="font-headline-md text-[22px] leading-8 text-on-surface md:text-[24px]">
            {title}
          </h3>
          <p
            className={`mt-3 font-body-md text-[14px] leading-6 text-secondary ${
              isHorizontal ? 'max-w-[36rem]' : 'min-h-[72px]'
            }`}
          >
            {description}
          </p>
        </div>

        <div
          className={
            isHorizontal ? 'mt-6 border-t border-border-thin pt-5' : 'mt-7'
          }
        >
          <p className="font-body-md text-[13px] uppercase tracking-[0.05em] text-text-secondary">
            A partir de
          </p>
          <p className="mt-2 font-headline-md text-[30px] font-bold leading-[38px] text-on-surface md:text-[34px] md:leading-[42px]">
            {formatCurrency(setupPrice)}
          </p>
          <p className="mt-2 max-w-sm font-body-md text-[13px] leading-5 text-secondary">
            + {formatCurrency(maintenancePrice)}/mês para hospedagem, manutenção
            e suporte.
          </p>
        </div>
      </div>

      <div
        className={
          isHorizontal ? 'mt-7 lg:mt-0' : 'mt-6 flex flex-grow flex-col'
        }
      >
        <ul
          className={`space-y-3 ${
            isHorizontal
              ? 'lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-3 lg:space-y-0'
              : ''
          }`}
        >
          <li className="flex items-start gap-3 rounded-xl border border-primary-container/50 bg-surface-container-low px-4 py-3 font-body-md text-[14px] font-medium leading-6 text-on-surface">
            <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
              language
            </span>
            <span>{domainBonus}</span>
          </li>
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
          <p
            className={`rounded-xl bg-bg-secondary p-4 font-body-md text-[12px] leading-5 text-secondary ${
              isHorizontal ? 'mt-4 lg:max-w-[30rem]' : 'mt-5'
            }`}
          >
            {maintenanceNote}
          </p>
        )}

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`rt-button rt-button-full mt-7 ${
            highlighted ? 'rt-button-primary' : 'rt-button-secondary'
          } ${isHorizontal ? 'lg:max-w-[300px]' : ''}`}
        >
          {ctaText || fallbackCta(id)}
        </a>
      </div>
    </article>
  );
};

const Pricing = ({ ctaLink, tiers = [] }) => {
  const activeTiers = tiers.filter((tier) => tier.active !== false);
  const landingPage = activeTiers.find((tier) => tier.id === 'landing-page');
  const institutional = activeTiers.find(
    (tier) => tier.id === 'site-institucional'
  );
  const customProject = activeTiers.find(
    (tier) => tier.id === 'projetos-personalizados'
  );
  const topTiers = [landingPage, institutional].filter(Boolean);

  return (
    <section
      className="bg-bg-secondary px-margin-page py-20 md:py-24"
      id="planos"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            Investimento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-md text-[17px] leading-[27px] text-secondary">
            Dois pontos de partida claros para colocar sua presença digital no
            ar com performance, design e painel editavel.
          </p>
          <p className="mx-auto mt-3 max-w-2xl font-body-md text-[15px] leading-6 text-secondary">
            Projetos com regras de negócio, automações ou integrações entram em
            escopo personalizado, com briefing técnico antes do orçamento final.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {topTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} ctaLink={ctaLink} />
          ))}
        </div>

        {customProject && (
          <div className="mt-6">
            <PricingCard
              tier={customProject}
              ctaLink={ctaLink}
              variant="horizontal"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
