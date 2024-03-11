import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    <div className="md:w-[50rem] w-full  container flex flex-col rounded-2xl overflow-hidden items-center justify-center mx-auto duration-500 bg-white shadow-md hover:shadow-xl mt-10
     bg-gradient-to-b from-[#439da6] to-[#26668b] border-4 border-[#fa769c] border-x-[#FD98B4]">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex items-center justify-center gap-20 mb-4">
          <label htmlFor="ativo">

            <input
              type="radio"
              id="ativo"
              name="disponivel"
              className="border-2 border-slate-700 rounded"
              value="true"
              onChange={handleDisponivel}
            />

            {' '}Disponivel ✅
          </label>

          <label htmlFor="inativo">
            <input
              type="radio"
              id="inativo"
              name="disponivel"
              className="border-2 border-slate-700 rounded p-2"
              value="false"
              onChange={handleDisponivel}
            />
            {' '}Indisponivel ❌
          </label>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-20 mb-4">
          <button className="rounded-xl text-slate-100 bg-[#FD98B4] hover:bg-[#439DA6] w-full md:w-40 py-2 block mb-8 md:mb-0" onClick={back}>
            Voltar
          </button>
          <button
            className="rounded-xl text-slate-100 bg-[#FD98B4] hover:bg-[#439DA6] w-full md:w-40 py-2 block mb-8"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioCategoria;
