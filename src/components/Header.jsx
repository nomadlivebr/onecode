import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/OneCodeTecnologia_logo.png';

const NAV_LINKS = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#estrategia', label: 'Estratégia' },
  { href: '#planos', label: 'Planos' },
  { href: '#briefing', label: 'Briefing' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300 ease-out
        ${isScrolled
          ? 'glass-header py-2 shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
          : 'bg-[#020611]/60 backdrop-blur-xl backdrop-saturate-150 py-4'
        }
      `}
    >
      {/* Glow extremamente sutil abaixo do header */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-px
          bg-linear-to-r
          from-transparent
          via-blue-500/30
          to-transparent
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* ─────────────────────────────────────
              LOGO
          ───────────────────────────────────── */}
          <a
            href="#"
            className="flex items-center group shrink-0 relative"
            aria-label="One Code Tecnologia — Página inicial"
          >
            <img
              src={logoImg}
              alt="One Code Tecnologia"
              className="
                h-16 sm:h-20
                w-auto
                object-contain
                transition-all duration-300
                group-hover:scale-105
                group-hover:drop-shadow-[0_0_12px_rgba(0,140,255,0.35)]
              "
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </a>

          {/* ─────────────────────────────────────
              NAVEGAÇÃO DESKTOP
          ───────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navegação Principal"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="
                  relative
                  text-[15px]
                  font-semibold
                  text-slate-300
                  hover:text-white
                  transition-all duration-200
                  group
                "
              >
                {label}

                {/* Linha animada abaixo do link */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    w-0
                    h-0.5
                    rounded-full
                    bg-linear-to-r
                    from-blue-500
                    to-cyan-400
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* ─────────────────────────────────────
              CTA DESKTOP
          ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site%2Fsistema."
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full

                font-bold
                text-[14px]
                text-white

                bg-linear-to-r
                from-blue-600
                to-blue-500

                border
                border-blue-400/30

                shadow-[0_0_25px_rgba(0,110,255,0.20)]

                hover:from-blue-500
                hover:to-cyan-500

                hover:shadow-[0_0_35px_rgba(0,140,255,0.35)]

                hover:-translate-y-px
                active:scale-[0.97]

                transition-all duration-300
              "
            >
              <span>FALAR NO WHATSAPP</span>

              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* ─────────────────────────────────────
              CONTROLES MOBILE (Menu Hambúrguer)
          ───────────────────────────────────── */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 p-2 rounded-xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-md transition-colors"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────
          DRAWER MOBILE NATIVO (Fiel à imagem de referência)
      ───────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-50 bg-[#020817] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <img src={logoImg} alt="One Code" className="h-10 w-auto object-contain" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Fechar Menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Links com ícones e visual premium */}
          <nav className="flex flex-col gap-2.5 my-6">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0066FF] text-white font-bold text-base shadow-lg shadow-blue-600/30"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ph-fill ph-house text-xl"></i>
              </div>
              <span>Início</span>
            </a>

            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-900/60 font-semibold text-base transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-slate-400">
                <i className="ph ph-folder text-xl"></i>
              </div>
              <span>Projetos</span>
            </a>

            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-900/60 font-semibold text-base transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-slate-400">
                <i className="ph ph-squares-four text-xl"></i>
              </div>
              <span>Soluções</span>
            </a>

            <a
              href="#estrategia"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-900/60 font-semibold text-base transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-slate-400">
                <i className="ph ph-users text-xl"></i>
              </div>
              <span>Sobre nós</span>
            </a>

            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-900/60 font-semibold text-base transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-slate-400">
                <i className="ph ph-article text-xl"></i>
              </div>
              <span>Planos</span>
            </a>

            <a
              href="#briefing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-900/60 font-semibold text-base transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-slate-400">
                <i className="ph ph-paper-plane-tilt text-xl"></i>
              </div>
              <span>Contato</span>
            </a>
          </nav>

          {/* CTA Card no rodapé do drawer */}
          <div className="mt-auto p-5 rounded-2xl bg-linear-to-b from-blue-950/40 to-slate-900/80 border border-blue-500/20 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <i className="ph-fill ph-rocket-launch text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-snug">Vamos transformar seu projeto em realidade?</p>
              </div>
            </div>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site%2Fsistema."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-colors"
            >
              <i className="ph-bold ph-whatsapp-logo text-lg"></i>
              <span>Falar no WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}