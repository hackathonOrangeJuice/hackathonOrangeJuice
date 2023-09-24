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

`;

export const Header = styled.div`

    padding: 2rem 11rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;    

    @media screen and (max-width: 800px) {

        padding: 1rem;

    }

`;

export const MenuLogo = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;


`;

export const ImageMenu = styled.img`

    width: 2rem;
    cursor: pointer;

`;

export const ImageLogo = styled.img`

    width: 3rem;
    cursor: pointer;

`

export const Enter = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;

`;

export const BtnRegister = styled.p`

    color: white;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;


    @media screen and (max-width: 800px) {
        font-size: .8rem;
    }


`;

export const BtnLogin = styled.button`

    font-family: "Raleway";
    color: white;
    font-weight: 700;
    font-size: 1rem;
    background-color: #ff9900;
    border: none;
    padding: .4rem 1.5rem;
    border-radius: 2.5rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        font-size: .8rem;
    }

`;

export const Main = styled.div`

    padding: 10rem 11rem;

    @media screen and (max-width: 800px) {
        
        margin-top: 5rem;
        padding: 1rem;
        text-align: center;

    }

`;

export const TitlePage = styled.h1`

    text-transform: uppercase;
    color: white;
    letter-spacing: .1rem;
    font-size: 3.8rem;
    text-shadow: 0 0 1rem gray;

    @media screen and (max-width: 800px) {

        font-size: 2.5rem;

    }

`;

export const Span = styled.span`

    color: #ff9900;

`;

export const Text = styled.p`

    margin-top: 1.5rem;
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    width: 29rem;

    @media screen and (max-width: 800px) {

        margin: 1rem auto;
        font-size: 1rem;
        width: 25rem;
        text-shadow: 2px 2px black;

    }

`;

export const Button = styled.button`

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

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        border: .05rem solid black;

    }

`;

export const ImgButton = styled.img`



`;