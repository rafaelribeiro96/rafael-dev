import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    stars: 5,
    text: 'O site ficou incrivel, moderno e representa perfeitamente o padrao do nosso atelie. As vendas aumentaram depois do lancamento.',
    name: 'Glayde Ribeiro',
    business: 'Confeitaria Gourmet'
  },
  {
    stars: 5,
    text: 'Precisavamos de um site sobrio e profissional para o escritorio. A SoftLuna entregou exatamente isso, dentro do prazo e com transparencia.',
    name: 'JSA Advogados',
    business: 'Escritorio de Advocacia',
    highlighted: true
  },
  {
    stars: 5,
    text: 'Alem do design moderno, o que surpreendeu foi a velocidade: meu site carrega instantaneamente. Melhor investimento que fiz.',
    name: 'Daniel Antunes',
    business: 'Barbearia Antunes'
  }
];

const Testimonials = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const handleAutoScroll = () => {
      if (window.innerWidth >= 768) return;
      const card = container.firstElementChild;
      if (!card) return;
      const cardWidth = card.offsetWidth + 24;
      const originalWidth = cardWidth * testimonials.length;

      if (container.scrollLeft >= originalWidth - 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = 0;
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

    const interval = setInterval(handleAutoScroll, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-bg-secondary px-margin-page py-24">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-surface-container-low px-3 py-1 font-label-md text-xs uppercase tracking-[0.05em] text-primary">
            Clientes satisfeitos
          </span>
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            O que dizem nossos clientes
          </h2>
        </div>

        <div
          ref={scrollerRef}
          className="-mx-[5vw] flex snap-x snap-mandatory gap-6 overflow-x-auto px-[5vw] pb-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-x-visible md:px-0"
        >
          {[...testimonials, ...testimonials].map((item, index) => {
            const isDuplicate = index >= testimonials.length;
            return (
              <article
                key={`${item.name}-${index}`}
                className={`w-[85vw] shrink-0 snap-center rounded-[24px] border bg-white p-8 md:w-auto md:shrink md:snap-none ${
                  item.highlighted
                    ? 'border-primary-container'
                    : 'border-border-thin'
                } ${isDuplicate ? 'flex md:hidden' : 'flex'} flex-col`}
              >
                <div className="mb-5 flex text-primary-container">
                  {Array.from({ length: item.stars }).map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-[15px] leading-6 text-secondary">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-8 border-t border-border-thin pt-5">
                  <p className="font-label-md text-[14px] text-on-surface">
                    {item.name}
                  </p>
                  <p className="mt-1 font-body-md text-[13px] text-secondary">
                    {item.business}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
