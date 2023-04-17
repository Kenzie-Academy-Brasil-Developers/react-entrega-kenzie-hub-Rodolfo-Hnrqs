import { createContext } from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem("@TOKEN")

                if (!token) {
                    return
                }

                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }

        }

        loadUser()
    }, [])

    const userLogout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/")
    }

    const userLogin = async (formData, setLoading, callback) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
            toast.success("Login realizado com sucesso!")
            navigate("/user")
        } catch (error) {
            toast.error("Ops! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (formData, setLoading, callback) => {
        try {
            setLoading(true)
            const response = await api.post("/users", formData)
            toast.success("Cadastro realizado com sucesso!")
            if (callback) {
                await callback();
            }
        } catch (error) {
            toast.error("Ops! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <UserContext.Provider value={{ user, userLogin, userRegister, userLogout, loading }}>
            {children}
        </UserContext.Provider>
    )
}