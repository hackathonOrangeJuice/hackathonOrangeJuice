import { React, useEffect, useState } from 'react';
import { Container, Header, ImgBack, ImgLogo, Main, Date, TitleEvent, Location, ImgLocation, TextLocation, Text, SpanPrice, Footer, Buttons, ButtonFavorite,
ImgButton, ButtonCheck, ImgButtonCheck, TextButtonCheck, Networks, ImgNetworks } from './styles';

export function Event() {

    
  const [mounted,setMounted] = useState(false)
     
  useEffect(() => {
      
      if(mounted){
        const BtnFavorite = document.querySelector(".btn-favorite");
        const BtnCheck = document.querySelector(".btn-check");

        BtnFavorite.onclick = function() {
            BtnFavorite.classList.toggle("selected");
        }

        BtnCheck.onclick = function() {
            BtnCheck.classList.toggle("presence");
        }


      }
      else{
          setMounted(true);
      }

},[mounted])

    return (
        <Container>
            <Header>
                <ImgBack src='seta-voltar.png'></ImgBack>
                <ImgLogo src='./logo.png'></ImgLogo>
            </Header>
            <Main>
                <Date>Dia 08 de agosto</Date>
                <TitleEvent>Evento 1</TitleEvent>
                <Location>
                    <ImgLocation src='./globo.png'></ImgLocation>
                    <TextLocation>Presencial</TextLocation>
                </Location>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text><SpanPrice>R$ 0,00</SpanPrice></Text>
            </Main>
            <Footer>
                <Buttons>
                    <ButtonFavorite className='btn-favorite'><ImgButton src='coracao.png'></ImgButton></ButtonFavorite>
                    <ButtonCheck className='btn-check'>
                        <ImgButtonCheck src='./laranja.png'></ImgButtonCheck>
                        <TextButtonCheck>Marcar presença</TextButtonCheck>
                    </ButtonCheck>    
                </Buttons>
                <Networks>
                    <ImgNetworks src='linkedin.svg'></ImgNetworks>
                    <ImgNetworks src='instagram.svg'></ImgNetworks>
                </Networks>
            </Footer>


        </Container>
    )

}