import React, { useState, useRef, useEffect } from 'react';
import { PageView } from '../types';

interface HeaderProps {
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Menu Configuration
  const navCategories = [
    {
      id: 'imoveis',
      label: 'Imóveis & Locação',
      icon: (
        <svg className="w-5 h-5 mr-1.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      items: [
        { label: 'Aluguel Residencial', page: 'residencial' as PageView },
        { label: 'Aluguel Comercial', page: 'comercial' as PageView },
      ]
    },
    {
      id: 'rural',
      label: 'Rural & Agro',
      icon: (
        <svg className="w-5 h-5 mr-1.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      items: [
        { label: 'Arrendamento Rural', page: 'arrendamentoRural' as PageView },
        { label: 'Parceria Agrícola', page: 'parceriaAgricola' as PageView },
      ]
    },
    {
      id: 'negocios',
      label: 'Veículos & Negócios',
      icon: (
        <svg className="w-5 h-5 mr-1.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        { label: 'Compra e Venda de Veículo', page: 'veiculo' as PageView },
        { label: 'Prestação de Serviços', page: 'servico' as PageView },
      ]
    },
    {
      id: 'familia',
      label: 'Família & Pessoal',
      icon: (
        <svg className="w-5 h-5 mr-1.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      items: [
        { label: 'União Estável', page: 'uniaoEstavel' as PageView },
        { label: 'Contrato de Namoro', page: 'namoro' as PageView },
      ]
    }
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm print:hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Navigation Container (Left Aligned) */}
          <div className="flex items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Gera Contrato</h1>
                <p className="text-[10px] uppercase tracking-wider text-blue-600 font-semibold">Documentos Jurídicos Grátis</p>
              </div>
            </div>

            {/* Desktop Navigation (Moved next to logo) */}
            <nav className="hidden xl:flex space-x-2 items-center h-full ml-10 border-l border-gray-100 pl-6" ref={navRef}>
              {navCategories.map((category) => (
                <div 
                  key={category.id}
                  className="relative h-full flex items-center" 
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    onClick={() => toggleDropdown(category.id)} 
                    className={`flex items-center font-medium transition-all text-sm focus:outline-none px-3 py-2 rounded-md
                      ${activeDropdown === category.id ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}
                    `}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === category.id}
                  >
                    {category.icon}
                    {category.label}
                    <svg className={`w-3 h-3 ml-1 transform transition-transform duration-200 ${activeDropdown === category.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === category.id && (
                    <div className="absolute left-0 top-full mt-0 w-64 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 animate-fade-in z-50 overflow-hidden border border-gray-100" role="menu">
                       <div className="py-2">
                        {category.items.map((item, index) => (
                          <button 
                            key={index}
                            onClick={() => handleNavClick(item.page)} 
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-l-4 border-transparent hover:border-blue-500" 
                            role="menuitem"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Tools Dropdown */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('tools')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={() => toggleDropdown('tools')} 
                  className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm focus:outline-none px-3 py-2 rounded-md hover:bg-gray-50"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'tools'}
                >
                  <svg className="w-5 h-5 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Ferramentas <svg className={`w-3 h-3 ml-1 transform transition-transform ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {activeDropdown === 'tools' && (
                  <div className="absolute right-0 top-full mt-0 w-56 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 animate-fade-in z-50 overflow-hidden border border-gray-100" role="menu">
                    <div className="py-2">
                      <a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors" role="menuitem">
                        Recibo Grátis <span className="text-xs text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded ml-1">Novo</span>
                      </a>
                      <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors" role="menuitem">
                        Declaração Online
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button (Right Aligned) */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-32 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 border-b border-gray-50">Home</button>
            
            {navCategories.map((category) => (
              <div key={category.id} className="border-b border-gray-50 last:border-0">
                <div className="px-3 py-3 bg-gray-50/50 flex items-center">
                  <span className="mr-2 opacity-80">{category.icon}</span>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">{category.label}</span>
                </div>
                <div className="py-1">
                  {category.items.map((item, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleNavClick(item.page)} 
                      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 pl-10 border-l-2 border-transparent hover:border-blue-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="px-3 py-3 border-t border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">Ferramentas</span>
              <a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="block py-2 px-4 text-base font-medium text-blue-600 hover:text-blue-800 bg-blue-50 rounded-md mb-2">Recibo Grátis ↗</a>
              <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="block py-2 px-4 text-base font-medium text-blue-600 hover:text-blue-800 bg-blue-50 rounded-md">Declaração Online ↗</a>
            </div>
            
             <div className="px-3 py-3 border-t border-gray-100 mt-2">
              <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Quem Somos</button>
              <button onClick={() => handleNavClick('faq')} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 rounded-md">FAQ</button>
              <button onClick={() => handleNavClick('privacy')} className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 rounded-md">Privacidade</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};