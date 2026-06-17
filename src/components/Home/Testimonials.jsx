import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 px-margin-page bg-surface-deep relative border-t border-white/5">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex text-secondary mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-grow mb-6">
              &ldquo;O site ficou incrível — moderno, elegante e representa
              perfeitamente o padrão do nosso ateliê. As vendas aumentaram
              visivelmente depois do lançamento.&rdquo;
            </p>
            <div className="flex items-center gap-3 border-t border-white/5 pt-6">
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
                  Glayde Ribeiro
                </p>
                <p className="font-body-md text-xs text-on-surface-variant">
                  Confeitaria Gourmet
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className="glass-panel rounded-3xl p-8 border border-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-primary/50 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex text-secondary mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-grow mb-6">
              &ldquo;Precisávamos de um site sóbrio e profissional para o
              escritório. A Rafael Tech entregou exatamente isso, dentro do
              prazo e com total transparência no processo.&rdquo;
            </p>
            <div className="flex items-center gap-3 border-t border-white/5 pt-6">
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
                  JSA Advogados
                </p>
                <p className="font-body-md text-xs text-on-surface-variant">
                  Escritório de Advocacia
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex text-secondary mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-grow mb-6">
              &ldquo;Além do design moderno, o que me surpreendeu foi a
              velocidade: meu site carrega instantaneamente. Meus clientes
              comentam isso sempre. Melhor investimento que fiz.&rdquo;
            </p>
            <div className="flex items-center gap-3 border-t border-white/5 pt-6">
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
                  Marcos Antunes
                </p>
                <p className="font-body-md text-xs text-on-surface-variant">
                  Barbearia Antunes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
