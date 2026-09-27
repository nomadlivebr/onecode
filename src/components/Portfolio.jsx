import React, { useState } from 'react';
import { ArrowRight, Monitor, Layers, TrendingUp } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'sites', label: 'Sites & Landing Pages', icon: Monitor },
  { id: 'systems', label: 'Sistemas Web', icon: Layers },
  { id: 'marketing', label: 'Estratégias de Marketing', icon: TrendingUp },
];

const PROJECTS = [
  {
    id: 1,
    title: 'TreinoPago — SaaS Fitness',
    category: 'systems',
    categoryLabel: 'Sistemas Web',
    iconType: 'barbell',
    iconClass: 'ph ph-barbell',
    tagline: 'Plataforma completa para Personal Trainers gerenciar alunos, treinos e cobranças de forma automatizada e integrada ao WhatsApp.',
    previewImg: '/treinopago-preview.png',
    url: 'https://treinopago.vercel.app/',
    isLive: true,
  },
  {
    id: 2,
    title: 'Nexus Dental Clinic',
    category: 'sites',
    categoryLabel: 'Site Institucional',
    iconType: 'tooth',
    iconClass: 'ph ph-tooth',
    tagline: 'Presença digital premium para odontologia estética com agendamento direto, prova social e design responsivo de alta precisão.',
    previewImg: '/nexus-preview.png',
    url: '/nexus_dental_clinic.html',
    isLive: true,
  },
  {
    id: 3,
    title: 'FlowLog Logística',
    category: 'systems',
    categoryLabel: 'Sistemas Web',
    iconType: 'truck',
    iconClass: 'ph ph-truck',
    tagline: 'Plataforma para gestão de frotas, despachos e relatórios operacionais em tempo real.',
    previewImg: '/dashboard-flowlog.png',
    url: '/dashboard_flowlog_log_stica.html',
    isLive: true,
  },
  {
    id: 4,
    title: 'AutoStock Gestor de Estoque',
    category: 'systems',
    categoryLabel: 'Sistemas Web',
    iconType: 'package',
    iconClass: 'ph ph-package',
    tagline: 'Controle total do seu estoque em tempo real. Gestão de faturamento, vendas, compras e relatórios inteligentes.',
    previewImg: '/autostock-preview.png',
    url: '/autostock_landing_page.html',
    isLive: true,
  },
  {
    id: 5,
    title: 'Alpha Imóveis Prime',
    category: 'marketing',
    categoryLabel: 'Site Institucional',
    iconType: 'building',
    iconClass: 'ph ph-buildings',
    tagline: 'Estratégia completa de anúncios no Google e Meta Ads com landing page de alta conversão para empreendimentos de alto padrão.',
    previewImg: '/alpha-hero.jpg',
    url: '/alpha_imoveis_landing_page.html',
    isLive: true,
  },
  {
    id: 6,
    title: 'SolarTech Energia Solar',
    category: 'sites',
    categoryLabel: 'Landing Page',
    iconType: 'sun',
    iconClass: 'ph ph-sun',
    tagline: 'Simulador online de economia de energia integrado para captação massiva de orçamentos e captação de clientes.',
    previewImg: '/solartech.png',
    url: '/solartech_landing_page.html',
    isLive: true,
  },
  {
    id: 7,
    title: 'Dra. Camila Dermatologia',
    category: 'marketing',
    categoryLabel: 'Estratégia & Tráfego',
    iconType: 'sparkle',
    iconClass: 'ph ph-sparkle',
    tagline: 'Funil perpétuo de atração para procedimentos estéticos premium com agenda cheia com 30 dias de antecedência.',
    previewImg: null,
    url: '#briefing',
    isLive: false,
  }
];

