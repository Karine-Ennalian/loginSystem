import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #172426;
        font-family: 'Poppins', Helvetica, Arial, sans-serif;
        color: #d97e4a;
    }
`;
export default GlobalStyles;