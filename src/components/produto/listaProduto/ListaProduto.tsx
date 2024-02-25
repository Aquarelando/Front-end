import { BsFillSearchHeartFill, BsSearchHeartFill } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produtos from "../../../models/Produtos";
import { buscar } from "../../../services/Services";
import CardFiltro from "../../filtro/CardFiltro";
import CardProduto from "../cardProduto/CardProduto";
import CardProdutoUsuario from "../cardProdutoUsuario/CardProdutoUsuario";
import Carrossel from "../../carrosel/Carrossel";

function ListaProdutos() {
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

  return (
    <>
      {/* Carrossel */}
      <div>
        <Carrossel />
      </div>
      {/* Pagina Produtos */}
      <div className="flex justify-center mt-3 p-3 text-white font-light text-3xl font-bold bg-[#439DA6]">
        <h1>Produtos</h1>
      </div>
      <div className="flex gap-4 justify-space-evenly">
        <div>
          <div className="bg-[#439DA6] text-white p-2">
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
          {usuario.tipo === "dev"
            ? filteredProducts.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))
            : filteredProducts.map((produto) => (
                <CardProdutoUsuario key={produto.id} produto={produto} />
              ))}
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;