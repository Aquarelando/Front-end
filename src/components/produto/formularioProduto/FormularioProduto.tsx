
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    <div className="md:w-[45rem] w-full container flex flex-col rounded-2xl overflow-hidden items-center justify-center mx-auto duration-500 bg-white shadow-md hover:shadow-xl mt-10 mb-10 bg-gradient-to-b fro border-4 ">
      <h1 className="text-3xl text-center my-7">{id !== undefined ? 'Editar Produto' : 'Cadastrar um novo Produto'}</h1>
      <form onSubmit={gerarNovoProduto} className="w-full flex flex-col gap-4 sm:w-3/4 sm:flex-row sm:flex-wrap">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="nome">Nome do Produto</label>
            <input
              value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Nome"
              name="nome"
              required
              className="border-2 border-gray-400 rounded w-full sm:w-[15rem] focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="quantidade">Quantidade do Produto</label>
            <input
              value={produto.quantidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              placeholder="Quantidade"
              name="quantidade"
              required
              className="border-2 border-gray-400 rounded w-full sm:w-[16rem] focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="descricao">Descrição do Produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-gray-400 pl-1 pt-2 p-[10rem] sm:w-[full] w-[33.4rem] rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="foto">Foto do Produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-gray-400 rounded sm:w-[full] w-[33.4rem] focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="preco">Preço do Produto</label>
            <input
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              placeholder="Preço"
              name="preco"
              required
              className="border-2 border-gray-400 rounded sm:w-[15rem] w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="dataValidade">Data de Validade do Produto</label>
            <input
              value={produto.dataValidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="date"
              placeholder="Data de Validade"
              name="dataValidade"
              required
              className="border-2 border-gray-400 rounded sm:w-[16rem] w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <p>Nome da Categoria</p>
          <select name="categoria" id="categoria" className="border-2 border-gray-400 rounded sm:w-[33.6rem] w-full p-2 focus:outline-none focus:border-blue-500">
            <option value="" disabled>Select a Category</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col  sm:flex-row mx-auto gap-6 mb-3">

          <Link to={`/deletarProduto/${produto.id}`}>
            <button className="rounded-xl text-white bg-[#FD98B4] hover:bg-[#439DA6] w-full sm:w-auto p-3 px-9 block" >
              Deletar
            </button>
          </Link>

          <button className="rounded-xl text-white bg-[#857a7d] hover:bg-[#439DA6] w-full sm:w-auto p-3 px-9 block" onClick={back}>
            Voltar
          </button>


          <button disabled={carregandoCategoria} type='submit' className="rounded-xl text-white bg-[#FD98B4] hover:bg-[#439DA6] w-full sm:w-auto p-3 px-9 block">
            {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
        </div>


      </form>
    </div>

  );
}

export default FormularioProduto;