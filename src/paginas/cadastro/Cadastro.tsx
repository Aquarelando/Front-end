import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Services'
import './Cadastro.css'
import { toastAlerta } from '../../utils/ToastAlerta'
import LogoAquarelando2 from '../../assets/Logo2.png';
import paintLogo from '../../assets/paintLogo.png';


function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    tipo: 'dev',
    data_nascimento: '',
    cpf: '',
    foto: '',
    email: '',
    senha: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    tipo: '',
    data_nascimento: '',
    cpf: '',
    foto: '',
    email: '',
    senha: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log(usuario)

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário', 'erro')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'info')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }


  return (
    <>
      <div className="flex justify-around w-full h-screen bg-rosalogin">
        <div className="">
          <Link
            to="/home"
            className="font-semibold uppercase flex items-center ml-0 mr-20 logo-container p-5 pl-[3rem] text-white flex "
          >
            <img src={paintLogo} alt="Paint logo" className="mr-2 leading-7 logo bg-gradient-to-r from-[#439da6] to-[#26668b] rounded-full" />
            Aquarelando
          </Link>
        </div>

        <div id='bgform' className="p-24 relative h-full ml-auto lg:w-6/12 shadow-lg">

          <h3 className="mb-8 text-2xl font-bold text-white">Cadastro</h3>

          <form onSubmit={cadastrarNovoUsuario}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col w-full">
                <label htmlFor="nome" className='text-white'>Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome completo"
                  value={usuario.nome}
                  className="w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              {/* <div className="flex flex-col w-full">
            <label htmlFor="tipo" className='text-white'>Tipo</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              placeholder="Tipo"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.tipo} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div> */}
              <div className="flex flex-col w-full">
                <label htmlFor="data_nascimento" className='text-white'>Data de Nascimento</label>
                <input
                  type="date"
                  id="data_nascimento"
                  name="data_nascimento"
                  placeholder="Data de Nascimento"
                  className="text-gray-400 w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  value={usuario.data_nascimento}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="cpf" className='text-white'>CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="CPF(Somente em numeros)"
                  className="w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  value={usuario.cpf}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="foto" className='text-white'>Foto</label>
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  placeholder="URL da Foto"
                  className="w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  value={usuario.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className='text-white'>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                value={usuario.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col w-full">
                <label htmlFor="senha" className='text-white'>Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha(minimo 8 caracteres)"
                  className="w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="confirmarSenha" className='text-white'>Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder="Confirme sua Senha"
                  className="w-full px-6 py-2 transition bg-transparent ring-1 ring-red-300 rounded-xl disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                />
              </div>
            </div>
            <div className="mt-10 flex justify-around w-full gap-8">
              <button className='rounded-2xl text-white bg-[#004b71] hover:bg-[#483D8B] w-[30%] py-4' onClick={back}>
                Voltar
              </button>
              <button className='rounded-2xl bg-buttonlogin hover:bg-rosalogin focus:bg-sky-600 active:bg-sky-800 text-white w-[30%] py-4' type='submit'>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
        <div hidden className="flex justify-center uniq:hidden">
          <img src={LogoAquarelando2} alt="Logo-Aquarelando" className='absolute top-[16vh] left-[6vw]' />
        </div>

      </div>
    </>
  )
}

export default Cadastro




