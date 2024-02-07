import { BsFillSearchHeartFill, BsSearchHeartFill } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

import { buscar } from '../../services/Services';
import Produtos from '../../models/Produtos';
import CardFiltro from "../filtro/CardFiltro";
import CardProdutoUsuario from "../produto/cardProdutoUsuario/CardProdutoUsuario";
import CardProduto from "../produto/cardProduto/CardProduto";
import dropDown from "../openMenu/DropDown";


function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [search, setSearch] = useState('');

const [selected, setSelected] = useState<{ nome: string, checked: boolean }[]>([
    { nome: 'Mochila', checked: false },
    { nome: 'Estojo', checked: false },
    { nome: 'Caderno', checked: false },
    { nome: 'Livros', checked: false },
    { nome: 'Materiais', checked: false },
    { nome: 'Vermelho', checked: false },
    { nome: 'Verde', checked: false },
    { nome: 'Amarelo', checked: false },
    { nome: 'Preto', checked: false },
    { nome: 'Branco', checked: false }
]);


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
            },
        });
    } catch (error: any) {
        {
            alert('Erro ao buscar o Produtos')
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
    setSelected(prevCheckboxes => {
        const valoresFiltrados = prevCheckboxes.filter(item => item.nome !== nome)
        return [...valoresFiltrados, { nome: nome, checked: index }]

    });
};

const filtrarProdutos = produtos.filter(produto => {

    const productNameLowerCase = produto.nome.toLowerCase();
    const searchLowerCase = search.toLowerCase();
    const selectedArray = selected.filter(item =>
        item.checked === true && item.nome.toLowerCase() === productNameLowerCase).map(item => item.nome)

    return search !== '' ? productNameLowerCase.includes(searchLowerCase) : selectedArray.includes(produto.nome)

});
const filteredProducts = filtrarProdutos.length > 0 ? filtrarProdutos : produtos;

return (
    <div className="container pt-10 mx-auto" onClick={() => dropDown()} >
        <div className="p-3 text-3xl text-center text-white bg-[#439DA6]">Produtos</div>
        <div className="flex items-center justify-between px-2 py-3 text-white">

            <div className="relative inline-block text-left">
                <button type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="options-menu" aria-expanded="true" aria-haspopup="true">
                    <span className="px-10 mr-2">Categorias</span>
                    <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd" />
                    </svg>
                </button>
                {/* filtro */}
                <div  className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-[12rem] ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible"
                    role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div  className="py-1" role="none">
                        <CardFiltro 
                            nome="Mochila"
                            checked={selected.find(item => item.nome === 'Mochila')?.checked}
                            onChange={handleCheckboxChange} />

                        <CardFiltro
                            nome="Estojo"
                            checked={selected.find(item => item.nome === 'Estojo')?.checked}
                            onChange={handleCheckboxChange} />

                        <CardFiltro
                            
                            nome="Caderno"
                            checked={selected.find(item => item.nome === 'Caderno')?.checked}
                            onChange={handleCheckboxChange} />

                        <CardFiltro
                            nome="Livros"
                            checked={selected.find(item => item.nome === 'Livros')?.checked}
                            onChange={handleCheckboxChange} />

                        <CardFiltro
                            nome="Materiais"
                            checked={selected.find(item => item.nome === 'Materiais')?.checked}
                            onChange={handleCheckboxChange} />
                    </div>

                </div>
            </div>


            <div className="w-[400px] border border-black rounded flex items-center space-x-5">
                <input
                    type="search"
                    value={search}
                    onChange={handleSearchChange}
                    className="w-full px-5 py-2 text-xs text-black bg-white outline-0" placeholder="Procurar ..." />
                <i className="px-2 text-gray-500 "><BsFillSearchHeartFill /></i>
            </div>
        </div>
        <div className="flex justify-center w-full my-2">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {usuario.tipo === 'dev' ? (
                        filteredProducts.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))
                    ) : (
                        filteredProducts.map((produto) => (
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