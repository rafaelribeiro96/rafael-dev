/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { trackFAQToggle } from 'src/lib/analytics';

const defaultFaqItems = [
  {
    question: 'Quanto custa um site profissional?',
    answer:
      'Os valores variam conforme o tipo e a complexidade do projeto. O orçamento final é feito sob medida após entendermos o seu negócio.'
  },
  {
    question: 'Em quanto tempo meu site fica pronto?',
    answer:
      'Landing pages e sites institucionais simples normalmente levam até 15 dias úteis, dependendo do envio dos materiais e aprovações.'
  }
];

const renderAnswer = (answerText) => {
  if (!answerText) return null;

  return answerText.split('\n').map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={index} className="h-3" />;
    if (trimmed.startsWith('•') || trimmed.startsWith('â€¢')) {
      return (
        <p
          key={index}
          className="flex items-start gap-2 font-body-md text-[15px] leading-6 text-secondary"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{trimmed.replace('•', '').replace('â€¢', '').trim()}</span>
        </p>
      );
    }

    return (
      <p
        key={index}
        className="font-body-md text-[15px] leading-6 text-secondary"
      >
        {line}
      </p>
    );
  });
};

const FAQ = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqItems = items.length > 0 ? items : defaultFaqItems;

  return (
    <section className="bg-white px-margin-page py-24" id="faq">
      <div className="mx-auto max-w-[860px]">
        <div className="mb-14 text-center" data-aos="fade-up">
          <span className="mb-3 block font-label-md text-[13px] uppercase tracking-[0.05em] text-primary">
            Dúvidas frequentes
          </span>
          <h2 className="font-headline-lg text-[34px] leading-[44px] text-on-surface sm:text-headline-lg">
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-border-thin border-y border-border-thin">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.id || item.question} data-aos="fade-up">
                <button
                  type="button"
                  onClick={() => {
                    setOpenIndex(isOpen ? null : index);
                    trackFAQToggle({
                      source: 'home_faq',
                      question: item.question,
                      action: isOpen ? 'close' : 'open',
                      faqIndex: index + 1
                    });
                  }}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline-md text-[19px] leading-7 text-on-surface">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined shrink-0 text-[24px] text-primary transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] pb-7 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="max-w-3xl space-y-2">
                      {renderAnswer(item.answer)}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
