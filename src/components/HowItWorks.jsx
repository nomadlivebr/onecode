import React from 'react';
import { Infinity as InfinityIcon, CheckCircle2, ShieldCheck, Zap, Laptop } from 'lucide-react';
import logoImg from '../assets/OneCodeTecnologia_logo.png';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico & Estratégia",
      description: "Mapeamos a identidade da sua marca, o público-alvo e os diferenciais do seu produto para desenhar a estrutura exata que converte."
    },
    {
      number: "2",
      title: "Design Exclusivo & Código Rápido",
      description: "Desenvolvemos o layout limpo e codificamos com tecnologia de última geração, garantindo nota máxima em velocidade e usabilidade mobile."
    },
    {
      number: "3",
      title: "Lançamento & Otimização",
      description: "Configuramos domínio, hospedagem em nuvem, tags de conversão do Google e WhatsApp direto. Seu projeto entra no ar pronto para vender."
    }
  ];

  return (
    <section id="metodo" className="py-16 sm:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Lado Esquerdo: Passos */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold tracking-widest uppercase text-orange-600 mb-2 block">
              O MÉTODO ONE CODE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6 leading-tight">
              Processo direto ao ponto, sem enrolação técnica.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed">
              Sabemos que seu tempo é precioso. Nosso método foi validado para você ter um site de alto nível no ar com o mínimo de atrito e o máximo de resultado.
            </p>
            
            <div className="space-y-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-lg font-black text-slate-900">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 mb-1.5">{step.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}

              {/* Bloco Diferencial Contínuo */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                  <InfinityIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-1.5">Parceria &amp; Evolução Mensal</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Não sumimos depois da entrega. Cuidamos do servidor, segurança, backups e melhorias contínuas para você focar apenas em atender seus clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lado Direito: Card Ilustrativo Clean */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-lg text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-600">
                <Zap size={32} />
              </div>

              <h3 className="text-2xl font-black text-slate-950 mb-3">
                Velocidade &amp; Conversão
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Sites construídos pela One Code carregam em menos de 1.5s e são 100% responsivos em qualquer tamanho de tela.
              </p>

              <div className="space-y-3 text-left bg-white p-5 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Pontuação alta no Google PageSpeed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Layout adaptado para toque no mobile</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Botão de WhatsApp visível em 1 clique</span>
                </div>
              </div>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20meu%20projeto."
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-sm"
              >
                <span>Iniciar meu projeto agora</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
