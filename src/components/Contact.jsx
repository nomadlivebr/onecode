import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
    e.target.reset();
  };

  return (
    <section id="contato" className="py-16 sm:py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-6 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Informações de Contato */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-extrabold tracking-widest uppercase text-orange-600 mb-2 block">
                FALE DIRETAMENTE CONOSCO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 mb-6 leading-tight">
                Pronto para colocar sua empresa em outro nível?
              </h2>
              <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                Preencha os campos ao lado ou chame diretamente no WhatsApp. Conversamos sem compromisso para entender suas metas e entregar a melhor solução.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20para%20minha%20empresa."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Atendimento Imediato</span>
                    <span className="text-slate-900 font-bold text-base sm:text-lg">Conversar no WhatsApp</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Email Comercial</span>
                    <span className="text-slate-900 font-bold text-base sm:text-lg">contato@onecodetecnologia.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-6">
              <form onSubmit={handleContactSubmit} className="space-y-5 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 mb-1">Solicitar Diagnóstico Gratuito</h3>
                  <p className="text-xs text-slate-500 mb-6">Retornamos em até poucas horas no mesmo dia útil.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Seu Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="onecode-input-contact" 
                      placeholder="Ex: João Silva" 
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Nome da Empresa</label>
                    <input 
                      type="text" 
                      id="empresa" 
                      className="onecode-input-contact" 
                      placeholder="Sua marca ou negócio" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">WhatsApp com DDD</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      required 
                      className="onecode-input-contact" 
                      placeholder="(11) 99999-9999" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email de Contato</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="onecode-input-contact" 
                      placeholder="joao@empresa.com.br" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="necessidade" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Qual o seu interesse principal?</label>
                  <select 
                    id="necessidade" 
                    className="onecode-input-contact cursor-pointer"
                  >
                    <option value="site">Criação de Site / Landing Page de Alta Conversão</option>
                    <option value="parceiro">Plano Mensal de Manutenção e Hospedagem</option>
                    <option value="sistema">Sistema / Software Sob Medida</option>
                    <option value="outro">Outro assunto ou dúvida</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Breve resumo do que precisa (Opcional)</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    className="onecode-input-contact resize-none" 
                    placeholder="Ex: Preciso de um site rápido para atrair clientes para meu consultório / empresa..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md shadow-orange-600/25 flex justify-center items-center gap-2 text-base cursor-pointer active:scale-[0.98]"
                >
                  <span>Enviar Solicitação</span>
                  <Send size={18} />
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-emerald-900 font-bold text-sm">Mensagem enviada com sucesso!</p>
                      <p className="text-emerald-700 text-xs mt-0.5">Nossa equipe entrará em contato em instantes pelo WhatsApp/Email.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
