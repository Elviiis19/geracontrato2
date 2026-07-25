import React from 'react';
import { PageView } from '../types';

interface ArticleProps {
  onNavigate: (type: PageView) => void;
}

export const ArticleServico: React.FC<ArticleProps> = ({ onNavigate }) => {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-slate prose-blue">
      <div className="mb-8">
        <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} className="text-sm font-medium text-blue-600 hover:text-blue-800 no-underline">&larr; Voltar para o Blog</a>
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">A Importância do Contrato de Prestação de Serviços: Protegendo o seu Trabalho</h1>
      <p className="text-slate-500 font-medium mb-10">Publicado em 10 de Janeiro de 2026 • Por Equipe Gera Contrato</p>
      
      <p>
        Para muitos profissionais autônomos, freelancers e pequenas empresas (MEIs), a ideia de apresentar um contrato formal pode parecer um obstáculo inicial à negociação. Muitos temem que a burocracia assuste o cliente. No entanto, trabalhar sem um contrato de prestação de serviços é o erro número um que pode levar ao prejuízo, à perda de tempo e a severas dores de cabeça jurídicas.
      </p>

      <h2>O que é o Contrato de Prestação de Serviços?</h2>
      <p>
        Trata-se de um instrumento jurídico, previsto e regulamentado no Código Civil Brasileiro (Lei 10.406/2002), que formaliza o acordo de vontades entre duas partes: o prestador (quem vai executar o trabalho) e o tomador (quem contrata e paga pelo serviço). Ele define com clareza obrigações, prazos, remuneração e as consequências do descumprimento do acordo.
      </p>

      <h2>Por que um acordo verbal ou por WhatsApp não é suficiente?</h2>
      <p>
        Embora um acordo verbal seja juridicamente aceito em algumas esferas, a dificuldade de comprová-lo o torna ineficaz na prática. Conversas por WhatsApp podem ser apagadas, e frequentemente sofrem com a falta de detalhamento. Sem um documento formal, você fica vulnerável ao fenômeno conhecido como <strong>Scope Creep</strong> (ou desvio de escopo).
      </p>
      <p>
        O desvio de escopo ocorre quando o cliente começa a pedir "só mais um ajuste", "só mais essa funcionalidade", ou "só mais uma alteraçãozinha", exigindo muito mais trabalho do que o inicialmente precificado. Com um contrato, o <strong>objeto</strong> do serviço é delimitado. Qualquer solicitação fora daquele escopo exige aditivo contratual e pagamento extra.
      </p>

      <h2>O que não pode faltar no seu Contrato</h2>
      <p>Para garantir que o documento tenha validade jurídica e forceza executiva, certifique-se de incluir:</p>
      <ul>
        <li><strong>Qualificação das partes:</strong> Nome completo, CPF/CNPJ, RG, estado civil e endereço atualizado de ambas as partes.</li>
        <li><strong>Objeto do contrato:</strong> A descrição minuciosa do que será feito. Seja extremamente detalhista nesta seção.</li>
        <li><strong>Preço e forma de pagamento:</strong> O valor total, se haverá parcelamento (sinal + entrega), e as datas exatas dos vencimentos.</li>
        <li><strong>Prazos:</strong> Cronograma de entregas. Se depender de envio de material pelo cliente, deixe claro que atrasos do cliente adiam o prazo final de entrega.</li>
        <li><strong>Multas e Rescisão:</strong> Defina uma multa (geralmente entre 10% e 20%) caso uma das partes quebre o contrato imotivadamente.</li>
        <li><strong>Foro:</strong> Especifique a comarca (cidade) onde eventuais ações judiciais serão julgadas caso haja litígio.</li>
      </ul>

      <h2>A Força de um Título Executivo Extrajudicial</h2>
      <p>
        Segundo o Código de Processo Civil (CPC), um contrato particular assinado pelas partes e por <strong>duas testemunhas</strong> possui força de título executivo extrajudicial. O que isso significa? Se o cliente não pagar, você não precisa entrar com uma "Ação de Cobrança" demorada, onde será preciso primeiro provar a existência da dívida. Você pode entrar diretamente com uma <strong>Ação de Execução</strong>, onde o juiz intima o devedor para pagar a dívida em 3 dias, sob pena de penhora direta de contas bancárias e bens.
      </p>

      <h2>Conclusão</h2>
      <p>
        Apresentar um contrato demonstra profissionalismo e seriedade. O cliente que se recusa a assinar um contrato padrão geralmente é o mesmo cliente que traria problemas na hora de pagar. Não arrisque o fruto do seu trabalho.
      </p>

      <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Pronto para se proteger?</h3>
        <p className="text-slate-600 mb-4">Gere agora o seu contrato de prestação de serviços de forma automática, gratuita e alinhada à legislação brasileira.</p>
        <button onClick={(e) => { e.preventDefault(); onNavigate('servico'); }} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
          Gerar Contrato de Serviço
        </button>
      </div>
    </article>
  );
};

