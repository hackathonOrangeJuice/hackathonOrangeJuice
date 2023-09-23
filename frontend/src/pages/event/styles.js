import styled from "styled-components";

export const Container = styled.div`

    background-image: url('fundo-evento.png'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
    backdrop-filter: brightness(10%);
    z-index: 2;
    padding: 3rem 5rem;

    header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 0 0 2rem;
    }

    header .seta-voltar {
        width: 2rem;
        cursor: pointer;
    }

    header img {
        width: 3.5rem;
    }

    main {
        margin-top: 1rem;
    }

    main .Date {
        width: 40rem;
        background-color: #ff9900;
        border-radius: 1.5rem;
        color: white;
        padding: .5rem 1rem;
        font-size: 1.3rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    main h2 {
        margin-top: 2rem;
        text-transform: uppercase;
        font-size: 2.5rem;
    }

    .Location {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .Location img {
        width: 1.2rem;
    }

    .Location p {
        margin-top: 0;
        text-transform: uppercase;
        color: #595959;
        font-size: .9rem;
    }

    main p {
        margin-top: 1rem;
        color: white;
        width: 30rem;
        text-align: justify;
    }

    main p span {
        color: #595959;
        font-size: 1.2rem;
        font-weight: bold;
    }

    footer {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .Buttons button {
        background-color: transparent;
        border: .05rem solid black;
        border-radius: .5rem;
        display: flex;
        align-items: center;
        text-align: center;
        padding: .5rem 1.5rem;
        cursor: pointer;
        transition: all .3s;
    }

    .Buttons button:hover {
        background-color: #CB1E1E;
    }

    .Buttons button img {
        width: 1.2rem;
    }

    .Button-Check {
        display: flex;
        align-items: center;
        gap: .5rem;
        border: .05rem solid black;
        padding: .5rem 1rem;
        border-radius: .5rem;
    }    

    .Networks {
        display: flex; 
        align-items: center;
    }

    .Networks img {
        width: 2rem;
    }

    .Networks .insta {
        width: 2.2rem;
    }

`;