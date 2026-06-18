/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

const WHATSAPP_BASE = 'https://wa.me/5531991869943';

function buildWhatsappLink(whatsappMessage, fallbackLink) {
  if (!whatsappMessage) return fallbackLink;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappMessage)}`;
}

const Portfolio = ({ ctaLink, items = [] }) => {
  const projects = items.filter((project) => project.displayOn !== 'carousel');
  const carouselProjects = [...projects, ...projects];

  return (
    <section
      className="bg-[#1a1a1a] px-margin-page py-28 text-white md:py-32"
      id="portfolio"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div data-aos="fade-up">
            <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary-container">
              Projetos reais
            </span>
            <h2 className="font-headline-lg text-[34px] leading-[44px] text-white sm:text-headline-lg">
              Galeria de projetos
            </h2>
          </div>
          <p className="max-w-md font-body-md text-[17px] leading-[27px] text-white/65">
            Sites entregues, online e construidos para unir estetica premium,
            velocidade e autonomia de conteudo.
          </p>
        </div>

        <div
          className="-mx-margin-page overflow-hidden px-margin-page"
          data-aos="fade-up"
        >
          <div className="portfolio-marquee flex w-max gap-6">
            {carouselProjects.map((project, index) => {
              const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
              const whatsappLink = buildWhatsappLink(
                project.whatsappMessage,
                ctaLink
              );

              return (
                <article
                  key={`${project.id}-${index}`}
                  className="group w-[82vw] max-w-[560px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] sm:w-[520px]"
                  aria-hidden={index >= projects.length}
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
                  <div className="flex flex-col gap-6 p-7 md:p-8">
                    <div>
                      <p className="font-body-md text-[14px] leading-5 text-white/60">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-headline-md text-[26px] leading-9 text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 font-body-md text-[15px] leading-6 text-white/66">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={hasLiveUrl ? project.liveUrl : ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rt-button rt-button-primary flex-1"
                      >
                        {hasLiveUrl ? 'Visitar site' : 'Ver modelo'}
                      </a>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rt-button rt-button-secondary-inverse flex-1"
                      >
                        Quero um assim
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
