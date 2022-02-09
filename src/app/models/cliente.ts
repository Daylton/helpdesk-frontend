export interface Cliente {
  id?: any; // Interrogação porque nem sempre vai ter id, por exemplo na hora da criação
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  perfis: string[];
  dataCriacao: any;
}