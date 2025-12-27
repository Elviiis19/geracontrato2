import { PageView } from './types';

export interface RouteConfig {
  path: string;
  view: PageView;
  title: string;
  description: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    view: 'home',
    title: "Gerar Contrato Online PDF 2026: Rápido e Grátis | Gera Contrato",
    description: "Ferramenta gratuita para gerar contratos em PDF. Modelos de Aluguel, Serviços, Rural, Agronegócio, Veículos e União Estável. Baseado na Legislação 2026."
  },
  {
    path: '/contrato-de-prestacao-de-servicos',
    view: 'servico',
    title: "Contrato de Prestação de Serviços PDF Grátis | Simples e Rápido",
    description: "Gerador de Contrato de Prestação de Serviços para autônomos e freelancers. Preencha e baixe o PDF pronto para imprimir. Válido juridicamente."
  },
  {
    path: '/contrato-de-aluguel-residencial',
    view: 'residencial',
    title: "Contrato de Aluguel Residencial Simples PDF (2026) | Imprimir",
    description: "Modelo de Contrato de Locação Residencial grátis. Preencha online e baixe em PDF. Contém cláusulas de garantia, vistoria e prazo."
  },
  {
    path: '/contrato-de-aluguel-comercial',
    view: 'comercial',
    title: "Contrato de Aluguel Comercial PDF | Locação de Imóvel Comercial",
    description: "Faça seu Contrato de Locação Comercial online. Ideal para lojas, salas e galpões. Baseado na Lei do Inquilinato. Grátis e seguro."
  },
  {
    path: '/contrato-arrendamento-rural',
    view: 'arrendamentoRural',
    title: "Contrato de Arrendamento Rural PDF Grátis | Estatuto da Terra",
    description: "Modelo de Arrendamento Rural para imprimir. Aluguel de terras para plantio e pecuária. Gere seu contrato agrário em conformidade com a lei."
  },
  {
    path: '/contrato-parceria-agricola',
    view: 'parceriaAgricola',
    title: "Contrato de Parceria Agrícola PDF | Modelo Agrário 2026",
    description: "Minuta de Parceria Agrícola gratuita. Defina a porcentagem de partilha e riscos. Documento jurídico pronto para o produtor rural."
  },
  {
    path: '/contrato-compra-e-venda-veiculo',
    view: 'veiculo',
    title: "Contrato Compra e Venda de Veículo PDF | Carro e Moto",
    description: "Recibo de Compra e Venda de Veículo (Carro/Moto). Gere o contrato com placa, Renavam e garantia. Segurança para vendedor e comprador."
  },
  {
    path: '/declaracao-uniao-estavel',
    view: 'uniaoEstavel',
    title: "Contrato de União Estável Grátis PDF | Declaração de Convívio",
    description: "Faça sua Declaração de União Estável online. Formalize o relacionamento e defina o regime de bens (Comunhão Parcial/Universal). Baixe agora."
  },
  {
    path: '/contrato-de-namoro',
    view: 'namoro',
    title: "Contrato de Namoro PDF Grátis | Proteção de Bens",
    description: "Modelo de Contrato de Namoro qualificado. Proteja seu patrimônio e afaste a União Estável. Gere o documento jurídico em PDF."
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
  }
];

export const getRouteByView = (view: PageView) => routes.find(r => r.view === view) || routes[0];

export const getRouteByPath = (pathname: string) => {
  const cleanPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return routes.find(r => r.path === cleanPath) || routes[0];
};