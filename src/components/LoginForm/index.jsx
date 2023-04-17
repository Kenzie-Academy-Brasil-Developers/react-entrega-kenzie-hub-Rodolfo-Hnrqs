import { Input } from "../fragments/Input"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { StyledLoginForm } from "./styled"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/userContext"

export const LoginForm = () => {
    const { userLogin } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const submit = (formData) => (
        userLogin(formData, setLoading)
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