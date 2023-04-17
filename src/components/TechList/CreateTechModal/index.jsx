import { Input } from "../../fragments/Input"
import { Select } from "../../fragments/Select"
import { StyledCreateTech } from "./styled"

export const CreateTechModal = ({ setModalOpen }) => {

    return (
        <StyledCreateTech>
            <div className="modalBoxContainer">
                <div className="modalDiv">
                    <div className="titleDiv">
                        <h3>Cadastrar Tecnologia</h3>
                    </div>
                    <div className="controlsDiv">
                        <Input label="Nome" placeholder="Nome da Tecnologia" />
                        <Select label="Selecionar Status">
                            <option value="">Selecionar Nível</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button className="registerTech">Cadastrar Tecnologia</button>
                    </div>
                    <button className="closeButton" onClick={() => setModalOpen(false)}>X</button>
                </div>
            </div>
        </StyledCreateTech>
    )
}