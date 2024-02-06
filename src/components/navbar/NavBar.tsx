import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ShoppingCart } from '@phosphor-icons/react';
import './NavBar.css'; 
import paintLogo from '../../assets/paintLogo.png';

function Navbar() {
    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
    }

    let navbarComponent;

    if (usuario.tipo === "dev") {
        navbarComponent = (
            <div className='w-full bg-[#439da6] text-white flex justify-center py-4 border-b-[1] border-grey'>
                <div className="container flex justify-between text-lg" style={{ marginLeft: '50px' }}>
                    <Link to='/home' className='text-2xl font-bold uppercase'>
                        <img src={paintLogo} alt="Paint Logo" className="mr-2" style={{ width: '30px', height: '30px' }} />
                            Aquarelando
                    </Link>

                    <div className='flex gap-4'>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/cadastroProduto'>Cadastrar Produto</Link>
                        <Link to='/categorias'>Categorias</Link>
                        <Link to='/cadastroCategoria'>Cadastrar Categoria</Link>
                        <Link to='/perfil'>Perfil</Link>
                        <Link to='' onClick={logout}>Sair</Link>
                        <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>
                    </div>
                </div>
            </div>
        );
    } else {
        navbarComponent = (
            <div className='w-full bg-[#439da6] text-white flex justify-between items-center py-4 border-b-[1px] border-grey'>
                <div className="container flex items-center ml50">
                    <Link to='/home' className='text-2xl font-bold uppercase flex items-center' style={{ marginLeft: '0', marginRight: '20px' }}>
                        <img src={paintLogo} alt="Paint Logo" className="mr-2" style={{ width: '30px', height: '30px' }} />
                        Aquarelando 
                    </Link>
                    <div className='links'>
                        <Link to='/home' className='link-item'>HOME</Link>
                        <Link to='/produtos' className='link-item'>PRODUTOS</Link>
                        <Link to='/sobre' className='link-item'>SOBRE</Link>
                    </div>
                </div>
                <div className='flex gap-5 links'>
                    <Link to='/login' onClick={logout} >Sair</Link>
                    <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>
                </div>
            <hr />
            </div>
        );
    }

    return (
        <>
        {navbarComponent}
        </>
    );
}

    export default Navbar;
