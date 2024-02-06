import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Services'
import './Cadastro.css'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    tipo:'',
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
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }


  return (
    <>
<div className="relative flex flex-col items-center justify-center min-h-screen py-6 overflow-hidden bg-creme bg-gray-50 sm:py-12">
  
  <div className="p-10 bg-white shadow-lg">
    
    <h3 className="mb-10 text-3xl font-bold">Registre-se</h3>

    <form className="grid gap-10 sm:grid-cols-2">
      
      <input type="text" name="primeiroNome" id="primeiroNome" className="py-2 pl-2 border-b border-gray-300" placeholder="Nome" />
      <input type="text" name="sobrenome" id="sobrenome" className="py-2 pl-2 border-b border-gray-300" placeholder="Sobrenome" />
      <input type="date" name="data_nascimento" id="data_nascimento" className="py-2 pl-2 border-b border-gray-300" placeholder="Data de Nascimento" />
      <input type="text" name="cpf" id="cpf" className="py-2 pl-2 border-b border-gray-300" placeholder="Digite o seu CPF" required min={11} />
      <input type="text" name="email" id="email" className="py-2 pl-2 border-b border-gray-300" placeholder="foto" />
      <input type="email" name="email" id="email" className="py-2 pl-2 border-b border-gray-300" placeholder="Email" />

      <input type="password" name="senha" id="senha" className="py-2 pl-2 border-b border-gray-300" placeholder="Senha" />
      <input type="password" name="confirmar_senha" id="confirmar_senha" className="py-2 pl-2 border-b border-gray-300" placeholder="Confirmar Senha" />

      <button type='submit' className="py-2 mt-5 text-lg font-semibold text-white bg-teal-600 sm:col-span-2 sm:w-1/2 hover:bg-teal-700">Cadastrar</button>
    </form>
  </div>

</div>
    </>
  )
}

export default Cadastro




