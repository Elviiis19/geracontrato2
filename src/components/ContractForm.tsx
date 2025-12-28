import React, { useRef } from 'react';
import { ContractData, PageView } from '../types';
import { trackEvent } from '../utils/analytics';
import { getRouteByView } from '../routes';

interface ContractFormProps {
  data: ContractData;
  onChange: (newData: ContractData) => void;
  onPrint: () => void;
  onNavigate: (page: PageView) => void;
}

export const ContractForm: React.FC<ContractFormProps> = ({ data, onChange, onPrint, onNavigate }) => {
  const [agreed, setAgreed] = React.useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Get SEO Content for the current route
  const currentRoute = getRouteByView(data.type);

  // Labels configuration based on contract type
  const labels = {
    servico: {
      title: 'Contrato de Prestação de Serviços',
      partyA: 'Dados do Contratante (Cliente)',
      partyB: 'Dados do Contratado (Prestador)',
      objectLabel: 'Objeto do Contrato (Descrição do Serviço)',
      objectPlaceholder: 'Ex: Prestação de serviços de consultoria financeira...',
      valueLabel: 'Valor Total (R$)',
      termLabel: 'Prazo de Execução'
    },
    residencial: {
      title: 'Contrato de Aluguel Residencial',
      partyA: 'Dados do Locador (Dono do Imóvel)',
      partyB: 'Dados do Locatário (Inquilino)',
      objectLabel: 'Descrição Adicional (Opcional)',
      objectPlaceholder: 'Ex: O imóvel deve ser devolvido pintado...',
      valueLabel: 'Valor do Aluguel Mensal (R$)',
      termLabel: 'Prazo da Locação (Meses)'
    },
    comercial: {
      title: 'Contrato de Aluguel Comercial',
      partyA: 'Dados do Locador (Proprietário)',
      partyB: 'Dados do Locatário (Empresa/Inquilino)',
      objectLabel: 'Atividade Comercial Permitida',
      objectPlaceholder: 'Ex: Escritório de Advocacia, Loja de Roupas...',
      valueLabel: 'Valor do Aluguel Mensal (R$)',
      termLabel: 'Prazo da Locação (Meses)'
    },
    arrendamentoRural: {
      title: 'Contrato de Arrendamento Rural',
      partyA: 'Dados do Arrendador (Dono da Terra)',
      partyB: 'Dados do Arrendatário (Quem vai plantar/criar)',
      objectLabel: 'Atividade (Cultivo/Criação)',
      objectPlaceholder: 'Ex: Plantio de Soja, Criação de Gado Bovino...',
      valueLabel: 'Valor do Arrendamento (R$ ou Sacas)',
      termLabel: 'Prazo (Anos/Meses)'
    },
    parceriaAgricola: {
      title: 'Contrato de Parceria Agrícola',
      partyA: 'Dados do Parceiro Outorgante (Dono da Terra)',
      partyB: 'Dados do Parceiro Outorgado (Quem vai trabalhar)',
      objectLabel: 'Cultura / Atividade',
      objectPlaceholder: 'Ex: Cultivo de Milho...',
      valueLabel: 'Participação nos Lucros (%)',
      termLabel: 'Prazo da Parceria'
    },
    veiculo: {
      title: 'Contrato de Compra e Venda de Veículo',
      partyA: 'Dados do Vendedor',
      partyB: 'Dados do Comprador',
      objectLabel: 'Condições do Veículo',
      objectPlaceholder: 'Ex: Veículo entregue no estado em que se encontra...',
      valueLabel: 'Valor da Venda (R$)',
      termLabel: 'Prazo para Transferência (Dias)'
    },
    namoro: {
      title: 'Contrato de Namoro',
      partyA: 'Primeiro Declarante',
      partyB: 'Segundo Declarante',
      objectLabel: 'Declarações Adicionais',
      objectPlaceholder: 'Ex: Ambos declaram manter residências separadas...',
      valueLabel: 'Separação de Bens (Opcional)',
      termLabel: 'Data de Início do Namoro'
    },
    uniaoEstavel: {
      title: 'Contrato de União Estável',
      partyA: 'Primeiro Convivente',
      partyB: 'Segundo Convivente',
      objectLabel: 'Regime de Bens',
      objectPlaceholder: 'Ex: Comunhão Parcial de Bens...',
      valueLabel: 'Patrimônio Inicial (Opcional)',
      termLabel: 'Data de Início da União'
    }
  };

  const currentLabels = labels[data.type];
  
  // Logic helpers
  const isRental = ['residencial', 'comercial'].includes(data.type);
  const isRural = ['arrendamentoRural', 'parceriaAgricola'].includes(data.type);
  const isVehicle = data.type === 'veiculo';
  const isFamily = ['namoro', 'uniaoEstavel'].includes(data.type);
  const hideImovel = isVehicle || isFamily;
  const hideValue = isFamily && data.type === 'namoro'; // Namoro usually doesn't involve values

  const updateContratante = (field: string, value: string) => {
    onChange({ ...data, contratante: { ...data.contratante, [field]: value } });
  };

  const updateContratanteAddress = (field: string, value: string) => {
    onChange({
      ...data,
      contratante: { ...data.contratante, endereco: { ...data.contratante.endereco, [field]: value } }
    });
  };

  const updateContratado = (field: string, value: string) => {
    onChange({ ...data, contratado: { ...data.contratado, [field]: value } });
  };

  const updateContratadoAddress = (field: string, value: string) => {
    onChange({
      ...data,
      contratado: { ...data.contratado, endereco: { ...data.contratado.endereco, [field]: value } }
    });
  };

  const updateServico = (field: string, value: string) => {
    onChange({ ...data, servico: { ...data.servico, [field]: value } });
  };

  const updateImovel = (field: string, value: string) => {
    onChange({ ...data, imovel: { ...data.imovel, [field]: value } });
  };

  const updateVehicle = (field: string, value: string) => {
    onChange({ ...data, veiculo: { ...data.veiculo, [field]: value } });
  };

  const handleAction = (action: 'print' | 'download') => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        // Form is valid
        trackEvent(action === 'download' ? 'download_pdf' : 'print_document', 'conversion', data.type);
        
        if (action === 'download') {
          // Tip for user
          alert("Para salvar como PDF, selecione a opção 'Salvar como PDF' ou 'Microsoft Print to PDF' na janela de impressão que será aberta.");
        }
        
        onPrint();
      } else {
        // Form is invalid, show native browser errors
        formRef.current.reportValidity();
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent, page: PageView) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <>
      <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-200">
        <h2 className="text-xl font-bold text-navy-900 mb-6 border-b pb-3">{currentLabels.title}</h2>

        {/* PARTE A */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-50 p-2.5 rounded border border-blue-100">{currentLabels.partyA}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome Completo <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratante.nome} onChange={(e) => updateContratante('nome', e.target.value)} placeholder="Ex: João da Silva" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">CPF / CNPJ <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratante.cpfCnpj} onChange={(e) => updateContratante('cpfCnpj', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">RG <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratante.rg} onChange={(e) => updateContratante('rg', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nacionalidade <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratante.nacionalidade} onChange={(e) => updateContratante('nacionalidade', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Estado Civil <span className="text-red-500">*</span></label>
              <select required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratante.estadoCivil} onChange={(e) => updateContratante('estadoCivil', e.target.value)}>
                <option value="">Selecione...</option>
                <option value="Solteiro(a)">Solteiro(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Viúvo(a)">Viúvo(a)</option>
                <option value="Separado(a)">Separado(a)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Profissão <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratante.profissao} onChange={(e) => updateContratante('profissao', e.target.value)} />
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço Completo</label>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              <div className="md:col-span-4"><input required placeholder="Rua / Avenida *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratante.endereco.rua} onChange={(e) => updateContratanteAddress('rua', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Número *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratante.endereco.numero} onChange={(e) => updateContratanteAddress('numero', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Bairro *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratante.endereco.bairro} onChange={(e) => updateContratanteAddress('bairro', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Cidade *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratante.endereco.cidade} onChange={(e) => updateContratanteAddress('cidade', e.target.value)} /></div>
              <div className="md:col-span-1"><input required placeholder="UF *" maxLength={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratante.endereco.uf} onChange={(e) => updateContratanteAddress('uf', e.target.value)} /></div>
              <div className="md:col-span-1"><input required placeholder="CEP *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratante.endereco.cep} onChange={(e) => updateContratanteAddress('cep', e.target.value)} /></div>
            </div>
          </div>
        </section>

        {/* PARTE B */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-50 p-2.5 rounded border border-blue-100">{currentLabels.partyB}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome Completo <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratado.nome} onChange={(e) => updateContratado('nome', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">CPF / CNPJ <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratado.cpfCnpj} onChange={(e) => updateContratado('cpfCnpj', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">RG <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratado.rg} onChange={(e) => updateContratado('rg', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nacionalidade <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratado.nacionalidade} onChange={(e) => updateContratado('nacionalidade', e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Estado Civil <span className="text-red-500">*</span></label>
              <select required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratado.estadoCivil} onChange={(e) => updateContratado('estadoCivil', e.target.value)}>
                <option value="">Selecione...</option>
                <option value="Solteiro(a)">Solteiro(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Viúvo(a)">Viúvo(a)</option>
                <option value="Separado(a)">Separado(a)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Profissão <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.contratado.profissao} onChange={(e) => updateContratado('profissao', e.target.value)} />
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço Completo</label>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              <div className="md:col-span-4"><input required placeholder="Rua / Avenida *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratado.endereco.rua} onChange={(e) => updateContratadoAddress('rua', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Número *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratado.endereco.numero} onChange={(e) => updateContratadoAddress('numero', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Bairro *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratado.endereco.bairro} onChange={(e) => updateContratadoAddress('bairro', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Cidade *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratado.endereco.cidade} onChange={(e) => updateContratadoAddress('cidade', e.target.value)} /></div>
              <div className="md:col-span-1"><input required placeholder="UF *" maxLength={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratado.endereco.uf} onChange={(e) => updateContratadoAddress('uf', e.target.value)} /></div>
              <div className="md:col-span-1"><input required placeholder="CEP *" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.contratado.endereco.cep} onChange={(e) => updateContratadoAddress('cep', e.target.value)} /></div>
            </div>
          </div>
        </section>

        {/* DADOS DO VEÍCULO */}
        {isVehicle && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-50 p-2.5 rounded border border-blue-100">Dados do Veículo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Marca / Modelo <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.veiculo.marcaModelo} onChange={(e) => updateVehicle('marcaModelo', e.target.value)} placeholder="Ex: Fiat Palio Fire" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ano de Fabricação <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.veiculo.ano} onChange={(e) => updateVehicle('ano', e.target.value)} placeholder="Ex: 2015/2016" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Placa <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.veiculo.placa} onChange={(e) => updateVehicle('placa', e.target.value)} placeholder="Ex: ABC-1234" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">RENAVAM <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.veiculo.renavam} onChange={(e) => updateVehicle('renavam', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Chassi <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.veiculo.chassi} onChange={(e) => updateVehicle('chassi', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cor <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.veiculo.cor} onChange={(e) => updateVehicle('cor', e.target.value)} />
              </div>
            </div>
          </section>
        )}

        {/* DADOS DO IMÓVEL (PARA ALUGUEL OU RURAL) */}
        {!hideImovel && (
          <section className="mb-8">
            <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-50 p-2.5 rounded border border-blue-100">
              {isRural ? 'Dados do Imóvel Rural' : 'Dados do Imóvel Objeto de Locação'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
              {isRural && (
                <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome da Propriedade <span className="text-red-500">*</span></label>
                    <input required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.imovel.nomePropriedade} onChange={(e) => updateImovel('nomePropriedade', e.target.value)} placeholder="Ex: Fazenda Santa Maria" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Matrícula / CCIR / NIRF <span className="text-red-500">*</span></label>
                    <input required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.imovel.matricula} onChange={(e) => updateImovel('matricula', e.target.value)} placeholder="Ex: 12.345.678" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Área Total (Hectares) <span className="text-red-500">*</span></label>
                    <input required className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.imovel.area} onChange={(e) => updateImovel('area', e.target.value)} placeholder="Ex: 50 hectares" />
                  </div>
                </div>
              )}
              
              <div className="md:col-span-4"><input required placeholder={isRural ? "Localização / Estrada de Acesso *" : "Rua do Imóvel *"} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.imovel.rua} onChange={(e) => updateImovel('rua', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Número / Km *" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.imovel.numero} onChange={(e) => updateImovel('numero', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Bairro / Região *" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.imovel.bairro} onChange={(e) => updateImovel('bairro', e.target.value)} /></div>
              <div className="md:col-span-2"><input required placeholder="Cidade *" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.imovel.cidade} onChange={(e) => updateImovel('cidade', e.target.value)} /></div>
              <div className="md:col-span-1"><input required placeholder="UF *" maxLength={2} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.imovel.uf} onChange={(e) => updateImovel('uf', e.target.value)} /></div>
              <div className="md:col-span-1"><input required placeholder="CEP *" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" value={data.imovel.cep} onChange={(e) => updateImovel('cep', e.target.value)} /></div>
            </div>
          </section>
        )}

        {/* DETALHES GERAIS */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-50 p-2.5 rounded border border-blue-100">Detalhes e Prazos</h3>
          <div className="grid grid-cols-1 gap-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {!hideValue && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{currentLabels.valueLabel} <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.servico.valor} onChange={(e) => updateServico('valor', e.target.value)} placeholder="Ex: 1.500,00" />
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{currentLabels.termLabel} <span className="text-red-500">*</span></label>
                <input required type={isFamily ? "date" : "text"} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.servico.prazo} onChange={(e) => updateServico('prazo', e.target.value)} placeholder={data.type === 'servico' ? "Ex: 30 dias" : "Ex: 12 meses"} />
              </div>
              {!isFamily && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Data de Início do Contrato <span className="text-red-500">*</span></label>
                  <input required type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.servico.dataInicio} onChange={(e) => updateServico('dataInicio', e.target.value)} />
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cidade do Foro (Comarca) <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.servico.foro} onChange={(e) => updateServico('foro', e.target.value)} placeholder="Ex: São Paulo" />
              </div>
              {!isFamily && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Multa por Descumprimento <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={data.servico.multa} onChange={(e) => updateServico('multa', e.target.value)} />
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">{currentLabels.objectLabel} {['servico', 'residencial', 'comercial', 'arrendamentoRural', 'parceriaAgricola', 'veiculo'].includes(data.type) && <span className="text-red-500">*</span>}</label>
              <textarea required={['servico', 'comercial', 'arrendamentoRural', 'parceriaAgricola', 'veiculo'].includes(data.type)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-28" value={data.servico.objeto} onChange={(e) => updateServico('objeto', e.target.value)} placeholder={currentLabels.objectPlaceholder}></textarea>
            </div>
          </div>
        </section>

        {/* FINALIZAÇÃO */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <label className="flex items-center space-x-3 mb-6 cursor-pointer group">
            <input required type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
              Declaro que as informações acima são verdadeiras e li os{' '}
              <a 
                href={getRouteByView('terms').path}
                onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} 
                className="text-blue-600 underline hover:text-blue-800 font-bold"
              >
                Termos de Uso
              </a>.
            </span>
          </label>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              type="button"
              onClick={() => agreed && handleAction('print')}
              disabled={!agreed}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-white text-lg transition-all shadow-md flex items-center justify-center ${agreed ? 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 hover:shadow-lg' : 'bg-gray-400 cursor-not-allowed opacity-70'}`}
              aria-label="Validar formulário e abrir janela de impressão"
            >
              <svg className="w-5 h-5 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
              IMPRIMIR
            </button>

            <button 
              type="button"
              onClick={() => agreed && handleAction('download')}
              disabled={!agreed}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-white text-lg transition-all shadow-md flex items-center justify-center ${agreed ? 'bg-emerald-600 hover:bg-emerald-700 transform hover:-translate-y-1 hover:shadow-lg' : 'bg-gray-400 cursor-not-allowed opacity-70'}`}
              aria-label="Validar formulário e baixar como PDF"
            >
              <svg className="w-5 h-5 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              BAIXAR PDF
            </button>
          </div>
          
          <p className="text-xs text-center text-gray-500 mt-3">
            Verifique se todos os campos obrigatórios (*) estão preenchidos antes de gerar o documento.
          </p>
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-800 flex items-start">
          <svg className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span><strong>Aviso Legal:</strong> Este site fornece modelos automatizados e não substitui a consultoria de um advogado. O Gera Contrato não se responsabiliza pelo uso indevido deste documento.</span>
        </div>
      </form>

      {/* Deep SEO Content Section - Enhanced Semantic Structure */}
      {currentRoute.seoContent && (
        <article className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:hidden">
          <div className="bg-slate-50 border-b border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentRoute.seoContent.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {currentRoute.seoContent.intro}
            </p>
          </div>
          
          <div className="p-8 space-y-8">
             {currentRoute.seoContent.contentBlocks && currentRoute.seoContent.contentBlocks.map((block, index) => (
                <div key={index} className="prose prose-blue max-w-none">
                   <h3 className="text-xl font-semibold text-slate-800 mb-3">{block.title}</h3>
                   <p className="text-slate-600 leading-relaxed whitespace-pre-line">{block.content}</p>
                </div>
             ))}

             <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100 flex items-start">
                <span className="text-2xl mr-4">💡</span>
                <div>
                  <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide mb-1">Dica de Especialista</h4>
                  <p className="text-blue-800 text-sm leading-relaxed m-0">
                    Sempre imprima 2 ou 3 vias do contrato. Todas as partes (e testemunhas) devem assinar todas as vias. Se possível, reconheça firma em cartório para garantir eficácia de título executivo.
                  </p>
                </div>
             </div>
          </div>
        </article>
      )}

      {/* Internal Linking Strategy - Related Contracts */}
      {currentRoute.relatedLinks && currentRoute.relatedLinks.length > 0 && (
         <div className="mt-10 print:hidden">
            <h3 className="text-lg font-bold text-slate-800 mb-4 px-2">Veja também:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentRoute.relatedLinks.map(linkKey => {
                 if (linkKey === 'recibo') {
                       return (
                         <a key={linkKey} href="https://recibogratis.com.br" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all group">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">Ferramenta</span>
                            <span className="font-bold text-slate-800 group-hover:text-blue-700">Recibo Grátis ↗</span>
                            <span className="text-xs text-slate-500 block mt-1">Gerar recibo de pagamento</span>
                         </a>
                       );
                 }

                 const linkRoute = getRouteByView(linkKey);
                 if (!linkRoute) return null;

                 return (
                    <a 
                      key={linkKey} 
                      href={linkRoute.path} 
                      onClick={(e) => handleLinkClick(e, linkKey)}
                      className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-400 transition-all group"
                    >
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Modelo Relacionado</span>
                       <span className="font-bold text-slate-800 group-hover:text-blue-700">{linkRoute.title.split('|')[0]}</span>
                    </a>
                 )
              })}
            </div>
         </div>
      )}
    </>
  );
};