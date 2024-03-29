import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Services"
import { toastAlerta } from "../utils/ToastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        tipo: "",
        data_nascimento: "",
        cpf: "",
        foto: "",
        email: "",
        senha: "",
        token: "",
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        console.log(userLogin)
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso", 'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes", 'info')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            tipo: "",
            data_nascimento: "",
            cpf: "",
            foto: "",
            email: "",
            senha: "",
            token: "",
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}