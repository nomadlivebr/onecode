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
              CTA MOBILE (Apenas WhatsApp)
          ───────────────────────────────────── */}
          <div className="md:hidden flex items-center">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site%2Fsistema."
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-1.5
                px-4 py-2.5
                rounded-full
                font-bold text-[13px] text-white
                bg-linear-to-r from-blue-600 to-blue-500
                shadow-[0_0_15px_rgba(0,110,255,0.20)]
              "
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}