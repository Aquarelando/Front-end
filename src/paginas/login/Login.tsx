import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";
import '../home/Home.css'

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
//Imagens //
import LogoAquarelando2 from "../../assets/Logo2.png";
import imgFacebook from "../../assets/Facebook_f_logo_(2019).png";
import LogoGoogle from "../../assets/google.svg";
import paintLogo from '../../assets/paintLogo.png';


function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    console.log(login);
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      
      <div className="flex justify-around w-full h-screen bg-rosalogin ">
        <div className="w-full">
        <Link
              to="/home"
              className="font-semibold uppercase flex items-center ml-0 mr-20 logo-container p-5 pl-[3rem] text-white"
            >
              <img  src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo bg-gradient-to-r from-[#439da6] to-[#26668b] rounded-full" />
              Aquarelando
            </Link>
          <img src={LogoAquarelando2} alt="Logo-Aquarelando" className="p-[5vh] pulsahome" />
        </div>
        <div id="bgform" className="w-[100%] p-[10%] pt-[10rem] flex flex-col justify-center">
          <div className="flex justify-center gap-2 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
            <img src={LogoGoogle} className="w-5 " alt="GoogleImg" />
            <span className="block text-sm font-medium tracking-wide text-blue-700 w-max">
              Continuar com o Google
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 mt-4 text-white transition bg-gray-900 rounded-xl hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700 ">
            <img src={imgFacebook} alt="imgFacebook" className="w-5" />
            <span className="block text-sm font-medium tracking-wide text-white w-max">
              Continuar com o Facebook
            </span>
          </div>
          <form action="" className="py-6 space-y-6" onSubmit={login}>
            <div>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={usuarioLogin.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                placeholder="Digite seu email"
                className="w-[100%] px-6 py-3 transition bg-transparent ring-1 ring-gray-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div className="flex flex-col items-end">
              <input
                minLength={8}
                required
                type="password"
                id="senha"
                name="senha"
                value={usuarioLogin.senha}
                placeholder="Digite sua senha"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                className="w-full px-6 py-3 transition bg-transparent ring-1 ring-gray-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <button type="reset" className="p-3 -mr-3 w-max">
                <span className="text-sm tracking-wide text-white">
                  Esqueceu sua senha?
                </span>
              </button>
            </div>

            <div>
              <button className="w-full px-6 py-3 transition rounded-xl bg-buttonlogin hover:bg-rosalogin focus:bg-sky-600 active:bg-sky-800">
                <span className="text-lg font-semibold text-white">Login</span>
              </button>
              <a href="#" type="reset" className="w-full px-2 py-3 ">
                <span className="text-sm tracking-wide text-white ">
                  <Link to={"/cadastro"}>
                    Ainda não tem uma conta? Registre-se agora!
                  </Link>
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;