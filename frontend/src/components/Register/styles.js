import styled from "styled-components";

export const Container = styled.div`

`;

export const DivRegister = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    width: 45rem;
    height: 100vh;
    background-color: white;
    padding: 2rem 4rem;

    @media screen and (max-width: 800px) {
    
        padding: 1rem;
        width: 100%;
    
    }

`;

export const MenuRegister = styled.div`

    text-align: right;

    @media screen and (max-width: 800px) {
    
        width: 100%;

    }

`;

export const ImgClose = styled.img`

    width: 1.6rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {
       
        width: 1.2rem;
        cursor: pointer;

    }

`;

export const Register = styled.div`

    margin-top: 5rem;

`;

export const TitleRegister = styled.h2`

    text-transform: uppercase;
    color: #ff9900;
    font-weight: 700;
    font-size: 2.8rem;

    @media screen and (max-width: 800px) {
    
        font-size: 2rem;
    
    }
`;

export const SubtitleRegister = styled.p`

    font-size: 1.2rem;
    width: 23rem;

    @media screen and (max-width: 800px) {
        
        font-size: 1rem;

    }

`;

export const RegisterInputs = styled.div`

    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 800px) {
    
        gap: 1rem;

    }


`;

export const Name = styled.div`

`;

export const TextInput = styled.p`

    width: 15rem;
    margin-bottom: .7rem;

    @media screen and (max-width: 800px) {
    
        font-size: .6rem;
        width: 12rem;
    
    }

`;

export const Email = styled.div`

`;

export const Password = styled.div`

`;

export const Input = styled.input.attrs({ type: 'text' })`

    font-family: "Raleway";
    padding: .5rem .8rem;
    width: 15rem;
    border-radius: .5rem;
    border: .05rem solid black;


    @media screen and (max-width: 800px) {

        padding: .3rem .5rem;
        width: 12rem;
    
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
        width: 12rem;

    }

`;

export const LoginText = styled.p`

    margin-top: .5rem;
    font-size: .8rem;

    @media screen and (max-width: 800px) {

        font-size: .6rem;

    }

`;

export const SpanLoginText = styled.p`

    font-weight: 700;
    cursor: pointer;

`;

export const RegisterButtons = styled.div`

    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 800px) {

        gap: 1rem;

    }

`;

export const BtnDivRegister = styled.button`

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
    
        font-size: 1rem;
        padding: .3rem;
        width: 12rem;
    
    }


`;

export const NetworksRegister = styled.div`

    margin-top: 7.5rem;
    display: flex;
    align-items: center;
    gap: .5rem;

`;

export const ImgNetworks = styled.img`

    width: 2.5rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {

        width: 1.8rem;

    }

`;