import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Os contratos gerados neste site têm validade jurídica?",
      answer: "Sim, os modelos possuem validade jurídica, pois são fundamentados na legislação brasileira vigente (Código Civil de 2002, Lei do Inquilinato 8.245/91 e Estatuto da Terra). Contudo, a validade plena do documento depende do correto preenchimento dos dados pelas partes e das formalidades de assinatura (reconhecimento de firma ou assinatura digital certificada), conforme o Art. 784 do Código de Processo Civil."
    },
    {
      question: "Preciso contratar um advogado para usar esses modelos?",
      answer: "O Gera Contrato fornece minutas padronizadas para situações comuns do dia a dia. Embora nossos modelos sejam robustos, eles não substituem a análise de um advogado. Em negociações complexas, que envolvam valores elevados ou cláusulas específicas atípicas, recomendamos fortemente a consultoria de um profissional jurídico."
    },
    {
      question: "É realmente gratuito? Como o site se sustenta?",
      answer: "Sim, o uso da ferramenta é 100% gratuito para o usuário final. Nossa missão de desburocratização é financiada através de anúncios discretos exibidos no site e parcerias estratégicas, permitindo que você gere quantos documentos precisar sem pagar nada."
    },
    {
      question: "Meus dados ficam salvos? É seguro?",
      answer: "Sua segurança é nossa prioridade técnica. O site utiliza uma arquitetura 'Client-Side', o que significa que o PDF é gerado utilizando o processador do seu próprio computador ou celular. Nós não possuímos banco de dados de usuários e nenhuma informação que você digita é enviada para nossos servidores."
    },
    {
      question: "Posso editar o contrato depois de baixar?",
      answer: "O documento final é entregue em formato PDF para garantir a integridade da formatação (evitando quebras de página desconfiguradas). Caso note algum erro, basta corrigir no formulário do site e clicar em 'Baixar PDF' novamente. O processo é instantâneo e ilimitado."
    },
    {
      question: "Como funciona a assinatura digital?",
      answer: "Após baixar o PDF, você não precisa necessariamente imprimi-lo. Você pode utilizar o portal Gov.br (assinatura gratuita para cidadãos) ou plataformas privadas (como DocuSign, ClickSign ou ZapSign) para assinar digitalmente. Essas assinaturas possuem validade jurídica garantida pela MP 2.200-2/2001."
    },
    {
      question: "Qual a diferença entre Arrendamento e Parceria Agrícola?",
      answer: "No Arrendamento, o pagamento é fixo (como um aluguel), independente da produção. Na Parceria, o dono da terra e o produtor dividem os lucros e os riscos (se a safra for ruim, ambos perdem). Nossos modelos atendem a ambas as modalidades conforme o Estatuto da Terra."
    },
    {
      question: "Para que serve o Contrato de Namoro?",
      answer: "É um instrumento de proteção patrimonial. Ele serve para declarar formalmente que o casal mantém apenas um namoro qualificado, sem a intenção presente de constituir família. Isso evita que, em um eventual término, a relação seja confundida judicialmente com uma União Estável, protegendo os bens individuais de cada um."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Perguntas Frequentes (FAQ)</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Respostas técnicas sobre a validade jurídica, segurança da informação e utilização da plataforma.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <summary className="flex items-center justify-between cursor-pointer p-6 bg-white list-none">
              <span className="text-lg font-semibold text-gray-800 group-open:text-blue-600 transition-colors pr-4">
                {faq.question}
              </span>
              <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-400 group-open:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50 text-justify">
              <p className="pt-4">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Ainda tem dúvidas específicas?</h3>
        <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
          Lembre-se: O Gera Contrato é uma ferramenta tecnológica. Para casos complexos, disputas de bens ou dúvidas específicas sobre a sua situação, consulte sempre um advogado de sua confiança.
        </p>
      </div>
    </div>
  );
};