import React from 'react';
import { PageView } from '../types';
import { getRouteByView } from '../routes';

interface BlogPageProps {
  onNavigate: (type: PageView) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const articles = [
    {
      view: 'article_servico' as PageView,
      title: 'A Importância do Contrato de Prestação de Serviços',
      description: 'Entenda por que trabalhar sem um contrato formal pode ser o maior erro de um autônomo e como se proteger.',
      date: '10 Jan, 2026',
      tag: 'Carreira e Negócios'
    },
    {
      view: 'article_aluguel' as PageView,
      title: 'O que não pode faltar em um Contrato de Aluguel',
      description: 'Cláusulas obrigatórias e dicas de segurança baseadas na Lei do Inquilinato para locadores e locatários.',
      date: '22 Fev, 2026',
      tag: 'Imóveis'
    },
    {
      view: 'article_uniao' as PageView,
      title: 'Diferença entre União Estável e Contrato de Namoro',
      description: 'Proteja seu patrimônio. Aprenda a diferença jurídica entre o namoro moderno e a união com ânimo de constituir família.',
      date: '05 Mar, 2026',
      tag: 'Direito de Família'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Blog Jurídico</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
          Artigos completos, guias e dicas para proteger você, seus negócios e seu patrimônio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => {
          const route = getRouteByView(article.view);
          return (
            <article key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="p-8 flex-grow">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
                  {article.tag}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">
                  <a href={route.path} onClick={(e) => { e.preventDefault(); onNavigate(article.view); }} className="hover:text-blue-600">
                    {article.title}
                  </a>
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 text-sm">
                  <span className="text-slate-500">{article.date}</span>
                  <a href={route.path} onClick={(e) => { e.preventDefault(); onNavigate(article.view); }} className="font-semibold text-blue-600 hover:text-blue-800">
                    Ler artigo completo &rarr;
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
