
export type ContractType = 
  | 'servico' 
  | 'residencial' 
  | 'comercial' 
  | 'arrendamentoRural' 
  | 'parceriaAgricola' 
  | 'veiculo' 
  | 'namoro' 
  | 'uniaoEstavel';

export type PageView = 'home' | ContractType | 'privacy' | 'terms' | 'about' | 'cookies' | 'faq' | 'contact';

export interface PartyDetails {
  nome: string;
  nacionalidade: string;
  estadoCivil: string;
  profissao: string;
  rg: string;
  cpfCnpj: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
  };
}

export interface ServiceDetails {
  objeto: string;
  valor: string;
  prazo: string;
  dataInicio: string;
  multa: string;
  foro: string;
}

export interface ImovelDetails {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  finalidade: string; // Ex: Residencial ou Comercial
  // Rural fields
  nomePropriedade?: string;
  matricula?: string;
  area?: string;
}

export interface VehicleDetails {
  marcaModelo: string;
  ano: string;
  cor: string;
  placa: string;
  renavam: string;
  chassi: string;
}

export interface ContractData {
  type: ContractType;
  contratante: PartyDetails; // In Rentals: Locador | Seller | Declarante 1
  contratado: PartyDetails;  // In Rentals: Locatário | Buyer | Declarante 2
  servico: ServiceDetails;   // Generic terms
  imovel: ImovelDetails;
  veiculo: VehicleDetails;
}

export const initialPartyState: PartyDetails = {
  nome: '',
  nacionalidade: 'Brasileiro(a)',
  estadoCivil: '',
  profissao: '',
  rg: '',
  cpfCnpj: '',
  endereco: {
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: ''
  }
};

export const initialServiceState: ServiceDetails = {
  objeto: '',
  valor: '',
  prazo: '',
  dataInicio: '',
  multa: '10%',
  foro: ''
};

export const initialImovelState: ImovelDetails = {
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  uf: '',
  cep: '',
  finalidade: 'Residência da família',
  nomePropriedade: '',
  matricula: '',
  area: ''
};

export const initialVehicleState: VehicleDetails = {
  marcaModelo: '',
  ano: '',
  cor: '',
  placa: '',
  renavam: '',
  chassi: ''
};