import { React, useEffect, useState } from 'react';
import { Container, Header, ImgBack, ImgLogo, Main, Date, TitleEvent, Location, ImgLocation, TextLocation, Text, SpanPrice, Footer, Buttons, ButtonFavorite,
ImgButton, ButtonCheck, ImgButtonCheck, TextButtonCheck, Networks, ImgNetworks } from './styles';

import { useNavigate , useParams} from 'react-router-dom';
import { api } from '../../axios';

export function Event() {

    const navigate = useNavigate()
    const params = useParams();

    
  const [mounted,setMounted] = useState(false)
  const [infoEvent, setInfoEvent] = useState();

  
  function handleToGoEvents() {
      navigate("/")
    }

    async function fetchInfoExercises(){
        const response = await api.get(`/events/bydate/${params.date}`);

        setInfoEvent(response.data)
    }
    
    useEffect(() => {
      
      if(mounted){
        const BtnFavorite = document.querySelector(".btn-favorite");
        const BtnCheck = document.querySelector(".btn-check");
        fetchInfoExercises()

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
                <ImgBack
                 src='/seta-voltar.png' alt='seta branca para esquerda,indicando "voltar"'
                 onClick={handleToGoEvents}></ImgBack>
                <ImgLogo src='/logo.png' alt='logo da orange juice'></ImgLogo>
            </Header>
            <Main>
                <Date>{params.date ? params.date : ""}</Date>
                <TitleEvent>{infoEvent ? infoEvent.name : ""}</TitleEvent>
                <Location>
                    <ImgLocation src='/globo.png' alt='imagem de globo para representar a modalidade do evento'></ImgLocation>
                    <TextLocation>{infoEvent ? infoEvent.modality : ""}</TextLocation>
                </Location>
                <Text>{infoEvent ? infoEvent.description : ""}</Text>
                <Text><SpanPrice>R$ 0,00</SpanPrice></Text>
            </Main>
            <Footer>
                <Buttons>
                    <ButtonFavorite className='btn-favorite'><ImgButton src='/coracao.png' alt='dar like'></ImgButton></ButtonFavorite>
                    <ButtonCheck className='btn-check'>
                        <ImgButtonCheck src='/laranja.png' alt='ícone de uma laranja suculenta'></ImgButtonCheck>
                        <TextButtonCheck>Marcar presença</TextButtonCheck>
                    </ButtonCheck>    
                </Buttons>
                <Networks>
                    <ImgNetworks src='/linkedin.svg' alt='logo do linkedin'></ImgNetworks>
                    <ImgNetworks src='/instagram.svg' alt='logo do instagram'></ImgNetworks>
                </Networks>
            </Footer>


        </Container>
    )

}