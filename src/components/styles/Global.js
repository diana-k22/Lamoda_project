import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
     
    body {
        font-family: 'CoFo Sans Lamoda', sans-serif;
        margin: 0 auto;
        padding: 0;
        /* max-width: 1200px; */
        background: ${({ theme }) => theme.colors.body}
    }
`

export default GlobalStyles;