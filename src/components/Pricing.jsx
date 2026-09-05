import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Plano Parceiro Mensal",
      description: "Para empresas que querem o site no ar sem dor de cabeça, incluindo criação, hospedagem em nuvem e suporte contínuo.",
      price: "197",
      period: "/mês",
      highlight: true,
      tag: "Mais Vantajoso",
      buttonText: "Assinar Parceria",
      buttonStyle: "bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20",
      features: [
        "Criação do Site Inclusa (Sem taxa extra)",
        "Hospedagem Cloud Rápida e Segura",
        "Manutenção e Backups Diários",
        "Atualizações e Ajustes Mensais",
        "Suporte Prioritário via WhatsApp"
      ]
    },
    {
      name: "Site Profissional",
      description: "Ideal para negócios que desejam apenas o desenvolvimento do projeto impecável, sem compromisso mensal de parceria.",
      price: "597",
      period: "Taxa única",
      highlight: false,
      buttonText: "Quero Apenas o Site",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
      features: [
        "Landing Page de Alta Conversão",
        "100% Otimizado para Smartphones",
        "Botão Flutuante de WhatsApp",
        "Configuração Inicial de SEO",
        "Entrega Rápida do Projeto"
      ]
    },
    {
      name: "Sistemas & Enterprise",
      description: "Desenvolvimento de softwares, portais internos, ERPs e integrações complexas sob medida.",
      price: "Sob Consulta",
      period: "Conforme escopo",
      highlight: false,
      buttonText: "Agendar Reunião Técnica",
      buttonStyle: "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300",
      features: [
        "Engenharia de Software Dedicada",
        "Banco de Dados e APIs Personalizadas",
        "Dashboards e Painéis Administrativos",
        "Automações Avançadas de Processos",
        "SLA de Atendimento Corporativo"
      ]
    }
  ];

  return (
    <section id="planos" className="py-16 sm:py-28 bg-transparent border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest uppercase text-blue-600 mb-2 block">
            INVESTIMENTO TRANSPARENTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Escolha o modelo ideal para sua empresa.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sem pegadinhas ou custos ocultos. Tecnologia moderna, previsibilidade e retorno real para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-6 sm:p-10 flex flex-col justify-between transition-all duration-300 bg-white border ${
                plan.highlight
                  ? 'border-2 border-orange-500 shadow-2xl shadow-orange-500/10 relative lg:-translate-y-3'
                  : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {plan.tag && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                  {plan.tag}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black text-slate-950 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6 min-h-[40px] leading-relaxed">{plan.description}</p>
                
                <div className="mb-8 pb-6 border-b border-slate-100">
                  {plan.price === "Sob Consulta" ? (
                    <div className="flex flex-col justify-center h-[70px]">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">PROJETO CUSTOMIZADO</span>
                      <span className="text-3xl font-black text-slate-950">Sob Consulta</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">A PARTIR DE</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-bold text-orange-600">R$</span>
                        <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">{plan.price}</span>
                        <span className="text-sm font-semibold text-slate-500 ml-1">{plan.period}</span>
                      </div>
                    </div>
                  )}
                </div>

                <ul className="space-y-3.5 text-sm font-semibold text-slate-700 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start">
                      <Check size={18} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={`https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 px-4 text-center font-bold text-sm rounded-xl transition-all active:scale-[0.98] ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
