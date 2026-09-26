import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ArrowRight, ArrowLeft, Sparkles, Building, Target, AlertTriangle, Rocket, HelpCircle } from 'lucide-react';

export default function Briefing() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    empresa: '',
    segmento: '',
    publicoAlvo: '',
    objetivos: '',
    concorrentes: '',
    problemasAtuais: '',
    presencaDigital: 'Sem site / Presença inicial',
    necessidade: 'Site / Landing Page',
    objetivosMarketing: '',
    nomeContato: '',
    whatsappContato: '',
    emailContato: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Formata mensagem para WhatsApp
    const message = `*NOVO BRIEFING — ONE CODE TECNOLOGIA*\n\n` +
      `*1. Empresa & Contato*\n` +
      `• *Nome:* ${formData.nomeContato || 'Não informado'}\n` +
      `• *Empresa:* ${formData.empresa || 'Não informado'}\n` +
      `• *Segmento:* ${formData.segmento || 'Não informado'}\n` +
      `• *WhatsApp:* ${formData.whatsappContato || 'Não informado'}\n` +
      `• *Email:* ${formData.emailContato || 'Não informado'}\n\n` +
      `*2. Público-Alvo & Objetivos*\n` +
      `• *Público-Alvo:* ${formData.publicoAlvo || 'Não informado'}\n` +
      `• *Principais Objetivos:* ${formData.objetivos || 'Não informado'}\n` +
      `• *Concorrentes/Referências:* ${formData.concorrentes || 'Não informado'}\n\n` +
      `*3. Cenário Atual*\n` +
      `• *Problemas Atuais:* ${formData.problemasAtuais || 'Não informado'}\n` +
      `• *Presença Digital Atual:* ${formData.presencaDigital}\n\n` +
      `*4. Necessidades Técnicas & Marketing*\n` +
      `• *Solução Desejada:* ${formData.necessidade}\n` +
      `• *Objetivos de Marketing:* ${formData.objetivosMarketing || 'Não informado'}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="briefing" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      
      {/* Glow de fundo */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-blue-600" />
            <span>Diagnóstico &amp; Briefing Estratégico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Conte-nos sobre o seu negócio.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Responda estas perguntas rápidas para mapearmos o cenário da sua empresa e apresentarmos a estratégia exata com prazos e valores.
          </p>
        </div>

        {/* Card do Formulário de Briefing */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Barra de Etapas Superior */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {[
                { step: 1, label: 'Empresa', icon: Building },
                { step: 2, label: 'Público & Metas', icon: Target },
                { step: 3, label: 'Cenário Atual', icon: AlertTriangle },
                { step: 4, label: 'Solução & Contato', icon: Rocket },
              ].map((s) => {
                const isDone = currentStep > s.step;
                const isCurrent = currentStep === s.step;
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        isCurrent
                          ? 'bg-blue-600 text-white'
                          : isDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isDone ? '✓' : s.step}
                    </div>
                    <span className={`text-xs font-bold hidden sm:inline ${
                      isCurrent ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {s.label}
                    </span>
                    {s.step < 4 && <span className="text-slate-300 mx-1">›</span>}
                  </div>
                );
              })}
            </div>

            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              Passo {currentStep} de 4
            </span>
          </div>

          {/* Corpo do Formulário */}
          <form onSubmit={currentStep === 4 ? handleSubmit : handleNext} className="p-6 sm:p-10">
            
            {/* ETAPA 1: Empresa & Segmento */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">
                    1. Sobre a sua empresa
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Identificação básica do seu negócio no mercado.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Nome da Empresa / Projeto *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ex: Clínica Sorriso, TechLog, etc."
                      className="onecode-input-briefing"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Segmento / Ramo de Atuação *
                    </label>
                    <input
                      type="text"
                      name="segmento"
                      required
                      value={formData.segmento}
                      onChange={handleChange}
                      placeholder="Ex: Odontologia, Logística, Imobiliário..."
                      className="onecode-input-briefing"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Quem é o seu Público-Alvo / Cliente Ideal?
                  </label>
                  <textarea
                    name="publicoAlvo"
                    rows="3"
                    value={formData.publicoAlvo}
                    onChange={handleChange}
                    placeholder="Descreva quem compra de você (empresas B2B, consumidor final, faixa etária, classe social, região...)"
                    className="onecode-input-briefing resize-none"
                  />
                </div>
              </div>
            )}

            {/* ETAPA 2: Objetivos & Concorrentes */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">
                    2. Objetivos &amp; Concorrência
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">
                    O que sua empresa quer alcançar e quem são as referências.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Quais são os principais objetivos da empresa hoje? *
                  </label>
                  <textarea
                    name="objetivos"
                    required
                    rows="3"
                    value={formData.objetivos}
                    onChange={handleChange}
                    placeholder="Ex: Gerar mais contatos diários no WhatsApp, vender online, automatizar planilhas, modernizar a imagem da empresa..."
                    className="onecode-input-briefing resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Concorrentes ou referências de sites/sistemas que você admira
                  </label>
                  <input
                    type="text"
                    name="concorrentes"
                    value={formData.concorrentes}
                    onChange={handleChange}
                    placeholder="Ex: empresa-x.com.br, concorrente-y..."
                    className="onecode-input-briefing"
                  />
                </div>
              </div>
            )}

            {/* ETAPA 3: Problemas Atuais & Presença Digital */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">
                    3. Problemas Atuais &amp; Presença Digital
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Mapeando os gargalos que estão travando seu crescimento.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Como está sua presença digital hoje?
                  </label>
                  <select
                    name="presencaDigital"
                    value={formData.presencaDigital}
                    onChange={handleChange}
                    className="onecode-input-briefing bg-white"
                  >
                    <option value="Sem site / Começando do zero">Não temos site nem sistema (Começando do zero)</option>
                    <option value="Site antigo / Precisa de redesign completo">Temos site, mas é antigo/ultrapassado e não traz resultados</option>
                    <option value="Site no ar, mas sem marketing ou tráfego">Temos site, mas ninguém visita (falta tráfego e marketing)</option>
                    <option value="Operação crescendo / Processos manuais">Crescemos e precisamos de um sistema web para organizar a operação</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Quais problemas ou frustrações sua empresa enfrenta atualmente? *
                  </label>
                  <textarea
                    name="problemasAtuais"
                    required
                    rows="3"
                    value={formData.problemasAtuais}
                    onChange={handleChange}
                    placeholder="Ex: Poucos orçamentos, site que não abre no celular, retrabalho em planilhas, dependência excessiva de indicação..."
                    className="onecode-input-briefing resize-none"
                  />
                </div>
              </div>
            )}

            {/* ETAPA 4: Necessidades Técnicas, Marketing & Contato */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">
                    4. Solução Desejada &amp; Contato
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Último passo: defina a prioridade técnica e onde enviaremos o diagnóstico.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Necessidade Principal *
                    </label>
                    <select
                      name="necessidade"
                      value={formData.necessidade}
                      onChange={handleChange}
                      className="onecode-input-briefing bg-white"
                    >
                      <option value="Site Institucional / Landing Page">Sites &amp; Landing Pages</option>
                      <option value="Sistema Web / Painel sob medida">Sistemas Web Sob Medida</option>
                      <option value="Estratégia de Marketing & Tráfego">Estratégias de Marketing &amp; Vendas</option>
                      <option value="Solução Completa (Site + Sistema + Marketing)">Solução Completa (Site + Sistema + Marketing)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Objetivos de Marketing
                    </label>
                    <input
                      type="text"
                      name="objetivosMarketing"
                      value={formData.objetivosMarketing}
                      onChange={handleChange}
                      placeholder="Ex: Google Ads, Meta Ads, SEO, CRM..."
                      className="onecode-input-briefing"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="nomeContato"
                      required
                      value={formData.nomeContato}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="onecode-input-briefing"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      name="whatsappContato"
                      required
                      value={formData.whatsappContato}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="onecode-input-briefing"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Email Corporativo
                    </label>
                    <input
                      type="email"
                      name="emailContato"
                      value={formData.emailContato}
                      onChange={handleChange}
                      placeholder="voce@empresa.com"
                      className="onecode-input-briefing"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Ações / Botões de Navegação */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Voltar</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md shadow-blue-600/20 hover:scale-[1.02]"
                >
                  <span>Continuar</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg shadow-emerald-600/25 hover:scale-[1.02]"
                >
                  <Send size={16} />
                  <span>Enviar Briefing no WhatsApp</span>
                </button>
              )}
            </div>

            {submitted && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span>Briefing enviado com sucesso! Nossa equipe entrará em contato em instantes.</span>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
