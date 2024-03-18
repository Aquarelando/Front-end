import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Services';
import Categoria from '../../../models/Categoria';
import { toastAlerta } from '../../../utils/ToastAlerta';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    disponivel: true
  });

  const [ativo, setAtivo] = useState<string>("true")

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

  }

  function back() {
    navigate('/login')
  }

  function handleDisponivel(e: ChangeEvent<HTMLInputElement>) {
    setAtivo(e.target.value)

    if (e.target.value == "true") {
      setCategoria({ ...categoria, disponivel: true })
    } else {
      setCategoria({ ...categoria, disponivel: false })
    }
  }
  console.log(JSON.stringify(categoria))

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/editar`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria atualizado com sucesso', 'sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar o Categoria', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/categorias/novo`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria cadastrado com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a Categoria', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);
  console.log(categoria)

  return (
    <div className="md:w-[45rem] w-full container flex flex-col p-5 rounded-2xl overflow-hidden items-center justify-center mx-auto duration-500 bg-white shadow-md hover:shadow-xl mt-10 mb-10 bg-gradient-to-b fro border-4 mobilemax:m-1">
      <h1 className="text-3xl text-center my-7">{id !== undefined ? 'Editar Categoria' : 'Cadastrar uma nova Categoria'}</h1>
      <form onSubmit={gerarNovaCategoria} className="w-full flex flex-col gap-4 sm:w-3/4 sm:flex-row sm:flex-wrap">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="nome">Nome da Categoria</label>
            <input
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Nome"
              name='nome'
              required
              className="border-2 border-gray-400 rounded w-full sm:w-[15rem] focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="descricao">Descrição da Categoria</label>
            <input
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              className="border-2 border-gray-400 rounded w-full sm:w-[16rem] focus:outline-none focus:border-blue-500"
            />
            
          </div>
        </div>
        <div className="flex flex-col w-full">
          
          <div>
            <label htmlFor="ativo">
              <input
                type="radio"
                id="ativo"
                name="disponivel"
                className="border-2 border-gray-400 rounded"
                value="true"
                onChange={handleDisponivel}
              />
              {' '}Disponível ✅
            </label>
          </div>
          <div>
            <label htmlFor="inativo">
              <input
                type="radio"
                id="inativo"
                name="disponivel"
                className="border-2 border-gray-400 rounded p-2"
                value="false"
                onChange={handleDisponivel}
              />
              {' '}Indisponível ❌
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mx-auto gap-6 mb-3">
          <button className="rounded-xl text-white bg-[#FD98B4] hover:bg-[#439DA6] w-full sm:w-auto p-3 px-9 block" onClick={back}>
            Voltar
          </button>
          <button type="submit" className="rounded-xl text-white bg-[#FD98B4] hover:bg-[#439DA6] w-full sm:w-auto p-3 px-9 block">
            {id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
          <button>
             <Link to={`/deletarCategoria/${categoria.id}`}>
            <button className="rounded-xl text-white bg-[#FD98B4] hover:bg-[#439DA6] w-full sm:w-auto p-3 px-9 block" >
              Deletar
            </button>
          </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioCategoria;