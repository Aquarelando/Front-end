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
        <div className='container w-1/3 mx-auto mt-10'>

            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a Categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between duration-500 bg-white shadow-md hover:scale-105 hover:shadow-xl bg-gradient-to-b from-[#439da6] to-[#26668b] mt-8'>
                <header className='py-2 px-6 text-black font-bold text-2xl text-center mt-5'>Categoria</header>
                <p className='p-8 text-2xl  h-full'><p className='mb-3'>Descrição:</p>{categoria.descricao}</p>
                <div className="flex justify-around p-5">
                    <button className='rounded-xl w-24 h-10 text-slate-100 bg-[#df4242] hover:bg-red-600' onClick={retornar}>Não</button>
                    <button className='rounded-xl w-24 h-10 text-slate-100 bg-[#3ba050] hover:bg-[#338a44] flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria