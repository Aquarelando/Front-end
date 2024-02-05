

import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
//Imagens //
import Logo from '../../assets/Logo.png';
import imgFacebook from '../../assets/imgFacebook.png';
import LogoGoogle from '../../assets/LogoGoogle.svg';


function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    console.log(login)
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <div className="h-screen m-auto 2xl:container bg-rosalogin">
        <div id='bgform' className="relative h-full ml-auto lg:w-6/12">
          <div className="px-6 py-12 m-auto sm:p-20 xl:w-10/12" >
            <div className='grid gap-6 mt-12 sm:grid-col-2 '>
              <button className='px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200'>
                <div className='flex justify-center gap-4'>
                  <img src={LogoGoogle} className="w-5" alt="GoogleImg" />
                  <span className="block text-sm font-medium tracking-wide text-blue-700 w-max">Continuar com o Google</span>
                </div>
              </button>
              <button className="px-6 py-3 transition bg-gray-900 rounded-xl hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                <div className="flex items-center justify-center gap-4 text-white">
                  <img src={imgFacebook} alt="imgFacebook" className='w-5' />
                  <span className="block text-sm font-medium tracking-wide text-white w-max">Continuar com o Facebook</span>
                </div>
              </button>
            </div>

            <form action="" className="py-6 space-y-6" onSubmit={login}>
              <div>
                <input required
                  type="email"
                  id='email'
                  name='email'
                  value={usuarioLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  placeholder="Digite seu email"
                  className="w-full px-6 py-3 transition bg-transparent ring-1 ring-gray-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>

              <div className="flex flex-col items-end">
                <input minLength={8}
                  required
                  type="password"
                  id='senha'
                  name='senha'
                  value={usuarioLogin.senha}
                  placeholder="Digite sua senha"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  className="w-full px-6 py-3 transition bg-transparent ring-1 ring-gray-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
                <button type="reset" className="p-3 -mr-3 w-max">
                  <span className="text-sm tracking-wide text-white">Esqueceu sua senha?</span>
                </button>
              </div>

              <div>
                <button className="w-full px-6 py-3 transition rounded-xl bg-buttonlogin hover:bg-rosalogin focus:bg-sky-600 active:bg-sky-800">
                  <span className="text-lg font-semibold text-white">Login</span>
                </button>
                <a href="#" type="reset" className="w-full px-2 py-3 ">
                  <span className="text-sm tracking-wide text-white "><Link to={'/cadastro'}>Ainda nÃ£o tem uma conta? Registre-se agora!</Link></span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div hidden className="fixed w-7/12 inset-24 lg:block">
            <img src={Logo} alt="Logo-Aquarelando" className='absolute text-sm left-6 bottom-2' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;