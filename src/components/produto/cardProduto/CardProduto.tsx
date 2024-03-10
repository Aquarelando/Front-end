import { Link } from 'react-router-dom';
import Produto from '../../../models/Produtos';
import Categoria from '../../../models/Categoria'; 
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

interface CardProdutoProps {
  produto: Produto & { categoria: Categoria };
}

function CardProduto({ produto }: CardProdutoProps) {
  
  return (
    <div className="bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl p-3">
    <Link to="#">
      <div className='flex space-x-1.5 px-[1070px]'>
        <div className="flex items-center">
          <img src={produto.foto} alt="Product" className="w-12 rounded-full" />
          <div className="py-10 ">
            <div className="text-lg font-bold text-black capitalize truncate">
              {produto.nome}{' '}
              <span className="mx-16">{produto.categoria.nome}</span>{' '}
              <span className="mx-16">
                {new Intl.DateTimeFormat('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(produto.dataValidade))}
              </span>{' '}
              <span className="mx-16">{produto.quantidade}</span>{' '}
              <span className="mx-16">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(produto.preco)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
  
  );
}

export default CardProduto;