export const ArticleAluguel: React.FC<ArticleProps> = ({ onNavigate }) => {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-slate prose-blue">
      <div className="mb-8">
        <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} className="text-sm font-medium text-blue-600 hover:text-blue-800 no-underline">&larr; Voltar para o Blog</a>
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">O que não pode faltar em um Contrato de Aluguel (Residencial e Comercial)</h1>
      <p className="text-slate-500 font-medium mb-10">Publicado em 22 de Fevereiro de 2026 • Por Equipe Gera Contrato</p>

      <p>
        Alugar um imóvel é um passo importante que envolve patrimônio de alto valor (para o locador) e o direito à moradia ou ponto de negócios (para o locatário). A <strong>Lei do Inquilinato (Lei nº 8.245/1991)</strong> estabelece regras rígidas para proteger ambas as partes, mas a maior parte da proteção legal só é eficaz se você tiver um contrato sólido e bem redigido.
      </p>
      
      <h2>1. A Cláusula do Prazo (E a "Denúncia Vazia")</h2>
      <p>
        No aluguel residencial, a questão do prazo gera muita confusão. A lei estabelece que contratos assinados com prazo igual ou superior a <strong>30 meses</strong> oferecem ao locador a vantagem da <em>denúncia vazia</em>. Isso significa que, ao final dos 30 meses, o proprietário pode pedir o imóvel de volta sem precisar justificar o motivo.
      </p>
      <p>
        Se o contrato for feito com prazo inferior a 30 meses (por exemplo, os populares 12 meses), o término do prazo não garante ao proprietário o direito de despejo imediato. Ele precisará de uma <em>denúncia cheia</em> (ex: uso próprio, demolição aprovada) ou terá que esperar a locação atingir 5 anos ininterruptos.
      </p>

      <h2>2. Modalidades de Garantia</h2>
      <p>
        A lei não permite a exigência de mais de uma modalidade de garantia num mesmo contrato (art. 37 da Lei do Inquilinato). Isso é crime. Portanto, escolha uma:
      </p>
      <ul>
        <li><strong>Caução:</strong> Dinheiro depositado antecipadamente (limitado por lei a 3 meses de aluguel), que deve ser devolvido corrigido ao final do contrato caso não haja dívidas ou danos.</li>
        <li><strong>Fiador:</strong> Terceiro que se responsabiliza pela dívida. Exige comprovação de renda e, preferencialmente, imóvel próprio quitado na mesma cidade.</li>
        <li><strong>Seguro Fiança:</strong> Apólice contratada junto a uma seguradora (geralmente paga pelo inquilino).</li>
        <li><strong>Sem garantia:</strong> Uma modalidade crescente. Se o inquilino atrasar 1 mês, o locador tem direito a pedir o despejo liminar (em até 15 dias).</li>
      </ul>

      <h2>3. Reajuste Anual e Índice Aplicável</h2>
      <p>
        A inflação corrói o valor da moeda. O contrato deve especificar qual índice será usado para reajustar o aluguel a cada 12 meses. Historicamente usa-se o <strong>IGP-M</strong> (Índice Geral de Preços ao Mercado) da FGV. No entanto, por causa das fortes variações desse índice, o <strong>IPCA</strong> (Índice Nacional de Preços ao Consumidor Amplo) do IBGE tem sido a escolha mais comum e equilibrada atualmente.
      </p>

      <h2>4. O Termo de Vistoria de Imóvel</h2>
      <p>
        Todo contrato de locação dita que o imóvel deve ser entregue nas mesmas condições em que foi recebido (exceto deterioração de uso normal). Porém, sem um <strong>Termo de Vistoria Prévio</strong> anexado ao contrato, o locador não tem como provar que a parede estava pintada de branco ou que as portas estavam intactas. A vistoria com fotos anexadas e assinada pelas partes é absolutamente crucial.
      </p>

      <h2>Conclusão</h2>
      <p>
        Um contrato copiado às pressas da internet, muitas vezes defasado e sem contexto, pode colocar seu imóvel ou sua moradia em risco. Sempre utilize minutas atualizadas com a legislação vigente.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Imóvel Residencial</h3>
          <button onClick={(e) => { e.preventDefault(); onNavigate('residencial'); }} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-full">
            Gerar Contrato Residencial
          </button>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Imóvel Comercial</h3>
          <button onClick={(e) => { e.preventDefault(); onNavigate('comercial'); }} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-full">
            Gerar Contrato Comercial
          </button>
        </div>
      </div>
    </article>
  );
};

export const ArticleUniao: React.FC<ArticleProps> = ({ onNavigate }) => {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-slate prose-blue">
      <div className="mb-8">
        <a href="/blog" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} className="text-sm font-medium text-blue-600 hover:text-blue-800 no-underline">&larr; Voltar para o Blog</a>
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">A Diferença Jurídica entre União Estável e Contrato de Namoro</h1>
      <p className="text-slate-500 font-medium mb-10">Publicado em 05 de Março de 2026 • Por Equipe Gera Contrato</p>

      <p>
        As dinâmicas modernas de relacionamento mudaram bastante. Casais frequentemente dormem juntos, compartilham o pagamento da Netflix, viajam juntos e até adotam pets. Mas para o direito de família, onde termina o namoro qualificado e onde começa a União Estável? Essa linha tênue pode custar muito caro (e gerar divisão de patrimônio não desejada) se não houver a devida documentação.
      </p>

      <h2>O que é a União Estável?</h2>
      <p>
        O Código Civil (Art. 1.723) reconhece como entidade familiar a união estável caracterizada na convivência pública, contínua e duradoura, e <strong>estabelecida com o objetivo de constituição de família</strong> (o <em>animus familiae</em>).
      </p>
      <p>
        Ao contrário da crença popular, <strong>não existe um tempo mínimo</strong> estipulado em lei (não são precisos 5 anos de relacionamento), nem há a necessidade de os parceiros morarem sob o mesmo teto. Se a sociedade (amigos, vizinhos) vê os dois como um casal com planos concretos de família (projetos conjuntos, dependência econômica, etc), pode haver união estável.
      </p>
      <p>
        A consequência mais drástica da união estável (se não houver contrato fixando um regime de bens específico) é que a lei presume, automaticamente, o regime de <strong>Comunhão Parcial de Bens</strong>. Tudo que for adquirido de forma onerosa durante a união é dos dois.
      </p>

      <h2>O que é o Contrato de Namoro?</h2>
      <p>
        O "namoro qualificado" tem quase todos os elementos da união estável (público, contínuo, duradouro), exceto o <em>animus familiae</em> <strong>no momento presente</strong>. Casais que namoram há anos e que até dividem um apartamento para economizar despesas (frequente entre universitários e jovens profissionais), não necessariamente querem formar uma família agora e partilhar seus bens futuros.
      </p>
      <p>
        O Contrato de Namoro é uma declaração bilateral, escrita, onde o casal deixa expresso perante terceiros e perante a justiça que o relacionamento atual <strong>não tem o objetivo imediato de constituir família</strong>, renunciando consequentemente aos direitos previdenciários, heranças e partilha de bens.
      </p>

      <h2>Por que assinar?</h2>
      <p>
        A assinatura de um desses documentos é fundamental para a blindagem patrimonial.
      </p>
      <ul>
        <li>
          <strong>Se vocês querem proteger bens individuais na separação:</strong> O Contrato de Namoro deixa as coisas claras e separadas. Ou então, vocês declaram a União Estável escolhendo expressamente o regime da <em>Separação Total de Bens</em>.
        </li>
        <li>
          <strong>Se vocês querem garantir direitos para o parceiro:</strong> Para colocar o parceiro no plano de saúde da empresa ou garantir pensão por morte no INSS, a <em>Declaração de União Estável</em> é o documento exigido pelas instituições.
        </li>
      </ul>

      <h2>Atenção Jurídica</h2>
      <p>
        O papel aceita qualquer coisa, mas a justiça avalia os fatos. Um <em>Contrato de Namoro</em> pode ser anulado por um juiz se for provado que o casal mantinha conta conjunta, comprou casa em conjunto, teve filhos e agia claramente como família constituída. O contrato deve refletir a realidade do casal para ter validade plena.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">União Estável</h3>
          <p className="text-slate-600 mb-4 text-sm">Formalize a família e defina o regime de bens.</p>
          <button onClick={(e) => { e.preventDefault(); onNavigate('uniaoEstavel'); }} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-full">
            Declarar União Estável
          </button>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Contrato de Namoro</h3>
          <p className="text-slate-600 mb-4 text-sm">Proteja os bens e declare que não há intenção familiar atual.</p>
          <button onClick={(e) => { e.preventDefault(); onNavigate('namoro'); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-full">
            Gerar Contrato de Namoro
          </button>
        </div>
      </div>
    </article>
  );
};
