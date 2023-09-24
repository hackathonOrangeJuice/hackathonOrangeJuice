import styled from "styled-components";

export const Container = styled.div`

    background-image: url('fundo.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
    backdrop-filter: brightness(50%);
    overflow: hidden;

    .hide {
        display: none;
    }

    header {
        padding: 2rem 11rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Logo-Menu {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .Logo-Menu img {
        width: 2rem;
        cursor: pointer;
    }

    #logo {
        width: 3rem;
    }

    .Enter {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .Enter p {
        color: white;
        font-weight: 700;
        cursor: pointer;
        font-size: 1rem;
    }

    .Enter button {
        font-family: "Raleway";
        color: white;
        font-weight: 700;
        font-size: 1rem;
        background-color: #ff9900;
        border: none;
        padding: .4rem 1.5rem;
        border-radius: 2.5rem;
        cursor: pointer;
    }

    main {
        padding: 10rem 11rem;
    }

    main h1 {
        text-transform: uppercase;
        color: white;
        letter-spacing: .1rem;
        font-size: 3.8rem;
        text-shadow: 0 0 1rem gray;
    }

    main span {
        color: #ff9900;
    }

    main p {
        margin-top: 1.5rem;
        font-size: 1.3rem;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        width: 29rem;
    }

    main button {
        display: flex;
        align-items: center;
        gap: .3rem;
        margin-top: 1rem;
        background-color: #ff9900;
        font-size: 1.1rem;
        font-family: "Raleway";
        font-weight: 700;
        color: white;
        padding: .6rem;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {

        header {
            padding: 1rem;
        }

        .Enter p {
            font-size: .8rem;
        }

        .Enter button {
            font-size: .8rem;
        }

        main {
            margin-top: 5rem;
            padding: 1rem;
            text-align: center;
        }

        main h1 {
            font-size: 2.5rem;
        }

        main p {
            margin: 1rem auto;
            font-size: 1rem;
            width: 25rem;
            text-shadow: 2px 2px black;
        }

        main button {
            margin: 0 auto;
            border: .05rem solid black;
        }

    }

`;