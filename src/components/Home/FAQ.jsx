/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FAQ = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultFaqItems = [
    {
      question: 'Quanto custa um site profissional?',
      answer:
        'Os valores variam conforme o tipo e a complexidade do projeto:\n\n• Landing Page: a partir de R$ 749,00. Uma única página de alta performance focada em conversão direta.\n• Site Institucional Completo: a partir de R$ 1.299,00. Ideal para consolidar a presença digital da sua empresa com várias páginas.\n• Projetos Personalizados (E-commerce, CRM, Agendamentos e Reservas): a partir de R$ 2.499,00. Sistemas robustos e sob medida.\n\nO orçamento final é feito sob medida após entendermos o seu negócio. Fale comigo pelo WhatsApp e te respondo no mesmo dia.'
    },
    {
      question: 'Qual a diferença entre landing page e site institucional?',
      answer:
        'A principal diferença está no foco estratégico de cada solução:\n\n• Landing Page: É uma página única totalmente otimizada para conversão (ex: capturar contatos ou vender um produto/serviço único). Possui estrutura persuasiva e direta, sendo ideal para receber tráfego pago (Google Ads/Meta Ads).\n• Site Institucional: Possui múltiplas páginas (Quem Somos, Serviços, Contato, etc.). Foca em gerar autoridade, credibilidade de marca a longo prazo e posicionamento orgânico nas buscas do Google.'
    },
    {
      question: 'Em quanto tempo meu site fica pronto?',
      answer:
        'O prazo médio de desenvolvimento é de até 15 dias úteis para a maioria dos projetos institucionais e landing pages. Sistemas mais complexos ou e-commerce completos podem levar de 20 a 30 dias úteis. Esse prazo passa a contar a partir do momento em que o cliente envia todos os materiais e informações necessárias.'
    },
    {
      question: 'Vocês criam sites para qual tipo de empresa?',
      answer:
        'Desenvolvemos sites para todos os segmentos e tamanhos de negócios:\n\n• Profissionais Liberais: Advogados, médicos, psicólogos, dentistas, contadores.\n• Prestadores de Serviço: Clínicas de estética, barbearias, pet shops, consultorias.\n• Empresas Locais: Lojas físicas, imobiliárias, restaurantes.\n\nCustomizamos toda a estrutura e linguagem visual focando nas necessidades específicas do seu nicho de atuação.'
    },
    {
      question:
        'Como é o processo de criação do primeiro contato à entrega final?',
      answer:
        'Nosso processo de trabalho é dividido em 5 fases transparentes:\n\n1. Briefing e Alinhamento: Reunião para entender seus objetivos, público-alvo e preferências visuais.\n2. Proposta e Contrato: Detalhamos o escopo, prazos, investimento e formalizamos com contrato.\n3. Design UI/UX: Elaboramos o layout visual exclusivo do site para sua aprovação.\n4. Desenvolvimento e SEO: Programamos o site com código limpo, velocidade e otimização para o Google.\n5. Lançamento e Treinamento: Publicamos o site no seu domínio e te treinamos para gerenciar todo o conteúdo sozinho de forma simples.'
    }
  ];

  const faqItems = items.length > 0 ? items : defaultFaqItems;

  const displayAnswer = (answerText) => {
    if (!answerText) return null;
    return answerText.split('\n').map((line, i) => {
      if (line.trim().startsWith('•')) {
        return (
          <div
            key={i}
            className="pl-4 py-1 flex items-start gap-2 text-on-surface-variant"
          >
            <span className="text-primary font-bold">•</span>
            <span>{line.replace('•', '').trim()}</span>
          </div>
        );
      }
      return (
        <p
          key={i}
          className={
            line.trim() === ''
              ? 'h-3'
              : 'mb-3 last:mb-0 text-on-surface-variant'
          }
        >
          {line}
        </p>
      );
    });
  };

  return (
    <section className="py-24 px-margin-page bg-surface-deep relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>

      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Tem alguma dúvida sobre como funciona o desenvolvimento? Encontre as
            respostas abaixo.
          </p>
        </div>

        <div className="space-y-4" data-aos="fade-up">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary/40 shadow-[0_0_20px_rgba(6,182,212,0.1)] bg-surface-slate'
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors group"
                >
                  <span
                    className={`font-headline-md text-base sm:text-lg font-semibold transition-colors duration-300 ${
                      isOpen
                        ? 'text-primary'
                        : 'text-on-surface group-hover:text-primary'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl transition-transform duration-300 ${
                      isOpen
                        ? 'text-primary rotate-180'
                        : 'text-on-surface-variant group-hover:text-primary'
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? 'max-h-[800px] opacity-100 border-t border-white/5'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 font-body-md text-sm sm:text-base leading-relaxed bg-surface/20">
                    {displayAnswer(item.answer)}
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

export default FAQ;
