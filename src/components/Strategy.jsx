import React, { useState } from 'react';
import { Search, Compass, Code, Megaphone, Gauge, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    name: 'Diagnóstico',
    icon: Search,
    headline: 'Imersão no seu modelo de negócio',
    description: 'Analisamos seus pontos fortes, seu público ideal, o comportamento dos concorrentes e as lacunas não atendidas no seu mercado.',
    bullets: [
      'Análise de mercado e concorrentes',
      'Definição do perfil de cliente ideal (ICP)',
      'Identificação de gargalos e oportunidades'
    ],
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    step: '02',
    name: 'Estratégia',
    icon: Compass,
    headline: 'Planejamento de conversão e posicionamento',
    description: 'Desenhamos a rota exata de navegação e construímos a copy persuasiva que conduz o visitante do primeiro clique até o fechamento.',
    bullets: [
      'Arquitetura da informação orientada a vendas',
      'Copywriting persuasivo e proposição de valor',
      'Estruturação dos canais de atração'
    ],
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200'
  },
  {
    step: '03',
    name: 'Desenvolvimento',
    icon: Code,
    headline: 'Engenharia digital de alta velocidade',
    description: 'Codificamos com as tecnologias mais modernas do mercado, garantindo nota máxima em velocidade no celular e visual impecável.',
    bullets: [
      'Design exclusivo alinhado à sua marca',
      'Código limpo, seguro e ultrarrápido',
      'Integrações com WhatsApp, CRMs e APIs'
    ],
    badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-200'
  },
  {
    step: '04',
    name: 'Divulgação',
    icon: Megaphone,
    headline: 'Atração de tráfego qualificado',
    description: 'Colocamos sua marca na frente de quem está ativamente procurando o que você vende, usando tráfego pago e SEO estratégico.',
    bullets: [
      'Campanhas no Google Ads e Meta Ads',
      'Otimização orgânica para buscas (SEO)',
      'Rastreamento e tags de conversão'
    ],
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200'
  },
  {
    step: '05',
    name: 'Otimização',
    icon: Gauge,
    headline: 'Melhoria contínua e escala de resultados',
    description: 'Analisamos métricas reais de acesso e conversão para aplicar melhorias contínuas, mantendo seu projeto sempre lucrativo.',
    bullets: [
      'Testes contínuos para aumentar conversão',
      'Ajustes mensais e novas funcionalidades',
      'Hospedagem segura e suporte prioritário'
    ],
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200'
  }
];

export default function Strategy() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="estrategia" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-blue-600" />
            <span>Engenharia &amp; Estratégia Comercial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-5 leading-tight">
            Não criamos apenas páginas.{' '}
            <span className="text-blue-600">Criamos estratégias.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Antes de desenvolver, entendemos seu negócio, seu público e seus objetivos para construir uma presença digital alinhada à sua estratégia comercial.
          </p>
        </div>

        {/* Linha de Progresso Visual / 5 Etapas */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            const isCurrent = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative group ${
                  isCurrent
                    ? 'bg-slate-950 border-slate-950 text-white shadow-xl shadow-slate-950/20 scale-[1.02]'
                    : 'bg-white border-slate-200/90 text-slate-700 hover:border-blue-400 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3 w-full">
                  <span className={`text-xs font-black tracking-wider ${
                    isCurrent ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-600'
                  }`}>
                    {s.step}
                  </span>
                  <Icon size={18} className={isCurrent ? 'text-cyan-400' : 'text-slate-400 group-hover:text-blue-600'} />
                </div>
                <strong className={`block text-sm sm:text-base font-bold ${
                  isCurrent ? 'text-white' : 'text-slate-900'
                }`}>
                  {s.name}
                </strong>
              </button>
            );
          })}
        </div>

        {/* Card Detalhado da Etapa Selecionada */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-14 relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Etapa {STEPS[activeStep].step} de 05
                </span>
                <span className="text-slate-400 text-sm font-semibold">
                  • {STEPS[activeStep].name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
                {STEPS[activeStep].headline}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {STEPS[activeStep].description}
              </p>

              <div className="space-y-3 mb-8">
                {STEPS[activeStep].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Botões de Navegação entre Etapas */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : STEPS.length - 1))}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setActiveStep(prev => (prev < STEPS.length - 1 ? prev + 1 : 0))}
                  className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Próxima etapa</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Lado Direito: Visual Box / Destaque de Fluxo */}
            <div className="lg:col-span-5 bg-linear-to-br from-slate-900 to-[#030b1b] p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between min-h-80">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                  Visão Geral do Fluxo
                </span>
                <h4 className="text-lg font-bold mb-4 text-white">
                  Presença Digital de Alta Performance
                </h4>

                <div className="space-y-2.5 text-xs text-slate-300">
                  {STEPS.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer p-2.5 rounded-lg flex items-center justify-between transition-all ${
                        activeStep === idx
                          ? 'bg-blue-600/30 border border-blue-500/50 text-white font-bold'
                          : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <span>{s.step}. {s.name}</span>
                      {activeStep === idx && <span className="text-cyan-400 text-[10px] font-black">ATIVO</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs">
                <span className="text-slate-400">Tempo médio de entrega:</span>
                <strong className="text-cyan-400 font-bold">7 a 15 dias úteis</strong>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
