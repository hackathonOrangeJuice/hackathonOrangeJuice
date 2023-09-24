import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .root {
        font-size: 62.5%;
    }

    body {
        font-family: "Raleway";
        //background-image: url('fundo.jpg'); 
        //background-size: cover; 
        background-position: center; 
        background-repeat: no-repeat;
        position: relative;
        height: 100vh;
        backdrop-filter: brightness(50%);
        overflow: hidden;
    }

`;