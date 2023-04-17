import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { StyledButtonNav, StyledNav } from "./styled"
import { toast } from "react-toastify"
import { useContext } from "react"
import { UserContext } from "../../providers/userContext"

export const Nav = ({ button }) => {
    const { userLogout, user } = useContext(UserContext)

    return (
        <>
            {button ?
                (<StyledButtonNav>
                    <img src={Logo} alt="Logo KenzieHub" />
                    {user ?
                        (<button onClick={() => {
                            userLogout()
                            toast.success("Fez logout com sucesso!")
                        }}>{button}</button>) :
                        (<Link to="/">{button}</Link>)}
                </StyledButtonNav>) :
                (<StyledNav>
                    <img src={Logo} alt="Logo KenzieHub" />
                </StyledNav>)}
        </>
    )
}