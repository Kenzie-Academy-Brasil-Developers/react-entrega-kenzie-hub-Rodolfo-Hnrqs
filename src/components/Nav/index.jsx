import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { StyledButtonNav, StyledNav } from "./styled"
import { toast } from "react-toastify"

export const Nav = ({ userLogout, button }) => {
    return (
        <>
            {button ?
                (<StyledButtonNav>
                    <img src={Logo} alt="Logo KenzieHub" />
                    {userLogout ?
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