function ProjectIcon({ iconType, iconClass }) {
  if (iconType === 'barbell') {
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 9h-.75V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4h-9.5V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2H3.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.75v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h9.5v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h1.75a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
      </svg>
    );
  }
  if (iconType === 'tooth') {
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 5.7C17.6 3.4 15 2 12 2S6.4 3.4 5.2 5.7C4.1 7.8 4 10.3 5 12.6l1.6 4c.6 1.5 1.7 3.9 3.2 5.4.5.5 1.2.7 1.9.5.7-.3 1.1-.9 1.1-1.6v-4.1a1 1 0 0 1 2 0v4.1c0 .7.4 1.3 1.1 1.6.3.1.5.2.8.2.5 0 .9-.2 1.2-.5 1.5-1.5 2.6-3.9 3.2-5.4l1.6-4c1-2.3.9-4.8-.2-6.9z" />
      </svg>
    );
  }
  if (iconType === 'truck') {
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 8H17V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1.05a3 3 0 0 0 5.9 0h4.1a3 3 0 0 0 5.9 0H21a1 1 0 0 0 1-1v-5a3 3 0 0 0-2.5-3zM7 17.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM20 12h-3V9.5h2.3a1.5 1.5 0 0 1 1.5 1.5z" />
      </svg>
    );
  }
  if (iconType === 'package') {
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2zm0 2.24L5.48 7.5 12 10.76 18.52 7.5 12 4.24zM4.5 9.17v6.66l6.5 3.25v-6.66L4.5 9.17zm15 0l-6.5 3.25v6.66l6.5-3.25V9.17z" />
      </svg>
    );
  }
  if (iconType === 'building') {
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 2H9c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 9h2v2H5V9zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm14 2H9V4h10v15zm-8-13h2v2h-2V6zm4 0h2v2h-2V6zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2z" />
      </svg>
    );
  }
  if (iconType === 'sun') {
    return (
      <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-10a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm0 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm8-8a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm-14 0a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm12.36-5.36a1 1 0 0 0-1.41 0l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0 0-1.41zm-10.72 10.72a1 1 0 0 0-1.41 0l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0 0-1.41zm0-10.72a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 1 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 0zm10.72 10.72a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 1 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 0z" />
      </svg>
    );
  }
  if (iconClass) {
    return <i className={`${iconClass} text-blue-400 text-base shrink-0`}></i>;
  }
  return (
    <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.8h7.6z" />
    </svg>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">

      {/* Glow decorativo sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Cabeçalho */}
        <div className="text-left sm:text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Nossos Projetos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-3 leading-[1.15]">
            Soluções que se transformam em <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-600">resultados</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Confira alguns dos projetos que já desenvolvemos e veja como ajudamos empresas a inovar, escalar e alcançar seus objetivos.
          </p>
        </div>

        {/* Filtros de Categoria em Pills Horizontais */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-10 sm:mb-16 pb-2 no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
          {CATEGORIES.map(cat => {
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${isSelected
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-xs'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Cards de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl sm:rounded-3xl bg-[#060c18] border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-1.5"
            >
              <div>
                {/* Imagem do Mockup / Preview com fade suave na base */}
                <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden bg-[#060c18]">
                  {project.previewImg ? (
                    <>
                      <img
                        src={project.previewImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#060c18] via-[#060c18]/60 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    /* Fundo Padrão Moderno para itens em desenvolvimento */
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-[#0c1933] via-[#071124] to-[#040812] border-b border-slate-800/60 overflow-hidden">
                      {/* Grid pontilhado tecnológico */}
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.2)_1px,transparent_1px)] bg-size-[18px_18px] opacity-40 pointer-events-none" />

                      {/* Efeitos de luz sutil */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

                      {/* Ícone e texto central com visual de alta tecnologia */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2.5 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:scale-110 group-hover:border-blue-400/60 transition-all duration-300">
                          <ProjectIcon iconType={project.iconType} iconClass={project.iconClass} />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 tracking-wide">
                          Projeto em Finalização
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">
                          Disponível em breve no portfólio
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#060c18] to-transparent pointer-events-none" />
                    </div>
                  )}
                </div>

                {/* Corpo do Card */}
                <div className="px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7 flex flex-col">
                  {/* Categoria + Status Online / Em breve */}
                  <div className="flex items-center gap-2 mb-3">
                    <ProjectIcon iconType={project.iconType} iconClass={project.iconClass} />
                    <span className="text-xs sm:text-sm font-medium text-slate-300">
                      {project.categoryLabel}
                    </span>
                    {project.isLive !== false ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1 shrink-0 animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-medium text-slate-400">
                          Online
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-1 shrink-0 animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-medium text-amber-400/90">
                          Em breve
                        </span>
                      </>
                    )}
                  </div>

                  {/* Título do Projeto */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Descrição / Tagline */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.tagline}
                  </p>

                  {/* Botão Ver Projeto estilo Pill */}
                  <div>
                    <a
                      href={project.url || '#briefing'}
                      target={project.url && (project.url.startsWith('http') || project.url.endsWith('.html')) ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#061226]/80 hover:bg-blue-900/40 border border-blue-500/40 hover:border-blue-400 transition-all duration-200 group/btn shadow-xs active:scale-95"
                    >
                      <span>{project.isLive !== false ? 'Ver projeto' : 'Consultar projeto'}</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform text-blue-400 group-hover/btn:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé do Portfólio / CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-linear-to-r from-blue-900 via-slate-900 to-blue-950 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Seu negócio merece uma presença digital desse nível.
            </h3>
            <p className="text-sm text-blue-200">
              Desenvolvemos a estratégia perfeita para o momento e segmento da sua empresa.
            </p>
          </div>
          <a
            href="#briefing"
            className="shrink-0 px-6 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/30 hover:scale-105"
          >
            Preencher Briefing do Meu Projeto
          </a>
        </div>

      </div>
    </section>
  );
}
