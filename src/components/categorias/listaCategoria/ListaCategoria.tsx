import { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import CardCategorias from "../cardCategoria/CardCategoria";
import { toastAlerta } from "../../../utils/ToastAlerta";
import Editar from "../../../assets/editar.png";


const getStatusClass = (disponivel: boolean): string => {
  return disponivel ? 'text-green-500' : 'text-red-500';
};

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  const [search] = useState("");

  const [selected] = useState<
    { nome: string; checked: boolean }[]
  >([
    { nome: "Livros", checked: false },
    { nome: "Mochila", checked: false },
    { nome: "Caderno 20M", checked: false },
    { nome: "Estojo", checked: false },
  ]);

  const selectedArray = selected
    .filter((item) => item.checked === true)
    .map((item) => item.nome);
  const ListaCategoria = categoria.filter((categoria) => {
    const productNameLowerCase = categoria.nome.toLowerCase();
    const searchLowerCase = search.toLowerCase();
    return searchLowerCase !== ""
      ? productNameLowerCase.includes(searchLowerCase)
      : selectedArray.includes(categoria.nome.split(" ")[0]);
  });

  const filteredProducts =
    ListaCategoria.length > 0 ? ListaCategoria : categoria;

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);
  return (
    <>
      
      {categoria.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
        )}
        {/* Container */}
      <div className="py-10 px-20">
        <div className="bg-white rounded-t-lg p-5">
          <div className="flex mt-3 p-5 text-[#5C5C5C] text-3xl font-bold items-center justify-between">
            <h1>Categorias</h1>

            {/* Botão "Add categoria" */}
            <Link to="/categoria/novo">
              <button className="bg-[#48ACB6] text-white px-6 py-2 rounded-full text-sm font-normal">
                Add Categoria
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
                <thead className="bg-[#48ACB6] text-white">
                  <tr>
                    <th className="py-4 px-4 border-b"> </th>
                    <th className="py-4 px-4 border-b">Categoria</th>
                    <th className="py-4 px-4 border-b">Descrição</th>
                    <th className="py-4 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                {filteredProducts.map((categoria) => (
                  <tr >
                  <Link to={`/editarCategoria/${categoria.id}`}>
                        <img src={Editar} alt="Botão de editar" className="w-6 mr-2 ml-8 pt-4" />
                  </Link>
                  <td className="py-3 px-4 border-b">{categoria.nome}</td>
                  <td className="py-3 px-4 border-b">{categoria.descricao}</td>
                  <td className={`py-2 px-4 border-b ${getStatusClass(categoria.disponivel)}`}>
                        {categoria.disponivel ? 'Disponível' : 'Indisponível'}
                      </td> 
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
