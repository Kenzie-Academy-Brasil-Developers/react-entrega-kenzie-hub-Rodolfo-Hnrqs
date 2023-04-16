import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Nav } from "../../components/Nav"
import { StyledUserPage } from "./styled"

export const UserPage = ({ user, setUser }) => {

    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        localStorage.setItem("@USER", JSON.stringify(user));
    }, [user]);

    return (
        <>
            <StyledUserPage>
                <Nav button="Sair" user={user} userLogout={userLogout}/>
                <Header user={user} />
                <div className="warningDiv">
                    <h2>Que pena! Estamos em desenvolvimento :( </h2>
                    <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
                </div>
            </StyledUserPage>
        </>
    )
}