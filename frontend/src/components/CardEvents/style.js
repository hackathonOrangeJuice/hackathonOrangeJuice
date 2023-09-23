import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 10.6rem ;
    display: flex;
    flex-direction: column;
    gap: 5%;

    background-color:  transparent ;
    align-items: center;


`

export const ContainerDate = styled.div`
    width: 80%;
    height: 20% ;

    background-color: #FF9900;

    display: flex;
    align-items: center;
    padding: 7px;

    border-radius: 10px;
`

export const ContainerEvents = styled.div`

    width: 80%;
    height: 75%;

    background-color: white;

    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 7px;
    gap: 8px;

    border-radius: 10px;


`

export const Date = styled.h1`

font-size: 1.4rem;
color: white;
`
export const Title = styled.h1`
font-size: 1.2rem;
`
export const Description = styled.p`
font-size: 1rem;
font-weight: 500;
`

export const ContainerButton = styled.div`

width: 50%;
display: flex;
gap: 10px;
`
export const ButtonDetails = styled.button`
font-weight: bold;
background-color: #FF9900;
color: white;
height: 2rem;
width: 100%;

border-radius: 10px;
border: none;

cursor: pointer;



`
export const ButtonPresence = styled.button`
font-weight: bold;
background-color: #218408;
color: white;
height: 2rem;
width: 100%;

border-radius: 10px;
border: none;

cursor: pointer;
`