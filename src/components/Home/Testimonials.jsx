import React, { useRef, useEffect } from 'react';

const Testimonials = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const handleAutoScroll = () => {
      if (window.innerWidth >= 768) return; // Only on mobile
      const card = container.firstElementChild;
      if (!card) return;
      const cardWidth = card.offsetWidth + 24; // width + gap
      const originalWidth = cardWidth * testimonials.length;

      if (container.scrollLeft >= originalWidth - 10) {
        // Reset scroll position instantly to start
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = 0;
        // Scroll to the next card smoothly on the next tick
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth';
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }, 50);
      } else {
        container.style.scrollBehavior = 'smooth';
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };

    const interval = setInterval(handleAutoScroll, 4500); // 4.5s for testimonials since reading takes slightly longer
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      stars: 5,
      text: 'O site ficou incrível — moderno, elegante e representa perfeitamente o padrão do nosso ateliê. As vendas aumentaram visivelmente depois do lançamento.',
      name: 'Glayde Ribeiro',
      business: 'Confeitaria Gourmet'
    },
    {
      stars: 5,
      text: 'Precisávamos de um site sóbrio e profissional para o escritório. A Rafael Tech entregou exatamente isso, dentro do prazo e com total transparência no processo.',
      name: 'JSA Advogados',
      business: 'Escritório de Advocacia',
      highlighted: true
    },
    {
      stars: 5,
      text: 'Além do design moderno, o que me surpreendeu foi a velocidade: meu site carrega instantaneamente. Meus clientes comentam isso sempre. Melhor investimento que fiz.',
      name: 'Daniel Antunes',
      business: 'Barbearia Antunes'
    }
  ];

  return (
    <section className="py-24 px-margin-page bg-surface-slate relative border-t border-white/5">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Clientes Satisfeitos
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Resultados reais para negócios reais.
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth pb-6 -mx-[5vw] px-[5vw] md:mx-0 md:px-0 scrollbar-none"
        >
          {[...testimonials, ...testimonials].map((t, index) => {
            const isDuplicate = index >= testimonials.length;
            return (
              <div
                key={index}
                className={`w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center md:shrink md:snap-none glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  t.highlighted
                    ? 'border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-primary/50'
                    : 'border-white/10 hover:border-primary/30'
                } ${isDuplicate ? 'flex md:hidden' : 'flex'}`}
                data-aos="fade-up"
                data-aos-delay={100 * ((index % testimonials.length) + 1)}
              >
                <div>
                  <div className="flex text-secondary mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-white/5 pt-6 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-label-md text-sm text-on-surface font-bold">
                      {t.name}
                    </p>
                    <p className="font-body-md text-xs text-on-surface-variant">
                      {t.business}
                    </p>
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

export default Testimonials;
