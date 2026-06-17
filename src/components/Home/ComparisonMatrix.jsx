import React from 'react';

const ComparisonMatrix = () => {
  return (
    <section
      className="py-24 px-margin-page bg-surface-deep relative"
      id="arquitetura"
    >
      <div className="max-w-container-max mx-auto text-left">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Comparativo
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            WordPress Lento vs. Site Rafael Tech
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto">
            Cada segundo de lentidão custa clientes. Veja a diferença que a
            tecnologia certa faz para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WordPress Card */}
          <div
            className="glass-panel p-8 md:p-10 rounded-3xl border border-error/20 hover:border-error/40 transition-colors relative overflow-hidden group"
            data-aos="fade-right"
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[200px] text-error">
                warning
              </span>
            </div>
            <h3 className="font-headline-md text-2xl text-on-error-container mb-8 flex items-center gap-3 font-bold">
              <span className="material-symbols-outlined text-error">
                dangerous
              </span>
              O Site WordPress Lento
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-error text-sm">
                    close
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface-variant">
                  Carregamento &gt; 5s (Penaliza SEO e espanta clientes)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-error text-sm">
                    close
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface-variant">
                  Plugins Vulneráveis (Risco de invasões e lentidão)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-error text-sm">
                    close
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface-variant">
                  Manutenção Constante (Quebra ao atualizar)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-error text-sm">
                    close
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface-variant">
                  Painel Complicado (Difícil de usar sozinho)
                </span>
              </li>
            </ul>
          </div>

          {/* Rafael Tech Card */}
          <div
            className="glass-panel p-8 md:p-10 rounded-3xl border border-primary/45 shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.25)] transition-all duration-500 relative overflow-hidden group transform hover:-translate-y-2 bg-gradient-to-br from-surface-slate to-surface-deep"
            data-aos="fade-left"
          >
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[200px] text-primary">
                rocket_launch
              </span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-8 flex items-center gap-3 font-bold">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              A Tecnologia Edge-First Rafael Tech
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">
                    done
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface font-semibold">
                  Carregamento &lt; 1s (Garantido para conversão máxima)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">
                    done
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface font-semibold">
                  Sem Plugins ou Servidor Tradicional (Segurança impenetrável)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">
                    done
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface font-semibold">
                  Zero Manutenção Técnica (Foque no seu negócio)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">
                    done
                  </span>
                </div>
                <span className="font-body-md text-sm sm:text-base text-on-surface font-semibold">
                  Gestor de Conteúdo Simples (Edite com facilidade)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonMatrix;
