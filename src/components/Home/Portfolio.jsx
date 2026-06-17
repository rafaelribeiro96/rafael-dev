/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import Image from 'next/image';

const WHATSAPP_BASE = 'https://wa.me/5531991869943';

/**
 * Generates a WhatsApp link with a custom pre-filled message.
 * Falls back to the global ctaLink if no custom message is provided.
 */
function buildWhatsappLink(whatsappMessage, fallbackLink) {
  if (!whatsappMessage) return fallbackLink;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(whatsappMessage)}`;
}

/**
 * Portfolio component — Git-CMS driven.
 * Data comes from content/portfolio/*.json via getStaticProps in index.jsx.
 * To add/edit projects, update the JSON files in /content/portfolio.
 */
const Portfolio = ({ ctaLink, items = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Derive categories dynamically from the loaded items
  const categories = useMemo(() => {
    const unique = [...new Set(items.map((p) => p.category))];
    return ['Todos', ...unique];
  }, [items]);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? items
      : items.filter((project) => project.category === selectedCategory);

  return (
    <section
      className="py-24 px-margin-page bg-surface-slate relative border-y border-white/5 overflow-hidden"
      id="portfolio"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Projetos Reais
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            Portfólio de Projetos
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Sites entregues, online e gerando resultados para nossos clientes.
          </p>
        </div>

        {/* Filter Tabs — derived from JSON data */}
        <div
          className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 mb-12 pb-3 -mx-[5vw] px-[5vw] scrollbar-none w-[calc(100%+10vw)] md:w-auto md:mx-0 md:px-0 scroll-smooth"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-label-md text-sm transition-all duration-300 border shrink-0 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-primary/20 text-primary border-primary'
                  : 'bg-transparent text-on-surface-variant border-white/10 hover:border-primary/55 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid / Mobile Carousel */}
        <div
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth pb-6 -mx-[5vw] px-[5vw] md:mx-0 md:px-0 scrollbar-none"
          data-aos="fade-up"
        >
          {filteredProjects.map((project) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
            const whatsappLink = buildWhatsappLink(
              project.whatsappMessage,
              ctaLink
            );

            return (
              <div
                key={project.id}
                className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center md:shrink md:snap-none glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col h-full text-left"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-surface-deep p-6">
                  <Image
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                    src={project.image}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow bg-surface-slate">
                  <div className="mb-4">
                    <span className="text-xs text-primary font-bold tracking-widest uppercase bg-primary/10 px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl text-on-surface mb-3 font-bold">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-3 mt-auto w-full">
                    <a
                      href={hasLiveUrl ? project.liveUrl : ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center font-label-md text-sm bg-primary text-on-primary py-3.5 rounded-xl shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] transition-all font-semibold"
                    >
                      {hasLiveUrl ? 'Visitar Site' : 'Visitar Modelo'}
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center font-label-md text-sm bg-transparent border border-white/20 text-on-surface py-3.5 rounded-xl hover:border-primary hover:text-primary transition-colors inline-block"
                    >
                      Quero um parecido
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
