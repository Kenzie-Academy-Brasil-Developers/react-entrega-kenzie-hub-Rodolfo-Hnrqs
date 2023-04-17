import { Header } from "../../components/Header"
import { Nav } from "../../components/Nav"
import { TechList } from "../../components/TechList"
import { StyledContainer } from "../../styles/grid"
import { StyledUserPage } from "./styled"

export const UserPage = () => {

    return (
        <>
            <StyledContainer>
                <StyledUserPage>
                    <Nav button="Sair" />
                    <Header />
                    <TechList />
                </StyledUserPage>
            </StyledContainer>
        </>
    )
}