import styled from "styled-components";

export const StyledTechTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 11px;
    margin-bottom: 20px;

    h3{
        color: var(--grey-0);
        font-weight: 600;
        font-size: 1rem;
    }

    button{
        background-color: var(--grey-3);
        border: none;
        border-radius: 4px;
        height: 32px;
        width: 32px;
        text-align: center;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 1.125rem;
    }

    button:hover{
        background-color: var(--grey-2);
    }
`

export const StyledTechList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 4px;
    padding: 22px;
    background-color: var(--grey-3);

    .emptyTechs{
        color: var(--grey-0);
        font-weight: 700;
        font-size: 0.875rem;
    }
`