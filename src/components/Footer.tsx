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
               <h3 className="text-white font-bold text-xl tracking-tight">Gera Contrato</h3>
             </div>
             <p className="text-sm text-slate-300 leading-relaxed max-w-xs mx-auto md:mx-0">
               Plataforma gratuita para geração de documentos jurídicos. Simples, rápido, seguro e sem burocracia.
             </p>
           </div>

           {/* Column 2: Models */}
           <div>
             <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Contratos Populares</h3>
             <ul className="text-sm space-y-3">
               <li><a href={getRouteByView('servico').path} onClick={(e) => handleLinkClick('servico', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Prestação de Serviços</a></li>
               <li><a href={getRouteByView('residencial').path} onClick={(e) => handleLinkClick('residencial', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Aluguel Residencial</a></li>
               <li><a href={getRouteByView('comercial').path} onClick={(e) => handleLinkClick('comercial', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Aluguel Comercial</a></li>
               <li><a href={getRouteByView('veiculo').path} onClick={(e) => handleLinkClick('veiculo', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Compra e Venda de Veículo</a></li>
             </ul>
           </div>

           {/* Column 3: Institutional */}
           <div>
             <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Institucional</h3>
             <ul className="text-sm space-y-3">
               <li><a href={getRouteByView('about').path} onClick={(e) => handleLinkClick('about', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Quem Somos</a></li>
               <li><a href={getRouteByView('faq').path} onClick={(e) => handleLinkClick('faq', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Perguntas Frequentes (FAQ)</a></li>
               <li><a href={getRouteByView('privacy').path} onClick={(e) => handleLinkClick('privacy', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Política de Privacidade</a></li>
               <li><a href={getRouteByView('terms').path} onClick={(e) => handleLinkClick('terms', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Termos de Uso</a></li>
               <li><a href={getRouteByView('cookies').path} onClick={(e) => handleLinkClick('cookies', e)} className="text-slate-300 hover:text-white transition-colors duration-200 block">Política de Cookies</a></li>
             </ul>
           </div>

           {/* Column 4: Partners */}
           <div>
             <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Ferramentas Úteis</h3>
             <ul className="text-sm space-y-3">
               <li><a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start">Recibo Grátis <span className="text-[10px] ml-1 opacity-70">↗</span></a></li>
               <li><a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start">Declaração Online <span className="text-[10px] ml-1 opacity-70">↗</span></a></li>
             </ul>
           </div>
        </div>
        
        {/* Legal Disclaimer Section - Added for Transparency */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="shrink-0 pt-1">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed text-justify md:text-left">
                <strong>Isenção de Responsabilidade:</strong> O Gera Contrato fornece modelos padronizados de documentos e ferramentas automatizadas apenas para fins informativos e de conveniência. 
                Este serviço <strong>não constitui consultoria jurídica</strong> e não substitui a orientação técnica de um advogado ou especialista. 
                Embora nos esforcemos para manter nossos modelos atualizados com a legislação vigente, cada caso possui particularidades que um modelo genérico pode não cobrir. 
                Recomendamos fortemente que todos os documentos gerados sejam revisados por um profissional qualificado antes da assinatura para garantir que atendam às suas necessidades específicas e protejam seus interesses.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} Gera Contrato. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
               <span className="text-xs text-slate-500">Desenvolvido por Elvis Dias</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};