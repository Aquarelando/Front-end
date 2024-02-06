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
    <>


<div className="bg-white">
    <div className="container py-8 mx-auto">
        <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1">
                <div className="flex mb-6 ">
                    <input type="text" placeholder="Pesquisar..." className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="flex text-family"><BiFilter /><h4 className="pl-3"> FILTRAR</h4></div>
                <div>
                    <h2 className="mb-4 text-lg font-semibold">Categorias</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-blue-500">Mochila</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-blue-500">Estojo</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-blue-500">Caderno</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-blue-500">Livros</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-blue-500">Materias</a>
                        </li>
                    </ul>
                    <h2 className="mt-6 mb-4 text-lg font-semibold">Cor</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-red-500">Vermelho</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-blue-500">Azul</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-green-500">Verde</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 transition duration-300 hover:text-yellow-500">Amarelo</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between col-span-3 p-3 bg-white rounded-lg shadow-md ">
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
   </>
  );
}

export default ListaProdutos;