import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Configuração das Rotas (Cópia simplificada do routes.ts para geração estática)
const routes = [
  {
    path: '/contrato-de-prestacao-de-servicos',
    title: "Contrato de Prestação de Serviços PDF Grátis | Simples e Rápido",
    description: "Gerador de Contrato de Prestação de Serviços para autônomos e freelancers. Preencha e baixe o PDF pronto para imprimir. Válido juridicamente.",
  },
  {
    path: '/contrato-de-aluguel-residencial',
    title: "Contrato de Aluguel Residencial Simples PDF (2026) | Imprimir",
    description: "Modelo de Contrato de Locação Residencial grátis. Preencha online e baixe em PDF. Contém cláusulas de garantia, vistoria e prazo.",
  },
  {
    path: '/contrato-de-aluguel-comercial',
    title: "Contrato de Aluguel Comercial PDF | Locação de Imóvel Comercial",
    description: "Faça seu Contrato de Locação Comercial online. Ideal para lojas, salas e galpões. Baseado na Lei do Inquilinato. Grátis e seguro.",
  },
  {
    path: '/contrato-arrendamento-rural',
    title: "Contrato de Arrendamento Rural PDF Grátis | Estatuto da Terra",
    description: "Modelo de Arrendamento Rural para imprimir. Aluguel de terras para plantio e pecuária. Gere seu contrato agrário em conformidade com a lei.",
  },
  {
    path: '/contrato-parceria-agricola',
    title: "Contrato de Parceria Agrícola PDF | Modelo Agrário 2026",
    description: "Minuta de Parceria Agrícola gratuita. Defina a porcentagem de partilha e riscos. Documento jurídico pronto para o produtor rural.",
  },
  {
    path: '/contrato-compra-e-venda-veiculo',
    title: "Contrato Compra e Venda de Veículo PDF | Carro e Moto",
    description: "Recibo de Compra e Venda de Veículo (Carro/Moto). Gere o contrato com placa, Renavam e garantia. Segurança para vendedor e comprador.",
  },
  {
    path: '/declaracao-uniao-estavel',
    title: "Contrato de União Estável Grátis PDF | Declaração de Convívio",
    description: "Faça sua Declaração de União Estável online. Formalize o relacionamento e defina o regime de bens (Comunhão Parcial/Universal). Baixe agora.",
  },
  {
    path: '/contrato-de-namoro',
    title: "Contrato de Namoro PDF Grátis | Proteção de Bens",
    description: "Modelo de Contrato de Namoro qualificado. Proteja seu patrimônio e afaste a União Estável. Gere o documento jurídico em PDF.",
  },
  {
    path: '/politica-de-privacidade',
    title: "Política de Privacidade | Gera Contrato",
    description: "Entenda como protegemos seus dados. Processamento client-side seguro."
  },
  {
    path: '/termos-de-uso',
    title: "Termos de Uso | Gera Contrato",
    description: "Termos e condições de uso da ferramenta Gera Contrato."
  },
  {
    path: '/quem-somos',
    title: "Quem Somos | Gera Contrato",
    description: "Conheça a missão do Gera Contrato de desburocratizar documentos no Brasil."
  },
  {
    path: '/perguntas-frequentes',
    title: "Perguntas Frequentes (FAQ) | Validade Jurídica e Dúvidas",
    description: "Tire suas dúvidas sobre validade jurídica, custos, assinaturas e segurança dos contratos gerados."
  },
  {
    path: '/politica-de-cookies',
    title: "Política de Cookies | Gera Contrato",
    description: "Informações sobre o uso de cookies e tecnologias de rastreamento."
  },
  {
    path: '/fale-conosco',
    title: "Fale Conosco | Suporte Gera Contrato",
    description: "Entre em contato com a equipe do Gera Contrato. Dúvidas técnicas, sugestões ou parcerias."
  },
  {
    path: '/blog',
    title: "Blog & Educação Jurídica | Gera Contrato",
    description: "Artigos completos e guias jurídicos sobre contratos, leis e proteção patrimonial."
  },
  {
    path: '/blog/importancia-contrato-prestacao-servicos',
    title: "A Importância do Contrato de Prestação de Serviços | Gera Contrato",
    description: "Guia completo: entenda por que o contrato de prestação de serviços é vital para autônomos e freelancers."
  },
  {
    path: '/blog/o-que-nao-pode-faltar-contrato-aluguel',
    title: "O que não pode faltar em um Contrato de Aluguel | Gera Contrato",
    description: "Saiba quais são as cláusulas obrigatórias na locação de imóveis e como se proteger com base na Lei do Inquilinato."
  },
  {
    path: '/blog/diferenca-uniao-estavel-namoro',
    title: "Diferença entre União Estável e Contrato de Namoro | Gera Contrato",
    description: "Aprenda a proteger seu patrimônio entendendo a diferença jurídica entre namoro e união estável."
  }
];

