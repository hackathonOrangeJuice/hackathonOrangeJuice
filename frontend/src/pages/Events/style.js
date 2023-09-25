import styled from "styled-components";

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: #170600;

display: flex;

    .hide {
        display: none;
    }
`


export const BtnLogout = styled.button`

    padding: .3rem 2rem;
    border-radius: .5rem;
    background-color: #eb1e1e;
    border: none;
    font-family: "Raleway";
    font-weight: 700;
    cursor: pointer;

`;

export const ButtonAddEvent = styled.button`
    
    display: flex;
    align-items: center;
    gap: .3rem;
    font-family: "Raleway";
    font-weight: 700;
    padding: .5rem;
    text-align: left;
    color: black;
    border-radius: .5rem;
    border: none;
    cursor: pointer;

    .image-button {
        width: 1rem;
    }

`;

export const ContainerEvents = styled.div`

width: 80vw;
height: 100vh;

overflow: auto;


display: flex;
flex-direction: column;
align-items: center;

padding: 2rem 0 ;
gap: 1.5rem;


`