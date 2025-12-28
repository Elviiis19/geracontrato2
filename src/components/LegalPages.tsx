import React from 'react';

export const PrivacyPolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Política de Privacidade</h1>
    <div className="prose prose-blue max-w-none text-gray-700">
      <p>A sua privacidade é fundamental para nós. No <strong>Gera Contrato</strong>, temos o compromisso de proteger sua privacidade e seus dados.</p>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Coleta e Armazenamento de Dados</h3>
      <p>Nosso site opera com uma arquitetura <strong>Client-Side</strong>. Isso significa que todos os dados inseridos nos formulários para a geração de contratos são processados exclusivamente no navegador do seu dispositivo. <strong>Nós não enviamos, armazenamos ou salvamos seus dados pessoais ou contratuais em nossos servidores.</strong> Assim que você fecha a aba ou atualiza a página, os dados inseridos desaparecem.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Cookies e Tecnologias de Rastreamento</h3>
      <p>Utilizamos cookies essenciais apenas para garantir o funcionamento correto do site e cookies de análise (como Google Analytics) para entender como nossa ferramenta é utilizada e melhorar a experiência do usuário. Esses dados são anônimos e agregados.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Publicidade</h3>
      <p>Podemos exibir anúncios de terceiros (como Google AdSense) para manter a ferramenta gratuita. Esses fornecedores podem usar cookies para exibir anúncios com base em visitas anteriores.</p>

      <p className="mt-8 text-sm text-gray-500">Última atualização: Janeiro de 2026.</p>
    </div>
  </div>
);

export const TermsOfUse: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Termos de Uso</h1>
    <div className="prose prose-blue max-w-none text-gray-700">
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Natureza do Serviço</h3>
      <p>O <strong>Gera Contrato</strong> é uma ferramenta automatizada que fornece modelos padronizados de documentos jurídicos. O serviço é fornecido "como está", de forma gratuita.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Ausência de Consultoria Jurídica</h3>
      <p>Este site <strong>não substitui a consultoria de um advogado</strong>. Os modelos gerados são genéricos e baseados na legislação vigente (Código Civil e Lei do Inquilinato), mas podem não cobrir as especificidades de casos complexos. Recomendamos sempre a revisão do documento por um profissional qualificado antes da assinatura.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Responsabilidade</h3>
      <p>O Gera Contrato e seus desenvolvedores não se responsabilizam por quaisquer danos diretos, indiretos ou consequenciais resultantes do uso ou da impossibilidade de uso dos documentos gerados neste site. O preenchimento correto e a validação das informações são de inteira responsabilidade do usuário.</p>
    </div>
  </div>
);

export const CookiePolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Política de Cookies</h1>
    <div className="prose prose-blue max-w-none text-gray-700">
      <p>Esta política descreve como o Gera Contrato utiliza cookies e tecnologias similares.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">1. O que são Cookies?</h3>
      <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles servem para lembrar suas preferências e melhorar a navegação.</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Como usamos os Cookies?</h3>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site (ex: navegação entre páginas).</li>
        <li><strong>Cookies de Desempenho:</strong> Utilizamos o Google Analytics para entender quantos usuários visitam o site e quais páginas são mais populares. Esses dados são anônimos.</li>
        <li><strong>Publicidade:</strong> Parceiros como o Google podem usar cookies para exibir anúncios relevantes baseados nos seus interesses.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Gerenciamento</h3>
      <p>Você pode desativar os cookies nas configurações do seu navegador a qualquer momento, mas isso pode afetar a funcionalidade de alguns sites.</p>
    </div>
  </div>
);

