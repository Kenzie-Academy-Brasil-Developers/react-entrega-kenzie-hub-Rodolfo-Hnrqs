import { useContext } from "react"
import { UserContext } from "../../providers/userContext"
import { StyledHeader } from "./styled"

export const Header = () => {
    const { user } = useContext(UserContext)
    return (
        <StyledHeader>
                <h1>Olá, {user.name}</h1>
                <span>{user.course_module}</span>
        </StyledHeader>
    )
}