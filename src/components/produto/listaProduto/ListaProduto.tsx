import { BsFilterSquareFill } from "react-icons/bs"; 
import { BsFillSearchHeartFill } from "react-icons/bs"; 
import { BsSearchHeartFill } from "react-icons/bs"; 
import { BiFilter } from "react-icons/bi"; 
import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Services';
import CardProduto from '../cardProduto/CardProduto';
import Produtos from '../../../models/Produtos';
import CardProdutoUsuario from '../cardProdutoUsuario/CardProdutoUsuario';


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token !== '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos/todos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <div className="container pt-10 mx-auto">
        <div className="p-3 text-3xl text-center text-white bg-[#439DA6]">Produtos</div>
     <div className="flex items-center justify-between px-2 py-3 text-white">
     <div className="relative inline-block text-left">
            <button type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu" aria-expanded="true" aria-haspopup="true">
                <span className="px-10 mr-2">Categorias</span>
                <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
{/* filtro */}
            <div className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-[12rem] ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        3</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        4</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        5</a>
                </div>
            </div>
        </div>
        <div className="relative inline-block text-left">
            <button type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu" aria-expanded="true" aria-haspopup="true">
                <span className="px-10 mr-2">Cor</span>
                <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <div className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        3</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        4</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Categoria
                        5</a>
                </div>
            </div>
        </div>
        {/* //Filtro// */}
        <div className="w-[400px] border border-gray-500 rounded flex items-center space-x-5">
            <input className="w-full px-5 py-2 text-xs bg-white outline-0" type="text" placeholder="Procurar ..."/>
            <i className="px-2 text-gray-500 "><BsFillSearchHeartFill /></i>
        </div>
    </div>
    <div className="flex justify-center w-full my-2">
            <div className="container flex flex-col">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {usuario.tipo === 'dev' ? (
                            produtos.map((produto) => (
                                <CardProduto key={produto.id} produto={produto} />
                            ))
                        ) : (
                            produtos.map((produto) => (
                                <CardProdutoUsuario key={produto.id} produto={produto} />
                            ))
                        )}
                </div>
            </div>
        </div>
    </div>


  );
}

export default ListaProdutos;