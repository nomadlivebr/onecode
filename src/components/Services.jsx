import React from 'react';
import { Monitor, Code2, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Criação de Sites & Landing Pages",
      description: "Sites institucionais e páginas de alta conversão ultrarrápidas, pensadas especificamente para transformar visitantes em contatos qualificados.",
      icon: Monitor,
      highlight: true,
      features: [
        "Design exclusivo, limpo e persuasivo",
        "Otimização total para Google (SEO)",
        "Carregamento ultra veloz para mobile",
        "Integração direta com WhatsApp e CRM"
      ]
    },
    {
      title: "Sistemas & Softwares Sob Medida",
      description: "Automatize processos manuais com painéis, ERPs, CRMs e plataformas web exclusivas desenvolvidas exatamente para o fluxo da sua empresa.",
      icon: Code2,
      highlight: false,
      features: [
        "Painéis administrativos intuitivos",
        "Automação de rotinas repetitivas",
        "Integrações complexas via APIs",
        "Segurança de dados e backups diários"
      ]
    },
    {
      title: "Manutenção & Evolução Mensal",
      description: "Esqueça a dor de cabeça de sites fora do ar. Assumimos a gestão técnica contínua para sua empresa ter um time de TI dedicado.",
      icon: ShieldCheck,
      highlight: false,
      features: [
        "Hospedagem em nuvem de alta disponibilidade",
        "Monitoramento 24/7 e suporte técnico",
        "Horas mensais para melhorias e novas páginas",
        "Atualizações de segurança constantes"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'transparent' }}>
      
      {/* ── ANIMAÇÕES DE FUNDO AZUL (FUNDO CLARO) ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        
        {/* Glow Superior Esquerdo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] animate-pulse-soft" style={{ background: 'rgba(59,130,246,0.12)' }} />
        
        {/* Glow Central Direito */}
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] animate-float-subtle" style={{ background: 'rgba(14,165,233,0.10)' }} />
        
        {/* Glow Inferior */}
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] animate-glow-pulse" style={{ background: 'rgba(96,165,250,0.08)' }} />
        
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
            Engenharia digital com foco em faturamento.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Unimos design refinado, tecnologia moderna e estratégia de conversão para colocar sua empresa à frente dos concorrentes.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`transition-all duration-300 rounded-3xl p-6 sm:p-10 flex flex-col justify-between border ${
                  service.highlight 
                    ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/5 relative hover:-translate-y-1.5' 
                    : 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      service.highlight 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                        : 'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      <Icon size={28} strokeWidth={2.2} />
                    </div>

                    {service.highlight && (
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
                        Mais Procurado
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <ul className="space-y-3 text-sm font-semibold text-slate-700 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20"
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                      service.highlight
                        ? 'bg-slate-950 text-white hover:bg-slate-800 shadow-sm'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowUpRight size={16} />
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
