import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Presença Digital",
      badge: "Site / Landing Page",
      description: "Ideal para empresas que precisam de um site profissional rápido, elegante e pronto para captar contatos no WhatsApp.",
      price: "597",
      period: "ou a partir de R$ 197/mês",
      highlight: false,
      tag: "Entrada Rápida",
      buttonText: "Escolher Presença Digital",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
      features: [
        "Site Institucional ou Landing Page",
        "Design 100% responsivo para celulares",
        "Otimização inicial para Google (SEO)",
        "Botão direto no WhatsApp e formulário",
        "Hospedagem Cloud rápida e segura"
      ]
    },
    {
      name: "Crescimento",
      badge: "Site + Marketing",
      description: "A solução mais procurada: seu site moderno somado a campanhas de tráfego pago para atrair clientes todos os dias.",
      price: "1.297",
      period: "/mês",
      highlight: true,
      tag: "Mais Estratégico",
      buttonText: "Acelerar com Crescimento",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25",
      features: [
        "Tudo do plano Presença Digital",
        "Gestão de Tráfego Pago (Google & Meta Ads)",
        "Copywriting persuasivo orientado a vendas",
        "Estruturação de funis de conversão",
        "Relatórios mensais de contatos e ROI",
        "Ajustes e melhorias contínuas"
      ]
    },
    {
      name: "Solução Personalizada",
      badge: "Site + Sistema + Marketing",
      description: "Engenharia de software sob medida, automação de rotinas internas e estratégia completa de atração e vendas.",
      price: "Sob Consulta",
      period: "Conforme escopo",
      highlight: false,
      tag: "Escala & Automação",
      buttonText: "Solicitar Proposta Sob Medida",
      buttonStyle: "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300",
      features: [
        "Site / Portal + Sistema Web Exclusivo",
        "Painel administrativo e dashboards",
        "Automação de processos operacionais",
        "Integrações de sistemas e APIs",
        "Estratégia completa de marketing e escala",
        "SLA e suporte prioritário dedicado"
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
                  ? 'border-2 border-blue-600 shadow-2xl shadow-blue-600/15 relative lg:-translate-y-3'
                  : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {plan.tag && (
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                  plan.highlight ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
                }`}>
                  {plan.tag}
                </div>
              )}

              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                  {plan.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-950 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6 min-h-10 leading-relaxed">{plan.description}</p>
                
                <div className="mb-8 pb-6 border-b border-slate-100">
                  {plan.price === "Sob Consulta" ? (
                    <div className="flex flex-col justify-center h-17.5">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">PROJETO CUSTOMIZADO</span>
                      <span className="text-3xl font-black text-slate-950">Sob Consulta</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">A PARTIR DE</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-bold text-blue-600">R$</span>
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
