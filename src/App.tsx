import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
// Lazy load Footer to reduce initial bundle size (TBT optimization)
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
// Static import for HomePage (LCP optimization - load immediately)
import { HomePage } from './components/HomePage';
import { ContractData, initialPartyState, initialServiceState, initialImovelState, initialVehicleState, PageView, ContractType } from './types';
import { trackPageView } from './utils/analytics';
import { getRouteByPath, getRouteByView, RouteConfig } from './routes';

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
    const canonicalUrl = `https://geracontrato.com.br${activeRoute.path === '/' ? '' : activeRoute.path}`;

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
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // 4. Update Open Graph Tags (Facebook/WhatsApp)
    const updateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('og:title', activeRoute.title);
    updateMeta('og:description', activeRoute.description);
    updateMeta('og:url', canonicalUrl);

    // 5. Inject JSON-LD (Rich Snippets)
    const updateJsonLd = (route: RouteConfig) => {
      let script = document.querySelector('#dynamic-json-ld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-json-ld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }

      // Default WebApplication Schema
      const baseSchema = {
        "@context": "https://schema.org",
        "@type": route.schemaType || "WebApplication",
        "name": route.title,
        "url": canonicalUrl,
        "description": route.description,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL"
        }
      };

      // Add Breadcrumbs Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://geracontrato.com.br"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": route.view === 'home' ? 'Início' : (route.seoContent?.title || route.title),
            "item": canonicalUrl
          }
        ]
      };
      
      script.textContent = JSON.stringify([baseSchema, breadcrumbSchema]);
    };

    updateJsonLd(activeRoute);

    // 6. Track Page View
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
                 <a 
                   href="/"
                   onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} 
                   className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-700 transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 -ml-2"
                   aria-label="Voltar para a página inicial"
                 >
                   <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                   Voltar para Home
                 </a>
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