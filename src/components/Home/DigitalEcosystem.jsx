import React from 'react';

const DigitalEcosystem = () => {
  return (
    <section
      className="py-24 px-margin-page bg-surface-slate relative border-t border-white/5"
      id="servicos"
    >
      <div className="max-w-container-max mx-auto text-left">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Por que nos escolher
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-white font-bold mb-4">
            Tudo que Seu Negócio Precisa para Dominar o Digital
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Não entregamos apenas um site bonito. Entregamos uma máquina de
            geração de clientes, integrada e pronta para crescer com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div
            className="glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl">
                storefront
              </span>
            </div>
            <h3 className="font-headline-md text-lg text-on-surface mb-2 font-bold">
              Google Meu Negócio
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              Conquiste clientes na sua região exatamente quando eles buscam
              pelo seu serviço no Google.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl">
                psychology
              </span>
            </div>
            <h3 className="font-headline-md text-lg text-on-surface mb-2 font-bold">
              Pronto para IA e ChatGPT
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              Seu negócio aparece nas respostas do ChatGPT, Gemini e novas
              buscas com IA — visibilidade onde a concorrência ainda não chegou.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl">
                rocket_launch
              </span>
            </div>
            <h3 className="font-headline-md text-lg text-on-surface mb-2 font-bold">
              Velocidade que Converte
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              Sites ultrarrápidos e de alta performance. O Google prioriza sites
              rápidos — e seus clientes também.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className="glass-panel rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl">
                edit_document
              </span>
            </div>
            <h3 className="font-headline-md text-lg text-on-surface mb-2 font-bold">
              Autonomia Total
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              Você mesmo atualiza textos, fotos e preços pelo celular, em
              segundos, sem pagar ninguém para isso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalEcosystem;
