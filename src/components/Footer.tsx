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
               <li><a href={getRouteByView('comercial').path} onClick={(e) => handleLinkClick('comercial', e)} className="hover:text-blue-400 transition-