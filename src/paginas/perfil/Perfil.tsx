import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import splash from "../../assets/splash.png"
import './Perfil.css'
import { toastAlerta } from '../../utils/ToastAlerta'

function Perfil() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'info')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div>
      <div className='flex justify-evenly mt-8'>
        <div>
          <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='img-sombra rounded-full border-4 border-[#fd98b4] size-[75%]' />
        </div>
        <div className="teste">

          <form className='form-perfil'>
          <label htmlFor="">Nome :</label>
          <input type="text" value={usuario.nome} />

          <label htmlFor="">CPF :</label>
          <input type="text" value={usuario.cpf} />

          <label htmlFor="">EMAIL :</label>
          <input type="text" value={usuario.email} />
          </form>


          
        </div>
      </div>
      <img src={splash} className='w-[70%] ml-[30%] mt-[2.2%]' />
    </div>
  )
}

export default Perfil

