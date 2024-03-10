import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produtos';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Services';
import { toastAlerta } from '../../../utils/ToastAlerta';


function FormularioProduto() {
  let navigate = useNavigate();

  const [valido, setValido] = useState<string>("true")

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
    disponivel: true,
  });


  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    dataValidade: '',
    quantidade: 0,
    foto: '',
    seloInmetro: true,
    preco: 0,
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function back() {
    navigate('/login')
  }

  function retornar() {
    navigate('/produtos');
  }

  function handleSelo(e: ChangeEvent<HTMLInputElement>) {
    setValido(e.target.value)
    console.log(produto)
    if (e.target.value == "true") {
      setProduto({ ...produto, seloInmetro: true })
    } else {
      setProduto({ ...produto, seloInmetro: false })
    }
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos/editar`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Produto', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/produtos/novo`, produto, setProduto, {
          headers: {
            'Authorization': token,
          }
        })

        toastAlerta('Produto cadastrada com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a Produto', 'erro');
        }
      }
    }

    retornar()
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className="w-[50rem] h-[50%] container flex flex-col rounded-2xl overflow-hidden items-center justify-center mx-auto duration-500 bg-white shadow-md hover:shadow-xl mt-10 mb-10
      bg-gradient-to-b from-[#439da6] to-[#26668b] border-4 border-[#fa769c] border-x-[#FD98B4]">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar um novo Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descricao"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dataValidade">Data de Validade do Produto</label>
          <input
            value={produto.dataValidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="date"
            placeholder="Data de Validade"
            name="dataValidade"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantidade">Quantidade do Produto</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Quantidade"
            name="quantidade"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto do Produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex items-center justify-center gap-20 mb-4">
          <label htmlFor="ativo">
            <input
              type="radio"
              id="valido"
              name="disponivel"
              className="border-2 border-slate-700 rounded p-2"
              value="true"
              onChange={handleSelo}
            />
            {' '}Possui Selo Inmetro ✅
          </label>

          <label htmlFor="inativo">
            <input
              type="radio"
              id="invalido"
              name="disponivel"
              className="border-2 border-slate-700 rounded p-2"
              value="false"
              onChange={handleSelo}
            />
            {' '}Não Possui Selo Inmetro ❌
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço do Produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Nome da Categoria</p>
          <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-20 mb-4">
          <button className="rounded-xl text-slate-100 bg-[#FD98B4] hover:bg-[#439DA6] w-40 py-2 mx-auto block mb-8" onClick={back}>
            Voltar
          </button>

          <button
            disabled={carregandoCategoria} type='submit' className="rounded-xl text-slate-100 bg-[#FD98B4] hover:bg-[#439DA6] w-40 py-2 mx-auto block mb-8">
            {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>

        </div>
      </form>
    </div>
  );
}

export default FormularioProduto;