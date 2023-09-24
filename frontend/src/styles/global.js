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
    }

    @keyframes popupEnter {
    0% {
        opacity: 1;
        transform: translateX(350px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
    }

    @keyframes downtopmobile {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 1;
        transform: translateY(-150px);
    }
}

`;