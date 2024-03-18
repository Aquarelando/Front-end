import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/ToastAlerta'
import { CgProfile } from "react-icons/cg";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";
import { HiOutlineStar } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

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
    <>
    <div className='mobilemax:hidden'>
    <div className='mt-16 ml-16 mb-5 flex bg-white w-96 p-3 rounded-lg '>     
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full size-16' />
      <header className='ml-5'>
        Olá,<br></br><b>{usuario.nome}</b>
      </header>       
    </div>

    <div className='bg-white w-96 p-3 ml-16 rounded-lg'>

      <Link to='' className='ml-4 flex'><CgProfile className='text-[#FD98B4] size-6 mr-2'/>Minha conta</Link>

      <hr className='my-4'></hr>
        
      <Link to='' className='ml-4 flex'><RiShoppingBasket2Line className='text-[#FD98B4] size-6 mr-2' />Meus pedidos</Link>

      <hr className='my-4'></hr> 
        
      <Link to='' className='ml-4 flex'><AiOutlineStop className='text-[#FD98B4] size-6 mr-2' />Devolução & Cancelados</Link>
    
      <hr className='my-4'></hr>

      <Link to='' className='ml-4 flex'><HiOutlineStar className='text-[#FD98B4] size-6 mr-2' />Avaliações e comentários</Link>
  
      <hr className='mt-4'></hr>

    </div>

    <div className='bg-white w-[65%] p-3 mt-[-344px] ml-[31%] rounded-lg'>
      <header className='text-center text-xl mb-4'>
        <b>Infomações Pessoais</b>
      </header>
      <hr></hr>

      <section className='p-5'>
      <p className='mb-2 text-lg'>Foto: </p>
        <div className='my-4 flex'>
          <img src={usuario.foto} alt='Foto de Perfil' className='rounded-full size-32'/>
          <Link to='' className='ml-[52%] text-lg text-sky-800 underline flex'><FaRegEdit className='text-sky-800'/>Modificar Informações de Perfil</Link>
        </div>

        <div className='my-4'>
          <p className='mb-2 text-lg'>Nome: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.nome}</p>
        </div>

        <div className='my-4'>
          <p className='mb-2 text-lg'>Email: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.email}</p>
        </div>

        <div className='my-4'>
          <p className='mb-2 text-lg'>Data de Nascimento: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.data_nascimento}</p>
        </div>

        <div>
          <p className='mb-2 text-lg'>CPF: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.cpf}</p>
        </div>


      </section>
      
    </div>
    </div>
    {/*Mobile*/}
    <div className='mobilemin:hidden'>
    <div>
      <div className='bg-white p-3 rounded-lg'>
      <header className='text-center text-xl '>
        <b>Infomações Pessoais</b>
      </header>
    </div>
    <div className='m flex bg-white  rounded-lg pt-[2rem] pl-3'>     
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full size-16' />
      <header className='ml-5'>
        Olá,<br></br><b>{usuario.nome}</b>
      </header>       
    </div>
    <div className='bg-white pt-3 rounded-lg p-2'>
    <div className='my-4 '>
          <p className='mb-2 text-lg'>Nome: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.nome}</p>
        </div>

        <div className='my-4'>
          <p className='mb-2 text-lg'>Email: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.email}</p>
        </div>

        <div className='my-4'>
          <p className='mb-2 text-lg'>Data de Nascimento: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.data_nascimento}</p>
        </div>

        <div>
          <p className='mb-2 text-lg'>CPF: </p>
          <p className='bg-[#F4E7E7] ml-1 w-96 h-8 rounded-md text-xl text-center'>{usuario.cpf}</p>
        </div>
    </div>
    </div>
    </div>
  
  
  </>
  )
}

export default Perfil
