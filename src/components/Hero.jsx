import React from 'react';
import { ArrowRight, Check, Sparkles, Zap, MessageCircle, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-transparent"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── COLUNA ESQUERDA: Copy, Preço e Ações ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag / Eyebrow com traço */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-[3px] bg-blue-600 rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-600">
                CRIAÇÃO DE SITES &amp; SISTEMAS • ONE CODE
              </span>
            </div>

            {/* Headline Principal de Alto Impacto */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-950 leading-[1.08] tracking-[-0.035em] mb-7"
            >
              TENHA UM SITE QUE <span className="font-black text-slate-950">TRAZ CLIENTES</span>, NÃO UM CARTÃO DE VISITA CARO.
            </h1>

            {/* ── BLOCO DE PREÇO EM DESTAQUE MÁXIMO ── */}
            <div className="relative group mb-8 w-fit">
              {/* Brilho sutil de fundo do card de preço */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/15 via-orange-500/15 to-blue-500/15 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 px-6 py-5 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-blue-500/5">
                
                {/* Rótulo à esquerda */}
                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1.5 text-blue-600 font-bold text-[11px] uppercase tracking-wider mb-1">
                    <TrendingUp size={13} />
                    <span>INVESTIMENTO INICIAL</span>
                  </div>
                  <span className="block text-sm sm:text-base font-extrabold uppercase tracking-tight text-slate-900">
                    SITES PROFISSIONAIS
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    A PARTIR DE
                  </span>
                </div>

                {/* Divisor vertical no desktop */}
                <div className="hidden sm:block w-px h-12 bg-slate-200" />

                {/* Valor em destaque gigante */}
                <div className="flex items-baseline text-slate-950 font-black">
                  <span className="text-xl sm:text-2xl font-black text-blue-600 mr-2">R$</span>
                  <span className="text-5xl sm:text-6xl tracking-tight text-slate-950 font-black">997</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-800">,00</span>
                </div>

              </div>
            </div>

            {/* Copy Persuasiva com Destaques em Negrito */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-10">
              Site <strong className="text-slate-950 font-bold">rápido</strong>, feito sob medida para <strong className="text-slate-950 font-bold">celular</strong>, com botão direto no <strong className="text-slate-950 font-bold">WhatsApp</strong>, encontrável no <strong className="text-slate-950 font-bold">Google</strong>, copywriting persuasivo e domínio no seu nome.
            </p>

            {/* Botões de Ação (CTAs) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20um%20site%20profissional%20para%20minha%20empresa."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 active:scale-[0.98] transition-all duration-200"
              >
                <span>Quero meu site</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center font-bold text-slate-800 text-base px-7 py-4 rounded-full border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
              >
                VER OS PLANOS
              </a>
            </div>

            {/* Micro-benefícios de Confiança */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600 stroke-[3]" />
                <span>Entrega em até 7 dias úteis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check size={16} className="text-emerald-600 stroke-[3]" />
                <span>Hospedagem &amp; Domínio inclusos</span>
              </div>
            </div>

          </div>

          {/* ── COLUNA DIREITA: Mockup de Dispositivos (Laptop + Smartphone) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Laptop Mockup */}
              <div className="relative rounded-2xl bg-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-700/60 transition-transform duration-500 hover:scale-[1.01]">
                {/* Header da janela do browser */}
                <div className="flex items-center gap-1.5 pb-2 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <div className="mx-auto text-[10px] text-slate-400 font-mono font-medium px-4 py-0.5 rounded bg-slate-800/90 border border-slate-700">
                    seunegocio.com.br
                  </div>
                </div>

                {/* Tela do Laptop */}
                <div className="relative rounded-lg overflow-hidden bg-slate-950 aspect-[16/10] border border-slate-800 text-white p-4 sm:p-6 flex flex-col justify-between select-none">
                  {/* Fundo do preview */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 opacity-90" />
                  
                  {/* Conteúdo demonstrativo elegante */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                        EXEMPLO • ALTA CONVERSÃO
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                        99.9% Uptime
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                      Conquiste clientes todos os dias com autoridade máxima.
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 max-w-xs">
                      Design arquitetado para transformar visitantes em contatos prontos para fechar negócio.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 pt-4">
                    <div className="px-3 py-1.5 rounded-md bg-orange-600 text-white font-bold text-xs flex items-center gap-1 shadow-sm">
                      <span>Agendar agora</span>
                      <ArrowRight size={12} />
                    </div>
                    <div className="px-3 py-1.5 rounded-md bg-white/10 text-slate-300 font-medium text-xs">
                      Ver detalhes
                    </div>
                  </div>
                </div>

                {/* Base do Laptop */}
                <div className="h-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-lg mt-1 mx-4" />
              </div>

              {/* Smartphone Mockup sobreposto à direita */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 w-36 sm:w-44 rounded-3xl bg-slate-900 p-2 shadow-2xl border-2 border-slate-700/80 animate-float-subtle">
                {/* Notch / Câmera */}
                <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1.5" />
                
                {/* Tela do celular */}
                <div className="rounded-2xl bg-slate-950 aspect-[9/18] overflow-hidden p-2.5 flex flex-col justify-between text-white relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-slate-900" />
                  
                  <div className="relative z-10">
                    <div className="w-6 h-1.5 bg-blue-500/40 rounded-full mb-2" />
                    <p className="text-[10px] font-black leading-tight text-white mb-1">
                      100% Otimizado Mobile
                    </p>
                    <p className="text-[8px] text-slate-300">
                      Carregamento instantâneo no 4G e 5G.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <div className="w-full py-1.5 bg-emerald-600 text-white font-bold text-[9px] rounded-lg text-center flex items-center justify-center gap-1 shadow-sm">
                      <MessageCircle size={10} />
                      <span>WhatsApp Direto</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
