/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ANALYTICS_EVENTS, trackEvent } from 'src/lib/analytics';

const WHATSAPP_BASE = 'https://wa.me/5531991869943';

function buildWhatsappLink(whatsappMessage, fallbackLink) {
  if (!whatsappMessage) return fallbackLink;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappMessage)}`;
}

const Portfolio = ({ ctaLink, items = [] }) => {
  const projects = items.filter((project) => project.displayOn !== 'carousel');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const scrollToIndex = useCallback((index, behavior = 'smooth') => {
    const container = scrollerRef.current;
    const firstCard = container?.querySelector('[data-carousel-card]');
    if (!container || !firstCard) return;

    const gap = 24;
    const cardWidth = firstCard.getBoundingClientRect().width + gap;
    container.scrollTo({ left: cardWidth * index, behavior });
  }, []);

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleManualNavigation = (direction) => {
    if (projects.length <= 1) return;

    trackEvent(ANALYTICS_EVENTS.PORTFOLIO_CAROUSEL_CONTROL_CLICK, {
      direction,
      currentIndex: activeIndex + 1,
      totalProjects: projects.length
    });

    setIsPaused(true);
    setActiveIndex((current) => {
      if (direction === 'next') return (current + 1) % projects.length;
      return (current - 1 + projects.length) % projects.length;
    });

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6500);
  };

  return (
    <section
      className="bg-[#1a1a1a] px-margin-page py-20 text-white md:py-24"
      id="portfolio"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div data-aos="fade-up">
            <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary-container">
              Serviços realizados
            </span>
            <h2 className="font-headline-lg text-[34px] leading-[44px] text-white sm:text-headline-lg">
              Galeria de projetos
            </h2>
          </div>
          <p className="max-w-md font-body-md text-[16px] leading-[26px] text-white/65">
            Portfólio de serviços com visual sob medida, carregamento rápido e
            caminho direto para o lead pedir algo parecido.
          </p>
        </div>

        <div className="-mx-margin-page px-margin-page" data-aos="fade-up">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-hidden scroll-smooth"
            aria-live="polite"
          >
            {projects.map((project, index) => {
              const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
              const whatsappLink = buildWhatsappLink(
                project.whatsappMessage,
                ctaLink
              );

              return (
                <article
                  key={project.id}
                  data-carousel-card
                  className="group w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:w-[390px] lg:w-[410px]"
                  aria-current={activeIndex === index}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                      alt={project.title}
                      src={project.image}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col gap-5 p-5 md:p-6">
                    <div>
                      <p className="font-body-md text-[14px] leading-5 text-white/60">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-headline-md text-[22px] leading-8 text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 font-body-md text-[14px] leading-6 text-white/66">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={hasLiveUrl ? project.liveUrl : ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent(ANALYTICS_EVENTS.PORTFOLIO_LIVE_CLICK, {
                            projectId: project.id,
                            projectTitle: project.title,
                            category: project.category,
                            liveUrl: hasLiveUrl ? project.liveUrl : undefined
                          })
                        }
                        className="rt-button rt-button-primary flex-1"
                      >
                        {hasLiveUrl ? 'Visitar site' : 'Ver modelo'}
                      </a>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent(
                            ANALYTICS_EVENTS.PORTFOLIO_WHATSAPP_CLICK,
                            {
                              projectId: project.id,
                              projectTitle: project.title,
                              category: project.category
                            }
                          )
                        }
                        className="rt-button rt-button-secondary-inverse flex-1"
                      >
                        Quero um site parecido
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {projects.length > 1 && (
            <div className="mt-7 flex items-center justify-between gap-4">
              <div className="flex gap-2" aria-label="Controles do portfólio">
                <button
                  type="button"
                  onClick={() => handleManualNavigation('prev')}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-primary-container hover:text-primary-container"
                  aria-label="Projeto anterior"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    arrow_back
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleManualNavigation('next')}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-primary-container hover:text-primary-container"
                  aria-label="Próximo projeto"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              <p className="font-label-md text-[11px] uppercase tracking-[0.06em] text-white/45">
                {activeIndex + 1} / {projects.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
