import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    
    @media (min-width: 800px){
        padding: 16px 115px;
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
    }
`