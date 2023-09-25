import styled from "styled-components";


export const Container = styled.div`

height: 100vh;
width: 20vw;
background-color: black;

display: flex;
flex-direction: column;
justify-content: space-between;


padding: 1rem 0 0;

border-right: 2px solid gray;
overflow: hidden;

@media screen and (max-width: 800px) {
    width: 35vw;
}

`

export const ContainerInfoMenu = styled.div`
display: flex;
flex-direction: column;

width: 20vw;
padding: 1rem;

`


export const TextFiler = styled.h1`
color: #ff9900;
font-size: 1.6rem;
font-weight: 500;
margin-bottom: 1rem;
text-transform: uppercase;
text-align: center;
letter-spacing: .2rem;

@media screen and (max-width: 800px) {
    width: 35vw;
    font-size: 1rem;
}
`
export const TextMain = styled.h1`
margin-top: 1rem;
color: white;
font-size: 1.2rem;
font-weight: 500;
margin-bottom: 1rem;

@media screen and (max-width: 800px) {
    font-size: 1rem;
}

`
export const Text = styled.p`

color: white;
font-size: 1rem;
font-weight: 300;

margin-bottom: .5rem;

cursor: pointer;

@media screen and (max-width: 800px) {
    font-size: .8rem;
}

`

export const TextTheme = styled.h1`

color: white;
font-size: 1.2rem;
font-weight: 500;

margin:  .5rem 0 1rem;

cursor: pointer;

@media screen and (max-width: 800px) {
    font-size: 1rem;
}

`

export const LogoImage = styled.img`

width: 35%;
margin: 0 auto 3rem;

@media screen and (max-width: 800px) {
    width: 70%;
}

`
