/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';

const Hero = ({ ctaLink }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-margin-page py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-surface-deep to-surface-deep -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10"></div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 z-10 text-left" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-2">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              public
            </span>
            Atendimento em Todo o Brasil
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-headline-xl text-on-surface leading-tight font-extrabold tracking-tighter">
            Sites Profissionais que{' '}
            <span className="text-gradient">
              Vendem, Ranqueiam e Impressionam.
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Criamos sites institucionais e landing pages com tecnologia de
            ponta. Carregamento ultra-rápido, design exclusivo que converte e
            você mesmo atualiza o conteúdo — sem depender de ninguém.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md bg-primary text-on-primary px-8 py-4 rounded-full shadow-[0_0_20px_rgba(76,215,246,0.4)] hover:shadow-[0_0_30px_rgba(76,215,246,0.6)] hover:-translate-y-1 transition-all duration-300 transform font-semibold text-center"
            >
              Solicitar Orçamento Grátis
            </a>
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('servicos')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-label-md text-label-md border border-white/20 text-on-surface px-8 py-4 rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 text-center"
            >
              Ver Soluções
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-secondary text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-sm font-medium">Alto Desempenho</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-secondary text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                schedule
              </span>
              <span className="text-sm font-medium">
                Entrega em até 15 dias úteis
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-secondary text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock
              </span>
              <span className="text-sm font-medium">Você é dono do código</span>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0"
          data-aos="fade-left"
        >
          <div className="relative w-full max-w-[450px]">
            <div className="absolute -inset-2 bg-gradient-to-b from-primary/30 to-transparent rounded-[2rem] blur-xl opacity-50 pointer-events-none"></div>
            <Image
              alt="Rafael Tech Dashboard and Mobile Mockup"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-700 rounded-2xl border border-primary/20 bg-surface/40 backdrop-blur-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-iEpo0UQhz37g5XL4MLHc0zXqJ3sa1M3LvEMHSrYdOiq1N_R_kWQwdJ6HSi04QY5HOlupKJljgPnLwTtdWNboW5Pn_DKHmnhqWespAA-1jjOWmtA8ayRtuQXYZZH-Wl8-NK6ehhYRYayUN7Sc8HBHi475OdP318E6F0pdlWBtyG38GG8w0BaIP0oo-JANEdGk2bkeuHPdAU2yY4Iuiq7Grc9d8k9HcYXlB8h9nL5K9XuHe7R3wHKVMD3br9SGMQVDLf1Eh6VLlKPh"
              width={500}
              height={450}
              priority={true}
            />

            {/* Float Performance badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-surface-container-high border border-primary/30 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-4 border-secondary flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">A+</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-text-muted font-label-md">
                  Performance
                </span>
                <span className="text-xs text-on-surface font-bold">
                  Otimizada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
