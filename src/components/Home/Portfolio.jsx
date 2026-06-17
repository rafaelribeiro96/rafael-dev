/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragMoved = useRef(false);

  // Track viewport size dynamically
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const filteredProjects = useMemo(() => {
    // Filter out target platforms based on viewport
    return items.filter((project) => {
      if (isDesktop) {
        return project.displayOn !== 'carousel';
      } else {
        return project.displayOn !== 'desktop';
      }
    });
  }, [items, isDesktop]);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container || isHovered || isDragging) return;

    const handleAutoScroll = () => {
      const card = container.firstElementChild;
      if (!card) return;
      // Get standard gap (32px on desktop because of md:gap-8, 24px on mobile)
      const gap = window.innerWidth >= 768 ? 32 : 24;
      const cardWidth = card.offsetWidth + gap;
      const originalWidth = cardWidth * filteredProjects.length;

      if (container.scrollLeft >= originalWidth - 10) {
        // Reset scroll position instantly to start
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = 0;
        // Scroll to the next card smoothly on the next tick
        setTimeout(() => {
          if (!scrollerRef.current) return;
          container.style.scrollBehavior = 'smooth';
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }, 50);
      } else {
        container.style.scrollBehavior = 'smooth';
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };

    const interval = setInterval(handleAutoScroll, 4000);
    return () => clearInterval(interval);
  }, [filteredProjects, isHovered, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragMoved.current = false;
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    if (scrollerRef.current) {
      scrollerRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed
    if (Math.abs(walk) > 5) {
      dragMoved.current = true;
    }
    scrollerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleLinkClick = (e) => {
    if (dragMoved.current) {
      e.preventDefault();
    }
  };

  // Triple the project array to ensure seamless infinite looping marquee
  const loopList = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    return [...filteredProjects, ...filteredProjects, ...filteredProjects];
  }, [filteredProjects]);

  return (
    <section
      className="py-24 px-margin-page bg-surface-deep relative border-y border-white/5 overflow-hidden select-none"
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

        {/* Project Infinite Drag Carousel */}
        <div
          ref={scrollerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseLeaveOrUp();
          }}
          onMouseEnter={() => setIsHovered(true)}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mx-[5vw] px-[5vw] md:mx-0 md:px-0 scrollbar-none cursor-grab active:cursor-grabbing"
          data-aos="fade-up"
        >
          {loopList.map((project, index) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
            const whatsappLink = buildWhatsappLink(
              project.whatsappMessage,
              ctaLink
            );

            return (
              <div
                key={`${project.id}-${index}`}
                className="w-[85vw] sm:w-[350px] md:w-[380px] shrink-0 snap-center glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col h-full text-left"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-surface-deep">
                  <Image
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                    src={project.image}
                    width={400}
                    height={300}
                    draggable={false}
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
                      onClick={handleLinkClick}
                      className="w-full text-center font-label-md text-sm bg-primary text-on-primary py-3.5 rounded-xl shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] transition-all font-bold uppercase tracking-wider"
                    >
                      {hasLiveUrl ? 'VISITAR SITE' : 'VISITAR MODELO'}
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                      className="w-full text-center font-label-md text-sm bg-transparent border border-white/20 text-on-surface py-3.5 rounded-xl hover:border-primary hover:text-primary transition-colors inline-block uppercase tracking-wider font-bold"
                    >
                      QUERO UM SITE ASSIM
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
