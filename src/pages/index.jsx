import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

// Subcomponents
import Hero from 'src/components/Home/Hero';
import DigitalEcosystem from 'src/components/Home/DigitalEcosystem';
import ComparisonMatrix from 'src/components/Home/ComparisonMatrix';
import Portfolio from 'src/components/Home/Portfolio';
import Testimonials from 'src/components/Home/Testimonials';
import Workflow from 'src/components/Home/Workflow';
import Pricing from 'src/components/Home/Pricing';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const ctaLink =
    'https://wa.me/5531991869943?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Rafael%20Tech%20para%20alavancar%20minha%20presen%C3%A7a%20digital.';

  return (
    <div className="bg-surface-deep text-on-surface font-body-lg min-h-screen">
      <Head>
        <title>
          Rafael Tech | Sites Profissionais de Alta Performance para Empresas
        </title>
        <meta
          name="description"
          content="Rafael Tech cria sites profissionais e landing pages de alta performance para empresas em Belo Horizonte e todo o Brasil. Sites que carregam em menos de 1s, dominam o Google e convertem visitantes em clientes. Orçamento gratuito."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main className="pt-20">
        <Hero ctaLink={ctaLink} />
        <DigitalEcosystem />
        <ComparisonMatrix />
        <Portfolio ctaLink={ctaLink} />
        <Testimonials />
        <Workflow />
        <Pricing ctaLink={ctaLink} />
      </main>

      <Footer />
    </div>
  );
};

export default Main;
