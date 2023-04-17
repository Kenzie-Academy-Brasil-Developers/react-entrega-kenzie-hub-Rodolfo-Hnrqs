import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    border-top: 2px solid var(--grey-3);
    border-bottom: 2px solid var(--grey-3);
    align-self: center;
    padding: 45px 0;
    
    h1{
        color: var(--grey-0);
        font-weight: 700;
        font-size: 1.125rem;
    }

    span{
        color: var(--grey-1);
        font-weight: 600;
        font-size: 0.75rem;
    }

    @media(min-width: 800px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0;
    }
`