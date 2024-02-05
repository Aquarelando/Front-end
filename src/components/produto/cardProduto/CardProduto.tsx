import { Link } from 'react-router-dom'
import Produto from '../../../models/Produtos'


interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {


  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <img src={produto.foto} alt={`Foto de perfil de ${produto.nome}`} />
          <p>{produto.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'short',
                  }).format(new Date(produto.dataValidade))}</p>
          <p>quantidade: {produto.quantidade}</p> 
          <p>{produto.seloInmetro ? 'Selo Inmetro✅': 'Selo Inmetro❌'}</p>
          <p>R$: {produto.preco}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto