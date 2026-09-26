import React from 'react';

import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Strategy from './components/Strategy';
import Pricing from './components/Pricing';
import Briefing from './components/Briefing';
import Footer from './components/Footer';

import thamOneCode from './images/thamonecode.png';
import nuvensImg from './images/Nuvens.jpg';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[#020611] text-white">

      {/* =====================================================
          BACKGROUND GLOBAL
      ====================================================== */}

      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">

        {/* Glow azul superior direito */}
        <div
          className="
            absolute
            -right-62.5
            -top-37.5
            w-175
            h-175
            rounded-full
            bg-blue-600/15
            blur-[140px]
          "
        />

        {/* Glow azul inferior esquerdo */}
        <div
          className="
            absolute
            -left-62.5
            top-112.5
            w-150
            h-150
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        {/* Glow central */}
        <div
          className="
            absolute
            left-[40%]
            top-[20%]
            w-125
            h-125
            rounded-full
            bg-blue-500/6
            blur-[120px]
          "
        />

        {/* =================================================
            GRID
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.13]
            bg-[linear-gradient(rgba(0,140,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,140,255,0.18)_1px,transparent_1px)]
            bg-size-[80px_80px]
            mask-[linear-gradient(to_bottom,black_0%,black_45%,transparent_90%)]
          "
        />

        {/* =================================================
            GRID PEQUENO
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            bg-[linear-gradient(rgba(0,180,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.25)_1px,transparent_1px)]
            bg-size-[20px_20px]
            mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]
          "
        />

        {/* =================================================
            ORBITAS
        ================================================== */}

        <div
          className="
            absolute
            left-[50%]
            top-[35%]
            w-175
            h-75
            -translate-x-1/2
            rounded-[50%]
            border
            border-blue-500/5
            -rotate-15
          "
        />

        <div
          className="
            absolute
            left-[50%]
            top-[38%]
            w-225
            h-87.5
            -translate-x-1/2
            rounded-[50%]
            border
            border-cyan-400/5
            rotate-15
          "
        />

      </div>


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-50">
        <Header />
      </div>


      {/* =====================================================
          HERO ORIGINAL COM TODOS OS EFEITOS VISUAIS
      ====================================================== */}

      <main className="relative z-10">

        <section
          id="inicio"
          className="
            relative
            min-h-[calc(100vh-90px)]
            overflow-hidden
          "
        >

          {/* Glow exclusivo do Hero */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-10%]
              top-[5%]
              w-175
              h-175
              rounded-full
              bg-blue-600/8
              blur-[130px]
            "
          />

          {/* Pequenos quadrados decorativos futuristas */}
          <div
            className="
              pointer-events-none
              absolute
              right-[8%]
              top-[18%]
              w-14
              h-14
              rotate-45
              border
              border-blue-500/20
              bg-blue-500/3
              shadow-[0_0_30px_rgba(0,110,255,0.08)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[3%]
              top-[35%]
              w-8
              h-8
              rotate-45
              border
              border-cyan-400/20
              bg-cyan-400/3
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[5%]
              bottom-[25%]
              w-7
              h-7
              rotate-45
              border
              border-blue-500/20
              bg-blue-500/3
            "
          />

          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              min-h-[calc(100vh-90px)]
              max-w-362.5
              grid-cols-1
              items-center
              gap-10
              px-5
              pt-24
              pb-12
              lg:grid-cols-2
              lg:px-10
              lg:pt-32
              lg:pb-20
            "
          >

            {/* =================================================
                ESQUERDA — COPY E PILARES
            ================================================== */}

            <div className="relative z-20">

              {/* Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-500/40
                  bg-blue-500/5
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  tracking-[0.18em]
                  text-blue-400
                  shadow-[0_0_25px_rgba(0,110,255,0.08)]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_#00b7ff]
                    animate-pulse
                  "
                />
                TECNOLOGIA • ESTRATÉGIA • CRESCIMENTO
              </div>

              {/* Título com Quebra e Efeito Neon */}
              <h1
                className="
                  mt-7
                  max-w-200
                  text-4xl
                  font-extrabold
                  leading-[1.1]
                  tracking-[-0.03em]
                  sm:text-5xl
                  lg:text-[54px]
                  xl:text-[62px]
                "
              >
                Transforme sua presença<br />
                digital em{' '}
                <span
                  className="
                    bg-linear-to-r
                    from-blue-400
                    via-cyan-300
                    to-blue-500
                    bg-clip-text
                    text-transparent
                    drop-shadow-[0_0_35px_rgba(0,183,255,0.45)]
                  "
                >
                  RESULTADOS.
                </span>
              </h1>

              {/* Subtítulo de Apoio */}
              <p
                className="
                  mt-6
                  max-w-162.5
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  text-slate-300
                  font-normal
                "
              >
                Sites, sistemas e estratégias digitais para posicionar sua empresa, gerar oportunidades e acelerar seu crescimento.
              </p>

              {/* Botões de Ação */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                "
              >
                <a
                  href="#briefing"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-4
                    rounded-xl
                    bg-linear-to-r
                    from-blue-600
                    to-blue-500
                    px-8
                    py-4
                    font-bold
                    text-white
                    shadow-[0_0_35px_rgba(0,110,255,0.30)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_50px_rgba(0,110,255,0.50)]
                    active:scale-95
                  "
                >
                  <span>Quero começar meu projeto</span>
                  <span
                    className="
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>

                <a
                  href="#solucoes"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/40
                    bg-white/1
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-blue-500/8
                    hover:shadow-[0_0_25px_rgba(0,110,255,0.15)]
                    active:scale-95
                  "
                >
                  Conhecer soluções
                </a>
              </div>

              {/* Pilares de Valor (Sob medida • Responsivo • SEO preparado) */}
              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  gap-x-10
                  gap-y-6
                  pt-8
                  border-t
                  border-blue-500/15
                "
              >
                <HeroStat
                  value="Sob medida"
                  label="Desenvolvimento exclusivo"
                />

                <HeroStat
                  value="Responsivo"
                  label="100% Mobile & Desktop"
                />

                <HeroStat
                  value="SEO preparado"
                  label="Otimizado para o Google"
                />
              </div>

            </div>

            {/* =================================================
                DIREITA — IMAGEM THAMONECODE & CARDS FLUTUANTES
            ================================================== */}

            <div
              className="
                relative
                flex
                min-h-125
                items-center
                justify-center
                lg:min-h-162.5
              "
            >

              {/* Glow atrás da imagem */}
              <div
                className="
                  absolute
                  h-112.5
                  w-112.5
                  rounded-full
                  bg-blue-600/20
                  blur-[110px]
                  sm:h-137.5
                  sm:w-137.5
                "
              />

              {/* Anel luminoso */}
              <div
                className="
                  absolute
                  h-107.5
                  w-107.5
                  rounded-full
                  border
                  border-blue-500/12
                  shadow-[0_0_80px_rgba(0,110,255,0.08)]
                  sm:h-137.5
                  sm:w-137.5
                "
              />

              {/* Imagem Central OneCode */}
              <div
                className="
                  relative
                  z-10
                  w-full
                  max-w-170
                  animate-[float_6s_ease-in-out_infinite]
                "
              >
                {/* Glow da imagem */}
                <div
                  className="
                    absolute
                    inset-10
                    rounded-full
                    bg-blue-500/20
                    blur-[80px]
                  "
                />

                <img
                  src={thamOneCode}
                  alt="OneCode Tecnologia"
                  className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    object-contain
                    drop-shadow-[0_0_45px_rgba(0,110,255,0.28)]
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                  "
                />
              </div>

              {/* Card Flutuante 1 — Sistemas */}
              <div
                className="
                  absolute
                  bottom-6
                  left-0
                  z-20
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-blue-500/30
                  bg-[#030b1b]/85
                  px-5
                  py-4
                  shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                  animate-[float_5s_ease-in-out_infinite]
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/40
                    bg-blue-500/6
                    font-mono
                    text-sm
                    font-bold
                    text-blue-400
                    shadow-[0_0_20px_rgba(0,110,255,0.15)]
                  "
                >
                  &lt;/&gt;
                </div>

                <div>
                  <strong className="block text-sm">
                    Sistemas
                  </strong>
                  <span className="text-xs text-slate-500">
                    Personalizados
                  </span>
                </div>
              </div>

              {/* Card Flutuante 2 — Projetos Entregues */}
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  z-20
                  rounded-2xl
                  border
                  border-blue-500/30
                  bg-[#030b1b]/90
                  px-5
                  py-4
                  shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    block
                    text-[10px]
                    text-slate-500
                  "
                >
                  Projetos entregues
                </span>

                <strong
                  className="
                    mt-1
                    block
                    text-3xl
                    font-bold
                  "
                >
                  128+
                </strong>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-cyan-400
                  "
                >
                  +32% este mês
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              LINHAS CURVAS NA PARTE INFERIOR
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              h-32
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                left-[-10%]
                -bottom-20
                h-40
                w-[120%]
                rounded-[50%]
                border-t
                border-blue-500/20
                -rotate-2
              "
            />

            <div
              className="
                absolute
                left-[-10%]
                -bottom-25
                h-40
                w-[120%]
                rounded-[50%]
                border-t
                border-cyan-400/10
                rotate-2
              "
            />
          </div>

        </section>


        {/* =====================================================
            TRANSIÇÃO HERO → SEÇÕES CLARAS
            Nuvens reais integradas com blend cinematográfico
        ====================================================== */}
        <div
          className="relative z-10 w-full overflow-hidden pointer-events-none"
          style={{ height: '300px' }}
        >
          {/* Camada 1 — Gradiente base rico azul noite → azul clarinho (predominante) */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #020611 0%, #03103a 18%, #082060 35%, #1a4a8a 50%, #3a7bc8 65%, #7fb3e8 78%, #b8d8f5 88%, #dbeeff 94%, #f0f8ff 100%)',
            }}
          />

          {/* Camada 2 — Nuvens bem suaves e apagadas */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${nuvensImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 55%',
              filter: 'blur(3px)',
              maskImage: 'linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 75%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 75%, transparent 95%)',
              mixBlendMode: 'soft-light',
              opacity: 0.22,
            }}
          />

          {/* Camada 3 — Vinheta suave para integração perfeita */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(2,6,17,0.2) 100%)',
            }}
          />

          {/* Camada 4 — Fade final para o branco azulado da seção */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '90px',
              background: 'linear-gradient(to bottom, transparent, #f0f8ff)',
            }}
          />
        </div>

        <div className="bg-[#f0f8ff] relative z-10 -mt-1 overflow-hidden">
          
          {/* =====================================================
              ENFEITES LATERAIS CONTÍNUOS (Triângulos Flutuantes)
          ====================================================== */}
          {/* Lado Esquerdo */}
          <div className="pointer-events-none absolute left-[-1%] top-[5%] w-20 h-20 border border-blue-500/20 bg-blue-500/5 animate-float-diamond" style={{ animationDelay: '0s' }} />
          <div className="pointer-events-none absolute left-[3%] top-[25%] w-10 h-10 border border-blue-600/30 bg-blue-600/10 animate-float-diamond-reverse" style={{ animationDelay: '2s' }} />
          <div className="pointer-events-none absolute left-[1%] top-[50%] w-16 h-16 border border-blue-400/25 bg-blue-400/5 animate-float-diamond" style={{ animationDelay: '1s' }} />
          <div className="pointer-events-none absolute left-[4%] top-[75%] w-8 h-8 border border-blue-500/40 bg-blue-500/10 animate-float-diamond-reverse" style={{ animationDelay: '3s' }} />
          <div className="pointer-events-none absolute left-[-2%] top-[90%] w-24 h-24 border border-blue-600/15 bg-blue-600/5 animate-float-diamond" style={{ animationDelay: '0.5s' }} />

          {/* Lado Direito */}
          <div className="pointer-events-none absolute right-[2%] top-[10%] w-12 h-12 border border-blue-500/30 bg-blue-500/10 animate-float-diamond-reverse" style={{ animationDelay: '1s' }} />
          <div className="pointer-events-none absolute right-[-2%] top-[35%] w-24 h-24 border border-blue-600/15 bg-blue-600/5 animate-float-diamond" style={{ animationDelay: '3s' }} />
          <div className="pointer-events-none absolute right-[4%] top-[60%] w-10 h-10 border border-blue-500/40 bg-blue-500/15 animate-float-diamond-reverse" style={{ animationDelay: '0s' }} />
          <div className="pointer-events-none absolute right-[-1%] top-[85%] w-16 h-16 border border-blue-400/25 bg-blue-400/5 animate-float-diamond" style={{ animationDelay: '2s' }} />

          {/* Seções de Conteúdo */}
          <Services />

          <div className="bg-linear-to-b from-[#f8fbff] via-white to-white relative">
            <Portfolio />
            <Strategy />
            <Pricing />
            <Briefing />
          </div>
        </div>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />


      {/* =====================================================
          WHATSAPP FLUTUANTE
      ====================================================== */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site%2Fsistema."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar conosco no WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.30)]
          transition-all
          duration-300
          hover:scale-110
          hover:bg-[#20bd5a]
          hover:shadow-[0_10px_40px_rgba(37,211,102,0.45)]
          active:scale-95
        "
      >
        <svg
          className="h-8 w-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.495 2 2 6.492 2 12.025c0 1.83.493 3.553 1.348 5.045L2 22l5.068-1.328a9.98 9.98 0 0 0 4.963 1.353h.004c5.535 0 10.031-4.493 10.031-10.026C22.066 6.492 17.568 2 12.031 2zm5.86 14.237c-.244.688-1.218 1.258-1.705 1.332-.464.07-1.07.127-3.468-.865-2.884-1.192-4.733-4.14-4.877-4.332-.143-.191-1.168-1.554-1.168-2.964 0-1.41.737-2.106 1.002-2.392.264-.286.577-.357.77-.357.192 0 .385.002.552.01.178.009.417-.067.653.499.243.582.83 2.026.902 2.173.072.146.12.318.024.51-.096.192-.144.31-.288.481-.144.17-.303.38-.433.51-.144.143-.294.3-.127.587.168.286.744 1.228 1.597 1.988 1.096.977 2.021 1.28 2.309 1.424.288.143.456.12.624-.072.168-.192.72-1.033.912-1.391.192-.358.384-.298.647-.202.264.096 1.67.787 1.958.931.288.144.48.216.552.336.072.12.072.697-.172 1.385z" />
        </svg>
      </a>

    </div>
  );
}


/* =========================================================
   COMPONENTE — STATS
========================================================= */

function HeroStat({ value, label }) {
  return (
    <div>
      <strong
        className="
          block
          text-2xl
          font-bold
          text-white
        "
      >
        {value}
      </strong>

      <span
        className="
          text-xs
          text-slate-400
        "
      >
        {label}
      </span>
    </div>
  );
}