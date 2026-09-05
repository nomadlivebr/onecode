import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../assets/OneCodeTecnologia_logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-6 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoImg} 
                alt="One Code Tecnologia" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              Desenvolvimento de sites de alta conversão, sistemas sob medida e gestão contínua de tecnologia para empresas que exigem excelência e resultados reais.
            </p>
            
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span>Infraestrutura em nuvem segura com 99.9% de uptime garantido.</span>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços &amp; Soluções
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-white transition-colors">
                  Como Funciona o Método
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos &amp; Preços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Atendimento</h4>
            <p className="text-sm text-slate-400 mb-2">
              Segunda a Sexta: 08h às 18h
            </p>
            <p className="text-sm font-semibold text-white mb-4">
              contato@onecodetecnologia.com.br
            </p>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Falar no WhatsApp oficial &rarr;</span>
            </a>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} One Code Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