// Valores Padrão para substituir (Baseados no index.html original)
const defaultTitle = "Gerar Contrato Online em PDF: Rápido e Grátis | Gera Contrato";
const defaultDesc = "Ferramenta gratuita para gerar contratos em PDF. Modelos de Aluguel, Serviços, Rural, Agronegócio, Veículos e União Estável. Baseado na Legislação Brasileira.";
const defaultUrl = "https://geracontrato.com.br/";

async function prerender() {
  const distPath = toAbsolute('../dist');
  const templatePath = path.join(distPath, 'index.html');

  // Verifica se o build existe
  if (!fs.existsSync(templatePath)) {
    console.error('ERRO: O arquivo dist/index.html não foi encontrado. Execute "vite build" antes.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  console.log('🏗️  Iniciando pré-renderização estática das rotas...');

  for (const route of routes) {
    try {
      // 1. Criar diretório da rota
      // Remove a barra inicial para o caminho do arquivo
      const relativePath = route.path.substring(1); 
      const dirPath = path.join(distPath, relativePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // 2. Substituir Metadados
      let html = template;

      // Substituir Title
      html = html.replace(
        new RegExp(`<title>${escapeRegExp(defaultTitle)}</title>`), 
        `<title>${route.title}</title>`
      );
      // Fallback caso o título tenha mudado levemente, tenta substituir qualquer título
      if (!html.includes(`<title>${route.title}</title>`)) {
         html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
      }

      // Substituir Description
      html = html.replace(
        new RegExp(`content="${escapeRegExp(defaultDesc)}" name="description"`),
        `content="${route.description}" name="description"`
      );
      // Fallback para description
      if (!html.includes(`content="${route.description}" name="description"`)) {
         html = html.replace(/name="description" content=".*?"/, `name="description" content="${route.description}"`);
         html = html.replace(/content=".*?" name="description"/, `content="${route.description}" name="description"`);
      }

      // Substituir Open Graph Tags
      html = html.replace(
        /property="og:title" content=".*?"/,
        `property="og:title" content="${route.title}"`
      );
      html = html.replace(
        /property="og:description" content=".*?"/,
        `property="og:description" content="${route.description}"`
      );
      html = html.replace(
        /property="og:url" content=".*?"/,
        `property="og:url" content="https://geracontrato.com.br${route.path}"`
      );
      
      // Substituir Canonical
      html = html.replace(
        /rel="canonical" href=".*?"/,
        `rel="canonical" href="https://geracontrato.com.br${route.path}"`
      );

      // 3. Salvar o arquivo index.html na pasta da rota
      fs.writeFileSync(path.join(dirPath, 'index.html'), html);
      console.log(`✅ Gerado: ${route.path}/index.html`);

    } catch (err) {
      console.error(`❌ Erro ao gerar ${route.path}:`, err);
    }
  }

  console.log('🎉 Pré-renderização concluída com sucesso!');
}

// Função auxiliar para escapar caracteres especiais em Regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

prerender();