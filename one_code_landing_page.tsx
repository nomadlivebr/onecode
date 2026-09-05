import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Monitor, Code2, ShieldCheck, 
  RefreshCw, Infinity, Rocket, CheckCircle2, 
  Check, Mail, MessageCircle, Instagram, 
  Linkedin, Github, Send, Server, Smartphone
} from 'lucide-react';

const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #050505; /* Garante o fundo escuro nativamente */
      color: #cbd5e1;
    }

    .text-gradient {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to right, #0055ff, #00b3ff);
    }
    
    .bg-gradient-brand {
      background-image: linear-gradient(to right, #0055ff, #00b3ff);
    }

    .glass-nav {
      background: rgba(5, 5, 5, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Animações Flutuantes e de Brilho */
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}} />
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  // Monitora a rolagem para mudar o estilo do cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Controla o envio do formulário sem recarregar a página
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
    e.target.reset();
  };

  return (
    // A classe bg-[#050505] aqui garante que não haverá tela branca
    <div className="bg-[#050505] min-h-screen text-slate-300 selection:bg-[#0055ff] selection:text-white overflow-x-hidden">
      <CustomStyles />
      
      {/* Header Fixo */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg py-1' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-3">
                <img 
                  className="h-12 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
                  src="OneCodeTecnologia.png" 
                  alt="One Code Tecnologia Logo" 
                  onError={(e) => { e.target.src = 'https://placehold.co/200x80/050505/00b3ff?text=One+Code' }}
                />
              </a>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-sm font-medium text-gray-300 hover:text-[#00b3ff] transition-colors">Serviços</a>
              <a href="#como-funciona" className="text-sm font-medium text-gray-300 hover:text-[#00b3ff] transition-colors">Como Funciona</a>
              <a href="#planos" className="text-sm font-medium text-gray-300 hover:text-[#00b3ff] transition-colors">Planos Mensais</a>
            </nav>

            {/* Botão de Ação CTA */}
            <div className="hidden md:flex items-center">
              <a href="#contato" className="bg-gradient-brand text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,179,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                Falar com Especialista
              </a>
            </div>

            {/* Botão do Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none bg-[#1f2937]/50 p-2 rounded-lg"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown do Menu Mobile */}
        <div className={`md:hidden absolute w-full bg-[#0a0c10] border-b border-[#1f2937] transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 text-center shadow-2xl">
            <a onClick={() => setIsMobileMenuOpen(false)} href="#servicos" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Serviços</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#como-funciona" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Como Funciona</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#planos" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Planos</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#contato" className="block px-3 py-3 mt-4 text-base font-medium bg-gradient-brand text-white rounded-md mx-4 shadow-lg shadow-blue-500/20">Falar com Especialista</a>
          </div>
        </div>
      </header>

      <main>
        {}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
          {/* Efeitos Visuais de Fundo (Blur) */}
          <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-[#0055ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob"></div>
            <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-[#00b3ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMSkiLz48L3N2Zz4=")'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            {/* Tag superior estilo startup */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1115] border border-[#1f2937] backdrop-blur-sm mb-8 shadow-xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b3ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b3ff]"></span>
              </span>
              <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Sua Parceria Tecnológica Contínua</span>
            </div>
            
            {/* Título Principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Construímos e cuidamos do <br className="hidden md:block" />
              seu negócio <span className="text-gradient">na internet.</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Não entregamos apenas um site e vamos embora. A <strong className="text-white font-medium">One Code</strong> é o seu departamento de tecnologia terceirizado. Mantemos sua empresa atualizada, segura e evoluindo todos os meses.
            </p>
            
            {/* Botões do Hero */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#planos" className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-brand hover:shadow-[0_0_30px_rgba(0,179,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                Ver Planos Mensais
              </a>
              <a href="#servicos" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full text-white bg-transparent border border-gray-600 hover:border-white hover:bg-white/5 transition-all duration-300">
                Conhecer Serviços
              </a>
            </div>

            {/* Dashboard / Mockup Abstrato */}
            <div className="mt-20 relative mx-auto max-w-5xl animate-float">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0a0c10]/80 p-2 backdrop-blur-xl shadow-2xl shadow-[#0055ff]/10">
                <div className="rounded-xl overflow-hidden border border-gray-800 relative bg-[#050505] aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0055ff]/5 to-[#00b3ff]/10"></div>
                  <div className="absolute top-0 w-full h-8 border-b border-gray-800 bg-[#0a0c10] flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  
                  <div className="text-center z-10 flex flex-col items-center mt-8">
                    <img 
                      src="OneCodeTecnologia.png" 
                      alt="One Code Logo Large" 
                      className="h-20 md:h-32 mx-auto object-contain opacity-90 drop-shadow-[0_0_30px_rgba(0,179,255,0.2)]" 
                      onError={(e) => e.target.style.display='none'}
                    />
                    <div className="mt-10 flex justify-center gap-8 text-[#00b3ff]/70">
                      <Code2 size={36} className="hover:text-white transition-colors cursor-pointer" />
                      <Server size={36} className="hover:text-white transition-colors cursor-pointer" />
                      <RefreshCw size={36} className="hover:text-white transition-colors cursor-pointer animate-[spin_4s_linear_infinite]" />
                      <Smartphone size={36} className="hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="servicos" className="py-24 bg-[#0a0c10] relative border-t border-[#1f2937]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#00b3ff] font-bold tracking-widest uppercase text-xs mb-3">Nossas Soluções</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Engenharia digital para resultados.</h3>
              <p className="text-gray-400 text-lg">Unimos design premium e código robusto para criar plataformas que elevam a autoridade da sua marca e otimizam seus processos diários.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card Serviço 1 */}
              <div className="bg-[#050505] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-8 border border-[#1f2937] hover:border-[#0055ff] hover:shadow-[0_10px_40px_-10px_rgba(0,85,255,0.2)] relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 group-hover:scale-110">
                  <Monitor size={180} className="text-[#0055ff]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0055ff]/20 to-[#00b3ff]/20 flex items-center justify-center mb-8 border border-[#0055ff]/30">
                  <Monitor size={28} className="text-[#00b3ff]" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Criação de Sites</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20">
                  Sites institucionais, landing pages e e-commerces ultrarrápidos, responsivos e otimizados para o Google (SEO). Foco total em conversão.
                </p>
                <ul className="space-y-3 text-sm text-gray-300 font-medium border-t border-[#1f2937] pt-6">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#00b3ff]" /> Design Exclusivo e Moderno</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#00b3ff]" /> Otimização Avançada de SEO</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#00b3ff]" /> Alta Performance (Carregamento Rápido)</li>
                </ul>
              </div>

              {/* Card Serviço 2 */}
              <div className="bg-[#050505] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-8 border border-[#1f2937] hover:border-[#0055ff] hover:shadow-[0_10px_40px_-10px_rgba(0,85,255,0.2)] relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:-rotate-12 group-hover:scale-110">
                  <Code2 size={180} className="text-[#0055ff]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0055ff]/20 to-[#00b3ff]/20 flex items-center justify-center mb-8 border border-[#0055ff]/30">
                  <Code2 size={28} className="text-[#00b3ff]" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Sistemas Sob Medida</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20">
                  Automatize a sua empresa. Desenvolvemos ERPs, CRMs, portais e plataformas web exclusivas que resolvem os gargalos da sua operação.
                </p>
                <ul className="space-y-3 text-sm text-gray-300 font-medium border-t border-[#1f2937] pt-6">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#00b3ff]" /> Automação de Processos Manuais</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#00b3ff]" /> Painéis Administrativos (Dashboards)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#00b3ff]" /> Integrações Complexas via API</li>
                </ul>
              </div>

              {/* Card Serviço 3 (Destaque) */}
              <div className="bg-gradient-to-b from-[#0a0c10] to-[#001a4d] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-8 border border-[#0055ff]/40 hover:border-[#00b3ff] hover:shadow-[0_10px_40px_-10px_rgba(0,179,255,0.3)] relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-180 duration-1000">
                  <RefreshCw size={180} className="text-white" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 backdrop-blur-md shadow-inner">
                  <ShieldCheck size={28} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Manutenção & Evolução</h4>
                <p className="text-blue-100/80 text-sm leading-relaxed mb-8 h-20">
                  O coração da One Code. Planos mensais que garantem que seu sistema ou site esteja sempre no ar, 100% seguro e recebendo melhorias.
                </p>
                <ul className="space-y-3 text-sm text-white font-medium border-t border-blue-500/30 pt-6">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white drop-shadow-md" /> Hospedagem em Nuvem Inclusa</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white drop-shadow-md" /> Backups Diários e Monitoramento</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white drop-shadow-md" /> Horas para Novas Funcionalidades</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="como-funciona" className="py-32 relative bg-[#050505] overflow-hidden">
          {/* Background Decorativo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#0055ff]/5 rounded-full blur-[100px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 relative z-10">
                <h2 className="text-[#00b3ff] font-bold tracking-widest uppercase text-xs mb-3">O Método One Code</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Muito além da entrega. Um ciclo de crescimento.</h3>
                <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
                  Diferente de freelancers que entregam o código e desaparecem, nós construímos uma parceria vitalícia. Seu sucesso e a estabilidade digital do seu negócio são nossa responsabilidade.
                </p>
                
                <div className="space-y-10 relative">
                  {/* Linha conectora lateral */}
                  <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#1f2937] via-[#0055ff]/50 to-transparent hidden sm:block"></div>

                  <div className="flex gap-6 relative group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a0c10] border-2 border-[#1f2937] group-hover:border-[#00b3ff] flex items-center justify-center text-lg font-bold text-gray-500 group-hover:text-[#00b3ff] transition-colors relative z-10">1</div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Mapeamento & Arquitetura</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Entendemos a fundo a dor do seu negócio e definimos as tecnologias e a estrutura exata da solução ideal.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 relative group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a0c10] border-2 border-[#1f2937] group-hover:border-[#00b3ff] flex items-center justify-center text-lg font-bold text-gray-500 group-hover:text-[#00b3ff] transition-colors relative z-10">2</div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Desenvolvimento Inteligente</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Codificamos sua plataforma utilizando as melhores práticas do mercado, focando em segurança e velocidade.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 relative group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a0c10] border-2 border-[#1f2937] group-hover:border-[#00b3ff] flex items-center justify-center text-lg font-bold text-gray-500 group-hover:text-[#00b3ff] transition-colors relative z-10">3</div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Deploy em Nuvem</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Lançamos o seu projeto em infraestrutura Cloud de alta disponibilidade e configuramos todos os domínios.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-brand border-none flex items-center justify-center shadow-[0_0_20px_rgba(0,179,255,0.5)] relative z-10 animate-pulse">
                      <Infinity size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2 text-gradient">Ciclo de Evolução (Mensal)</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">A mágica acontece aqui. Atualizações contínuas, suporte prioritário 24/7 e desenvolvimento de novas funcionalidades todos os meses.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full relative perspective-1000">
                <div className="aspect-square rounded-full border border-[#1f2937] bg-[#0a0c10]/40 flex items-center justify-center relative p-8 shadow-2xl backdrop-blur-sm">
                  {/* Animação Circular (Órbita) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0055ff]/10 to-[#00b3ff]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-4 rounded-full border border-[#1f2937]/50 border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
                  
                  <img 
                    src="OneCodeTecnologia.png" 
                    alt="Logo One Code Tecnologia" 
                    className="w-2/3 object-contain z-10 filter drop-shadow-2xl" 
                    onError={(e) => e.target.src='https://placehold.co/400x400/050505/333333?text=One+Code'}
                  />
                  
                  {/* Ícones Orbitando */}
                  <div className="absolute top-[10%] right-[20%] w-16 h-16 bg-[#1f2937]/80 backdrop-blur-md rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
                    <Rocket size={28} className="text-[#00b3ff]" />
                  </div>
                  <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-[#1f2937]/80 backdrop-blur-md rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                    <ShieldCheck size={28} className="text-[#0055ff]" />
                  </div>
                  <div className="absolute bottom-[10%] right-[20%] w-12 h-12 bg-[#1f2937]/80 backdrop-blur-md rounded-xl border border-gray-700 flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                    <Code2 size={22} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="planos" className="py-32 bg-[#0a0c10] border-t border-b border-[#1f2937] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0055ff]/10 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-[#00b3ff] font-bold tracking-widest uppercase text-xs mb-3">Modelos de Parceria</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">A TI da sua empresa, resolvida.</h3>
              <p className="text-gray-400 text-lg font-light">Escolha o plano que melhor se adapta ao momento do seu negócio. Previsibilidade financeira e tecnologia de ponta sempre funcionando a seu favor.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Plano 1: Inicial */}
              <div className="bg-[#050505] rounded-3xl border border-[#1f2937] p-8 md:p-10 flex flex-col hover:border-gray-600 transition-colors">
                <h4 className="text-2xl font-bold text-white mb-2">Presença Digital</h4>
                <p className="text-gray-400 text-sm mb-8 h-12">Ideal para negócios locais e empresas que precisam de um site institucional profissional impecável.</p>
                <div className="mb-8 pb-8 border-b border-[#1f2937]">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">A partir de</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-bold text-gray-400">R$</span>
                    <span className="text-5xl font-extrabold text-white">497</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <span className="text-xs text-[#00b3ff] mt-3 block">*+ Taxa de setup inicial do projeto</span>
                </div>
                <ul className="space-y-5 text-sm text-gray-300 flex-grow mb-10">
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Criação do Site (até 5 páginas)</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Hospedagem Cloud AWS Inclusa</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Manutenção Preventiva e Backups</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Suporte Técnico via WhatsApp</li>
                </ul>
                <a href="#contato" className="w-full py-4 px-4 bg-[#1f2937] hover:bg-gray-700 text-white text-center font-bold rounded-xl transition-colors">Selecionar Plano</a>
              </div>

              {/* Plano 2: Destaque */}
              <div className="bg-[#0a0c10] rounded-3xl border-2 border-[#0055ff] relative p-8 md:p-10 flex flex-col transform lg:-translate-y-6 shadow-[0_0_40px_rgba(0,85,255,0.15)] z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-brand text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Recomendado
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Evolução Contínua</h4>
                <p className="text-gray-400 text-sm mb-8 h-12">Para empresas que usam a internet ativamente para vendas e precisam de Landing Pages e atualizações.</p>
                <div className="mb-8 pb-8 border-b border-gray-800">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">A partir de</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-bold text-gray-400">R$</span>
                    <span className="text-5xl font-extrabold text-white">997</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <span className="text-xs text-[#00b3ff] mt-3 block">*+ Taxa de setup inicial do projeto</span>
                </div>
                <ul className="space-y-5 text-sm text-gray-300 flex-grow mb-10">
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Tudo do plano anterior +</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Criação de Múltiplas Landing Pages</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> <strong className="text-white bg-blue-900/40 px-2 py-0.5 rounded">5 Horas/mês</strong> exclusivas para desenvolvimento</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Integrações (RD Station, Meta Pixels, Analytics)</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Otimização de Performance Mensal</li>
                </ul>
                <a href="#contato" className="w-full py-4 px-4 bg-gradient-brand hover:shadow-[0_0_20px_rgba(0,179,255,0.4)] text-white text-center font-bold rounded-xl transition-all transform hover:-translate-y-1">Assinar Plano Evolução</a>
              </div>

              {/* Plano 3: Corporativo */}
              <div className="bg-[#050505] rounded-3xl border border-[#1f2937] p-8 md:p-10 flex flex-col hover:border-gray-600 transition-colors">
                <h4 className="text-2xl font-bold text-white mb-2">Enterprise / Sistemas</h4>
                <p className="text-gray-400 text-sm mb-8 h-12">Desenvolvimento complexo de software, plataformas, painéis e ERPs 100% personalizados.</p>
                <div className="mb-8 pb-8 border-b border-[#1f2937] flex flex-col justify-center h-[116px]">
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Escopo Personalizado</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-extrabold text-white">Sob Consulta</span>
                  </div>
                </div>
                <ul className="space-y-5 text-sm text-gray-300 flex-grow mb-10">
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Engenharia de Software Especializada</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> Modelagem de Banco de Dados</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> APIs e Integrações Avançadas</li>
                  <li className="flex gap-4 items-start"><Check size={20} className="text-[#00b3ff] shrink-0" /> SLA de Atendimento Prioritário</li>
                </ul>
                <a href="#contato" className="w-full py-4 px-4 bg-[#1f2937] hover:bg-gray-700 text-white text-center font-bold rounded-xl transition-colors">Agendar Reunião Técnica</a>
              </div>

            </div>
          </div>
        </section>

        {}
        <section id="contato" className="py-32 relative overflow-hidden bg-[#050505]">
          {/* Elemento gráfico "Código" ao fundo */}
          <div className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 opacity-[0.02] text-[10px] sm:text-[14px] text-[#00b3ff] font-mono whitespace-pre pointer-events-none select-none leading-loose">
            {`const oneCode = new Agency({
  type: 'Tech Partner',
  core: 'Monthly Support',
  stack: ['React', 'Node', 'Cloud'],
  status: 'Ready to build'
});

async function elevateBusiness(client) {
  await client.connect(oneCode);
  while(client.isActive) {
    await oneCode.deployUpdates();
    client.revenue++;
  }
}`}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-[#0a0c10] rounded-[2.5rem] border border-[#1f2937] p-8 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Brilho no canto do card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full"></div>

              <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Pronto para ter uma <span className="text-gradient">tecnologia que funciona?</span>
                  </h2>
                  <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
                    Esqueça os "freelas" que somem após entregar o projeto. Preencha o formulário e vamos agendar um bate-papo sem compromisso para entender como a One Code pode ser o braço tecnológico da sua empresa.
                  </p>
                  
                  <div className="space-y-8 bg-[#050505] p-8 rounded-2xl border border-[#1f2937]">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center text-[#00b3ff]">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">Email Comercial</p>
                        <p className="text-white font-medium text-lg">contato@onecodetecnologia.com.br</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-[#1f2937] to-transparent"></div>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-[#1f2937] flex items-center justify-center text-[#00b3ff]">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">WhatsApp de Atendimento</p>
                        <p className="text-white font-medium text-lg">(11) 99999-9999</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <form onSubmit={handleContactSubmit} className="space-y-6 bg-[#050505] p-8 rounded-2xl border border-[#1f2937]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                        <input type="text" id="name" required className="w-full bg-[#0a0c10] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff] transition-colors placeholder-gray-600" placeholder="Ex: João Silva" />
                      </div>
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-400 mb-2">Nome da Empresa</label>
                        <input type="text" id="empresa" className="w-full bg-[#0a0c10] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff] transition-colors placeholder-gray-600" placeholder="Sua marca" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Corporativo</label>
                      <input type="email" id="email" required className="w-full bg-[#0a0c10] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff] transition-colors placeholder-gray-600" placeholder="joao@suaempresa.com.br" />
                    </div>
                    <div>
                      <label htmlFor="necessidade" className="block text-sm font-medium text-gray-400 mb-2">O que você busca hoje?</label>
                      <select id="necessidade" className="w-full bg-[#0a0c10] border border-[#1f2937] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff] transition-colors appearance-none cursor-pointer">
                        <option value="site">Quero criar um Site / Landing Page novo</option>
                        <option value="sistema">Preciso de um Sistema/Software Sob Medida</option>
                        <option value="manutencao">Quero que assumam a manutenção do meu projeto atual</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Detalhes do Projeto (Opcional)</label>
                      <textarea id="message" rows="4" className="w-full bg-[#0a0c10] border border-[#1f2937] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff] transition-colors placeholder-gray-600 resize-none" placeholder="Conte resumidamente o contexto da sua empresa e o que precisa ser feito..."></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-gradient-brand text-white font-bold py-4 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(0,179,255,0.4)] transition-all flex justify-center items-center gap-3 text-lg mt-4">
                      Solicitar Diagnóstico Gratuito <Send size={20} />
                    </button>

                    {formStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-xl flex items-start gap-4 animate-[pulse_0.5s_ease-in-out]">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={24} />
                        <div>
                          <p className="text-green-400 font-bold">Solicitação Recebida!</p>
                          <p className="text-green-500/80 text-sm mt-1 font-medium">Nossa equipe de especialistas entrará em contato em até 24 horas úteis.</p>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {}
      <footer className="bg-[#050505] border-t border-[#1f2937] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5 pr-0 lg:pr-12">
              <img 
                className="h-12 w-auto mb-6 object-contain" 
                src="OneCodeTecnologia.png" 
                alt="One Code Tecnologia" 
                onError={(e) => { e.target.src = 'https://placehold.co/150x50/050505/00b3ff?text=One+Code' }}
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Construímos o código, você foca nos resultados. Soluções premium em desenvolvimento web, sistemas sob medida e manutenção contínua para empresas que exigem estabilidade e performance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-[#0a0c10] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00b3ff] hover:bg-[#0055ff]/10 transition-all transform hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#0a0c10] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00b3ff] hover:bg-[#0055ff]/10 transition-all transform hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#0a0c10] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00b3ff] hover:bg-[#0055ff]/10 transition-all transform hover:-translate-y-1">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 tracking-wide">Serviços</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><a href="#servicos" className="hover:text-[#00b3ff] transition-colors flex items-center gap-2"><span className="text-[#0055ff]">•</span> Criação de Sites Pro</a></li>
                <li><a href="#servicos" className="hover:text-[#00b3ff] transition-colors flex items-center gap-2"><span className="text-[#0055ff]">•</span> Sistemas e ERPs (Web)</a></li>
                <li><a href="#planos" className="hover:text-[#00b3ff] transition-colors flex items-center gap-2"><span className="text-[#0055ff]">•</span> Planos de Manutenção</a></li>
                <li><a href="#planos" className="hover:text-[#00b3ff] transition-colors flex items-center gap-2"><span className="text-[#0055ff]">•</span> Hospedagem Cloud</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 tracking-wide">A Empresa</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><a href="#como-funciona" className="hover:text-[#00b3ff] transition-colors">Nosso Método de Trabalho</a></li>
                <li><a href="#planos" className="hover:text-[#00b3ff] transition-colors">Tabela de Preços e Planos</a></li>
                <li><a href="#contato" className="hover:text-[#00b3ff] transition-colors">Fale com um Especialista</a></li>
              </ul>
              
              <div className="mt-8 p-4 bg-[#0a0c10] border border-[#1f2937] rounded-xl flex items-start gap-4">
                <ShieldCheck size={24} className="text-[#00b3ff] shrink-0" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Operamos com infraestrutura de alto nível garantindo 99.9% de Uptime para todos os projetos dos nossos parceiros.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1f2937] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} One Code Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-sm text-gray-500 font-medium">
              <a href="#" className="hover:text-gray-300 transition-colors">Termos e Condições</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}