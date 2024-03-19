import { BsFillSearchHeartFill, BsSearchHeartFill } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produtos from "../../../models/Produtos";
import { buscar } from "../../../services/Services";
import CardFiltro from "../../filtro/CardFiltro";
import CardProduto from "../cardProduto/CardProduto";
import CardCategoria from "../../../models/Categoria"
import CardProdutoUsuario from "../cardProdutoUsuario/CardProdutoUsuario";
import Carrossel from "../../carrosel/Carrossel";
import Editar from "../../../assets/editar.png";


const getStatusClass = (disponivel: boolean): string => {
  return disponivel ? 'text-green-500' : 'text-red-500';
};

function ListaProdutos() {

  let ListaProdutosComponent;

  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState<
    { nome: string; checked: boolean }[]
  >([
    { nome: "Mochila", checked: false },
    { nome: "Estojo", checked: false },
    { nome: "Caderno", checked: false },
    { nome: "Livro", checked: false },
    { nome: "Material", checked: false },
  ]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  async function buscarProdutos() {
    try {
      await buscar("/produtos/todos", setProdutos, {
        headers: {},
      });
    } catch (error: any) {
      {
        alert("Erro ao buscar o Produtos");
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = (index: boolean, nome: string) => {
    setSelected((prevCheckboxes) => {
      const valoresFiltrados = prevCheckboxes.filter(
        (item) => item.nome !== nome
      );
      return [...valoresFiltrados, { nome: nome, checked: index }];
    });
  };

  const selectedArray = selected
    .filter((item) => item.checked === true)
    .map((item) => item.nome);
  const filtrarProdutos = produtos.filter((produto) => {
    const productNameLowerCase = produto.nome.toLowerCase();
    const searchLowerCase = search.toLowerCase();
    return searchLowerCase !== ""
      ? productNameLowerCase.includes(searchLowerCase)
      : selectedArray.includes(produto.nome.split(" ")[0]);
  });

  const filteredProducts =
    filtrarProdutos.length > 0 ? filtrarProdutos : produtos;

    // LISTA PARA ADMIN
    if (usuario.tipo === "dev") {
      ListaProdutosComponent = (
        <>
          <div className="py-10 px-20 mobilemax:hidden">
            <div className="bg-white rounded-t-lg p-5">
              {/* Pagina Produtos */}
              <div className="flex mt-3 p-5 text-[#5C5C5C] text-3xl font-bold items-center justify-between">
                <h1>Produtos</h1>
    
              {/* Botão "Add Produto" */}
              <Link to="/produtos/novo">
                <button className="bg-[#48ACB6] text-white px-6 py-2 rounded-full text-sm font-normal">Add Produto</button>
              </Link>
            </div>


              <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
                <thead className="bg-[#48ACB6] text-white">
                  <tr>
                    <th className="py-4 px-4 border-b"> </th>
                    <th className="py-4 px-4 border-b">Fotos</th>
                    <th className="py-4 px-4 border-b">Nome</th>
                    <th className="py-4 px-4 border-b">Data</th>
                    <th className="py-4 px-4 border-b">Categoria</th>
                    <th className="py-4 px-4 border-b">Preço</th>
                    <th className="py-4 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((produto) => (
                    <tr key={produto.id}>
                      {/* Link para a página de edição */}
                      <Link to={`/produtos/editar/${produto.id}`}>
                        <img src={Editar} alt="Botão de editar" className="w-6 mr-2 ml-8 pt-4" />
                      </Link>
                      <td className="py-2 px-4 border-b ml">
                        <img src={produto.foto} alt="Product" className="w-12 rounded-full" />
                      </td>
                      <td className="py-2 px-4 border-b">{produto.nome}</td>
                      <td className="py-2 px-4 border-b">
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        }).format(new Date(produto.dataValidade))}
                      </td>
                      <td className="py-2 px-4 border-b">{produto.categoria.nome}</td>
                      <td className="py-2 px-4 border-b">
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(produto.preco)}
                      </td>
                      <td className={`py-2 px-4 border-b ${getStatusClass(produto.categoria.disponivel)}`}>
                        {produto.categoria.disponivel ? 'Disponível' : 'Indisponível'}
                      </td>                    
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

{/*Mobile*/}
<div className="flex flex-col mt-[10%] justify-around mobilemin:hidden">
  <div className="flex justify-center items-center"><h1 className="py-2 px-4 border-b text-3xl font-bold"> Produtos </h1><Link to="/produtos/novo">
                <button className="bg-[#48ACB6]  text-white px-3 py-1 rounded-full items-center text-sm font-normal">Add Produto</button>
              </Link></div>
                  {filteredProducts.map((produto) => (
                    <div className="flex  justify-around bg-white w-auto h-[35vh]  border-2 rounded-3xl mt-3">
                    <div className="w-[100%] flex justify-center items-center">
                    <img src={produto.foto} alt="Product" className="h-[50%]  " />
                    </div>
                    <div  key={produto.id} className="flex flex-wrap">
                      {/* Link para a página de edição */}
                      <h1 className="py-2 px-4 border-b flex items-center">{produto.nome} <Link to={`/produtos/editar/${produto.id}`}>
                        <img src={Editar} alt="Botão de editar" className="w-6 mr-2 ml-8" />
                      </Link></h1>
                      <h1 className="py-2 px-4 border-b">
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        }).format(new Date(produto.dataValidade))}
                      </h1>
                      <h1 className="py-2 px-4 border-b">{produto.categoria.nome}</h1>
                      <h1 className="py-2 px-4 border-b">
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(produto.preco)}
                      </h1>
                      <h1 className={`py-2 px-4 border-b ${getStatusClass(produto.categoria.disponivel)}`}>
                        {produto.categoria.disponivel ? 'Disponível' : 'Indisponível'}
                      </h1>                    
                    </div>
                    </div>
                  ))}
                </div>

      </>
      );

    //LISTA PARA USUÁRIOS
    } else {
      ListaProdutosComponent = (
        <>
          <div>
            <Carrossel />
          </div>
          {/* Pagina Produtos */}
          <div className="flex justify-center mt-3 p-3 text-white font-light text-3xl font-bold bg-[#439DA6]">
            <h1>Produtos</h1>
          </div>
          <div className="flex gap-4 justify-space-evenly ">
            <div>
              <div className="bg-[#439DA6] text-white p-2 mobilemax:hidden">
                <h1>Categorias</h1>
                <CardFiltro
                  nome="Mochila"
                  checked={
                    selected.find((item) => item.nome === "Mochila")?.checked
                  }
                  onChange={handleCheckboxChange}
                />
    
                <CardFiltro
                  nome="Estojo"
                  checked={selected.find((item) => item.nome === "Estojo")?.checked}
                  onChange={handleCheckboxChange}
                />
    
                <CardFiltro
                  nome="Caderno"
                  checked={
                    selected.find((item) => item.nome === "Caderno")?.checked
                  }
                  onChange={handleCheckboxChange}
                />
    
                <CardFiltro
                  nome="Livro"
                  checked={selected.find((item) => item.nome === "Livro")?.checked}
                  onChange={handleCheckboxChange}
                />
    
                <CardFiltro
                  nome="Material"
                  checked={
                    selected.find((item) => item.nome === "Material")?.checked
                  }
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 p-3">
              {filteredProducts.map((produto) => (
                    <CardProdutoUsuario key={produto.id} produto={produto} />
                  ))}
            </div>
          </div>
        </>
      );
    }


  return (
    <>
    {ListaProdutosComponent}
    </>
  );
}

export default ListaProdutos;
