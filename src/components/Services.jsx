import React from 'react';
import { Globe, Cpu, TrendingUp, Wrench, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Sites & Landing Pages",
      badge: "🌐 Presença & Conversão",
      description: "Páginas de alta conversão e sites institucionais ultra velozes, pensados para posicionar sua marca e gerar novos contatos todos os dias.",
      icon: Globe,
      highlight: true,
      features: [
        "Design exclusivo, moderno e responsivo",
        "Carregamento ultrarrápido no mobile",
        "Otimização completa para Google (SEO)",
        "Botão direto no WhatsApp e formulários"
      ]
    },
    {
      title: "Sistemas Web",
      badge: "⚙️ Eficiência & Automação",
      description: "Softwares sob medida, painéis administrativos, portais de clientes e ferramentas que eliminam processos manuais.",
      icon: Cpu,
      highlight: false,
      features: [
        "Painéis administrativos e dashboards",
        "Automação de rotinas operacionais",
        "Integrações inteligentes via APIs",
        "Arquitetura segura e escalável"
      ]
    },
    {
      title: "Estratégias de Marketing",
      badge: "📈 Atração & Escala",
      description: "Planejamento de crescimento, tráfego qualificado e funis de conversão para fazer sua empresa vender com previsibilidade.",
      icon: TrendingUp,
      highlight: false,
      features: [
        "Campanhas de tráfego (Google & Meta)",
        "Copywriting persuasivo orientado a vendas",
        "Estruturação de funis de captação",
        "Acompanhamento de métricas e ROI"
      ]
    },
    {
      title: "Manutenção & Suporte",
      badge: "🔧 Parceria Contínua",
      description: "Seu departamento de tecnologia terceirizado. Hospedagem em nuvem, monitoramento ativo e melhorias contínuas mensais.",
      icon: Wrench,
      highlight: false,
      features: [
        "Hospedagem Cloud de alta disponibilidade",
        "Monitoramento 24/7 e backups automáticos",
        "Horas mensais para ajustes e novas telas",
        "Suporte técnico ágil e consultivo"
      ]
    }
  ];

  return (
    <section id="solucoes" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* ── ANIMAÇÕES DE FUNDO AZUL (FUNDO CLARO) ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        
        {/* Glow Superior Esquerdo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] animate-pulse-soft" style={{ background: 'rgba(59,130,246,0.12)' }} />
        
        {/* Glow Central Direito */}
        <div className="absolute top-1/2 -right-32 w-125 h-125 rounded-full blur-[120px] animate-float-subtle" style={{ background: 'rgba(14,165,233,0.10)' }} />
        
        {/* Glow Inferior */}
        <div className="absolute -bottom-40 left-1/4 w-150 h-150 rounded-full blur-[140px] animate-glow-pulse" style={{ background: 'rgba(96,165,250,0.08)' }} />
        
        {/* Círculo Abstrato Decorativo */}
        <div className="absolute top-[20%] left-[85%] w-64 h-64 border border-blue-400/15 rounded-full animate-[spin_30s_linear_infinite] border-dashed" />
        
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest uppercase text-blue-600 mb-2 block">
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Tecnologia e estratégia sob medida para o seu negócio.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Da primeira linha de código até a aquisição de clientes: entregamos tudo o que sua empresa precisa para se destacar no ambiente digital.
          </p>
        </div>

        {/* Grid de Serviços — 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between border ${
                  service.highlight 
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 relative hover:-translate-y-1.5 ring-2 ring-blue-500/20' 
                    : 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      service.highlight 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25' 
                        : 'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2.5 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <ul className="space-y-2.5 text-xs sm:text-[13px] font-medium text-slate-700 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre a solução de ${service.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-3 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-all duration-200 group/saber"
                    style={{
                      background: service.highlight ? '#0055ff' : '#0B172A',
                      color: '#e2e8f0',
                      boxShadow: service.highlight
                        ? '0 0 0 1px rgba(0,85,255,0.4), 0 2px 10px rgba(0,85,255,0.25)'
                        : '0 0 0 1px rgba(0,179,255,0.25), 0 2px 8px rgba(0,85,255,0.15)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = service.highlight ? '#ffffff' : '#00b3ff';
                      e.currentTarget.style.boxShadow = service.highlight
                        ? '0 0 0 1.5px rgba(0,85,255,0.9), 0 0 20px rgba(0,85,255,0.45), 0 2px 10px rgba(0,85,255,0.3)'
                        : '0 0 0 1.5px rgba(0,179,255,0.7), 0 0 16px rgba(0,179,255,0.35), 0 2px 8px rgba(0,85,255,0.25)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#e2e8f0';
                      e.currentTarget.style.boxShadow = service.highlight
                        ? '0 0 0 1px rgba(0,85,255,0.4), 0 2px 10px rgba(0,85,255,0.25)'
                        : '0 0 0 1px rgba(0,179,255,0.25), 0 2px 8px rgba(0,85,255,0.15)';
                    }}
                  >
                    <span>Saber mais</span>
                    <ArrowUpRight size={15} className="group-hover/saber:translate-x-0.5 group-hover/saber:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
