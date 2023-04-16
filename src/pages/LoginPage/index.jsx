import { LoginForm } from "../../components/LoginForm"
import { Nav } from "../../components/Nav"
import { StyledLoginPage } from "./styled"

export const LoginPage = ({setUser, user}) => {
    return(
        <StyledLoginPage>
            <Nav/>
            <LoginForm user={user} setUser={setUser}/>
        </StyledLoginPage>
    )
}