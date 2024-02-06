import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineYoutube } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import paymentCards from '../../assets/payment.png'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import FooterListaTitulo from './FooterListaTitulo'
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

function Footer(){
  const { usuario, handleLogout } = useContext(AuthContext)
  const [emailInfo, setEmailInfo] = useState("");
  const [inscreva, setinscreva] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  let footerComponent

  const emailValidation = (emailInfo: string): boolean | null => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) !== null;
  };
  
    const handleSubscription = () => {
      if (emailInfo === "") {
        setErrMsg("Forneca um email !");
      } else if (!emailValidation(emailInfo)) {
        setErrMsg("Por favor entre com um email valido!");
      } else {
        setinscreva(true);
        setErrMsg("");
        setEmailInfo("");
      }
    };
  
    if(usuario.token !== ''){

      if(usuario.token == '') {
        footerComponent = (
          <>
            <div className="w-full bg-[#F5F5F3] py-20">
          <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-container md:grid-cols-2 xl:grid-cols-6">
            <div className="col-span-2">
              <FooterListaTitulo title="Saiba mais sobre a Aquarelando" />
              <div className="flex flex-col gap-6">
                <p className="text-base w-full xl:w-[80%]">
                  Somos uma organização sem fins lucrativos, com o objetivo de ajudar as pessoas a colorir o caminho da nova geração.
                </p>
                <ul className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/aquarelandoorg"
                    target="_blank"
                    rel="aquarelandoorg"
                  >
                    <li className="flex items-center justify-center text-lg text-gray-100 duration-300 rounded-full cursor-pointer w-7 h-7 bg-primeColor hover:text-white hover:bg-black">
                      <AiOutlineYoutube />
                    </li>
                  </a>
                  <a
                    href="https://github.com/aquarelandoorg"
                    target="_blank"
                    rel="aquarelandoorg"
                  >
                    <li className="flex items-center justify-center text-lg text-gray-100 duration-300 rounded-full cursor-pointer w-7 h-7 bg-primeColor hover:text-white hover:bg-black">
                      <AiFillGithub />
                    </li>
                  </a>
                  <a
                    href="https://www.facebook.com/aquarelandoorg"
                    target="_blank"
                    rel="aquarelandoorg"
                  >
                    <li className="flex items-center justify-center text-lg text-gray-100 duration-300 rounded-full cursor-pointer w-7 h-7 bg-primeColor hover:text-white hover:bg-black">
                    <CgFacebook />
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aquarelandoorg"
                    target="_blank"
                    rel="aquarelandoorg"
                  >
                    <li className="flex items-center justify-center text-lg text-gray-100 duration-300 rounded-full cursor-pointer w-7 h-7 bg-primeColor hover:text-white hover:bg-black">
                      <AiFillLinkedin />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div>
              <FooterListaTitulo title="Links Uteis" />
              <ul className="flex flex-col gap-2">
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Mochilas
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Estojos
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Cadernos
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Livros
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Materias
                </li>
              </ul>
            </div>
            <div>
              <FooterListaTitulo title="Sua conta" />
              <ul className="flex flex-col gap-2">
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Perfil
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Rastreio
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Endereço
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Detalhes da conta
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Pagamento
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center w-full col-span-2 px-4">
              <FooterListaTitulo title="Inscreva-se na nossa newsletter" />
              <div className="w-full">
                <p className="mb-4 text-center">
                  Receba novidades e promocões em primeira mão
                </p>
                {inscreva ? (
                  <motion.p
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-base font-semibold text-center text-green-600 font-titleFont"
                  >
                    Inscrição realizada com sucesso !
                  </motion.p>
                ) : (
                  <div className="flex flex-col items-center justify-between w-full gap-4 xl:flex-row">
                    <div className="flex flex-col w-full">
                      <input
                        onChange={(e) => setEmailInfo(e.target.value)}
                        value={emailInfo}
                        className="w-full h-12 px-4 text-lg bg-transparent border-b border-gray-400 outline-none text-primeColor placeholder:text-base"
                        type="text"
                        placeholder="Insira seu email..*"
                      />
                      {errMsg && (
                        <p className="mt-2 text-sm font-semibold text-center text-red-600 font-titleFont animate-bounce">
                          {errMsg}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleSubscription}
                      className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                    >
                      Inscrever
                    </button>
                  </div>
                )}
    
                <img
                  className={`w-[80%] lg:w-[60%] mx-auto ${
                    inscreva ? "mt-2" : "mt-6"
                  }`}
                  src={paymentCards}
                />
              </div>
            </div>
          </div>
        </div>
          </>
        )
      }
    }
  

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer