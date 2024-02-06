import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ShoppingCart   from '../../assets/carrinho.png';
import IconPerfil   from '../../assets/perfil.png';
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

    let location = useLocation()

    if(location.pathname.includes('/login') || location.pathname.includes('/cadastro')){

        navbarComponent

    } else{ 
        if (usuario.tipo === "dev") {
            navbarComponent = (
                <div className='w-full background py-4 px-4border-b-[1px] border-white links'>
                    <div className="container flex items-center ml-12">
                        <div className="container flex items-center justify-between">

                        <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20'>
                            <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo"/>
                                Aquarelando 
                            </Link>
                            <div className='links font-light'>
                                    <Link to='/produtos' className='mr-8 '>Produtos</Link>
                                    <Link to='/cadastroProduto' className='mr-8'>Cadastrar Produto</Link>
                                    <Link to='/categorias' className='mr-8'>Categorias</Link>
                                    <Link to='/cadastroCategoria' className='mr-8'>Cadastrar Categoria</Link>
                                    <Link to='' onClick={logout} className=' py-1 px-4 mt-0'>Sair</Link>
                                </div>
                            </div>
                    </div>
                </div>
            );        
        
        
            // USUÁRIO DESLOGADO: BOTÃO LOGAR
        } else if (usuario.token == ""){
            navbarComponent = (
                <div className='w-full background py-4 border-b-[1px] border-white links'>
                    <div className="container flex items-center ml-12">
                        <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20'>
                            <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo"/>
                            Aquarelando 
                        </Link>
                        <div className='links font-light'>
                            <Link to='/home' className='mr-8'>HOME</Link>
                            <Link to='/produtos' className='mr-8'>PRODUTOS</Link>
                            <Link to='/sobre' className='mr-8'>SOBRE</Link>
                        </div>
                    </div>
                    <div className='flex gap-5 links mr-12'>      
                        <Link to='/login'><img src={ShoppingCart} alt="Carrinho" className="mr-2 carrinho mt-0"/></Link>
                        <Link to='/login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4'>Login/Cadastro</Link>                         
                    </div>
                <hr />
                </div>
            );

            //USUÁRIO LOGADO: BOTÃO DESLOGAR, PERFIL
        } else {
            navbarComponent = (
                <div className='w-full background py-4 border-b-[1px] border-white links'>
                    <div className="container flex items-center ml-12">
                        <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20'>
                            <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo"/>
                            Aquarelando 
                        </Link>
                        <div className='font-light'>
                            <Link to='/home' className='mr-8'>HOME</Link>
                            <Link to='/produtos' className='mr-8'>PRODUTOS</Link>
                            <Link to='/sobre' className='mr-8'>SOBRE</Link>
                        </div>
                    </div>
                    <div className='flex gap-5 mr-12'>      
                        <Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className="mr-2 carrinho mt-0"/></Link>
                        <Link to='/perfil' ><img src={IconPerfil} alt="Perfil" className='mr-2 perfil mt-0' /> </Link>
                        <Link to='/login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4 mt-0' onClick={logout}>Desconectar</Link>                         
                    </div>
                <hr />
                </div>
            ); 
        }
    }

    return (
        <>
        {navbarComponent}
        </>
    );
}

    export default Navbar;