import React from 'react';

export const PrivacyPolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Política de Privacidade</h1>
    <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed">
      <p>
        No <strong>Gera Contrato</strong>, a privacidade e a segurança dos seus dados são prioridades absolutas. 
        Esta política descreve como operamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
      </p>
      
      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. Arquitetura Client-Side e Proteção de Dados</h3>
      <p>
        Diferente da maioria dos sites, o Gera Contrato utiliza uma arquitetura de processamento <strong>"Client-Side" (Lado do Cliente)</strong>. 
        Isso significa que:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Os dados que você digita no formulário <strong>jamais são enviados para nossos servidores</strong>.</li>
        <li>Toda a geração do arquivo PDF ocorre localmente, utilizando a memória e o processador do seu próprio dispositivo (computador ou celular).</li>
        <li>Nós não possuímos banco de dados de usuários, portanto, <strong>não armazenamos, não lemos e não compartilhamos</strong> o conteúdo dos seus contratos.</li>
      </ul>
      <p className="mt-2">
        Ao fechar a aba do navegador ou atualizar a página, todas as informações inseridas são automaticamente descartadas da memória do seu dispositivo.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Cookies e Coleta de Dados Anônimos</h3>
      <p>Utilizamos cookies e tecnologias similares com finalidades restritas:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento técnico do site.</li>
        <li><strong>Análise de Tráfego (Analytics):</strong> Coletamos dados anônimos e agregados (como número de visitas, tempo na página e localização aproximada) para melhorar a performance da ferramenta. Estes dados não identificam você pessoalmente.</li>
        <li><strong>Publicidade:</strong> Utilizamos parceiros de publicidade (como Google AdSense) que podem utilizar cookies para exibir anúncios relevantes baseados em seus interesses.</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. Seus Direitos (LGPD)</h3>
      <p>
        Como não armazenamos dados pessoais identificáveis (PII) em nossos sistemas, o risco de vazamento de dados por parte do Gera Contrato é inexistente. 
        Ainda assim, garantimos transparência total sobre nossas operações.
      </p>

      <p className="mt-8 text-sm text-gray-500 border-t pt-4">Última atualização: Janeiro de 2026.</p>
    </div>
  </div>
);

export const TermsOfUse: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Termos de Uso e Isenção de Responsabilidade</h1>
    <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="font-bold text-amber-800 m-0 text-sm uppercase">Aviso Importante</p>
        <p className="text-amber-900 m-0">
          O Gera Contrato é uma ferramenta tecnológica de automação documental e <strong>não presta assessoria jurídica</strong>.
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. Natureza do Serviço</h3>
      <p>
        O <strong>Gera Contrato</strong> disponibiliza uma plataforma online gratuita para a formatação automática de minutas contratuais baseadas em modelos padronizados. 
        O serviço é fornecido "no estado em que se encontra" ("as is"), sem garantias de adequação a casos específicos ou complexos.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Limitação de Responsabilidade (Disclaimer)</h3>
      <p>
        <strong>2.1. Ausência de Consultoria Jurídica:</strong> As informações contidas neste site e os documentos gerados possuem caráter meramente informativo e educacional. 
        Eles não substituem, em hipótese alguma, a consultoria, análise ou revisão de um advogado qualificado.
      </p>
      <p>
        <strong>2.2. Uso dos Documentos:</strong> O usuário reconhece que é o único responsável pela revisão, edição e veracidade dos dados inseridos no contrato. 
        O Gera Contrato, seus desenvolvedores e afiliados não se responsabilizam por:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Perdas ou danos decorrentes do uso inadequado dos modelos;</li>
        <li>Nulidade de cláusulas em litígios judiciais;</li>
        <li>Erros de preenchimento cometidos pelo usuário;</li>
        <li>Alterações legislativas que ocorram após a atualização dos nossos modelos.</li>
      </ul>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. Propriedade Intelectual</h3>
      <p>
        O código-fonte, design, logotipo e a estrutura da plataforma são de propriedade exclusiva do Gera Contrato. 
        É permitido o uso dos documentos gerados para fins pessoais e comerciais (fechamento de negócios), mas é vedada a cópia automatizada (scraping) 
        ou a revenda da nossa ferramenta tecnológica.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">4. Modificações</h3>
      <p>
        Reservamo-nos o direito de modificar estes termos a qualquer momento, visando adaptar-nos a evoluções legislativas ou tecnológicas. 
        O uso continuado da ferramenta implica na aceitação dos novos termos.
      </p>
    </div>
  </div>
);

export const CookiePolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
    <h1 className="text-3xl font-bold text-navy-900 mb-6">Política de Cookies</h1>
    <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed">
      <p>
        Esta política explica como e por que usamos cookies quando você visita o Gera Contrato.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">1. O que são Cookies?</h3>
      <p>
        Cookies são pequenos arquivos de texto salvos no seu navegador. Eles funcionam como a "memória" do site, permitindo que a plataforma reconheça 
        o seu dispositivo e lembre de suas preferências de navegação.
      </p>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">2. Categorias de Cookies Utilizados</h3>
      
      <div className="mt-4 space-y-4">
        <div className="border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-900">Necessários (Essenciais)</h4>
          <p className="text-sm">Indispensáveis para que o site funcione. Sem eles, recursos como a navegação entre páginas e a geração do PDF podem falhar.</p>
        </div>
        
        <div className="border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-900">Desempenho e Estatística</h4>
          <p className="text-sm">Utilizamos o Google Analytics para entender o volume de acessos e quais modelos de contrato são mais procurados. Esses dados são anônimos (seu IP é anonimizado).</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-4">
          <h4 className="font-bold text-slate-900">Publicidade e Marketing</h4>
          <p className="text-sm">Nossos parceiros (como Google AdSense) podem usar cookies para exibir anúncios que sejam relevantes para você, evitando a repetição excessiva da mesma propaganda.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">3. Gerenciamento de Cookies</h3>
      <p>
        Você tem total controle. É possível desativar ou limpar os cookies através das configurações do seu navegador (Chrome, Safari, Firefox, Edge). 
        Note que, ao desabilitar cookies essenciais, a ferramenta pode não funcionar corretamente.
      </p>
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