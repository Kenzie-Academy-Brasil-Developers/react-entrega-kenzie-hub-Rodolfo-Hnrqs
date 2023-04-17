import styled from "styled-components"

export const StyledTechCard = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-4);
    border-radius: 4px;
    padding: 12px 20px;
    cursor: pointer;

    span{
        color: var(--grey-0);
        font-weight: 700;
        font-size: 0.875rem;
    }

    p{
        color: var(--grey-1);
        font-weight: 400;
        font-size: 0.75rem;
    }

    :hover{
        background-color: var(--grey-2);

        p{
            color: var(--grey-0);
        }
    }
`