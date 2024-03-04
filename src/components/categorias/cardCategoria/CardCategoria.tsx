import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

    interface CardCategoriaProps {
    categoria: Categoria
    }

    function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className='rounded-3xl flex flex-col overflow-hidden justify-between duration-500 bg-gradient-to-b from-[#439da6] to-[#26668b] shadow-md hover:scale-105 hover:shadow-xl border-4 border-[#fa769c] border-x-[#FD98B4] mt-6 p-4'>
        <header className='py-2 px-6 text-black font-bold text-2xl text-center'>Categoria</header>
        <p className='p-5 text-2xl w-full font-bold'>{categoria.nome}</p>
        <p className='p-4 text-2xl w-full'><p className='font-bold mb-3'>Descrição:</p>{categoria.descricao}</p>
        <p className='p-4 text-2xl w-full mb-2'>{categoria.disponivel ? 'Disponivel ✅': 'Indisponivel ❌'}</p>
        
        <div className="flex justify-around mb-3">
            <Link to={`/editarCategoria/${categoria.id}`} className='rounded-full bg-[#FD98B4] hover:bg-[#439DA6] p-4 text-white'>
            <FaEdit />
            </Link>
            <Link to={`/deletarCategoria/${categoria.id}`} className='rounded-full bg-[#FD98B4] hover:bg-[#439DA6] p-4 text-white'>
            <i className=''><MdDelete/></i>
            </Link>
        </div>
        </div>
    )
    }

    export default CardCategorias