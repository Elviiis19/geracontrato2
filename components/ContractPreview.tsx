import React from 'react';
import { ContractData, PartyDetails, ImovelDetails } from '../types';

interface ContractPreviewProps {
  data: ContractData;
}

export const ContractPreview: React.FC<ContractPreviewProps> = ({ data }) => {
  const { contratante, contratado, servico, imovel, veiculo, type } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return '_____ de ________________ de ______';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const renderAddress = (p: {rua?: string, numero?: string, bairro?: string, cidade?: string, uf?: string, cep?: string}, isParty = false) => {
    const parts = [
      p.rua && `${p.rua}`,
      p.numero && `nº ${p.numero}`,
      p.bairro && `Bairro ${p.bairro}`,
      p.cidade && `${p.cidade}`,
      p.uf && `${p.uf}`,
      p.cep && `CEP ${p.cep}`
    ].filter(Boolean);

    if (parts.length > 0) return parts.join(', ');
    return isParty ? '_______________________________________________________ (Endereço Completo)' : '_______________________________________________________ (Endereço do Imóvel)';
  };

  const renderParty = (p: PartyDetails) => {
    const hasData = p.nome || p.cpfCnpj;
    if (!hasData) return (
      <>
        <span className="text-gray-400 italic print:hidden">[Preencha os dados ao lado]</span>
        <span className="hidden print:inline">________________________________________________________________________________________________________________</span>
      </>
    );

    return (
      <span className="font-bold text-black">
        {p.nome || '___________'}, {p.nacionalidade || '___________'}, {p.estadoCivil || '___________'}, {p.profissao || '___________'}, 
        portador(a) do RG nº {p.rg || '___________'} e inscrito(a) no CPF/CNPJ sob o nº {p.cpfCnpj || '___________'}, 
        residente e domiciliado(a) na {renderAddress(p.endereco, true)}.
      </span>
    );
  };

  // --- TEMPLATES ---

  const renderServiceTemplate = () => (
    <>
      <h1 className="text-center font-bold text-lg uppercase mb-8">CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h1>
      <p className="mb-4">Pelo presente instrumento particular, de um lado:</p>
      <p className="mb-4"><strong>CONTRATANTE:</strong> {renderParty(contratante)}</p>
      <p className="mb-4"><strong>CONTRATADO:</strong> {renderParty(contratado)}</p>
      <p className="mb-6">Têm entre si, justo e contratado, o que se segue:</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA PRIMEIRA - DO OBJETO</h2>
      <p className="mb-4">O presente contrato tem por objeto a prestação de serviços de: <span className="font-bold">{servico.objeto || '_______________________________________________________'}</span>, a ser realizado pelo CONTRATADO ao CONTRATANTE.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA - DO VALOR E PAGAMENTO</h2>
      <p className="mb-4">Pelos serviços prestados, o CONTRATANTE pagará ao CONTRATADO a quantia total de <span className="font-bold">R$ {servico.valor || '0,00'}</span>.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA - DO PRAZO</h2>
      <p className="mb-4">O prazo para execução será de <span className="font-bold">{servico.prazo || '_______'}</span>, iniciando-se em <span className="font-bold">{servico.dataInicio ? new Date(servico.dataInicio).toLocaleDateString('pt-BR') : '__/__/____'}</span>.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA QUARTA - DAS OBRIGAÇÕES</h2>
      <p className="mb-4">O CONTRATADO obriga-se a prestar os serviços com zelo e técnica. O CONTRATANTE obriga-se a efetuar o pagamento acordado.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA QUINTA - DA RESCISÃO E MULTA</h2>
      <p className="mb-4">O descumprimento implicará em multa de <span className="font-bold">{servico.multa}</span> sobre o valor do contrato. Regido pelo Código Civil Brasileiro (Lei nº 10.406/2002).</p>
    </>
  );

  const renderRentalTemplate = (isCommercial: boolean) => (
    <>
      <h1 className="text-center font-bold text-lg uppercase mb-8">CONTRATO DE LOCAÇÃO {isCommercial ? 'COMERCIAL' : 'RESIDENCIAL'}</h1>
      <p className="mb-4">Pelo presente instrumento particular, de um lado:</p>
      <p className="mb-4"><strong>LOCADOR:</strong> {renderParty(contratante)}</p>
      <p className="mb-4"><strong>LOCATÁRIO:</strong> {renderParty(contratado)}</p>
      <p className="mb-6">Têm entre si, justo e contratado, o seguinte:</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA PRIMEIRA - DO IMÓVEL</h2>
      <p className="mb-4">O objeto de locação é o imóvel situado à: <span className="font-bold">{renderAddress(imovel)}</span>, a ser utilizado exclusivamente para fins {isCommercial ? 'Comerciais' : 'Residenciais'}.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA - DO ALUGUEL</h2>
      <p className="mb-4">O valor mensal do aluguel é de <span className="font-bold">R$ {servico.valor || '0,00'}</span>, a ser pago até o dia 05 de cada mês subsequente ao vencido.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA - DO PRAZO</h2>
      <p className="mb-4">A locação terá o prazo de <span className="font-bold">{servico.prazo || '_______'}</span>, iniciando-se em <span className="font-bold">{servico.dataInicio ? new Date(servico.dataInicio).toLocaleDateString('pt-BR') : '__/__/____'}</span>.</p>

      {isCommercial && (
        <>
          <h2 className="font-bold uppercase mb-2">CLÁUSULA QUARTA - DA ATIVIDADE</h2>
          <p className="mb-4">O imóvel destina-se à atividade de: <span className="font-bold">{servico.objeto || '_____________________'}</span>, sendo vedada a mudança de destinação sem anuência do Locador.</p>
        </>
      )}

      <h2 className="font-bold uppercase mb-2">CLÁUSULA {isCommercial ? 'QUINTA' : 'QUARTA'} - DA CONSERVAÇÃO</h2>
      <p className="mb-4">O LOCATÁRIO recebe o imóvel em perfeito estado e obriga-se a devolvê-lo nas mesmas condições. {servico.objeto && !isCommercial ? `Observação: ${servico.objeto}` : ''}</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA {isCommercial ? 'SEXTA' : 'QUINTA'} - DA MULTA</h2>
      <p className="mb-4">Infrações contratuais sujeitam-se a multa de <span className="font-bold">{servico.multa}</span> o valor do aluguel, proporcional ao tempo restante. Regido pela Lei do Inquilinato (Lei nº 8.245/91).</p>
    </>
  );

  const renderRuralTemplate = (isPartnership: boolean) => (
     <>
      <h1 className="text-center font-bold text-lg uppercase mb-8">{isPartnership ? 'CONTRATO DE PARCERIA AGRÍCOLA' : 'CONTRATO DE ARRENDAMENTO RURAL'}</h1>
      <p className="mb-4">Pelo presente instrumento particular, de um lado:</p>
      <p className="mb-4"><strong>{isPartnership ? 'PARCEIRO OUTORGANTE' : 'ARRENDADOR'}:</strong> {renderParty(contratante)}</p>
      <p className="mb-4"><strong>{isPartnership ? 'PARCEIRO OUTORGADO' : 'ARRENDATÁRIO'}:</strong> {renderParty(contratado)}</p>
      <p className="mb-6">Ajustam entre si o seguinte:</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA PRIMEIRA - DO IMÓVEL RURAL</h2>
      <p className="mb-4">O objeto deste contrato é o imóvel rural denominado <span className="font-bold">{imovel.nomePropriedade || '_______'}</span>, matrícula nº <span className="font-bold">{imovel.matricula || '_______'}</span>, com área de <span className="font-bold">{imovel.area || '_______'}</span>, situado à: {renderAddress(imovel)}.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA - DA ATIVIDADE</h2>
      <p className="mb-4">A área será utilizada para a atividade de: <span className="font-bold">{servico.objeto || '_____________________'}</span>.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA - {isPartnership ? 'DA PARTILHA' : 'DO PREÇO'}</h2>
      {isPartnership ? (
         <p className="mb-4">A participação do PARCEIRO OUTORGANTE nos frutos será de <span className="font-bold">{servico.valor || '___'}%</span>, cabendo ao PARCEIRO OUTORGADO o restante.</p>
      ) : (
         <p className="mb-4">O preço do arrendamento é fixado em <span className="font-bold">{servico.valor || 'R$ 0,00'}</span> (ou quantidade equivalente de produto), pago anualmente/mensalmente.</p>
      )}
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA QUARTA - DO PRAZO</h2>
      <p className="mb-4">O contrato terá vigência de <span className="font-bold">{servico.prazo || '_______'}</span>, iniciando em <span className="font-bold">{servico.dataInicio ? new Date(servico.dataInicio).toLocaleDateString('pt-BR') : '__/__/____'}</span>.</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA QUINTA - DA LEGISLAÇÃO</h2>
      <p className="mb-4">Este contrato rege-se pelo Estatuto da Terra (Lei nº 4.504/64) e seu Decreto Regulamentador (Decreto nº 59.566/66).</p>
    </>
  );

  const renderVehicleTemplate = () => (
    <>
      <h1 className="text-center font-bold text-lg uppercase mb-8">CONTRATO DE COMPRA E VENDA DE VEÍCULO</h1>
      <p className="mb-4">Pelo presente instrumento:</p>
      <p className="mb-4"><strong>VENDEDOR:</strong> {renderParty(contratante)}</p>
      <p className="mb-4"><strong>COMPRADOR:</strong> {renderParty(contratado)}</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA PRIMEIRA - DO OBJETO</h2>
      <p className="mb-4">O VENDEDOR vende ao COMPRADOR o veículo de sua propriedade com as seguintes características:</p>
      <ul className="list-disc ml-8 mb-4">
        <li><strong>Marca/Modelo:</strong> {veiculo.marcaModelo || '_____________'}</li>
        <li><strong>Ano/Modelo:</strong> {veiculo.ano || '_______'}</li>
        <li><strong>Placa:</strong> {veiculo.placa || '_______'}</li>
        <li><strong>Chassi:</strong> {veiculo.chassi || '_____________'}</li>
        <li><strong>Renavam:</strong> {veiculo.renavam || '_____________'}</li>
        <li><strong>Cor:</strong> {veiculo.cor || '_______'}</li>
      </ul>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA - DO PREÇO</h2>
      <p className="mb-4">O preço justo e acertado é de <span className="font-bold">R$ {servico.valor || '0,00'}</span>, pago neste ato.</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA - DA TRANSFERÊNCIA</h2>
      <p className="mb-4">O COMPRADOR obriga-se a efetuar a transferência do veículo para o seu nome no prazo de <span className="font-bold">{servico.prazo || '30'}</span> dias.</p>
      
      <h2 className="font-bold uppercase mb-2">CLÁUSULA QUARTA - DO ESTADO DO VEÍCULO</h2>
      <p className="mb-4">O COMPRADOR declara ter examinado o veículo, aceitando-o no estado de conservação em que se encontra. {servico.objeto ? `Observações: ${servico.objeto}` : ''}</p>
    </>
  );

  const renderDatingTemplate = () => (
    <>
      <h1 className="text-center font-bold text-lg uppercase mb-8">CONTRATO DE NAMORO</h1>
      <p className="mb-4">Pelo presente instrumento, as partes:</p>
      <p className="mb-4"><strong>PRIMEIRO DECLARANTE:</strong> {renderParty(contratante)}</p>
      <p className="mb-4"><strong>SEGUNDO DECLARANTE:</strong> {renderParty(contratado)}</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA PRIMEIRA - DA RELAÇÃO</h2>
      <p className="mb-4">As partes declaram que mantêm um relacionamento amoroso (namoro) desde <span className="font-bold">{servico.prazo ? new Date(servico.prazo).toLocaleDateString('pt-BR') : '__/__/____'}</span>, sem a intenção atual de constituir família.</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA - DA INEXISTÊNCIA DE UNIÃO ESTÁVEL</h2>
      <p className="mb-4">Ressaltam que, apesar da afetividade, não há convivência contínua, pública e duradoura com o objetivo de constituição de família, afastando-se a configuração de União Estável nos termos do art. 1.723 do Código Civil.</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA - DA INDEPENDÊNCIA PATRIMONIAL</h2>
      <p className="mb-4">Cada parte mantém total independência financeira e patrimonial. Não há, nem haverá durante o namoro, comunicação de bens, rendimentos ou dívidas.</p>
      
      {servico.objeto && (
         <p className="mb-4"><span className="font-bold">Observações Adicionais:</span> {servico.objeto}</p>
      )}
    </>
  );

  const renderUnionTemplate = () => (
    <>
      <h1 className="text-center font-bold text-lg uppercase mb-8">CONTRATO DE UNIÃO ESTÁVEL</h1>
      <p className="mb-4">Pelo presente instrumento particular de convivência:</p>
      <p className="mb-4"><strong>CONVIVENTE 1:</strong> {renderParty(contratante)}</p>
      <p className="mb-4"><strong>CONVIVENTE 2:</strong> {renderParty(contratado)}</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA PRIMEIRA - DA CONVIVÊNCIA</h2>
      <p className="mb-4">As partes declaram viver em União Estável desde <span className="font-bold">{servico.prazo ? new Date(servico.prazo).toLocaleDateString('pt-BR') : '__/__/____'}</span>, de forma pública, contínua e duradoura, com o objetivo de constituição de família.</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA - DO REGIME DE BENS</h2>
      <p className="mb-4">Os conviventes elegem, para reger suas relações patrimoniais, o regime da: <span className="font-bold">{servico.objeto || 'Comunhão Parcial de Bens'}</span>.</p>

      <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA - DOS BENS ANTERIORES</h2>
      <p className="mb-4">Os bens que cada convivente possuía antes do início da união, bem como os havidos por herança ou doação, permanecem de propriedade exclusiva de cada um, salvo disposição em contrário.</p>
      
      {servico.valor && (
        <p className="mb-4">Declaram, para fins de registro, um patrimônio inicial conjunto ou separado estimado em: {servico.valor}.</p>
      )}

      <h2 className="font-bold uppercase mb-2">CLÁUSULA QUARTA - LEGISLAÇÃO</h2>
      <p className="mb-4">Aplica-se a este contrato o disposto no art. 1.725 do Código Civil Brasileiro.</p>
    </>
  );

  return (
    <div className="sticky top-4">
      <div className="bg-gray-200 p-4 rounded-t-lg md:hidden print:hidden text-center text-sm font-semibold text-gray-700">
        Pré-visualização do Documento
      </div>
      
      {/* A4 Container */}
      <div id="contract-paper" className="bg-white shadow-2xl mx-auto p-[2.5cm] min-h-[29.7cm] text-justify text-sm leading-relaxed text-black font-serif print:shadow-none print:w-full print:absolute print:top-0 print:left-0 print:m-0 print:p-[2cm]">
        
        {type === 'servico' && renderServiceTemplate()}
        {type === 'residencial' && renderRentalTemplate(false)}
        {type === 'comercial' && renderRentalTemplate(true)}
        {type === 'arrendamentoRural' && renderRuralTemplate(false)}
        {type === 'parceriaAgricola' && renderRuralTemplate(true)}
        {type === 'veiculo' && renderVehicleTemplate()}
        {type === 'namoro' && renderDatingTemplate()}
        {type === 'uniaoEstavel' && renderUnionTemplate()}

        <h2 className="font-bold uppercase mb-2 mt-4">DO FORO</h2>
        <p className="mb-8">
          Para dirimir quaisquer controvérsias, as partes elegem o foro da comarca de <span className="font-bold">{servico.foro || '_________________'}</span>.
        </p>

        <p className="mb-12 text-center">
          E, por estarem assim justos e contratados, assinam o presente instrumento em 02 (duas) vias de igual teor.
        </p>

        <p className="text-right mb-16">
          {servico.foro || 'Local'}, {formatDate(new Date().toISOString())}.
        </p>

        <div className="grid grid-cols-2 gap-12 mt-12">
          <div className="text-center">
            <div className="border-t border-black pt-2 mb-1 w-3/4 mx-auto"></div>
            <span className="font-bold block text-xs uppercase">{contratante.nome || (['servico', 'namoro', 'uniaoEstavel', 'veiculo', 'arrendamentoRural', 'parceriaAgricola'].includes(type) ? 'ASSINATURA' : 'LOCADOR')}</span>
          </div>
          <div className="text-center">
            <div className="border-t border-black pt-2 mb-1 w-3/4 mx-auto"></div>
            <span className="font-bold block text-xs uppercase">{contratado.nome || (['servico', 'namoro', 'uniaoEstavel', 'veiculo', 'arrendamentoRural', 'parceriaAgricola'].includes(type) ? 'ASSINATURA' : 'LOCATÁRIO')}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-12">
           <div className="text-center">
            <div className="border-t border-black pt-2 mb-1 w-3/4 mx-auto"></div>
            <span className="block text-xs">Testemunha 1 (CPF: _______________)</span>
          </div>
          <div className="text-center">
            <div className="border-t border-black pt-2 mb-1 w-3/4 mx-auto"></div>
            <span className="block text-xs">Testemunha 2 (CPF: _______________)</span>
          </div>
        </div>

      </div>
    </div>
  );
};