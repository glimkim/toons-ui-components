import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0; margin: 0;
        text-decoration: none;
        appearance: none;
        list-style: none;
        box-sizing: border-box;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
