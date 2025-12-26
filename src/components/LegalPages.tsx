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
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Quem Somos</h1>
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilitando a Burocracia no Brasil</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          O <strong>Gera Contrato</strong> nasceu da necessidade de simplificar o acesso a documentos jurídicos básicos no Brasil. Acreditamos que formalizar um acordo de serviço ou aluguel não deve ser um processo caro ou demorado.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Nossa missão é fornecer ferramentas tecnológicas gratuitas, rápidas e seguras para autônomos, pequenos empresários e cidadãos comuns.
        </p>
        <div className="mt-6 border-t pt-6">
          <p className="font-semibold text-gray-900">Desenvolvido por Elvis Dias</p>
          <p className="text-sm text-gray-500">Especialista em Desenvolvimento Web e Soluções Digitais.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          GC
        </div>
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Conheça nossas outras ferramentas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <a href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all">
          <span className="text-blue-600 font-bold text-lg block mb-2">Recibo Grátis</span>
          <span className="text-gray-500 text-sm">Gere recibos de pagamento simples e profissionais em PDF.</span>
        </a>
        <a href="https://declaracaoonline.com.br" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all">
          <span className="text-blue-600 font-bold text-lg block mb-2">Declaração Online</span>
          <span className="text-gray-500 text-sm">Crie declarações de residência, trabalho e renda facilmente.</span>
        </a>
      </div>
    </div>
  </div>
);