export const AboutUs: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        Nossa Missão é <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Desburocratizar o Brasil</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Acreditamos que o acesso a documentos jurídicos básicos deve ser um direito acessível a todos, não um privilégio de quem pode pagar caro ou esperar dias por um papel.
      </p>
    </div>

    {/* The Story / Founder Section */}
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-16">
      <div className="md:flex">
        <div className="md:w-1/3 bg-slate-900 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
           {/* Decorative bg elements */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-slate-900 opacity-90 z-0"></div>
           <div className="relative z-10">
             <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-4xl font-bold border-4 border-white/20 mb-6 mx-auto shadow-lg">
               ED
             </div>
             <h3 className="text-2xl font-bold text-white">Elvis Dias</h3>
             <p className="text-blue-200 font-medium mt-1 uppercase tracking-wider text-xs">Fundador & Desenvolvedor Full Stack</p>
             <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-white/80 text-sm italic">"Tecnologia deve servir para facilitar a vida real."</p>
             </div>
           </div>
        </div>
        <div className="md:w-2/3 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
            A História por trás do Projeto
          </h3>
          <div className="prose text-slate-600 leading-relaxed space-y-5 text-lg">
            <p>
              "Como desenvolvedor Full Stack, sempre olhei para o mundo buscando problemas que a tecnologia pudesse resolver de forma elegante. Mas a ideia do <strong>Gera Contrato</strong> surgiu de uma frustração pessoal, que talvez você compartilhe."
            </p>
            <p>
              "Certa vez, precisei de um contrato de aluguel simples e urgente. Minhas opções eram frustrantes: baixar modelos em Word desformatados e cheios de erros legais antigos, ou pagar taxas abusivas em sites que prometiam 'facilidade' mas cobravam caro por um PDF automático. Pensei: <em>'Por que algo tão essencial é tão difícil?'</em>"
            </p>
            <p>
              "Decidi usar minha experiência em programação para criar a solução que eu gostaria de ter encontrado: uma ferramenta <strong>gratuita, rápida e segura</strong>. Desenvolvi o Gera Contrato para que ninguém mais precise perder tempo formatando cláusulas ou gastar dinheiro com burocracia desnecessária. Aqui, a tecnologia trabalha a favor do cidadão."
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Values Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-blue-200">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Velocidade Extrema</h3>
        <p className="text-slate-600 leading-relaxed">Eliminamos etapas manuais. O que levaria horas formatando e revisando no Word, aqui nosso algoritmo faz em segundos.</p>
      </div>
      <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 transition-all hover:-translate-y-1 hover:shadow-lg">
         <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-emerald-200">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Gratuidade Real</h3>
        <p className="text-slate-600 leading-relaxed">Sem pegadinhas, sem "teste grátis" que pede cartão de crédito no final. Mantemos o projeto acessível através de tecnologia eficiente.</p>
      </div>
      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 transition-all hover:-translate-y-1 hover:shadow-lg">
         <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-indigo-200">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Privacidade Absoluta</h3>
        <p className="text-slate-600 leading-relaxed">Seus dados não são nossos. Toda a mágica acontece no navegador do seu dispositivo, garantindo sigilo total das informações.</p>
      </div>
    </div>
    
    {/* Ecosystem Links */}
    <div className="text-center border-t border-slate-200 pt-16">
      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">Ecossistema</span>
      <h3 className="text-3xl font-bold text-slate-900 mb-6">Outras Soluções que Desenvolvi</h3>
      <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
        O Gera Contrato faz parte de um conjunto de ferramentas criadas com o mesmo propósito: simplificar a vida do brasileiro.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
        <a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="flex-1 p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-blue-400 transition-all group text-left">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <span className="text-slate-300 group-hover:text-blue-600 transition-colors">↗</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Recibo Grátis</h4>
          <p className="text-slate-500 text-sm leading-relaxed">Gerador de recibos de pagamento profissionais em PDF. Ideal para aluguéis e serviços avulsos.</p>
        </a>
        <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="flex-1 p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-blue-400 transition-all group text-left">
           <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <span className="text-slate-300 group-hover:text-blue-600 transition-colors">↗</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">Declaração Online</h4>
          <p className="text-slate-500 text-sm leading-relaxed">Crie declarações de residência, trabalho e renda formatadas corretamente, sem precisar de Word.</p>
        </a>
      </div>
    </div>
  </div>
);