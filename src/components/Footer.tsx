import React from 'react';
import { PageView } from '../types';
import { getRouteByView } from '../routes';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageView, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-auto print:hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
           {/* Column 1: Brand */}
           <div>
             <div className="flex items-center justify-center md:justify-start mb-4">
               <div className="bg-blue-600 p-1.5 rounded mr-2">
                 <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
               </div>
               <h4 className="text-white font-bold text-lg">Gera Contrato</h4>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed">
               Plataforma gratuita para geração de documentos jurídicos. Simples, rápido, seguro e sem burocracia.
             </p>
           </div>

           {/* Column 2: Models */}
           <div>
             <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider text-xs">Contratos Populares</h4>
             <ul className="text-sm space-y-2">
               <li><a href={getRouteByView('servico').path} onClick={(e) => handleLinkClick('servico', e)} className="hover:text-blue-400 transition-colors block">Prestação de Serviços</a></li>
               <li><a href={getRouteByView('residencial').path} onClick={(e) => handleLinkClick('residencial', e)} className="hover:text-blue-400 transition-colors block">Aluguel Residencial</a></li>
               <li><a href={getRouteByView('comercial').path} onClick={(e) => handleLinkClick('comercial', e)} className="hover:text-blue-400 transition-colors block">Aluguel Comercial</a></li>
               <li><a href={getRouteByView('veiculo').path} onClick={(e) => handleLinkClick('veiculo', e)} className="hover:text-blue-400 transition-colors block">Compra e Venda de Veículo</a></li>
             </ul>
           </div>

           {/* Column 3: Institutional */}
           <div>
             <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider text-xs">Institucional</h4>
             <ul className="text-sm space-y-2">
               <li><a href={getRouteByView('about').path} onClick={(e) => handleLinkClick('about', e)} className="hover:text-blue-400 transition-colors block">Quem Somos</a></li>
               <li><a href={getRouteByView('faq').path} onClick={(e) => handleLinkClick('faq', e)} className="hover:text-blue-400 transition-colors block">Perguntas Frequentes (FAQ)</a></li>
               <li><a href={getRouteByView('privacy').path} onClick={(e) => handleLinkClick('privacy', e)} className="hover:text-blue-400 transition-colors block">Política de Privacidade</a></li>
               <li><a href={getRouteByView('terms').path} onClick={(e) => handleLinkClick('terms', e)} className="hover:text-blue-400 transition-colors block">Termos de Uso</a></li>
               <li><a href={getRouteByView('cookies').path} onClick={(e) => handleLinkClick('cookies', e)} className="hover:text-blue-400 transition-colors block">Política de Cookies</a></li>
             </ul>
           </div>

           {/* Column 4: Partners */}
           <div>
             <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider text-xs">Ferramentas Úteis</h4>
             <ul className="text-sm space-y-2">
               <li><a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start">Recibo Grátis <span className="text-[10px] ml-1">↗</span></a></li>
               <li><a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start">Declaração Online <span className="text-[10px] ml-1">↗</span></a></li>
             </ul>
           </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="mb-2 text-sm text-gray-500">
            &copy; {currentYear} Gera Contrato. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Desenvolvido por Elvis Dias
          </p>
        </div>
      </div>
    </footer>
  );
};