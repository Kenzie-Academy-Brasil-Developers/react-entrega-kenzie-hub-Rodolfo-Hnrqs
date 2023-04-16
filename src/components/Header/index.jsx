import { StyledHeader } from "./styled"

export const Header = ({ user }) => {
    return (
        <StyledHeader>
            <h1>Olá, {user.name}</h1>
            <span>{user.course_module}</span>
        </StyledHeader>
    )
}