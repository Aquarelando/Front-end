
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Services'
import Categoria from '../../../models/Categoria'
import { toastAlerta } from '../../../utils/ToastAlerta'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/deletar/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }

    return (
        <div className="container mx-auto ">
            <h1 className="my-4 text-4xl text-center">Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a Categoria a seguir?</p>
            <div className='flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md border-4 border-white border-x-white mt-8 w-[50%] ml-[25%]'>
                <header className='py-2 px-6 text-black font-bold text-2xl text-center mt-5'>Categoria</header>
                <p className='p-8 text-2xl  h-full mb-3'>Nome: {categoria.nome}</p>
                <p className='p-8 text-2xl  h-full mb-3'>Descrição: {categoria.descricao}</p>
                <div className="flex justify-around p-5">
                    <button className='rounded-xl w-24 h-10 text-white bg-[#FD98B4] hover:bg-[#439DA6]' onClick={retornar}>Não</button>
                    <button className='rounded-xl w-24 h-10 text-white bg-[#FD98B4] hover:bg-[#439DA6] flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria