import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ShoppingCart from '../../assets/carrinho.png';
import IconPerfil from '../../assets/perfil.png';
import './NavBar.css';
import paintLogo from '../../assets/paintLogo.png';
import { toastAlerta } from '../../utils/ToastAlerta';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import perfil from '../../assets/perfil.png'
import { FiMenu } from "react-icons/fi";

import Home from '../../paginas/home/Home';

function Navbar() {

  const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Produto', href: '/produtos', current: false },
    { name: 'Sobre', href: '/sobre', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login');
  }

  let navbarComponent;

  const location = useLocation()

  if (location.pathname.includes('/login') || location.pathname.includes('/cadastro')) {

    navbarComponent

  } else {
    if (usuario.tipo === "dev") {
      navbarComponent = (
        <>
          <div className='w-full background py-4 px-4border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <div className="container flex items-center justify-between">

                <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                  <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo" />
                  Aquarelando
                </Link>
                <div className='links font-light links'>
                  <Link to='/produtos' className='mr-8 '>Produtos</Link>
                  <Link to='/produtos/novo' className='mr-8'>Cadastrar Produto</Link>
                  <Link to='/categorias' className='mr-8'>Categorias</Link>
                  <Link to='/categoria/novo' className='mr-8'>Cadastrar Categoria</Link>
                  <Link to='' onClick={logout} className=' py-1 px-4 mt-0'>Sair</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#439DA6]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            
                            <Menu.Button className="relative flex  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-5"
                                src='https://www.svgrepo.com/show/509296/align-justify.svg'
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                             <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/login"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Home
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/sobre"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sobre
                                  </Link>
                                )}
                              </Menu.Item>
                             
                            </Menu.Items>
                            
                          </Transition>
                        </Menu>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                          <h4 className='text-white font-extralight '>Aquarelando</h4>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={perfil}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/produtos"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Produtos
                              </Link>
                            )}
                          </Menu.Item>
                          
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/categorias"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Categorias
                              </Link>
                            )}
                          </Menu.Item>
                          
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                onClick={logout}
                              >
                                Sair
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  
                    
                </>
              )}
            </Disclosure>
          </div>
          
        </>
      );


      // USUÁRIO DESLOGADO: BOTÃO LOGAR
    } else if (usuario.token == "") {
      navbarComponent = (
        <>
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='links font-light links'>
                <Link to='/home' className='mr-8'>HOME</Link>
                <Link to='/produtos' className='mr-8'>PRODUTOS</Link>
                <Link to='/sobre' className='mr-8'>SOBRE</Link>
              </div>
            </div>
            <div className='flex gap-5 mr-12'>
              <Link to='/login'><img src={ShoppingCart} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
              <Link to='login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4'>Login/Cadastro</Link>
            </div>
            <hr />
          </div>
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#439DA6]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-5"
                                src='https://www.svgrepo.com/show/509296/align-justify.svg'
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/home"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Home
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/produtos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Produto
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/sobre"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sobre
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                          <h4 className='text-white font-extralight'>Aquarelando</h4>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div className='flex items-center'>
                          <Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
                            <Menu.Button className="relative flex rounded-ful text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={perfil}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/login"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Login
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/cadastro"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Cadastro
                                  </Link>
                                )}
                              </Menu.Item>
                             
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  
                    
                </>
              )}
            </Disclosure>
          </div>
        </>
      );

      //USUÁRIO LOGADO: BOTÃO DESLOGAR, PERFIL
    } else {
      navbarComponent = (
        <>
          <div className='w-full background py-4 border-b-[1px] border-white mobilemax:hidden'>
            <div className="container flex items-center ml-12">
              <Link to='/home' className='font-semibold uppercase flex items-center ml-0 mr-20 logo-container'>
                <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo" />
                Aquarelando
              </Link>
              <div className='font-light links'>
                <Link to='/home' className='mr-8'>HOME</Link>
                <Link to='/produtos' className='mr-8'>PRODUTOS</Link>
                <Link to='/sobre' className='mr-8'>SOBRE</Link>
              </div>
            </div>
            <div className='flex gap-5 mr-12'>
              <Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
              <Link to='/perfil' ><img src={usuario.foto} alt="Perfil" className='mr-2 perfil mt-0 rounded-full' /> </Link>
              <Link to='/login' className='rounded-full bg-[#fd98b4] text-white py-1 px-4 mt-0' onClick={logout}>Desconectar</Link>
            </div>
            <hr />
          </div>
          {/* Mobile NAVBAR*/}
          <div className='mobilemin:hidden'>
            <Disclosure as="nav" className="bg-[#439DA6]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-5"
                                src='https://www.svgrepo.com/show/509296/align-justify.svg'
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                             <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/login"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Home
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/produtos"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Produtos
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/sobre"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sobre
                                  </Link>
                                )}
                              </Menu.Item>
                             
                            </Menu.Items>
                            
                          </Transition>
                        </Menu>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center m2">
                          <h4 className='text-white font-extralight '>Aquarelando</h4>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div className='flex items-center'>
                          <Link to='/cart'><img src={ShoppingCart} alt="Carrinho" className="mr-2 carrinho mt-0" /></Link>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Abra o Menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={usuario.foto}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          
                         
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/perfil"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Minha Conta
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/perfil"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Devolução & Cancelados
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/perfil"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Avaliações e comentários
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/perfil"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Meus pedidos
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                onClick={logout}
                              >
                                Sair
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  
                    
                </>
              )}
            </Disclosure>
          </div>
        </>
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