import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="rounded-3xl flex flex-col justify-between duration-500 bg-gradient-to-b from-white to-white shadow-md hover:scale-105 hover:shadow-xl border-4 border-[#fa769c] border-x-[#FD98B4] m-auto mt-5 p-4 w-[350px] h-[450px]">
      <header className="text-black font-bold text-[25px] text-center">
        Categoria:
      </header>
      <p className="p-2 text-[25px] w-full font-bold">{categoria.nome}</p>
      <p className="p-2 text-[20px] w-full">
        <p className="font-bold mb-3">Descrição:</p>
        {categoria.descricao}
      </p>
      <p className="p-2 text-[20px] w-full">
        {categoria.disponivel ? "Disponivel ✅" : "Indisponivel ❌"}
      </p>
      <div className="flex justify-around">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="rounded-full bg-[#FD98B4] hover:bg-[#439DA6] p-3 text-white"
        >
          <FaEdit />
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="rounded-full bg-[#FD98B4] hover:bg-[#439DA6] p-3 text-white"
        >
          <i className="">
            <MdDelete />
          </i>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;