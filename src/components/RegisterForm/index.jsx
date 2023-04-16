import { useForm } from "react-hook-form"
import { Input } from "../fragments/Input"
import { Select } from "../fragments/Select"
import { registerFormSchema } from "./registerFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { StyledRegisterForm } from "./styled"


export const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const navigate = useNavigate();

    const userRegister = async (formData) => {
        try {
            setLoading(true)
            const response = await api.post("/users", formData)
            toast.success("Cadastro realizado com sucesso!")
            navigate("/")
        } catch (error) {
            toast.error("Ops! Algo deu errado!")
        } finally{
            setLoading(false)
        }
    }

    const submit = (formData) => (
        userRegister(formData)
    )
    
    return(
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
            <h3>Crie sua conta</h3>
            <span>Rápido e grátis, vamos nessa</span>
            <Input label="Nome" type="text" id="name" placeholder="Digite aqui seu nome" register={register("name")} error={errors.name}/>
            <Input label="Email" type="email" id="email" placeholder="Digite aqui seu email" register={register("email")} error={errors.email}/>
            <Input label="Senha" type="password" id="password" placeholder="Digite aqui sua senha" register={register("password")} error={errors.password}/>
            <Input label="Confirmar Senha" type="password" id="confirm" placeholder="Digite novamente sua senha" register={register("confirm")} error={errors.confirm}/>
            <Input label="Bio" type="text" id="bio" placeholder="Fale sobre você" register={register("bio")} error={errors.bio}/>
            <Input label="Contato" type="text" id="contact" placeholder="Opção de contato" register={register("contact")} error={errors.contact}/> 
            <Select label="Selecionar Módulo" id="course_module" register={register("course_module")} error={errors.course_module}>
                <option value="">Selecione o módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
            </Select>
            <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar" }
            </button>
        </StyledRegisterForm>
    )
}