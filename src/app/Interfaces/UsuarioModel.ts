export interface UsuarioModel {
  id: string;
  nomeUsuario: string;
  email: string;
  senha: string;
  profissao?: string;
  dataEntrada: Date;
  dataIniciacao: Date;
  dataUltimaObrigacao: Date;
  escolaridadeId: string;
  perfilId: string;
  entidadeId: string;
  jurosMensalidadeId: string;
  valorMensalidadeId: string;
  mensalidadeId: string;
  enderecoId: string;
  telefoneId: string;
  redeSocialId: string;
  telefones?: TelefoneUsuarioModel[];
  valorMensalidades?: ValorMensalidadeModel[];
  jurosMensalidades?: JurosMensalidadeModel[];
  historicosMensalidades?: HistoricoMensalidadeModel[];
  enderecos?: EnderecoUsuarioModel[];
  redesSociais?: RedeSocialModel[];
  escolaridade?: EscolaridadeUsuarioModel;
  perfil?: PerfilModel;
  entidade?: EntidadeModel;
}

export interface TelefoneUsuarioModel {
  id: string;
  numero: string;
  tipo: string;
  usuarioId: string;

}

export interface ValorMensalidadeModel {
  id: string;
  valorMensalidade: number;
  vigenciaMensalidade: Date;
  statusValorMensalidade: boolean;
  usuarioId: string;

}


export interface JurosMensalidadeModel {
  id: string;
  valorJuros: number;
  dataVigenciaJuros?: Date;
  statusValorJuros: boolean;
  usuarioId: string;

}

export interface HistoricoMensalidadeModel {
  id: string;
  valorMensalidade: number;
  dataPagamento: Date;
  statusPagamento: boolean;
  usuarioId: string;
  mesReferencia: number;
  anoReferencia: number;

}

export interface EnderecoUsuarioModel {
  id: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  tipoEnderecoUsuarioId: string;
  usuarioId: string;

}

export interface RedeSocialModel {
  id: string;
  descricaoRedeSocialUsuario: string;
  descricao: string;
  urlRedeSocial: string;
  usuarioId: string;

}

export interface EscolaridadeUsuarioModel {
  id: string;
  descricaoEscolaridade: string;
}

export interface PerfilModel {
  id: string;
  descricaoPerfil: string
}

export interface EntidadeModel {
  id: string;
  DescricaoEntidade: string;
}
