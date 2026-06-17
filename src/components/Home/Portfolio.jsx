/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: 'Glayde Ribeiro',
    category: 'Gastronomia',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-iEpo0UQhz37g5XL4MLHc0zXqJ3sa1M3LvEMHSrYdOiq1N_R_kWQwdJ6HSi04QY5HOlupKJljgPnLwTtdWNboW5Pn_DKHmnhqWespAA-1jjOWmtA8ayRtuQXYZZH-Wl8-NK6ehhYRYayUN7Sc8HBHi475OdP318E6F0pdlWBtyG38GG8w0BaIP0oo-JANEdGk2bkeuHPdAU2yY4Iuiq7Grc9d8k9HcYXlB8h9nL5K9XuHe7R3wHKVMD3br9SGMQVDLf1Eh6VLlKPh',
    description:
      'Website institucional premium e catálogo digital desenvolvido para Glayde Ribeiro, combinando estética de luxo, tipografia refinada e performance impecável.',
    link: 'https://www.glayderibeiro.com.br/'
  },
  {
    id: 2,
    title: 'JSA Advogados',
    category: 'Advocacia',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-iEpo0UQhz37g5XL4MLHc0zXqJ3sa1M3LvEMHSrYdOiq1N_R_kWQwdJ6HSi04QY5HOlupKJljgPnLwTtdWNboW5Pn_DKHmnhqWespAA-1jjOWmtA8ayRtuQXYZZH-Wl8-NK6ehhYRYayUN7Sc8HBHi475OdP318E6F0pdlWBtyG38GG8w0BaIP0oo-JANEdGk2bkeuHPdAU2yY4Iuiq7Grc9d8k9HcYXlB8h9nL5K9XuHe7R3wHKVMD3br9SGMQVDLf1Eh6VLlKPh',
    description:
      'Website institucional de elite para o escritório JSA Advogados. Arquitetura jurídica sóbria, carregamento Edge-First e design minimalista focado em captação.',
    link: 'https://jsaadvogados.com.br/'
  },
  {
    id: 3,
    title: 'Barbearia Antunes',
    category: 'Serviços',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDF73mJ2QIs-VPcu1W0cNTjS97VtCZDCEVYZJQQ9-KEj9Cpu_I3iYheXPOT0NImWkp80WAtEBf3sFLGYf9hRcyttyG0MrA5GXXs7NqM45NKEpDkH5l6EyMainUlIgpnGfrZuFRKvXkRD6jwgjbLjjGuFOSryI4OKd-0KsRsyzo_aSyjHG1qpWyFEUkimX_Wtf9mMJTe8h_RM-qY0VWNjsXji24gcUbODaHkFi9UZ-CnTcV22mUOHYUqAB3jNgbcIkQ0NkaUlI095V4C',
    description:
      'Plataforma web moderna para a Barbearia Antunes. Agendamento integrado em tempo real, catálogo de serviços e painel administrativo rápido (em desenvolvimento).',
    link: '#'
  }
];

const categories = ['Todos', 'Gastronomia', 'Advocacia', 'Serviços'];

const Portfolio = ({ ctaLink }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section
      className="py-24 px-margin-page bg-surface-slate relative border-y border-white/5"
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

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-label-md text-sm transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-primary/20 text-primary border-primary'
                  : 'bg-transparent text-on-surface-variant border-white/10 hover:border-primary/55 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col h-full text-left"
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
              <div className="p-8 flex flex-col flex-grow bg-surface-slate">
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
                    href={
                      project.link && project.link !== '#'
                        ? project.link
                        : ctaLink
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center font-label-md text-sm bg-primary text-on-primary py-3.5 rounded-xl shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] transition-all font-semibold"
                  >
                    {project.link && project.link !== '#'
                      ? 'Visitar Site'
                      : 'Visitar Modelo'}
                  </a>
                  <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center font-label-md text-sm bg-transparent border border-white/20 text-on-surface py-3.5 rounded-xl hover:border-primary hover:text-primary transition-colors inline-block"
                  >
                    Quero um parecido
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
