import { PageView } from './types';

export interface RouteConfig {
  path: string;
  view: PageView;
  title: string;
  description: string;
  schemaType?: string; // For JSON-LD Structured Data
  seoContent?: {
    title: string;
    text: string;
  };
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
    schemaType: "Service",
    seoContent: {
      title: "Como funciona o Contrato de Prestação de Serviços?",
      text: "O Contrato de Prestação de Serviços é um documento essencial para formalizar a relação entre um profissional autônomo (ou empresa) e seu cliente. Ele garante que o serviço contratado seja entregue conforme o combinado e protege o prestador contra inadimplência. Nosso modelo inclui cláusulas vitais sobre o objeto do serviço, prazos, valores, multas por atraso e foro de eleição, tudo em conformidade com o Código Civil Brasileiro de 2002."
    }
  },
  {
    path: '/contrato-de-aluguel-residencial',
    view: 'residencial',
    title: "Contrato de Aluguel Residencial Simples PDF (2026) | Imprimir",
    description: "Modelo de Contrato de Locação Residencial grátis. Preencha online e baixe em PDF. Contém cláusulas de garantia, vistoria e prazo.",
    schemaType: "Product",
    seoContent: {
      title: "Segurança no Aluguel Residencial",
      text: "Este modelo de Contrato de Locação Residencial foi elaborado seguindo rigorosamente a Lei do Inquilinato (Lei nº 8.245/91). Ele é ideal para proprietários e inquilinos que desejam fechar negócio diretamente, sem burocracia excessiva, mas com total segurança jurídica. O documento prevê prazos de locação, reajustes anuais (IGPM/IPCA), responsabilidades sobre IPTU e condomínio, além das condições de entrega e devolução do imóvel."
    }
  },
  {
    path: '/contrato-de-aluguel-comercial',
    view: 'comercial',
    title: "Contrato de Aluguel Comercial PDF | Locação de Imóvel Comercial",
    description: "Faça seu Contrato de Locação Comercial online. Ideal para lojas, salas e galpões. Baseado na Lei do Inquilinato. Grátis e seguro.",
    schemaType: "Product",
    seoContent: {
      title: "Aluguel Comercial e a Lei do Inquilinato",
      text: "A locação comercial possui particularidades específicas, como o direito à renovação compulsória (em certos casos) e a destinação específica do imóvel. Nosso gerador cria um contrato robusto que define claramente a atividade comercial permitida, as regras para reformas e benfeitorias, e as penalidades por rescisão antecipada, garantindo a proteção do ponto comercial e do patrimônio do locador."
    }
  },
  {
    path: '/contrato-arrendamento-rural',
    view: 'arrendamentoRural',
    title: "Contrato de Arrendamento Rural PDF Grátis | Estatuto da Terra",
    description: "Modelo de Arrendamento Rural para imprimir. Aluguel de terras para plantio e pecuária. Gere seu contrato agrário em conformidade com a lei.",
    schemaType: "Product",
    seoContent: {
      title: "O que é Arrendamento Rural?",
      text: "O Arrendamento Rural é o 'aluguel' do campo. Nele, o dono da terra cede o uso para que outra pessoa plante ou crie animais, mediante um pagamento fixo (em dinheiro ou produto). Este contrato é regido pelo Estatuto da Terra (Lei nº 4.504/64) e possui prazos mínimos obrigatórios de acordo com o tipo de cultivo (3 anos para lavoura temporária, 5 ou 7 para permanentes). Nosso modelo respeita integralmente essas normas agrárias."
    }
  },
  {
    path: '/contrato-parceria-agricola',
    view: 'parceriaAgricola',
    title: "Contrato de Parceria Agrícola PDF | Modelo Agrário 2026",
    description: "Minuta de Parceria Agrícola gratuita. Defina a porcentagem de partilha e riscos. Documento jurídico pronto para o produtor rural.",
    schemaType: "Product",
    seoContent: {
      title: "Diferença entre Parceria e Arrendamento",
      text: "Na Parceria Agrícola, diferentemente do arrendamento, o dono da terra e o produtor tornam-se sócios no negócio. Ambos dividem os lucros da colheita, mas também compartilham os riscos e prejuízos (caso a safra seja ruim). Este contrato é fundamental para definir a porcentagem de partilha (cotas) de cada um, conforme os limites estipulados pelo Estatuto da Terra, evitando caracterização de vínculo empregatício ou arrendamento disfarçado."
    }
  },
  {
    path: '/contrato-compra-e-venda-veiculo',
    view: 'veiculo',
    title: "Contrato Compra e Venda de Veículo PDF | Carro e Moto",
    description: "Recibo de Compra e Venda de Veículo (Carro/Moto). Gere o contrato com placa, Renavam e garantia. Segurança para vendedor e comprador.",
    schemaType: "Product",
    seoContent: {
      title: "Venda de Veículos com Segurança",
      text: "Ao vender ou comprar um carro usado, o DUT (recibo) por si só não detalha as condições do negócio. O Contrato de Compra e Venda é vital para registrar o estado de conservação do veículo (vendido no estado em que se encontra), a responsabilidade por multas anteriores à venda e o prazo para transferência junto ao DETRAN. Isso protege o vendedor de pontuações indevidas na CNH e o comprador de dívidas ocultas."
    }
  },
  {
    path: '/declaracao-uniao-estavel',
    view: 'uniaoEstavel',
    title: "Contrato de União Estável Grátis PDF | Declaração de Convívio",
    description: "Faça sua Declaração de União Estável online. Formalize o relacionamento e defina o regime de bens (Comunhão Parcial/Universal). Baixe agora.",
    schemaType: "Product",
    seoContent: {
      title: "Formalizando a União Estável",
      text: "A Declaração de União Estável serve para provar a existência da entidade familiar perante terceiros, como INSS (pensão por morte), planos de saúde e clubes. Além disso, este contrato permite que o casal defina o regime de bens (Separação Total, Comunhão Parcial ou Universal), evitando que a regra padrão da Comunhão Parcial seja aplicada automaticamente em caso de dissolução futura."
    }
  },
  {
    path: '/contrato-de-namoro',
    view: 'namoro',
    title: "Contrato de Namoro PDF Grátis | Proteção de Bens",
    description: "Modelo de Contrato de Namoro qualificado. Proteja seu patrimônio e afaste a União Estável. Gere o documento jurídico em PDF.",
    schemaType: "Product",
    seoContent: {
      title: "Para que serve um Contrato de Namoro?",
      text: "O Contrato de Namoro é um instrumento jurídico utilizado para blindar o patrimônio do casal. Seu objetivo é declarar expressamente que, apesar da relação afetiva, não existe o objetivo de constituir família no momento (requisito da União Estável). Isso impede que, em um eventual término, um dos namorados pleiteie metade dos bens adquiridos pelo outro durante o relacionamento."
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