import { React, useState, useEffect } from 'react'
import { Container, Header, MenuLogo, ImageMenu, ImageLogo, Enter, BtnRegister, BtnLogin, Main, TitlePage, Span, Text, Button, ImgButton } from './styles'
import { ScreenLogin } from '../../components/Login';
import { ScreenRegister } from '../../components/Register';

export function Home() {

  const [mounted,setMounted] = useState(false)
     
    useEffect(() => {
        
        if(mounted){
          const BtnLogin = document.querySelector(".btn-login");
          const BtnRegister = document.querySelector(".btn-register");
          const ScreenLogin = document.querySelector(".Div-Login");
          const ScreenRegister = document.querySelector(".Div-Register");
          const BtnCloseLogin = document.querySelector(".close-login");
          const BtnCloseRegister = document.querySelector(".close-register");
          const BtnStart = document.querySelector(".btn-start");
          const BtnBack = document.querySelector(".btn-back");
          const RegisterText = document.querySelector(".register-text");
          const LoginText = document.querySelector(".login-text");


          //FUNCTIONS
          function accessLogin() {
            if(ScreenLogin.classList.contains("hide")) {
              setTimeout(function() {
              }, 500);
              ScreenLogin.classList.remove("hide");
              ScreenLogin.style.animation = "popupEnter linear .5s";
            }
          }

          function accessRegister() {
            if(ScreenRegister.classList.contains("hide")) {
              setTimeout(function() {
              }, 500);
              ScreenRegister.classList.remove("hide");
              ScreenRegister.style.animation = "popupEnter linear .5s";
            }
          }



          //EVENTS
          BtnStart.onclick = function() {
            accessLogin();
          }

          BtnLogin.onclick = function() {
            accessLogin();
          }

          BtnRegister.onclick = function() {
            accessRegister();
          }

          RegisterText.onclick = function() {
            ScreenLogin.classList.add("hide")
            accessRegister();
          }

          LoginText.onclick = function() {
            ScreenRegister.classList.add("hide");
            accessLogin();
          }

          BtnBack.onclick = function() {
            ScreenRegister.classList.add("hide");
          }

          BtnCloseLogin.onclick = function() {
            ScreenLogin.classList.add("hide");
          }

          BtnCloseRegister.onclick = function() {
            ScreenRegister.classList.add("hide");
          }

        }
        else{
            setMounted(true);
        }

  },[mounted])



  return (
    <Container>
      <Header>
        <MenuLogo>
          <ImageMenu src='./menu.png'></ImageMenu>
          <ImageLogo src='./logo.png'></ImageLogo>
        </MenuLogo>
        <Enter>
          <BtnRegister className='btn-register'>Inscreva-se</BtnRegister>
          <BtnLogin className='btn-login'>Login</BtnLogin>
        </Enter>
      </Header>
      <Main>
        <TitlePage>Orange Juice</TitlePage>
        <TitlePage><Span>Hackathon</Span></TitlePage>
        <Text>Esse é um projeto desenvolvido em react e node.js para organizar eventos 
          em calendário e marcar presença nos principais e diversos eventos do ano!</Text>
        <Button className='btn-start'>Comece aqui <ImgButton src='./seta.png'></ImgButton></Button>
      </Main>
      <ScreenLogin></ScreenLogin>
      <ScreenRegister></ScreenRegister>
    </Container>
  )
}

