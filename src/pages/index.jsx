import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

const projectsData = [
  {
    id: 1,
    title: 'Glayde Ribeiro',
    category: 'Clínicas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-iEpo0UQhz37g5XL4MLHc0zXqJ3sa1M3LvEMHSrYdOiq1N_R_kWQwdJ6HSi04QY5HOlupKJljgPnLwTtdWNboW5Pn_DKHmnhqWespAA-1jjOWmtA8ayRtuQXYZZH-Wl8-NK6ehhYRYayUN7Sc8HBHi475OdP318E6F0pdlWBtyG38GG8w0BaIP0oo-JANEdGk2bkeuHPdAU2yY4Iuiq7Grc9d8k9HcYXlB8h9nL5K9XuHe7R3wHKVMD3br9SGMQVDLf1Eh6VLlKPh',
    description:
      'Website institucional premium e portfólio digital desenvolvido para Glayde Ribeiro, combinando estética de luxo, tipografia refinada e performance impecável.',
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
  },
  {
    id: 4,
    title: 'Confeitaria Gourmet',
    category: 'Gastronomia',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfd4npzGshsHqHWBdOJs4CCSr6tUVh6JK_5Hpbr0eNmezx-8ST7dOJKWprDGM5BiEEQBxjELFfEf5I5hJhYkKMJJu4WQqb-9AGbYTKex83e2LLgtGyO61zJ6-V2m2adX_352nblTNK8LGdqMGq_yy9WEkaHgDCkMU_su2pIYwPOP9BRcBem0c39mVqIHNoKb-LEAIiy5fKG18M6mrunmlK69bKDYyotZlhYw07dUMkCldLZg5ko92c2sRmKIXUEp2l-lQJWbZ29SQS',
    description:
      'Layout visualmente rico, otimizado para expor produtos e integrar pedidos online de confeitarias e restaurantes.',
    link: '#'
  }
];

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const categories = [
    'Todos',
    'Clínicas',
    'Advocacia',
    'Gastronomia',
    'Serviços'
  ];

  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Rafael%20Tech%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';

  return (
    <div className="bg-surface-deep text-on-surface font-body-lg min-h-screen">
      <Head>
        <title>Rafael Tech - Presença Digital de Elite</title>
        <meta
          name="description"
          content="Tenha um site ultrarrápido que carrega em menos de 1 segundo. Atraia mais clientes com um design profissional e fácil de usar, onde você mesmo altera o conteúdo sem complicação."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center px-margin-page py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-surface-deep to-surface-deep -z-10"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10"></div>

          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 z-10 text-left" data-aos="fade-right">
              <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-headline-xl text-on-surface leading-tight font-extrabold tracking-tighter">
                Sua Presença Digital com <br className="hidden md:block" />
                <span className="text-gradient">
                  Desempenho Máximo e Segurança de Elite.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Desenvolvemos sites institucionais e landing pages exclusivas.
                Performance otimizada para o Google, código limpo e autonomia
                total para você atualizar seu conteúdo em segundos.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-md text-label-md bg-primary text-on-primary px-8 py-4 rounded-full shadow-[0_0_20px_rgba(76,215,246,0.4)] hover:shadow-[0_0_30px_rgba(76,215,246,0.6)] hover:-translate-y-1 transition-all duration-300 transform font-semibold text-center"
                >
                  Falar com Especialista
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
                  Conhecer Soluções
                </a>
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

                {/* Float PageSpeed score badge */}
                <div className="absolute -top-4 -right-4 bg-surface-container-high border border-primary/30 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-4 border-secondary flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm">
                      100
                    </span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs text-text-muted font-label-md">
                      PageSpeed
                    </span>
                    <span className="text-xs text-on-surface font-bold">
                      Insights
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIGITAL ECOSYSTEM SECTION */}
        <section
          className="py-24 px-margin-page bg-surface-slate relative border-t border-white/5"
          id="servicos"
        >
          <div className="max-w-container-max mx-auto text-left">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-white font-bold mb-4">
                O Ecossistema Rafael Tech
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
                Tudo que você precisa para dominar o digital, integrado em uma
                única solução premium.
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
                  AI Search Ready
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Posicione sua marca nas respostas das novas tecnologias de IA
                  e saia na frente da concorrência.
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
                  Desempenho Extremo
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Velocidade que converte. Não perca vendas com sites lentos que
                  frustram os visitantes.
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
                  Gestão na palma da sua mão. Atualize informações
                  instantaneamente sem depender de terceiros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX SECTION */}
        <section
          className="py-24 px-margin-page bg-surface-deep relative"
          id="arquitetura"
        >
          <div className="max-w-container-max mx-auto text-left">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
                Sites Antigos e Lentos x Sites Modernos Rafael Tech
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto">
                A diferença tecnológica que define o sucesso do seu negócio
                online.
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
                      Sem Plugins ou Servidor Tradicional (Segurança
                      impenetrável)
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

        {/* PORTFOLIO SECTION */}
        <section
          className="py-24 px-margin-page bg-surface-slate relative border-y border-white/5"
          id="portfolio"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
                Portfólio de Projetos
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Aplicações reais de alto impacto visual e performance extrema.
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

        {/* WORKFLOW SECTION */}
        <section className="py-24 px-margin-page bg-surface-deep relative">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
                Como Funciona
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Um processo ágil e transparente para colocar sua empresa no
                topo.
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
                    Entendemos seu negócio e objetivos para planejar a melhor
                    estratégia digital.
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
                    2. Criação &amp; Desenvolvimento
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant max-w-xs mx-auto">
                    Design premium e tecnologia avançada aplicada pela nossa
                    equipe.
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
                    3. Entrega &amp; Otimização
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant max-w-xs mx-auto">
                    Seu site no ar com qualidade, velocidade extrema e
                    totalmente otimizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES & PRICING */}
        <section
          className="py-24 px-margin-page bg-surface-slate relative border-t border-white/5"
          id="planos"
        >
          <div className="max-w-container-max mx-auto text-left">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
                Planos e Preços
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Soluções completas com tecnologia de ponta para negócios sérios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch">
              {/* Plan 1 */}
              <div
                className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative"
                data-aos="fade-right"
              >
                <div className="mb-8">
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">
                    Landing Page de Conversão
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-body-md text-sm text-text-muted">
                      A partir de
                    </span>
                    <span className="font-headline-xl text-4xl text-primary font-bold">
                      R$ 750
                    </span>
                    <span className="font-body-md text-sm text-text-muted">
                      (Setup)
                    </span>
                  </div>
                  <p className="font-label-md text-secondary text-sm font-semibold">
                    + R$ 40/mês
                  </p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Design Exclusivo e Focado em Conversão
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Copywriting Persuasivo
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Integração CRM / WhatsApp
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        PageSpeed 100 Garantido
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Gestor de Conteúdo (CMS)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Domínio Grátis por 1 Ano
                      </span>
                    </li>
                  </ul>

                  <div className="bg-surface-deep/50 rounded-xl p-4 mb-8 border border-white/5">
                    <p className="font-label-md text-xs text-text-muted flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                        info
                      </span>
                      <span>
                        <strong>Nota de Manutenção:</strong> Inclui hospedagem
                        edge e atualizações de segurança automáticas.
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-label-md text-sm bg-transparent border-2 border-primary text-primary py-4 rounded-xl hover:bg-primary/10 transition-colors font-bold mt-auto inline-block"
                >
                  Selecionar Plano
                </a>
              </div>

              {/* Plan 2 */}
              <div
                className="glass-panel rounded-3xl p-8 md:p-10 border border-primary/50 relative flex flex-col h-full shadow-[0_0_40px_rgba(6,182,212,0.15)] transform md:-translate-y-4 bg-gradient-to-b from-surface-slate to-surface-deep"
                data-aos="fade-left"
              >
                <div className="absolute -top-4 right-8">
                  <span className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md text-xs px-4 py-1.5 rounded-full uppercase tracking-wider font-bold shadow-lg">
                    Mais Popular
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">
                    Site Institucional Completo
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-body-md text-sm text-text-muted">
                      A partir de
                    </span>
                    <span className="font-headline-xl text-4xl text-primary font-bold">
                      R$ 1.500
                    </span>
                    <span className="font-body-md text-sm text-text-muted">
                      (Setup)
                    </span>
                  </div>
                  <p className="font-label-md text-secondary text-sm font-semibold">
                    + R$ 75/mês
                  </p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Múltiplas Páginas (Até 5)
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Blog Integrado
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Seção de Projetos/Portfólio
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Formulários de Contato Avançados
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Otimização para GMN
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      <span className="font-body-md text-sm text-on-surface-variant">
                        Gestão de LGPD
                      </span>
                    </li>
                  </ul>

                  <div className="bg-surface-deep/50 rounded-xl p-4 mb-8 border border-white/5">
                    <p className="font-label-md text-xs text-text-muted flex items-start gap-2">
                      <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                        info
                      </span>
                      <span>
                        <strong>Nota de Manutenção:</strong> Inclui hospedagem
                        edge e atualizações de segurança automáticas.
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-label-md text-sm bg-primary text-on-primary py-4 rounded-xl shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:shadow-[0_0_30px_rgba(76,215,246,0.5)] transition-all font-bold mt-auto inline-block"
                >
                  Selecionar Plano
                </a>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="max-w-3xl mx-auto mt-16" data-aos="fade-up">
              <div className="glass-panel border border-primary/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-center bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    verified_user
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-headline-md text-lg text-on-surface mb-1 font-bold">
                    Propriedade Garantida
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Você é o dono oficial do seu site e do código. Sem
                    pegadinhas contratuais, segurança jurídica total para sua
                    empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
