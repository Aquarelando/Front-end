import { Link } from 'react-router-dom'
import Produto from '../../../models/Produtos'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {


  return (
    <>
   <div className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
   <div className='p-3 text-center'>
            <p>{produto.seloInmetro ? 'Selo Inmetro ✅': 'Selo Inmetro ❌'}</p>
            </div>
        <a href="#">
          <img src={produto.foto} alt="Product" className="object-cover h-80 w-72 rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <span className="mr-3 text-xs text-gray-400 uppercase"></span>
            <p className="block text-lg font-bold text-black capitalize truncate">{produto.nome}</p>
            <div>
                {produto.descricao}
            </div>
            <div className='flex gap-3'>
            <p className='pt-3'>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'short',
                  }).format(new Date(produto.dataValidade))}</p>
                  <p className='pt-3'>Quantidade: {produto.quantidade}</p> 
            </div>
            <div className="flex ">
              <p className="my-3 text-lg pl-[5rem] font-semibold text-black cursor-auto"> 
              {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'}).format(produto.preco)}
              </p>
              
            </div>
                <div className='flex justify-around  '>
                <Link to={`/editarProduto/${produto.id}`} className='rounded-full bg-[#FD98B4] hover:bg-[#439DA6] p-4 text-white'>
                <FaEdit />
               </Link>
                <Link to={`/deletarProduto/${produto.id}`} className='rounded-full bg-[#FD98B4] hover:bg-[#439DA6]  p-4 text-white'>
                 <i className=''><MdDelete/></i>
               </Link>
                </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default CardProduto