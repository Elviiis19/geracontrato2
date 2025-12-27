import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
// Lazy load Footer to reduce initial bundle size (TBT optimization)
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
// Static import for HomePage (LCP optimization - load immediately)
import { HomePage } from './components/HomePage';
import { ContractData, initialPartyState, initialServiceState, initialImovelState, initialVehicleState, PageView, ContractType } from './types';
import { trackPageView } from './utils/analytics';

// Lazy load heavy components to reduce initial bundle size (Performance 100%)
const ContractForm = React.lazy(() => import('./components/ContractForm').then(module => ({ default: module.ContractForm })));
const ContractPreview = React.lazy(() => import('./components/ContractPreview').then(module => ({ default: module.ContractPreview })));
const PrivacyPolicy = React.lazy(() => import('./components/LegalPages').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfUse = React.lazy(() => import('./components/LegalPages').then(module => ({ default: module.TermsOfUse })));
const AboutUs = React.lazy(() => import('./components/LegalPages').then(module => ({ default: module.AboutUs })));
const CookiePolicy = React.lazy(() => import('./components/LegalPages').then(module => ({ default: module.CookiePolicy })));
const FAQ = React.lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));

const LoadingSpinner = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// --- ROUTING CONFIGURATION ---
// Centralized configuration for Path <-> View mapping and SEO Metadata
interface RouteConfig {
  path: string;
  view: PageView;
  title: string;
  description: string;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    view: 'home',
    title: "Gerar Contrato Online PDF 2026: Rápido e Grátis | Gera Contrato",
    description: "Ferramenta gratuita para gerar contratos em PDF. Modelos de Aluguel, Serviços, Rural, Agronegócio, Veículos e União Estável. Baseado na Legislação 2026."
  },
  {
    path: '/contrato-de-prestacao-de-servicos',
    view: 'servico',
    title: "Contrato de Prestação de Serviços PDF Grátis | Simples e Rápido",
    description: "Gerador de Contrato de Prestação de Serviços para autônomos e freelancers. Preencha e baixe o PDF pronto para imprimir. Válido juridicamente."
  },
  {
    path: '/contrato-de-aluguel-residencial',
    view: 'residencial',
    title: "Contrato de Aluguel Residencial Simples PDF (2026) | Imprimir",
    description: "Modelo de Contrato de Locação Residencial grátis. Preencha online e baixe em PDF. Contém cláusulas de garantia, vistoria e prazo."
  },
  {
    path: '/contrato-de-aluguel-comercial',
    view: 'comercial',
    title: "Contrato de Aluguel Comercial PDF | Locação de Imóvel Comercial",
    description: "Faça seu Contrato de Locação Comercial online. Ideal para lojas, salas e galpões. Baseado na Lei do Inquilinato. Grátis e seguro."
  },
  {
    path: '/contrato-arrendamento-rural',
    view: 'arrendamentoRural',
    title: "Contrato de Arrendamento Rural PDF Grátis | Estatuto da Terra",
    description: "Modelo de Arrendamento Rural para imprimir. Aluguel de terras para plantio e pecuária. Gere seu contrato agrário em conformidade com a lei."
  },
  {
    path: '/contrato-parceria-agricola',
    view: 'parceriaAgricola',
    title: "Contrato de Parceria Agrícola PDF | Modelo Agrário 2026",
    description: "Minuta de Parceria Agrícola gratuita. Defina a porcentagem de partilha e riscos. Documento jurídico pronto para o produtor rural."
  },
  {
    path: '/contrato-compra-e-venda-veiculo',
    view: 'veiculo',
    title: "Contrato Compra e Venda de Veículo PDF | Carro e Moto",
    description: "Recibo de Compra e Venda de Veículo (Carro/Moto). Gere o contrato com placa, Renavam e garantia. Segurança para vendedor e comprador."
  },
  {
    path: '/declaracao-uniao-estavel',
    view: 'uniaoEstavel',
    title: "Contrato de União Estável Grátis PDF | Declaração de Convívio",
    description: "Faça sua Declaração de União Estável online. Formalize o relacionamento e defina o regime de bens (Comunhão Parcial/Universal). Baixe agora."
  },
  {
    path: '/contrato-de-namoro',
    view: 'namoro',
    title: "Contrato de Namoro PDF Grátis | Proteção de Bens",
    description: "Modelo de Contrato de Namoro qualificado. Proteja seu patrimônio e afaste a União Estável. Gere o documento jurídico em PDF."
  },
  {
    path: '/politica-de-privacidade',
    view: 'privacy',
    title: "Política de Privacidade | Gera Contrato",
    description: "Entenda como protegemos seus dados. Processamento client-side seguro."
  },
  {
    path: '/termos-de-uso',
    view: 'terms',
    title: "Termos de Uso | Gera Contrato",
    description: "Termos e condições de uso da ferramenta Gera Contrato."
  },
  {
    path: '/quem-somos',
    view: 'about',
    title: "Quem Somos | Gera Contrato",
    description: "Conheça a missão do Gera Contrato de desburocratizar documentos no Brasil."
  },
  {
    path: '/perguntas-frequentes',
    view: 'faq',
    title: "Perguntas Frequentes (FAQ) | Validade Jurídica e Dúvidas",
    description: "Tire suas dúvidas sobre validade jurídica, custos, assinaturas e segurança dos contratos gerados."
  },
  {
    path: '/politica-de-cookies',
    view: 'cookies',
    title: "Política de Cookies | Gera Contrato",
    description: "Informações sobre o uso de cookies e tecnologias de rastreamento."
  }
];

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

  // --- ROUTING LOGIC ---

  // Helper: Find route config by view name
  const getRouteByView = (view: PageView) => routes.find(r => r.view === view) || routes[0];

  // Helper: Find route config by current window path
  const getRouteByPath = (pathname: string) => {
     // Handle trailing slashes or exact matches
     const cleanPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
     return routes.find(r => r.path === cleanPath) || routes[0]; // Default to home if not found
  };

  // Initialize State based on URL (Clean URLs)
  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeRoute = getRouteByPath(currentPath);
    
    // Set Page
    setCurrentPage(activeRoute.view);

    // If it's a contract page, ensure the contract type state matches
    const contractTypes: ContractType[] = ['servico', 'residencial', 'comercial', 'arrendamentoRural', 'parceriaAgricola', 'veiculo', 'namoro', 'uniaoEstavel'];
    if (contractTypes.includes(activeRoute.view as ContractType)) {
      setContractData(prev => ({ ...prev, type: activeRoute.view as ContractType }));
    }

    // Handle Browser Back/Forward Buttons
    const handlePopState = () => {
      const poppedRoute = getRouteByPath(window.location.pathname);
      setCurrentPage(poppedRoute.view);
      if (contractTypes.includes(poppedRoute.view as ContractType)) {
         setContractData(prev => ({ ...prev, type: poppedRoute.view as ContractType }));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // SEO & Analytics Side Effects
  useEffect(() => {
    const activeRoute = getRouteByView(currentPage);

    // 1. Update Document Title
    document.title = activeRoute.title;

    // 2. Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', activeRoute.description);
    }

    // 3. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', `https://geracontrato.com.br${activeRoute.path === '/' ? '' : activeRoute.path}`);
    }

    // 4. Track Page View
    trackPageView(currentPage);

  }, [currentPage]);

  const handleDataChange = useCallback((newData: ContractData) => {
    setContractData(newData);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Updated Navigation Handler using Clean URLs
  const handleNavigation = (page: PageView) => {
    const targetRoute = getRouteByView(page);
    const contractTypes: ContractType[] = ['servico', 'residencial', 'comercial', 'arrendamentoRural', 'parceriaAgricola', 'veiculo', 'namoro', 'uniaoEstavel'];
    
    if (contractTypes.includes(page as ContractType)) {
      setContractData(prev => ({ ...prev, type: page as ContractType }));
    }
    
    // Push State with CLEAN URL
    window.history.pushState({ page }, '', targetRoute.path);

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
                 <button 
                   onClick={() => handleNavigation('home')} 
                   className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 -ml-2"
                   aria-label="Voltar para a página inicial"
                 >
                   <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                   Voltar para Home
                 </button>
                 <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Preencha seu Contrato</h1>
               </div>
               <div className="text-sm text-slate-500 hidden sm:block bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
                 Passo 1 de 2: Preenchimento
               </div>
             </div>
             
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="order-1 lg:order-1 print:hidden">
                <Suspense fallback={<LoadingSpinner />}>
                  <ContractForm 
                    data={contractData} 
                    onChange={handleDataChange} 
                    onPrint={handlePrint}
                    onNavigate={handleNavigation}
                  />
                </Suspense>
              </div>
              <div className="order-2 lg:order-2 w-full print:w-full print:absolute print:top-0 print:left-0 print:z-50 sticky top-24">
                <Suspense fallback={<div className="h-96 bg-gray-100 rounded-lg animate-pulse"></div>}>
                  <ContractPreview data={contractData} />
                </Suspense>
              </div>
            </div>
          </div>
        );
    }

    // Lazy load other pages
    return (
      <Suspense fallback={<LoadingSpinner />}>
        {(() => {
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
        })()}
      </Suspense>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Header onNavigate={handleNavigation} />
      <main className="flex-grow flex flex-col items-center w-full">
        {renderContent()}
      </main>
      <Suspense fallback={null}>
        <Footer onNavigate={handleNavigation} />
      </Suspense>
    </div>
  );
};

export default App;