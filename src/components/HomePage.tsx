import React from 'react';
import { ContractType } from '../types';

interface HomePageProps {
  onNavigate: (type: ContractType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToModels = () => {
    const modelsSection = document.getElementById('modelos-contrato');
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Hero Section */}
      <section className="w-full bg-slate-900 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-indigo-600 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Gerar Contrato Online em PDF: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Rápido e Grátis</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Ferramenta profissional para gerar documentos de <strong>Aluguel</strong>, <strong>Prestação de Serviços</strong>, <strong>Venda de Veículos</strong>, <strong>União Estável</strong> e <strong className="text-green-400">Contratos Rurais (Agro)</strong>.
            Baseado na Legislação Brasileira, sem cadastro e sem custos ocultos.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button 
              onClick={() => onNavigate('servico')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              Criar Contrato Grátis
            </button>
            <button 
              onClick={scrollToModels}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-medium rounded-lg border border-slate-700 transition-all"
            >
              Ver Todos os Modelos
            </button>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            <span className="mr-4">✓ 100% Gratuito</span>
            <span className="mr-4">✓ Não precisa de cadastro</span>
            <span>✓ Download Imediato</span>
          </p>
        </div>
      </section>

      {/* Trust Indicators (Features) */}
      <section className="py-12 bg-white w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Segurança Jurídica</h3>
              <p className="text-gray-500 text-sm mt-2 max-w-xs">Baseado no Código Civil, Lei do Inquilinato e Estatuto da Terra.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Extremamente Rápido</h3>
              <p className="text-gray-500 text-sm mt-2 max-w-xs">Preencha o formulário e veja o contrato pronto na hora.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Privacidade Total</h3>
              <p className="text-gray-500 text-sm mt-2 max-w-xs">Seus dados são processados no navegador e não ficam salvos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Models Selection */}
      <section id="modelos-contrato" className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Qual contrato você precisa hoje?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Selecione um dos modelos abaixo para começar a preencher.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Serviços */}
            <div onClick={() => onNavigate('servico')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prestação de Serviços</h3>
              <p className="text-sm text-gray-500">Ideal para freelancers, autônomos e MEI. Defina prazos e valores.</p>
            </div>

            {/* Card 2: Residencial */}
            <div onClick={() => onNavigate('residencial')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aluguel Residencial</h3>
              <p className="text-sm text-gray-500">Proteja seu imóvel ou garanta seus direitos como inquilino.</p>
            </div>

            {/* Card 3: Comercial */}
            <div onClick={() => onNavigate('comercial')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aluguel Comercial</h3>
              <p className="text-sm text-gray-500">Para salas, lojas e galpões. Estabeleça regras claras de negócio.</p>
            </div>

             {/* Card 4: Veículos */}
             <div onClick={() => onNavigate('veiculo')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-red-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compra e Venda de Veículo</h3>
              <p className="text-sm text-gray-500">Venda seu carro ou moto com segurança. Detalhe placa, chassi e pagamento.</p>
            </div>

             {/* Card 5: Arrendamento Rural */}
             <div onClick={() => onNavigate('arrendamentoRural')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-yellow-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Arrendamento Rural</h3>
              <p className="text-sm text-gray-500">Aluguel de terras para plantio ou pecuária conforme o Estatuto da Terra.</p>
            </div>

             {/* Card 6: Parceria Agrícola */}
             <div onClick={() => onNavigate('parceriaAgricola')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Parceria Agrícola</h3>
              <p className="text-sm text-gray-500">Divisão de lucros e riscos na produção rural entre parceiros.</p>
            </div>

             {/* Card 7: União Estável */}
             <div onClick={() => onNavigate('uniaoEstavel')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-pink-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">União Estável</h3>
              <p className="text-sm text-gray-500">Formalize a convivência e defina o regime de bens do casal.</p>
            </div>

             {/* Card 8: Contrato de Namoro */}
             <div onClick={() => onNavigate('namoro')} className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:border-rose-300 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contrato de Namoro</h3>
              <p className="text-sm text-gray-500">Declare que a relação não constitui família, protegendo patrimônios.</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};