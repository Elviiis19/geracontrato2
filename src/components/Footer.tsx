import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-auto print:hidden border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
           {/* Column 1: Brand */}
           <div>
             <div className="flex items-center justify-center md:justify-start mb-6">
               <div className="bg-blue-600 p-2 rounded-lg mr-3 shadow-lg shadow-blue-900/50">
                 <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
               </div>
               <h4 className="text-white font-bold text-xl tracking-tight">Gera Contrato</h4>
             </div>
             <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
               Plataforma gratuita para geração de documentos jurídicos. Simples, rápido, seguro e sem burocracia.
             </p>
           </div>

           {/* Column 2: Models */}
           <div>
             <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Contratos Populares</h4>
             <ul className="text-sm space-y-3">
               <li><button onClick={() => onNavigate('servico')} className="text-slate-400 hover:text-white transition-colors duration-200">Prestação de Serviços</button></li>
               <li><button onClick={() => onNavigate('residencial')} className="text-slate-400 hover:text-white transition-colors duration-200">Aluguel Residencial</button></li>
               <li><button onClick={() => onNavigate('comercial')} className="text-slate-400 hover:text-white transition-colors duration-200">Aluguel Comercial</button></li>
               <li><button onClick={() => onNavigate('veiculo')} className="text-slate-400 hover:text-white transition-colors duration-200">Compra e Venda de Veículo</button></li>
             </ul>
           </div>

           {/* Column 3: Institutional */}
           <div>
             <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Institucional</h4>
             <ul className="text-sm space-y-3">
               <li><button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-white transition-colors duration-200">Quem Somos</button></li>
               <li><button onClick={() => onNavigate('faq')} className="text-slate-400 hover:text-white transition-colors duration-200">Perguntas Frequentes (FAQ)</button></li>
               <li><button onClick={() => onNavigate('privacy')} className="text-slate-400 hover:text-white transition-colors duration-200">Política de Privacidade</button></li>
               <li><button onClick={() => onNavigate('terms')} className="text-slate-400 hover:text-white transition-colors duration-200">Termos de Uso</button></li>
               <li><button onClick={() => onNavigate('cookies')} className="text-slate-400 hover:text-white transition-colors duration-200">Política de Cookies</button></li>
             </ul>
           </div>

           {/* Column 4: Partners */}
           <div>
             <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Ferramentas Úteis</h4>
             <ul className="text-sm space-y-3">
               <li><a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start">Recibo Grátis <span className="text-[10px] ml-1 opacity-70">↗</span></a></li>
               <li><a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start">Declaração Online <span className="text-[10px] ml-1 opacity-70">↗</span></a></li>
             </ul>
           </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Gera Contrato. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
             <span className="text-xs text-slate-600">Desenvolvido por Elvis Dias</span>
          </div>
        </div>
      </div>
    </footer>
  );
};