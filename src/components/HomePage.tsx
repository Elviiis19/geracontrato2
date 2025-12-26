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
      
      {/* Hero Section - Improved Gradient & Typography */}
      <section className="w-full bg-slate-900 relative overflow-hidden" aria-labelledby="hero-title">
        {/* Abstract Background Shapes - Reduced opacity for better text contrast */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-100 text-xs font-bold tracking-wide uppercase mb-8 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Atualizado para 2026
          </div>
          
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Gerador de Contratos <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-emerald-200">Jurídicos em PDF</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 leading-relaxed font-light">
            Crie documentos de <strong>Aluguel</strong>, <strong>Serviços</strong>, <strong>Veículos</strong> e <strong>Agro</strong> em minutos. 
            Sem cadastro, sem login, 100% seguro.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToModels}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 border border-blue-500 ring-offset-2 ring-offset-slate-900 focus:ring-2 focus:ring-blue-500"
              aria-label="Ver modelos de contrato disponíveis"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Escolher Modelo
            </button>
            <button 
              onClick={() => {
                const howToSection = document.getElementById('como-funciona');
                howToSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white text-lg font-medium rounded-xl border border-slate-700 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              aria-label="Entender como funciona o sistema"
            >
              Como Funciona
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
             <div className="flex items-center gap-2"><svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 100% Gratuito</div>
             <div className="flex items-center gap-2"><svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Lei Brasileira (CC/2002)</div>
             <div className="flex items-center gap-2"><svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Privacidade Total</div>
          </div>
        </div>
      </section>

      {/* Trust Indicators (Features) - Improved Contrast */}
      <section className="py-16 bg-white w-full border-b border-gray-100 shadow-sm relative z-20" aria-labelledby="features-title">
        <h2 id="features-title" className="sr-only">Diferenciais do Gera Contrato</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-700 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Segurança Jurídica</h3>
              <p className="text-slate-600 text-base mt-3 leading-relaxed">Modelos atualizados conforme o Código Civil, Lei do Inquilinato (8.245/91) e Estatuto da Terra.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-700 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Preenchimento Rápido</h3>
              <p className="text-slate-600 text-base mt-3 leading-relaxed">Sistema inteligente que formata o texto automaticamente enquanto você digita.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-700 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Dados Protegidos</h3>
              <p className="text-slate-600 text-base mt-3 leading-relaxed">Tecnologia <em>Client-Side</em>. Seus dados nunca saem do seu navegador para nenhum servidor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Models Selection */}
      <section id="modelos-contrato" className="w-full bg-slate-50 py-24" aria-labelledby="models-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-800 font-bold text-xs uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">Modelos Disponíveis</span>
            <h2 id="models-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-4">
              Qual documento você precisa hoje?
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              Selecione uma categoria abaixo para iniciar o preenchimento automático da sua minuta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cards with improved semantics (h3), focus states, and darker text for accessibility */}
            
            {/* Card 1: Serviços */}
            <button onClick={() => onNavigate('servico')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-100">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-800">Prestação de Serviços</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Para autônomos, freelancers e MEI. Defina objeto, prazos, valores e multa por descumprimento.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

            {/* Card 2: Residencial */}
            <button onClick={() => onNavigate('residencial')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-emerald-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-800">Aluguel Residencial</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Contrato de locação completo. Inclui cláusulas de vistoria, prazo, pagamento e garantias.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

            {/* Card 3: Comercial */}
            <button onClick={() => onNavigate('comercial')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-purple-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-purple-800">Aluguel Comercial</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Para lojas, salas e galpões. Estabeleça regras de negócio e finalidade do imóvel.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-purple-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

             {/* Card 4: Veículos */}
             <button onClick={() => onNavigate('veiculo')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-rose-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500">
              <div className="w-12 h-12 bg-rose-50 text-rose-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-rose-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-rose-800">Venda de Veículo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Recibo de compra e venda detalhado. Insira placa, Renavam, Chassi e condições.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-rose-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

             {/* Card 5: Arrendamento Rural */}
             <button onClick={() => onNavigate('arrendamentoRural')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-amber-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-amber-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-800">Arrendamento Rural</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Aluguel de terras para agropecuária. Conforme prazos do Estatuto da Terra.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

             {/* Card 6: Parceria Agrícola */}
             <button onClick={() => onNavigate('parceriaAgricola')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <div className="w-12 h-12 bg-orange-50 text-orange-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-orange-800">Parceria Agrícola</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Divisão de lucros e riscos na produção rural. Ideal para proprietários e produtores.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

             {/* Card 7: União Estável */}
             <button onClick={() => onNavigate('uniaoEstavel')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-pink-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <div className="w-12 h-12 bg-pink-50 text-pink-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-pink-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-pink-800">União Estável</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Formalize a convivência. Defina regime de bens (comunhão parcial, separação) e data de início.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-pink-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>

             {/* Card 8: Contrato de Namoro */}
             <button onClick={() => onNavigate('namoro')} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-left hover:border-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500">
              <div className="w-12 h-12 bg-red-50 text-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-red-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-red-800">Contrato de Namoro</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Proteção patrimonial. Declare que a relação não constitui família nem gera direitos de herança.</p>
              <span className="mt-4 inline-block text-sm font-semibold text-red-700 group-hover:underline">Criar contrato &rarr;</span>
            </button>
            
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="w-full bg-white py-20 border-t border-slate-100" aria-labelledby="how-it-works-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="how-it-works-title" className="text-3xl font-extrabold text-slate-900">Como funciona?</h2>
            <p className="mt-4 text-lg text-slate-600">Simples, rápido e sem complicações.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
               <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-slate-100 md:hidden"></div>
               <div className="relative flex items-center md:flex-col md:text-center gap-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-200 z-10 shrink-0">1</div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900">Escolha o Modelo</h3>
                   <p className="mt-2 text-slate-600">Selecione o tipo de contrato que deseja gerar entre as opções disponíveis acima.</p>
                 </div>
               </div>
            </div>
            <div className="relative">
               <div className="absolute top-0 left-6 -ml-px h-full w-0.5 bg-slate-100 md:hidden"></div>
               <div className="relative flex items-center md:flex-col md:text-center gap-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-200 z-10 shrink-0">2</div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900">Preencha os Dados</h3>
                   <p className="mt-2 text-slate-600">Insira as informações das partes e do objeto. O texto legal é ajustado automaticamente.</p>
                 </div>
               </div>
            </div>
            <div className="relative">
               <div className="relative flex items-center md:flex-col md:text-center gap-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xl shadow-lg shadow-emerald-200 z-10 shrink-0">3</div>
                 <div>
                   <h3 className="text-xl font-bold text-slate-900">Baixe o PDF</h3>
                   <p className="mt-2 text-slate-600">Revise o documento e clique em 'Baixar PDF'. Pronto para imprimir e assinar.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="w-full bg-slate-50 py-16 border-t border-slate-200" aria-labelledby="seo-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="seo-title" className="text-2xl font-bold text-slate-900 mb-6">Por que usar um gerador de contratos online?</h2>
          <div className="prose prose-slate prose-lg text-slate-600">
            <p className="mb-4">
              Em um mundo cada vez mais dinâmico, a necessidade de formalizar acordos de forma rápida e segura é essencial. O uso de um <strong>gerador de contratos online</strong> elimina a necessidade de redigir documentos do zero, economizando tempo e evitando erros jurídicos comuns.
            </p>
            <p className="mb-4">
              Diferente de <strong>modelos de contrato em Word</strong> que podem estar desatualizados ou conter formatações quebradas, nossa ferramenta garante que a estrutura legal (cláusulas, foro, qualificações) esteja sempre alinhada com as leis brasileiras vigentes em 2026.
            </p>
            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Validade Jurídica</h3>
            <p className="mb-4">
              Os documentos gerados pelo Gera Contrato possuem plena validade jurídica quando assinados pelas partes e por duas testemunhas, conforme o Art. 784 do Código de Processo Civil. Eles servem como título executivo extrajudicial, garantindo segurança para locadores, prestadores de serviço e vendedores.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 mt-8 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Dica de Ouro:
            </h4>
            <p className="text-sm text-slate-600 m-0">
              Para maior segurança, recomenda-se reconhecer firma das assinaturas em cartório ou utilizar assinaturas digitais certificadas (ICP-Brasil ou Gov.br).
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};