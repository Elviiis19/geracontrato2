import { PageView } from './types';

export interface RouteConfig {
  path: string;
  view: PageView;
  title: string;
  description: string;
  schemaType?: string; // For JSON-LD Structured Data
  seoContent?: {
    title: string;
    intro: string;
    contentBlocks: { title: string; content: string }[];
  };
  relatedLinks?: PageView[]; // Internal Linking Strategy
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    view: 'home',
    title: "Gerar Contrato Online PDF 2026: Rápido e Grátis | Gera Contrato",
    description: "Ferramenta gratuita para gerar contratos em PDF. Modelos de Aluguel, Serviços, Rural, Agronegócio, Veículos e União Estável. Baseado na Legislação 2026.",
    schemaType: "WebApplication"
  },
  {
    path: '/contrato-de-prestacao-de-servicos',
    view: 'servico',
    title: "Contrato de Prestação de Serviços PDF Grátis | Simples e Rápido",
    description: "Gerador de Contrato de Prestação de Serviços para autônomos e freelancers. Preencha e baixe o PDF pronto para imprimir. Válido juridicamente.",
    schemaType: "Product",
    relatedLinks: ['recibo', 'comercial', 'veiculo'],
    seoContent: {
      title: "Guia Completo: Contrato de Prestação de Serviços",
      intro: "O Contrato de Prestação de Serviços é a ferramenta jurídica mais importante para autônomos, freelancers e MEIs. Ele formaliza o acordo entre quem executa o trabalho (prestador) e quem paga por ele (tomador), protegendo ambas as partes contra calotes e entregas malfeitas.",
      contentBlocks: [
        {
          title: "Por que você não deve trabalhar sem contrato?",
          content: "Muitos profissionais confiam apenas no acordo verbal ou em conversas de WhatsApp. O perigo disso reside na inadimplência e no escopo do trabalho ('scope creep'). Um contrato bem redigido define exatamente o que será entregue, evitando que o cliente peça 'ajustes infinitos' sem pagar a mais por isso, além de servir como Título Executivo Extrajudicial em caso de cobrança judicial."
        },
        {
          title: "Elementos essenciais deste documento",
          content: "Nosso modelo automático inclui cláusulas vitais conforme o Código Civil de 2002: 1) Objeto detalhado (o que será feito); 2) Preço e forma de pagamento; 3) Prazo de execução; 4) Multa por rescisão injustificada; e 5) Foro para resolução de conflitos. Isso garante profissionalismo e segurança."
        },
        {
          title: "Dica de Ouro para Prestadores",
          content: "Sempre anexe ao contrato um descritivo técnico ou proposta comercial se o serviço for complexo. E lembre-se: ao receber o pagamento, a emissão de Nota Fiscal ou Recibo é obrigatória para evitar problemas com o Fisco."
        }
      ]
    }
  },
  {
    path: '/contrato-de-aluguel-residencial',
    view: 'residencial',
    title: "Contrato de Aluguel Residencial Simples PDF (2026) | Imprimir",
    description: "Modelo de Contrato de Locação Residencial grátis. Preencha online e baixe em PDF. Contém cláusulas de garantia, vistoria e prazo.",
    schemaType: "Product",
    relatedLinks: ['comercial', 'servico', 'recibo'],
    seoContent: {
      title: "Segurança Jurídica na Locação Residencial",
      intro: "Alugar um imóvel sem contrato escrito é um risco imenso. A Lei do Inquilinato (Lei nº 8.245/91) protege ambos os lados, mas suas regras só se aplicam plenamente quando há um documento formalizando a relação. Nosso gerador cria um contrato robusto em segundos.",
      contentBlocks: [
        {
          title: "Prazo de 30 meses vs. 12 meses",
          content: "Uma dúvida comum: 'Posso fazer contrato de 1 ano?'. Pode, mas a Lei do Inquilinato dá ao locador o direito de retomada do imóvel (denúncia vazia) apenas em contratos com prazo igual ou superior a 30 meses. Contratos menores exigem justificativa para pedir o imóvel de volta. Nosso modelo permite que você defina o prazo que achar melhor, mas esteja ciente dessa regra."
        },
        {
          title: "Índice de Reajuste (IGPM ou IPCA)",
          content: "Historicamente, usava-se o IGPM para reajustes anuais. Porém, devido à alta volatilidade desse índice recentemente, muitos proprietários e inquilinos têm preferido o IPCA. É fundamental definir qual índice será usado para evitar surpresas no aniversário do contrato."
        },
        {
          title: "Vistoria e Devolução",
          content: "A cláusula de conservação obriga o inquilino a devolver o imóvel como o recebeu. Recomendamos fortemente que, anexo a este contrato, seja feito um laudo de vistoria com fotos (mesmo que simples, pelo celular) para evitar disputas sobre pintura e danos ao final da locação."
        }
      ]
    }
  },
  {
    path: '/contrato-de-aluguel-comercial',
    view: 'comercial',
    title: "Contrato de Aluguel Comercial PDF | Locação de Imóvel Comercial",
    description: "Faça seu Contrato de Locação Comercial online. Ideal para lojas, salas e galpões. Baseado na Lei do Inquilinato. Grátis e seguro.",
    schemaType: "Product",
    relatedLinks: ['residencial', 'servico', 'recibo'],
    seoContent: {
      title: "Particularidades da Locação Comercial",
      intro: "O aluguel para fins comerciais (Não-Residencial) possui regras próprias vitais para a sobrevivência do negócio, especialmente no que tange à proteção do ponto comercial.",
      contentBlocks: [
        {
          title: "Ação Renovatória e Ponto Comercial",
          content: "Para o empresário, o ponto é tudo. A lei permite a Renovação Compulsória do contrato se: 1) O contrato for escrito e com prazo determinado; 2) O prazo mínimo for de 5 anos (ou a soma dos prazos ininterruptos); 3) O locatário estiver no mesmo ramo há pelo menos 3 anos. Nosso modelo serve como base para esse direito."
        },
        {
          title: "Destinação do Imóvel",
          content: "É crucial especificar a atividade que será exercida (ex: Loja de Roupas, Escritório de Contabilidade). Isso protege o locador caso o inquilino decida mudar para uma atividade que ofereça riscos ou incomode vizinhos, e protege o inquilino garantindo que o imóvel é apto para aquele fim."
        }
      ]
    }
  },
  {
    path: '/contrato-arrendamento-rural',
    view: 'arrendamentoRural',
    title: "Contrato de Arrendamento Rural PDF Grátis | Estatuto da Terra",
    description: "Modelo de Arrendamento Rural para imprimir. Aluguel de terras para plantio e pecuária. Gere seu contrato agrário em conformidade com a lei.",
    schemaType: "Product",
    relatedLinks: ['parceriaAgricola', 'veiculo', 'servico'],
    seoContent: {
      title: "Entendendo o Arrendamento Rural",
      intro: "O Arrendamento Rural funciona como um 'aluguel' do campo. O dono da terra cede o uso, e o arrendatário paga um valor fixo, independente se a colheita for boa ou ruim. É a modalidade preferida de quem quer renda garantida sem assumir riscos de produção.",
      contentBlocks: [
        {
          title: "Prazos Mínimos Legais",
          content: "O Estatuto da Terra (Decreto 59.566/66) impõe prazos mínimos para proteger a atividade produtiva: 3 anos para lavoura temporária (soja, milho) e pecuária de pequeno porte; 5 anos para lavoura permanente (café, laranja) ou pecuária de grande porte; 7 anos para exploração florestal. Respeitar esses prazos evita nulidade contratual."
        },
        {
          title: "Direito de Preferência",
          content: "Se o dono decidir vender a fazenda durante o contrato, o arrendatário tem preferência na compra, em igualdade de condições com terceiros. Essa cláusula é implícita na lei, mas nosso contrato a reforça para garantir a segurança jurídica."
        }
      ]
    }
  },
  {
    path: '/contrato-parceria-agricola',
    view: 'parceriaAgricola',
    title: "Contrato de Parceria Agrícola PDF | Modelo Agrário 2026",
    description: "Minuta de Parceria Agrícola gratuita. Defina a porcentagem de partilha e riscos. Documento jurídico pronto para o produtor rural.",
    schemaType: "Product",
    relatedLinks: ['arrendamentoRural', 'veiculo', 'servico'],
    seoContent: {
      title: "Parceria Agrícola: Sociedade no Campo",
      intro: "Diferente do arrendamento, na Parceria Agrícola o dono da terra e o produtor são sócios. Eles dividem os lucros, mas também os prejuízos e riscos. É ideal para quem quer investir junto na produção.",
      contentBlocks: [
        {
          title: "Limites de Cotas (Porcentagem)",
          content: "A lei define tetos para a participação do dono da terra: 20% se entrar apenas com a terra nua; 30% se entrar com terra preparada; até 50% se fornecer terra, moradia e maquinário; até 75% se fornecer tudo mais sementes e insumos. Definir a cota correta evita que o contrato seja descaracterizado judicialmente."
        },
        {
          title: "Vantagens Tributárias",
          content: "A Parceria Agrícola costuma ter tributação diferente do Arrendamento no Imposto de Renda, pois os rendimentos são classificados como atividade rural, não como aluguel. Consulte seu contador, mas saiba que este contrato é o primeiro passo para o planejamento tributário."
        }
      ]
    }
  },
  {
    path: '/contrato-compra-e-venda-veiculo',
    view: 'veiculo',
    title: "Contrato Compra e Venda de Veículo PDF | Carro e Moto",
    description: "Recibo de Compra e Venda de Veículo (Carro/Moto). Gere o contrato com placa, Renavam e garantia. Segurança para vendedor e comprador.",
    schemaType: "Product",
    relatedLinks: ['servico', 'recibo', 'comercial'],
    seoContent: {
      title: "Segurança na Venda de Carros Usados",
      intro: "Apenas preencher o CRV (Recibo de Transferência) não é suficiente para detalhar a negociação de um veículo usado. O contrato particular é o instrumento que define as responsabilidades sobre multas passadas, estado de conservação e prazos.",
      contentBlocks: [
        {
          title: "Cláusula 'No Estado em que se Encontra'",
          content: "Ao vender um carro usado entre particulares, não há a garantia estendida de concessionária (Código de Defesa do Consumidor não se aplica da mesma forma). Por isso, é vital a cláusula onde o comprador declara ter vistoriado o bem e aceitado suas condições, protegendo o vendedor de reclamações posteriores sobre desgastes naturais."
        },
        {
          title: "A Importância da Comunicação de Venda",
          content: "O contrato estipula o prazo para transferência (geralmente 30 dias). Se o comprador não transferir, o vendedor pode usar uma cópia autenticada deste contrato para solicitar a Comunicação de Venda no Detran, isentando-se de responsabilidade sobre multas e pontos na carteira futuros."
        }
      ]
    }
  },
  {
    path: '/declaracao-uniao-estavel',
    view: 'uniaoEstavel',
    title: "Contrato de União Estável Grátis PDF | Declaração de Convívio",
    description: "Faça sua Declaração de União Estável online. Formalize o relacionamento e defina o regime de bens (Comunhão Parcial/Universal). Baixe agora.",
    schemaType: "Product",
    relatedLinks: ['namoro', 'residencial', 'servico'],
    seoContent: {
      title: "Formalizando a Convivência",
      intro: "A União Estável é reconhecida como entidade familiar. Formalizá-la via contrato (escritura particular) traz segurança para inclusão em planos de saúde, seguros e direitos previdenciários (INSS), além de definir regras patrimoniais claras.",
      contentBlocks: [
        {
          title: "Definição de Regime de Bens",
          content: "Se o casal não fizer um contrato, aplica-se automaticamente a Comunhão Parcial de Bens (tudo que for adquirido após a união é dividido). Com este documento, vocês podem optar pela Separação Total de Bens, garantindo independência financeira absoluta, se assim desejarem."
        },
        {
          title: "Data de Início (Efeito Retroativo)",
          content: "O contrato permite fixar a data exata do início da convivência. Isso é crucial para determinar a partir de qual momento os bens adquiridos passam a ser considerados patrimônio comum do casal."
        }
      ]
    }
  },
  {
    path: '/contrato-de-namoro',
    view: 'namoro',
    title: "Contrato de Namoro PDF Grátis | Proteção de Bens",
    description: "Modelo de Contrato de Namoro qualificado. Proteja seu patrimônio e afaste a União Estável. Gere o documento jurídico em PDF.",
    schemaType: "Product",
    relatedLinks: ['uniaoEstavel', 'residencial', 'servico'],
    seoContent: {
      title: "Namoro Qualificado vs. União Estável",
      intro: "Com a evolução dos relacionamentos, a linha entre namoro e família ficou tênue. O Contrato de Namoro serve para blindar o patrimônio, declarando expressamente a ausência de 'animus familiae' (intenção de constituir família) no momento atual.",
      contentBlocks: [
        {
          title: "Proteção Patrimonial",
          content: "Muitos casais namoram por anos, dormem na casa um do outro e viajam juntos, sem a intenção de misturar bens. Sem este contrato, um juiz pode interpretar a relação como União Estável e determinar a partilha de bens em caso de separação. O contrato é a prova documental da vontade das partes."
        },
        {
          title: "Validade Jurídica",
          content: "Embora seja um instrumento relativamente novo, o Contrato de Namoro tem sido amplamente aceito pela jurisprudência como prova robusta da inexistência de união estável, desde que a realidade do casal condiga com o documento (ex: não tenham filhos juntos ou conta bancária conjunta)."
        }
      ]
    }
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
  },
  {
    path: '/fale-conosco',
    view: 'contact',
    title: "Fale Conosco | Suporte Gera Contrato",
    description: "Entre em contato com a equipe do Gera Contrato. Dúvidas técnicas, sugestões ou parcerias."
  }
];

export const getRouteByView = (view: PageView) => routes.find(r => r.view === view) || routes[0];

export const getRouteByPath = (pathname: string) => {
  const cleanPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return routes.find(r => r.path === cleanPath) || routes[0];
};