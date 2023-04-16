import styled from "styled-components";

export const StyledLoginForm = styled.form`
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    padding: 42px 22px;
    gap: 22px;

    background-color: var(--grey-3);

    h3{
        color: var(--grey-0);
        text-align: center;
        font-weight: 700;
        font-size: 1.125rem;
    }

    p{
        padding: 8px 0;
        color: var(--grey-1);
        font-weight: 400;
        font-size: 0.75rem;
    }

    button{
        background-color: var(--color-primary);
        border-radius: 4px;
        border: none;
        padding: 12px 0;
        font-weight: 500;
        font-size: 1rem;
        color: #FFFFFF;
    }

    button:hover{
        background-color: var(--color-primary-focus);
    }

    button:disabled{
        background-color: var(--color-primary-negative); 
    }

    span{
        color: var(--grey-1);
        font-weight: 600;
        font-size: 0.75rem;
        text-align: center;
    }

    a{
        text-align: center;
        text-decoration: none;
        background-color: var(--grey-1);
        border-radius: 4px;
        padding: 12px 0;
        font-weight: 500;
        font-size: 1rem;
        color: #FFFFFF;
    }

    a:hover{
        background-color: var(--grey-2);
    }

`