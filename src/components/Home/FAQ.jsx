import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Quanto custa um site profissional?',
      answer:
        'Os valores variam conforme o tipo de projeto. Uma landing page começa a partir de R$ 749, um site institucional completo a partir de R$ 1299 e projetos de agendamento, crm, e-commerce a partir de R$ 2.499. O orçamento é feito sob medida após entender o seu negócio. Fale comigo pelo WhatsApp e te respondo no mesmo dia.'
    },
    {
      question: 'Qual a diferença entre landing page e site institucional?',
      answer:
        'Uma Landing Page é focada em conversão direta (ex: capturar contatos ou vender um produto/serviço específico) estruturada em uma única página persuasiva. Já o Site Institucional é mais amplo, contendo múltiplas páginas (Quem Somos, Serviços, Contato, etc.) para apresentar sua empresa inteira, gerando autoridade, credibilidade e presença no Google.'
    },
    {
      question: 'Em quanto tempo meu site fica pronto?',
      answer:
        'O prazo padrão de entrega é de até 15 dias úteis, variando de acordo com a complexidade do projeto e a velocidade de envio dos conteúdos e feedbacks por parte do cliente.'
    },
    {
      question: 'Vocês criam sites para qual tipo de empresa?',
      answer:
        'Atendemos todos os tipos e tamanhos de negócios: prestadores de serviços, médicos, psicólogos, advogados, clínicas, barbearias, pet shops, lojas virtuais locais, startups e muito mais. Criamos a solução perfeita adaptada às necessidades específicas de cada nicho.'
    },
    {
      question:
        'Como é o processo de criação do primeiro contato à entrega final?',
      answer:
        'O processo é dividido em 5 etapas simples: 1) Briefing & Alinhamento de objetivos; 2) Proposta comercial & Contrato; 3) Criação do design visual e estrutura; 4) Desenvolvimento técnico do código com otimização de velocidade e SEO; 5) Testes finais, treinamento de uso e entrega de chaves.'
    }
  ];

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
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'max-h-[500px] opacity-100 border-t border-white/5'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed bg-surface/20">
                    {item.answer}
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
