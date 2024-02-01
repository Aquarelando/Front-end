import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Services';
import Categoria from '../../../models/Categoria';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id:0,
    nome: "",
    descricao: "",
    disponivel: false
  });

  const[ativo, setAtivo] = useState<boolean>(false)

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
      disponivel: ativo,
      [e.target.name]: e.target.value
    })

  }

  function handleDisponivel(e: ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    if(e.target.value == "true"){
        setAtivo(true)
    }else {
        setAtivo(false)
    }
  }
  console.log(JSON.stringify(categoria))

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        alert('Categoria atualizado com sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Categoria')
        }

      }

    } else {
      try {
        await cadastrar(`/categorias/novo`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        alert('Categoria cadastrado com sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrar a Categoria')
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
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
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
        <div className="flex flex-col w-full">
          <label htmlFor="ativo">
            <input
                type="radio"
                id="ativo"
                name="disponivel"
                className="border-2 border-slate-700 rounded p-2"
                value="true"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDisponivel(e)}
            />
            {' '}Disponivel
            </label>

            <label htmlFor="inativo">
            <input
                type="radio"
                id="inativo"
                name="disponivel"
                className="border-2 border-slate-700 rounded p-2"
                value="false"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDisponivel(e)}
            />
            {' '}Indisponivel
            </label>
        </div>
        <button
          className="rounded text-slate-100 bg-[#4F4F4F] hover:bg-[#696969] w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;