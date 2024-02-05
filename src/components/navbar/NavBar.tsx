import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ShoppingCart } from '@phosphor-icons/react'

function Navbar() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if (usuario.email == "root@root.com") {
        navbarComponent = (
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Aquarelando</Link>

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
        )
    } else if (usuario.tipo == "user") {
        navbarComponent = (
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Aquarelando</Link>

                    <div className='flex gap-4'>
                        <Link to='/produtos'>Produto</Link>
                        <Link to='/categorias'>Categorias</Link>
                        <Link to='/perfil'>Perfil</Link>
                        <Link to='' onClick={logout}>Sair</Link>
                        <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar