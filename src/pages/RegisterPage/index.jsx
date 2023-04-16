import { Nav } from "../../components/Nav"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledRegisterPage } from "./styled"

export const RegisterPage = () => {
    return(
        <StyledRegisterPage>
            <Nav button="Voltar"/>
            <RegisterForm/>
        </StyledRegisterPage>
    )
}