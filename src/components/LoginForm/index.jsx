import { Input } from "../fragments/Input"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { Link } from "react-router-dom"
import { StyledLoginForm } from "./styled"

export const LoginForm = ({setUser, user}) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const navigate = useNavigate()

    const userLogin = async (formData) => {
        try {
            setLoading(true)
            const {data} = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
            console.log(user)
            toast.success("Login realizado com sucesso!")
            navigate("/user")
        } catch (error) {
            toast.error("Ops! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    const submit = (formData) => (
        userLogin(formData)
    )

    return (
        <>
            <StyledLoginForm onSubmit={handleSubmit(submit)}>
                <h3>Login</h3>
                <Input label="Email" type="email" id="email" placeholder="Digite seu email" register={register("email")} error={errors.email} />
                <Input label="Senha" type="password" id="password" placeholder="Digite sua senha" register={register("password")} error={errors.password} />
                <button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                </button>
                <span>Ainda não possui uma conta?</span>
                <Link to="/register">Cadastre-se</Link>
            </StyledLoginForm>
        </>
    )
}