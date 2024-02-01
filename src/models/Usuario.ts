import Produto from "./Produtos";

export default interface Usuario {
  id: number;
  nome: string;
  tipo: string;
  data_nascimento: string;
  cpf: string;
  foto: string;
  email: string
  senha: string;
  produto?: Produto | null;
}