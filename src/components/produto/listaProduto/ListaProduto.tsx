
import { BsFillSearchHeartFill, BsSearchHeartFill } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";
import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../contexts/AuthContext";
import Produtos from "../../../models/Produtos";
import { buscar } from "../../../services/Services";
import CardFiltro from "../../filtro/CardFiltro";
import CardProduto from "../cardProduto/CardProduto";
import CardProdutoUsuario from "../cardProdutoUsuario/CardProdutoUsuario";





function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [search, setSearch] = useState('');

    const [selected, setSelected] = useState<{ nome: string, checked: boolean }[]>([
        { nome: 'Mochila', checked: false },
        { nome: 'Estojo', checked: false },
        { nome: 'Caderno', checked: false },
        { nome: 'Livro', checked: false },
        { nome: 'Material', checked: false },
    ]);


    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

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

    const selectedArray = selected.filter(item => item.checked === true).map(item => item.nome)
    const filtrarProdutos = produtos.filter(produto => {
        const productNameLowerCase = produto.nome.toLowerCase();
        const searchLowerCase = search.toLowerCase();
        return searchLowerCase !== '' ? productNameLowerCase.includes(searchLowerCase) : selectedArray.includes(produto.nome.split(" ")[0]) 
    });

    const filteredProducts = filtrarProdutos.length > 0 ? filtrarProdutos : produtos;

    return (
        <div className="container pt-10 mx-auto">
            <div className="p-3 text-3xl text-center text-white bg-[#439DA6]">Produtos</div>
            <div className="flex items-center justify-between px-2 py-3">
                <span className="relative flex inline-block text-left bg-[#439DA6] rounded-xl">
                    
                    {/* filtro */}

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
                        nome="Livro"
                        checked={selected.find(item => item.nome === 'Livro')?.checked}
                        onChange={handleCheckboxChange} />

                    <CardFiltro
                        nome="Material"
                        checked={selected.find(item => item.nome === 'Material')?.checked}
                        onChange={handleCheckboxChange} />

                </span>


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