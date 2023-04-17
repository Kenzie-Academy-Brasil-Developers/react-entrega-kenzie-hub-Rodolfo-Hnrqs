import { Nav } from "../../components/Nav"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledContainer } from "../../styles/grid"
import { StyledRegisterPage } from "./styled"

export const RegisterPage = () => {
    return(
        <StyledContainer>
            <StyledRegisterPage>
                <Nav button="Voltar"/>
                <RegisterForm/>
            </StyledRegisterPage>
        </StyledContainer>
    )
}