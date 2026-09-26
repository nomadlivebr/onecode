import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ArrowRight, Sparkles, Layers, TrendingUp, Monitor, CheckCircle } from 'lucide-react';

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
    categoryLabel: 'Plataforma SaaS & Sistema Web',
    tagline: 'Plataforma completa para Personal Trainers: gestão de alunos, criação de treinos com IA, cobranças automáticas no WhatsApp e financeiro integrado.',
    metric: 'Automação de Treinos com IA & Cobrança Pix',
    tags: ['SaaS Completo', 'Automação WhatsApp', 'Pix & Cartão', 'Treinos com IA', 'React & Nuvem'],
    accentColor: 'from-emerald-700 via-teal-800 to-slate-950',
    url: 'https://treinopago.vercel.app/',
    urlCta: 'Acessar Plataforma Online',
    btnColor: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20',
    isLive: true,
    logoImg: '/treinopago-logo.png',
    previewImg: '/treinopago-preview.png',
    mockupType: 'saas-live',
    preview: {
      headline: 'Gestão Inteligente para Personal Trainers',
      sub: 'Alunos, treinos e pagamentos automatizados no WhatsApp.',
      cta: 'Ver no Ar',
      stats: 'Plataforma Ativa',
      badge: 'Case Real • SaaS Live',
      domain: 'treinopago.vercel.app'
    }
  },
  {
    id: 2,
    title: 'Nexus Dental Clinic',
    category: 'sites',
    categoryLabel: 'Site Institucional & LP',
    tagline: 'Presença digital premium para odontologia estética com agendamento direto, prova social e design responsivo de alta precisão.',
    metric: '+180% contatos qualificados',
    tags: ['Site Institucional', 'Landing Page', 'SEO Local', 'Agendamento WhatsApp'],
    accentColor: 'from-cyan-800 via-teal-800 to-slate-950',
    url: '/nexus_dental_clinic.html',
    urlCta: 'Ver Site no Ar (MVP)',
    btnColor: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/20',
    isLive: true,
    previewImg: '/nexus-preview.png',
    mockupType: 'browser',
    preview: {
      headline: 'Cuidado Odontológico Excepcional',
      sub: 'Odontologia de alta precisão em clínica de referência.',
      cta: 'Ver no Ar',
      stats: 'MVP Online',
      badge: 'Case Real • No Ar',
      domain: 'nexusdental.com.br'
    }
  },
  {
    id: 3,
    title: 'FlowLog Logística',
    category: 'systems',
    categoryLabel: 'Sistema Web & Painel ERP',
    tagline: 'Plataforma para gestão de frotas, despachos e relatórios operacionais em tempo real.',
    metric: 'Economia de 22h semanais',
    tags: ['Dashboard Web', 'API REST', 'Relatórios PDF', 'Multi-usuário'],
    accentColor: 'from-blue-700 to-sky-700',
    url: '/dashboard_flowlog_log_stica.html',
    urlCta: 'Ver Dashboard (MVP)',
    btnColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20',
    isLive: true,
    previewImg: '/dashboard-flowlog.png',
    mockupType: 'dashboard',
    preview: {
      headline: 'Painel Operacional',
      sub: 'Status de entregas e despacho de cargas em rota.',
      cta: 'Ver no Ar',
      stats: '99.9% entregas no prazo',
      badge: 'MVP Online',
      domain: 'flowlog.app.br'
    }
  },
  {
    id: 4,
    title: 'Alpha Imóveis Prime',
    category: 'marketing',
    categoryLabel: 'Campanha de Marketing & Funil',
    tagline: 'Estratégia completa de anúncios no Google e Meta Ads para empreendimentos de alto padrão.',
    metric: '3.4x de Retorno sobre Investimento (ROAS)',
    tags: ['Google Ads', 'Meta Ads', 'Página de Vendas', 'CRM Integrado'],
    accentColor: 'from-emerald-700 via-teal-800 to-slate-950',
    url: '/alpha_imoveis_landing_page.html',
    urlCta: 'Ver Landing Page no Ar',
    btnColor: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20',
    isLive: true,
    previewImg: '/alpha-hero.jpg',
    mockupType: 'campaign',
    preview: {
      headline: 'Lançamento Jardins',
      sub: 'Apartamentos exclusivos de 3 e 4 suítes.',
      cta: 'Ver no Ar',
      stats: '48 cotas reservadas',
      badge: 'Case Real • No Ar',
      domain: 'alphaimoveisprime.com.br'
    }
  },
  {
    id: 5,
    title: 'SolarTech Energia Solar',
    category: 'sites',
    categoryLabel: 'Landing Page de Alta Conversão',
    tagline: 'Simulador online de economia de energia integrado para captação massiva de orçamentos.',
    metric: 'Custo por Lead reduzido em 45%',
    tags: ['Calculadora Interativa', 'Mobile-First', 'Copy Persuasiva'],
    accentColor: 'from-amber-600 via-orange-600 to-slate-950',
    url: '/solartech_landing_page.html',
    urlCta: 'Ver Landing Page no Ar',
    btnColor: 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/20',
    isLive: true,
    previewImg: '/solartech.png',
    mockupType: 'browser',
    preview: {
      headline: 'Economize até 80% na luz',
      sub: 'Simule sua economia em menos de 1 minuto.',
      cta: 'Ver no Ar',
      stats: 'R$ 1.8M economizados',
      badge: 'Case Real • No Ar',
      domain: 'solartech.com.br'
    }
  },
  {
    id: 6,
    title: 'AutoStock Gestor de Estoque',
    category: 'systems',
    categoryLabel: 'Sistema de Gestão & Estoque',
    tagline: 'Controle total do seu estoque em tempo real. Gestão de faturamento, vendas, compras e relatórios inteligentes.',
    metric: 'Zero extravios e +18% de vendas',
    tags: ['Gestão de Estoque', 'Faturamento & Vendas', 'Multi-dispositivo', 'Dashboard em Tempo Real'],
    accentColor: 'from-blue-700 via-sky-800 to-slate-950',
    url: '/autostock_landing_page.html',
    urlCta: 'Ver Sistema no Ar',
    btnColor: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20',
    isLive: true,
    previewImg: '/autostock-preview.png',
    mockupType: 'dashboard',
    preview: {
      headline: 'Controle Total do Estoque',
      sub: 'Mais controle. Menos perdas. Mais resultados.',
      cta: 'Ver no Ar',
      stats: 'Sistema Online • v1.0',
      badge: 'Case Real • No Ar',
      domain: 'autostock.app.br'
    }
  },
  {
    id: 7,
    title: 'Dra. Camila Dermatologia',
    category: 'marketing',
    categoryLabel: 'Tráfego & Posicionamento',
    tagline: 'Funil perpétuo de atração para procedimentos estéticos premium com agenda cheia com 30 dias de antecedência.',
    metric: 'Agenda 100% preenchida',
    tags: ['Instagram Ads', 'Página Rápida', 'Qualificação Automática'],
    accentColor: 'from-blue-900 to-slate-900',
    mockupType: 'campaign',
    preview: {
      headline: 'Protocolos Avançados',
      sub: 'Rejuvenescimento e harmonização natural.',
      cta: 'Consultar Disponibilidade',
      stats: 'Fila de espera ativa',
      badge: 'Autoridade Médica'
    }
  }
];

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Nossos Projetos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-[1.15]">
            Soluções que se transformam em <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">resultados</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Confira alguns dos projetos que já desenvolvemos e veja como ajudamos empresas a inovar, escalar e alcançar seus objetivos.
          </p>
        </div>

        {/* Filtros de Categoria em Pills Horizontais com scroll fluido no mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-10 sm:mb-16 pb-2 no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
          {CATEGORIES.map(cat => {
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${isSelected
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/60 hover:bg-slate-800'
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
              className="group bg-slate-900/90 rounded-3xl border border-slate-800/80 shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Preview / Mockup Simulado ou Real do Projeto */}
                <div className={`relative h-48 sm:h-56 bg-linear-to-br ${project.accentColor} p-4 sm:p-5 flex flex-col justify-between text-white overflow-hidden`}>
                  {/* Se houver imagem real de preview (screenshot) */}
                  {project.previewImg ? (
                    <div className="absolute inset-0">
                      <img
                        src={project.previewImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]" />
                  )}

                  {/* Badges superiores flutuantes exatamente como na imagem enviada */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                      {project.category === 'systems' ? '• SISTEMAS WEB' : project.category === 'sites' ? '• SITE INSTITUCIONAL' : '• ESTRATÉGIA'}
                    </span>

                    {project.isLive ? (
                      <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        MVP ONLINE
                      </span>
                    ) : (
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
                        {project.preview.badge}
                      </span>
                    )}
                  </div>

                  {/* Conteúdo central do mockup */}
                  <div className="relative z-10 my-auto">
                    {project.logoImg && (
                      <div className="mb-2">
                        <img
                          src={project.logoImg}
                          alt={project.title}
                          className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] filter brightness-110"
                        />
                      </div>
                    )}
                    <p className="text-base sm:text-xl font-black leading-tight drop-shadow-sm mb-1 text-white">
                      {project.preview.headline}
                    </p>
                    <p className="text-xs text-white/80 line-clamp-2">
                      {project.preview.sub}
                    </p>
                  </div>

                  {/* Rodapé do preview */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-[11px] font-medium text-white/80 flex items-center gap-1.5">
                      {project.isLive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                      {project.preview.stats}
                    </span>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Ver projeto</span>
                        <ArrowUpRight size={13} strokeWidth={2.5} />
                      </a>
                    ) : (
                      <span className="text-[11px] font-bold text-white/70">
                        {project.preview.cta}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline flex items-center gap-2"
                      >
                        <span>{project.title}</span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Destaque de Métrica / Resultado */}
                  <div className="mb-4 p-2.5 sm:p-3 rounded-xl border bg-slate-950/60 border-slate-800 text-slate-200 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                    <span className="text-xs font-semibold text-slate-300">
                      {project.metric}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botões de Ação no estilo mobile da imagem */}
              <div className="px-5 sm:px-7 pb-5 pt-3 border-t border-slate-800/80 flex flex-col gap-2.5 bg-slate-950/40">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0066FF] hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-[0.98]"
                  >
                    <span>Ver demonstração</span>
                    <ArrowRight size={15} />
                  </a>
                )}

                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostei do projeto ${project.title}${project.url ? ` (${project.url})` : ''} no portfólio da One Code e quero um resultado similar para o meu negócio.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/70 transition-all flex items-center justify-center gap-2"
                >
                  <i className="ph ph-envelope-simple text-base"></i>
                  <span>Solicitar orçamento</span>
                </a>
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
