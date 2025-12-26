import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Os contratos gerados neste site têm validade jurídica?",
      answer: "Sim. Os modelos disponibilizados pelo Gera Contrato são elaborados com base na legislação brasileira vigente (Código Civil, Lei do Inquilinato 8.245/91 e Estatuto da Terra). No entanto, para que o documento tenha eficácia plena, é fundamental que as partes preencham os dados corretamente e assinem o documento (fisicamente ou digitalmente) junto com duas testemunhas."
    },
    {
      question: "É realmente gratuito? Tem algum custo oculto?",
      answer: "Sim, é 100% gratuito. Nossa missão é desburocratizar o acesso a documentos simples. Mantemos o site no ar através de parcerias e anúncios discretos, sem cobrar nada do usuário final e sem exigir cadastro de cartão de crédito."
    },
    {
      question: "Meus dados ficam salvos no site?",
      answer: "Não. Privacidade é nossa prioridade. O sistema funciona no modelo 'Client-Side', ou seja, o preenchimento e a geração do PDF acontecem exclusivamente no navegador do seu dispositivo. Nós não temos banco de dados e não armazenamos nenhuma informação que você digita."
    },
    {
      question: "Posso editar o contrato depois de baixar?",
      answer: "O arquivo é gerado em formato PDF para garantir a formatação e a segurança da impressão. Se você notar algum erro após baixar, basta corrigir no formulário do site e gerar um novo arquivo imediatamente. É rápido e ilimitado."
    },
    {
      question: "Como posso assinar o contrato gerado?",
      answer: "Você pode imprimir o PDF e assinar fisicamente (caneta), ou utilizar a assinatura digital. Recomendamos o uso da assinatura Gov.br (gratuita para cidadãos brasileiros) ou plataformas como DocuSign e ClickSign para garantir a autenticidade digital."
    },
    {
      question: "Serve para reconhecimento de firma em cartório?",
      answer: "Sim. O layout gerado respeita as margens e padrões exigidos pelos cartórios brasileiros. Para reconhecer firma, basta imprimir o contrato e levá-lo ao cartório de notas, onde as partes deverão assinar na presença do tabelião ou ter suas firmas (assinaturas) já abertas no local."
    },
    {
      question: "Quais tipos de contratos rurais vocês oferecem?",
      answer: "Oferecemos modelos de Arrendamento Rural (aluguel de terra por preço fixo) e Parceria Agrícola (divisão de lucros/riscos), ambos alinhados com o Estatuto da Terra. São ideais para regularizar o uso de propriedades para plantio ou pecuária."
    },
    {
      question: "O que é o Contrato de Namoro?",
      answer: "É um documento onde o casal declara formalmente que a relação é apenas um namoro, sem intenção de constituir família no momento. Isso serve para proteger o patrimônio de ambos, evitando que a relação seja confundida judicialmente com uma União Estável, que geraria comunhão de bens."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Perguntas Frequentes (FAQ)</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tire suas dúvidas sobre a validade jurídica, segurança dos dados e como utilizar nossos modelos de contrato.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-300">
            <summary className="flex items-center justify-between cursor-pointer p-6 bg-white list-none">
              <span className="text-lg font-semibold text-gray-800 group-open:text-blue-600 transition-colors">
                {faq.question}
              </span>
              <span className="transition-transform duration-300 group-open:rotate-180">
                <svg className="w-6 h-6 text-gray-400 group-open:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/50">
              <p className="pt-4">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Ainda tem dúvidas?</h3>
        <p className="text-blue-700 mb-6">
          Lembre-se: O Gera Contrato é uma ferramenta tecnológica. Para casos complexos, disputas de bens ou dúvidas específicas sobre a sua situação, consulte sempre um advogado e/ou contador de sua confiança.
        </p>
      </div>
    </div>
  );
};