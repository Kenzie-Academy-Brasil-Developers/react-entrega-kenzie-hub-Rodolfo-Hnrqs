import styled from "styled-components";

export const StyledCreateTech = styled.div`
    .modalBoxContainer{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;

        z-index: 2;
    }  

    .titleDiv{
        background-color: var(--grey-2);
        width: 100%;
        border-radius: 4px;
        padding: 14px 20px;
    }

    h3{
        font-weight: 700;
        font-size: 0.875rem;
        color: var(--grey-0);
    }
    
    .closeButton{
        position: absolute;
        top: 8px;
        right: 12px;
        background-color: var(--grey-2);
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--grey-0);
    }

    .controlsDiv{
        padding: 14px 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .modalDiv{
        width: 95%;
        height: auto;
        background-color: var(--grey-3);
        border-radius: 4px;
        position: relative;
    }

    .registerTech {
        width: 100%;
        height: auto;
        background-color: var(--color-primary);
        border-radius: 4px;
        border: none;
        padding: 12px 0;
        font-weight: 500;
        font-size: 1rem;
        color: #FFFFFF;
    }

    .registerTech:hover {
        background-color: var(--color-primary-focus);
    }

    @media(min-width: 800px){
        .modalDiv{
            max-width: 380px;
        }
    }
`