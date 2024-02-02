import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  dataValidade: string;
  quantidade: number;
  foto: string;
  seloInmetro: boolean;
  preco: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}