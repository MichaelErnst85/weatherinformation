import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --black: #000;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --fontExtraSmall: 0.5rem;
    }
    * {
        box-sizing: border-box;
        font-family: 'Miriam Libre', sans-serif;
        
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--medGrey);

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

    div {
        align-content: center;
        font-size: 2rem;
        color: var(--white);
        background-color: transparent;
    }
`;