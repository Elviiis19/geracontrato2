import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ContractForm } from './components/ContractForm';
import { ContractPreview } from './components/ContractPreview';
import { PrivacyPolicy, TermsOfUse, AboutUs, CookiePolicy } from './components/LegalPages';
import { FAQ } from './components/FAQ';
import { ContractData, initialPartyState, initialServiceState, initialImovelState, initialVehicleState, PageView, ContractType } from './types';
import { trackPageView } from './utils/analytics';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  
  const [contractData, setContractData] = useState<ContractData>({
    type: 'servico',
    contratante: { ...initialPartyState },
    contratado: { ...initialPartyState },
    servico: { ...initialServiceState },
    imovel: { ...initialImovelState },
    veiculo: { ...initialVehicleState }
  });

  // Analytics: Track Page Views whenever currentPage changes
  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  const handleDataChange = useCallback((newData: ContractData) => {
    setContractData(newData);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleNavigation = (page: PageView) => {
    // If the page is a contract type, update the data type and set page to that type
    const contractTypes: ContractType[] = ['servico', 'residencial', 'comercial', 'arrendamentoRural', 'parceriaAgricola', 'veiculo', 'namoro', 'uniaoEstavel'];
    
    if (contractTypes.includes(page as ContractType)) {
      setContractData(prev => ({ ...prev, type: page as ContractType }));
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    const contractTypes: PageView[] = ['servico', 'residencial', 'comercial', 'arrendamentoRural', 'parceriaAgricola', 'veiculo', 'namoro', 'uniaoEstavel'];

    if (contractTypes.includes(currentPage)) {
       return (
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
             <div className="mb-8 print:hidden flex items-center justify-between">
               <div>
                 <button onClick={() => handleNavigation('home')} className="flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-1">
                   <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                   Voltar para Home
                 </button>
                 <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Preencha seu Contrato</h2>
               </div>
               <div className="text-sm text-gray-400 hidden sm:block">
                 Passo 1 de 2: Preenchimento
               </div>
             </div>
             
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="order-1 lg:order-1 print:hidden">
                <ContractForm 
                  data={contractData} 
                  onChange={handleDataChange} 
                  onPrint={handlePrint}
                  onNavigate={handleNavigation}
                />
              </div>
              <div className="order-2 lg:order-2 w-full print:w-full print:absolute print:top-0 print:left-0 print:z-50 sticky top-24">
                <ContractPreview data={contractData} />
              </div>
            </div>
          </div>
        );
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfUse />;
      case 'cookies':
        return <CookiePolicy />;
      case 'about':
        return <AboutUs />;
      case 'faq':
        return <FAQ />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-800">
      <Header onNavigate={handleNavigation} />
      <main className="flex-grow flex flex-col items-center w-full">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
};

export default App;