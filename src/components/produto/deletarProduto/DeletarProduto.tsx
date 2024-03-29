import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Services";
import Produtos from "./../../../models/Produtos";
import { toastAlerta } from "../../../utils/ToastAlerta";

function DeletarProduto() {
  const [produtos, setProduto] = useState<Produtos>({} as Produtos);
  console.log(produtos);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
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
      toastAlerta("Deletar produto", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/deletar/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Produto", "erro");
    }

    retornar();
  }
  return (
    <div className="container mx-auto ">
      <h1 className="my-4 text-4xl text-center">Deletar Produto</h1>

      <p className="mb-4 font-semibold text-center ">
        Você tem certeza de que deseja apagar o Produto a seguir?
      </p>

      <div className="w-full sm:w-1/3 mx-auto bg-green shadow-md hover:shadow-xl mb-6">
        <div className="border rounded-2xl">
          <header className="px-6 py-2 text-2xl font-bold text-white bg-emerald-500">
            Produto
          </header>
          <div className="p-4">
            <p className="text-xl text-center">{produtos.nome}</p>
            <img src={produtos.foto} alt={produtos.nome} className="mx-auto mt-4" />
            <p className="text-xl text-center p-3">Descrição: {produtos.descricao}</p>
            <p className="text-xl text-center p-3">Validade: {produtos.dataValidade}</p>
            <p className="text-xl text-center p-3">Quantidade: {produtos.quantidade}</p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <button
              className="w-full sm:w-1/2 py-2 bg-red-400 text-slate-100 hover:bg-red-600"
              onClick={retornar}
            >
              Não
            </button>
            <button
              className="w-full sm:w-1/2 mt-2 sm:mt-0 py-2 bg-indigo-400 text-slate-100 hover:bg-indigo-600"
              onClick={deletarProduto}
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
