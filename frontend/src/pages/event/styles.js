import styled from "styled-components";

export const Container = styled.div`

    background-image: url('/fundo-evento.png'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
    backdrop-filter: brightness(10%);
    z-index: 2;
    padding: 3rem 5rem;

    .selected {
        background-color: #eb1e1e;
    }

    .presence {
        background-color: #01b013;
    }

`;

export const Header = styled.div`

    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0 0 2rem;

    @media screen and (max-width: 800px) {
        gap: 1rem;
    }

`;

export const ImgBack = styled.img`

    width: 2rem;
    cursor: pointer;  
    
    @media screen and (max-width: 800px) {
        width: 1rem;
        cursor: pointer;
    }

`;

export const ImgLogo = styled.img`

    width: 3.5rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 2.5rem;
    }

`;

export const Main = styled.div`

    margin-top: 1rem;

`;

export const Date = styled.p`

    width: 40rem;
    background-color: #ff9900;
    border-radius: 1.5rem;
    color: white;
    padding: .5rem 1rem;
    font-size: 1.3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media screen and (max-width: 800px) {
        width: 20rem;
        font-size: 1.2rem;
    }

`;

export const TitleEvent = styled.h2`

    margin-top: 2rem;
    text-transform: uppercase;
    font-size: 2.5rem;  
    
    @media screen and (max-width: 800px) {
        font-size: 1.8rem;
    }

`;

export const Location = styled.div`

    display: flex;
    align-items: center;
    gap: .5rem;

    @media screen and (max-width: 800px) {
        gap: .3rem;
    }

`;

export const ImgLocation = styled.img`

    width: 1.2rem;

    @media screen and (max-width: 800px) {
        width: 1rem;
    }

`;

export const TextLocation = styled.p`

    margin-top: 0;
    text-transform: uppercase;
    color: #595959;
    font-size: .9rem;

    @media screen and (max-width: 800px) {   
        font-size: .8rem;
    }

`;

export const Text = styled.p`

    margin-top: 1rem;
    color: white;
    width: 30rem;
    text-align: justify;

    @media screen and (max-width: 800px) {   
        margin-top: .8rem;
        width: 16rem;
        font-size: .9rem;
    }

`;

export const SpanPrice = styled.span`

    color: #595959;
    font-size: 1.2rem;
    font-weight: bold;

    @media screen and (max-width: 800px) {    
        font-size: 1.1rem;
    }

`;

export const Footer = styled.footer`

    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Buttons = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const ButtonFavorite = styled.button`

    background-color: transparent;
    border: .05rem solid black;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    text-align: center;
    padding: .5rem 1.5rem;
    cursor: pointer;
    transition: all .3s;   
    
    @media screen and (max-width: 800px) {    
        padding: .3rem 1rem;
    }

`;

export const ImgButton = styled.img`

    width: 1.2rem;

    @media screen and (max-width: 800px) {    
        width: 1rem;
    }

`;

export const ButtonCheck = styled.div`

    display: flex;
    align-items: center;
    gap: .5rem;
    border: .05rem solid black;
    padding: .5rem 1rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .3s;

    @media screen and (max-width: 800px) {    
        padding: .3rem 1rem;
        gap: .3rem;
        padding: .3rem 1rem;
        font-size: .9rem;
    }

`;

export const ImgButtonCheck = styled.img`

    width: 1rem;

`;

export const TextButtonCheck = styled.p`
`;

export const Networks = styled.div`

    display: flex; 
    align-items: center;
    gap: .5rem;

`;

export const ImgNetworks = styled.img`

    width: 2rem;
    cursor: pointer;

`;