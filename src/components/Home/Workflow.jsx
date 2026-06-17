import React from 'react';

const Workflow = () => {
  return (
    <section className="py-24 px-margin-page bg-surface-slate relative">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Processo Simples
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            Do Zero ao Ar em até 15 Dias Úteis
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Um processo ágil e transparente — você acompanha cada etapa e aprova
            antes de publicar.
          </p>
        </div>

        <div className="relative">
          {/* Line connecting steps (desktop) */}
          <div className="hidden md:block absolute top-10 left-[15%] w-[70%] h-[2px] bg-white/10 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 mx-auto bg-surface-slate border border-white/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 rounded-2xl flex items-center justify-center mb-6 relative transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined text-3xl text-primary">
                  handshake
                </span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-3 font-bold">
                1. Briefing &amp; Estratégia
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant max-w-xs mx-auto">
                Uma conversa para entender seu negócio, público-alvo e metas.
                Definimos juntos o projeto ideal.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 mx-auto bg-surface-slate border border-white/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 rounded-2xl flex items-center justify-center mb-6 relative transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined text-3xl text-primary">
                  design_services
                </span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-3 font-bold">
                2. Design &amp; Desenvolvimento
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant max-w-xs mx-auto">
                Design exclusivo e código de alta performance. Você aprova o
                layout antes de entrar em produção.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 mx-auto bg-surface-slate border border-white/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 rounded-2xl flex items-center justify-center mb-6 relative transform group-hover:-translate-y-1">
                <span className="material-symbols-outlined text-3xl text-primary">
                  rocket_launch
                </span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-3 font-bold">
                3. Lançamento &amp; Suporte
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant max-w-xs mx-auto">
                Site no ar, otimizado para o Google, com treinamento para você
                gerenciar sozinho. Suporte contínuo incluso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
