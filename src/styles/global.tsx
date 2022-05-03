import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0; margin: 0;
        text-decoration: none;
        appearance: none;
        list-style: none;
        box-sizing: border-box;
        border: none;
    }
    button {
        cursor: pointer;
    }

    @media screen and (min-width: 1440px){
        html, body {
            font-size: 18px;
        }
    }
    @media screen and (max-width: 1439px){
        html, body {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 1080px){
        html, body {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 767px){
        html, body {
            font-size: 12px;
        }
    }
`;

export default GlobalStyles;
