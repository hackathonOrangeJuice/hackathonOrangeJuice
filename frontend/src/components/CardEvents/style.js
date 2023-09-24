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
    padding: 1rem 1rem;

    font-size: 20px;

    border-radius: 10px;

    @media screen and (max-width: 800px) {
        
        width: 90%;

        padding: .6rem;
        
    }
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

    @media screen and (max-width: 800px) {
        
        width: 90%;
        
    }


`

export const Date = styled.h1`

font-size: 1.4rem;
font-weight: 400;
color: white;
@media screen and (max-width: 800px) {
    font-size: 1rem;
}
`
export const Title = styled.h1`
font-size: 1.2rem;

@media screen and (max-width: 800px) {
    font-size: 1rem;
}
`
export const Description = styled.p`
font-size: 1rem;
font-weight: 500;

@media screen and (max-width: 800px) {
    font-size: .8rem;
}
`

export const ContainerButton = styled.div`

width: 50%;
display: flex;
gap: 10px;

@media screen and (max-width: 800px) {
    width: 80%;
}
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

@media screen and (max-width: 800px) {
    font-size: .6rem;
}

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

@media screen and (max-width: 800px) {
    font-size: .6rem;
}

`