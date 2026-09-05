import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
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
            -right-[250px]
            -top-[150px]
            w-[700px]
            h-[700px]
            rounded-full
            bg-blue-600/15
            blur-[140px]
          "
        />

        {/* Glow azul inferior esquerdo */}
        <div
          className="
            absolute
            -left-[250px]
            top-[450px]
            w-[600px]
            h-[600px]
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
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500/[0.06]
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

            bg-[size:80px_80px]

            [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_90%)]
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

            bg-[size:20px_20px]

            [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]
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

            w-[700px]
            h-[300px]

            -translate-x-1/2

            rounded-[50%]

            border
            border-blue-500/[0.08]

            rotate-[-15deg]
          "
        />

        <div
          className="
            absolute
            left-[50%]
            top-[38%]

            w-[900px]
            h-[350px]

            -translate-x-1/2

            rounded-[50%]

            border
            border-cyan-400/[0.05]

            rotate-[15deg]
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
          HERO
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

              w-[700px]
              h-[700px]

              rounded-full

              bg-blue-600/[0.08]

              blur-[130px]
            "
          />


          {/* Pequenos quadrados decorativos */}

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

              bg-blue-500/[0.03]

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

              bg-cyan-400/[0.03]
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

              bg-blue-500/[0.03]
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
              max-w-[1450px]

              grid-cols-1

              items-center

              gap-10

              px-5
              pt-24
              pb-12

              lg:grid-cols-2
              lg:px-10
              lg:py-20
            "
          >

            {/* =================================================
                ESQUERDA
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

                  bg-blue-500/[0.05]

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

                CRIAÇÃO DE SITES &amp; SISTEMAS • ONE CODE

              </div>


              {/* Título */}

              <h1
                className="
                  mt-7

                  max-w-[750px]

                  text-4xl
                  font-extrabold

                  leading-[1.1]

                  tracking-[-0.03em]

                  uppercase

                  sm:text-4xl

                  lg:text-[52px]
                  xl:text-[58px]
                "
              >

                Tenha um site que{' '}

                <span
                  className="
                    bg-gradient-to-r
                    from-blue-500
                    via-blue-400
                    to-cyan-400

                    bg-clip-text

                    text-transparent
                  "
                >
                  traz clientes
                </span>

                , não um cartão de visita caro.

              </h1>


              {/* ── BLOCO DE PREÇO ── */}

              <div className="relative group mt-8 w-fit">

                {/* Glow sutil de fundo do card de preço */}
                <div
                  className="
                    absolute -inset-1
                    bg-gradient-to-r
                    from-blue-500/15
                    via-cyan-400/10
                    to-blue-500/15
                    rounded-2xl
                    blur-md
                    opacity-75
                    group-hover:opacity-100
                    transition duration-300
                  "
                />

                <div
                  className="
                    relative
                    flex flex-col
                    sm:flex-row sm:items-center
                    gap-2 sm:gap-8

                    px-5 py-4
                    sm:px-6 sm:py-5

                    rounded-2xl

                    border
                    border-blue-500/25

                    bg-[#030b1b]/80

                    shadow-[0_20px_50px_rgba(0,0,0,0.35)]

                    backdrop-blur-xl
                  "
                >

                  {/* Rótulo à esquerda */}
                  <div className="text-left leading-tight">
                    <span
                      className="
                        block text-sm sm:text-base
                        font-extrabold uppercase tracking-tight
                        text-white
                      "
                    >
                      Sites profissionais
                    </span>
                    <span
                      className="
                        text-[10px] sm:text-xs font-semibold
                        text-slate-500 uppercase tracking-wide
                      "
                    >
                      A PARTIR DE
                    </span>
                  </div>

                  {/* Divisor vertical no desktop */}
                  <div className="hidden sm:block w-px h-12 bg-blue-500/20" />

                  {/* Valor em destaque */}
                  <div className="flex items-baseline mt-1 sm:mt-0">
                    <span className="text-lg sm:text-2xl font-black text-blue-400 mr-1 sm:mr-2">
                      R$
                    </span>
                    <span className="text-4xl sm:text-6xl tracking-tight text-white font-black">
                      597
                    </span>
                    <span className="text-xl sm:text-3xl font-extrabold text-slate-400">
                      ,00
                    </span>
                  </div>

                </div>

              </div>


              {/* Descrição */}

              <p
                className="
                  mt-7

                  max-w-[600px]

                  text-base
                  leading-8

                  text-slate-400

                  sm:text-lg
                "
              >
                Site <strong className="text-white font-bold">rápido</strong>, feito sob medida para{' '}
                <strong className="text-white font-bold">celular</strong>, com botão direto no{' '}
                <strong className="text-white font-bold">WhatsApp</strong>, encontrável no{' '}
                <strong className="text-white font-bold">Google</strong>, copywriting persuasivo e domínio no seu nome.
              </p>


              {/* Botões */}

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
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20um%20site%20profissional%20para%20minha%20empresa."
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group

                    inline-flex
                    items-center
                    justify-center
                    gap-5

                    rounded-xl

                    bg-gradient-to-r
                    from-blue-600
                    to-blue-500

                    px-7
                    py-4

                    font-semibold

                    shadow-[0_0_35px_rgba(0,110,255,0.30)]

                    transition-all
                    duration-300

                    hover:-translate-y-1

                    hover:shadow-[0_0_50px_rgba(0,110,255,0.50)]
                  "
                >

                  Quero meu site

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
                  href="#planos"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-blue-500/40

                    bg-white/[0.01]

                    px-7
                    py-4

                    font-medium

                    text-white

                    transition-all
                    duration-300

                    hover:border-blue-400
                    hover:bg-blue-500/[0.08]

                    hover:shadow-[0_0_25px_rgba(0,110,255,0.12)]
                  "
                >
                  Ver os planos
                </a>

              </div>


              {/* Indicadores */}

              <div
                className="
                  mt-12

                  flex
                  flex-wrap

                  gap-x-10
                  gap-y-6
                "
              >

                <HeroStat
                  value="7 dias"
                  label="Entrega rápida"
                />

                <HeroStat
                  value="100%"
                  label="Responsivo"
                />

                <HeroStat
                  value="SEO"
                  label="Google Ready"
                />

              </div>

            </div>


            {/* =================================================
                DIREITA — IMAGEM THAMONECODE
            ================================================== */}

            <div
              className="
                relative

                flex

                min-h-[500px]

                items-center
                justify-center

                lg:min-h-[650px]
              "
            >

              {/* Glow atrás da imagem */}

              <div
                className="
                  absolute

                  h-[450px]
                  w-[450px]

                  rounded-full

                  bg-blue-600/20

                  blur-[110px]

                  sm:h-[550px]
                  sm:w-[550px]
                "
              />


              {/* Anel luminoso */}

              <div
                className="
                  absolute

                  h-[430px]
                  w-[430px]

                  rounded-full

                  border
                  border-blue-500/[0.12]

                  shadow-[0_0_80px_rgba(0,110,255,0.08)]

                  sm:h-[550px]
                  sm:w-[550px]
                "
              />


              {/* =================================================
                  IMAGEM
              ================================================== */}

              <div
                className="
                  relative
                  z-10

                  w-full
                  max-w-[680px]

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


              {/* =================================================
                  CARD FLUTUANTE
              ================================================== */}

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

                    bg-blue-500/[0.06]

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


              {/* =================================================
                  CARD PROJETOS
              ================================================== */}

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
              LINHAS NA PARTE INFERIOR
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
                bottom-[-80px]

                h-40
                w-[120%]

                rounded-[50%]

                border-t
                border-blue-500/20

                rotate-[-2deg]
              "
            />

            <div
              className="
                absolute

                left-[-10%]
                bottom-[-100px]

                h-40
                w-[120%]

                rounded-[50%]

                border-t
                border-cyan-400/10

                rotate-[2deg]
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

          {/* Camada 2 — Nuvens bem suaves e apagadas (com leve blur para eliminar ruído/baixa qualidade) */}
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


          <div id="solucoes">
            <Services />
          </div>

          <div className="bg-gradient-to-b from-[#f8fbff] via-white to-white relative">
            <HowItWorks />
            <Pricing />
            <Contact />
          </div>
        </div>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />


      {/* =====================================================
          WHATSAPP
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
          text-slate-600
        "
      >
        {label}
      </span>

    </div>
  );
}