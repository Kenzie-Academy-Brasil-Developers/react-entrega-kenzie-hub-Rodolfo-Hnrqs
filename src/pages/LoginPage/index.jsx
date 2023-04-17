import { LoginForm } from "../../components/LoginForm"
import { Nav } from "../../components/Nav"
import { StyledContainer } from "../../styles/grid"
import { StyledLoginPage } from "./styled"

export const LoginPage = () => {
    return(
        <StyledContainer>
            <StyledLoginPage>
                <Nav/>
                <LoginForm />
            </StyledLoginPage>
        </StyledContainer>
    )
}