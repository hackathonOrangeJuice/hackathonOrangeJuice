import styled from "styled-components";

export const Container = styled.div`

    @media screen and (max-width: 800px) {

        .Div-Login {
        }

        .Login h2 {
        }

        .Login p {
        }

        .Login-Inputs p {
           
        }

        .Login-Inputs input {
        }

        .Login-Inputs .Register-Text {
        }

        .Login-Inputs button {
        }

        .Menu-Login img {
        }


    }

`;

export const DivLogin = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    width: 30rem;
    height: 100vh;
    background-color: white;
    padding: 2rem 4rem;

    @media screen and (max-width: 800px) {
        
        width: 100%;

    }

`;

export const MenuLogin = styled.div`

    text-align: right;

`;

export const ImgClose = styled.img`

    width: 1.6rem;
    cursor: pointer;

`;

export const Login = styled.div`

    margin-top: 5rem;
    text-align: center;

`;

export const TitleLogin = styled.h2`

    text-transform: uppercase;
    color: #ff9900;
    font-weight: 700;
    font-size: 2.8rem;

    @media screen and (max-width: 800px) {
        
        font-size: 2rem;
        
    }

`;

export const SubtitleLogin = styled.p`

    font-size: 1.3rem;
    font-weight: 400;

    @media screen and (max-width: 800px) {
        
        font-size: 1rem;
        
    }


`;

export const LoginInputs = styled.div`

    margin-top: 3rem;

`;

export const TextEmail = styled.p`

    text-align: left;
    margin-left: 3.5rem;
    margin-bottom: .7rem;

    @media screen and (max-width: 800px) {
        
        font-size: 1rem;
        margin-left: 4.3rem;

    }

`;

export const TextPassword = styled.p`

    text-align: left;
    margin-left: 3.5rem;
    margin-top: 1.5rem;

    @media screen and (max-width: 800px) {
        
        font-size: 1rem;
        margin-left: 4.3rem;
        
    }

`

export const Input = styled.input.attrs({ type: 'text' })`

    font-family: "Raleway";
    padding: .5rem .8rem;
    width: 15rem;
    border-radius: .5rem;
    border: .05rem solid black;

    @media screen and (max-width: 800px) {

        padding: .3rem .5rem;

    }

`;

export const PasswordInput = styled.input.attrs({ type: 'password' })`

    font-family: "Raleway";
    padding: .5rem .8rem;
    width: 15rem;
    border-radius: .5rem;
    border: .05rem solid black;

    @media screen and (max-width: 800px) {

        padding: .3rem .5rem;

    }

`;

export const RegisterText = styled.p`

    margin-top: .5rem;
    font-size: .8rem;

    @media screen and (max-width: 800px) {
        
        font-size: .6rem;

    }

`;

export const SpanRegister = styled.span`

    font-weight: 700;
    cursor: pointer;

`;

export const ButtonEnter = styled.button`

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

    @media screen and (max-width: 800px) {
        
        padding: .3rem;

    }

`;

export const NetworksLogin = styled.div`

    margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

`;

export const ImgNetworks = styled.img`

    width: 2.5rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {

        width: 1.2rem;
        cursor: pointer;

    }

`;