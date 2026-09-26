import React from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-90px)] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-transparent"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── COLUNA ESQUERDA: Copy, Preço e Ações ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag / Eyebrow com traço */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-0.75 bg-blue-600 rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-600">
                CRIAÇÃO DE SITES &amp; SISTEMAS • ONE CODE
              </span>
            </div>

            {/* Headline Principal de Alto Impacto */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-950 leading-[1.08] tracking-[-0.035em] mb-4"
            >
              Transforme sua presença digital em <span className="font-black text-blue-600">resultados</span>.
            </h1>

            {/* Subheadline de Apoio */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-9 font-normal">
              Sites, sistemas e estratégias digitais para posicionar sua empresa, gerar oportunidades e acelerar seu crescimento.
            </p>

            {/* Botões de Ação (CTAs) */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              <a
                href="#briefing"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-[0.98] transition-all duration-200"
              >
                <span>Quero começar meu projeto</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center justify-center font-bold text-slate-800 text-base px-7 py-4 rounded-full border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
              >
                Conhecer soluções
              </a>
            </div>

            {/* Pilares de Valor (Sob medida • Responsivo • SEO preparado) */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Sob medida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Responsivo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>SEO preparado</span>
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
                <div className="relative rounded-lg overflow-hidden bg-slate-950 aspect-16/10 border border-slate-800 text-white p-4 sm:p-6 flex flex-col justify-between select-none">
                  {/* Fundo do preview */}
                  <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950/40 to-slate-900 opacity-90" />
                  
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
                <div className="h-2 bg-linear-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-lg mt-1 mx-4" />
              </div>

              {/* Smartphone Mockup sobreposto à direita */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 w-36 sm:w-44 rounded-3xl bg-slate-900 p-2 shadow-2xl border-2 border-slate-700/80 animate-float-subtle">
                {/* Notch / Câmera */}
                <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1.5" />
                
                {/* Tela do celular */}
                <div className="rounded-2xl bg-slate-950 aspect-9/18 overflow-hidden p-2.5 flex flex-col justify-between text-white relative">
                  <div className="absolute inset-0 bg-linear-to-b from-blue-950/60 to-slate-900" />
                  
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
