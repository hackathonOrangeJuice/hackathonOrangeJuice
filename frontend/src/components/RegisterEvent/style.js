import styled from "styled-components";

import { FaArrowDown } from 'react-icons/fa'

export const Container = styled.div`


position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;

width: 40vw;
height: 100vh;
background-color: white;
display: flex;
flex-direction: column;

padding: 2.2rem;

`
export const IconClose = styled.img`
width: 1rem;
cursor: pointer;
position: absolute;
right: 5%;

`
export const Title = styled.h1`
font-size:  2.7rem;
color: Orange;

`
export const Text = styled.p`
`
export const BoxInput = styled.div`

width: 100%;
display: flex;
gap: 2rem;


`
export const ContainerInput = styled.div`

width: 100%;
margin-top: 1rem;

`
export const Input = styled.input`
width: 100%;
height: 2rem;

border-radius: 10px;
border: 1px solid black;
margin-top: .5rem;
`
export const InputDescription = styled.input`

width: 100%;
height: 6rem;
border-radius: 10px;
border: 1px solid black;
margin-top: .5rem;

`
export const ContainerButton = styled.div`
width: 100%;
display: flex;
gap: 2rem;

margin-top: 2rem;

`
export const Button = styled.div`

width: 100%;
height: 2rem;
background-color: orange;
font-weight: bold;
font-size: 1.2rem;
color: white;
border: 1px solid black;
border-radius: 10px;


display: flex;
align-items: center;
justify-content: center;


cursor: pointer;
`

export const ContainerSocialNetworks = styled.div`

width: 100%;
display: flex;
margin-top: 2rem;
gap: 2rem;
`
export const LogoSocialNetworks = styled.img`

width: 3rem;
cursor: pointer;

`