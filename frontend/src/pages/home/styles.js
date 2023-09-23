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

    .Div-Login {
        position: absolute;
        top: 0;
        right: 0;
        width: 30rem;
        height: 100vh;
        background-color: white;
        padding: 2rem 4rem;
    }

    .Menu-Login, .Menu-Register {
        text-align: right;
    }

    .Menu-Login img, .Menu-Register img {
        width: 1.6rem;
        cursor: pointer;
    }

    .Login {
        margin-top: 5rem;
        text-align: center;
    }

    .Login h2, .Register h2 {
        text-transform: uppercase;
        color: #ff9900;
        font-weight: 700;
        font-size: 2.8rem;
    }

    .Login p,  {
        font-size: 1.3rem;
        font-weight: 400;
    }

    .Login-Inputs {
        margin-top: 3rem;
    }

    .Login-Inputs p {
        text-align: left;
        margin-left: 3.5rem;
        margin-bottom: .7rem;
    }

    #password {
        margin-top: 1.5rem;
    }

    .Login-Inputs input, .Register-Inputs input {
        font-family: "Raleway";
        padding: .5rem .8rem;
        width: 15rem;
        border-radius: .5rem;
        border: .05rem solid black;
    }

    .Login-Inputs .Register-Text, .Register .Login-Text {
        margin-top: .5rem;
        margin-left: 4.4rem;
        font-size: .8rem;
    }

    .Login-Inputs span, .Register span {
        font-weight: 700;
        cursor: pointer;
    }

    .Login-Inputs button, .Register-Buttons button {
        margin-top: .5rem;
        width: 15rem;
        border-radius: .5rem;
        border: .05rem solid black;
        padding: .5rem;
        background-color: #ff9900;
        font-family: "Raleway";
        font-weight: 700;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .Networks-Login {
        margin-top: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Networks-Login img, .Networks-Register img {
        width: 2.5rem;
        cursor: pointer;
    }

    .Networks-Login .insta, .Networks-Register .insta {
        width: 2.7rem;
    }

    .Div-Register {
        position: absolute;
        top: 0;
        right: 0;
        width: 45rem;
        height: 100vh;
        background-color: white;
        padding: 2rem 4rem;
    }

    .Register {
        margin-top: 5rem;
    }

    .Register p {
        font-size: 1.2rem;
        width: 23rem;
    }

    .Register-Inputs {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .Register-Inputs p {
        width: 15rem;
        margin-bottom: .7rem;
    }

    .Register .Login-Text {
        margin-left: 0;
    }

    .Register-Buttons {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .Networks-Register {
        margin-top: 7.5rem;
    }

`;