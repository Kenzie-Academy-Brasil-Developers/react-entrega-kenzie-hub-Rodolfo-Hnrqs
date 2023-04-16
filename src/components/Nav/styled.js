import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    margin-bottom: 20px;
    
    @media(min-width: 800px){
        margin-bottom: 36px;
    }
`

export const StyledButtonNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 80px;
    margin-bottom: 20px;

    @media(min-width: 800px){
        margin-bottom: 36px;
    }

    a{
        text-align: center;
        text-decoration: none;
        background-color: var(--grey-3);
        border-radius: 4px;
        padding: 10px 20px;
        font-weight: 600;
        font-size: 0.75rem;
        color: var(--grey-0);
    }

    a:hover{
        background-color: var(--grey-2);
    }

    button{
        text-align: center;
        text-decoration: none;
        background-color: var(--grey-3);
        border-radius: 4px;
        border: none;
        padding: 10px 20px;
        font-weight: 600;
        font-size: 0.75rem;
        color: var(--grey-0);
    }

    button:hover{
        background-color: var(--grey-2);
    }
`