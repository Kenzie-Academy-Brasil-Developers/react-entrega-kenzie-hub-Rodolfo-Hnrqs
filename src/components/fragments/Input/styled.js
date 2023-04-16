import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    label{
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--grey-0);
    }

    input{
        padding: 12px;
        border-radius: 4px;
        border: var(--grey-2) solid 2px;
        outline: none;
        background-color: var(--grey-2);
        color: var(--grey-0);
        font-weight: 400;
        font-size: 1rem;
    }

    input::placeholder{
        color: var(--grey-1);
    }

    input:focus{
        border: var(--grey-0) solid 2px;
    }

`