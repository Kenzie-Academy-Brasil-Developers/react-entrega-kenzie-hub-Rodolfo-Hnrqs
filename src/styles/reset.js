import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    ul, ol{
        list-style: none;
    }
    button{
        cursor: pointer;
    }
`