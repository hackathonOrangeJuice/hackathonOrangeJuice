import { React, useState, useEffect } from 'react'
import { Container } from './styles'
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';

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
          const RegisterText = document.querySelector(".register-text");

          BtnLogin.onclick = function() {
            if(ScreenLogin.classList.contains("hide")) {
              setTimeout(function() {
              }, 500);
              ScreenLogin.classList.remove("hide");
              ScreenLogin.style.animation = "popupEnter linear .5s";
            }
          }

          BtnRegister.onclick = function() {
            if(ScreenRegister.classList.contains("hide")) {
              setTimeout(function() {
              }, 500);
              ScreenRegister.classList.remove("hide");
              ScreenRegister.style.animation = "popupEnter linear .5s";
            }
          }

          RegisterText.onclick = function() {
            ScreenLogin.classList.add("hide")
            if(ScreenRegister.classList.contains("hide")) {
              setTimeout(function() {
              }, 500);
              ScreenRegister.classList.remove("hide");
              ScreenRegister.style.animation = "popupEnter linear .5s";
            }
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
      <header>
        <div className='Logo-Menu'>
          <img src='./menu.png'></img>
          <img src='./logo.png' id='logo'></img>
        </div>
        <div className='Enter'>
          <p className='btn-register'>Inscreva-se</p>
          <button className='btn-login'>Login</button>
        </div>
      </header>
      <main>
        <h1>Orange Juice</h1>
        <h1><span>Hackathon</span></h1>
        <p>Esse é um projeto desenvolvido em react e node.js para organizar eventos 
          em calendário e marcar presença nos principais e diversos eventos do ano!</p>
        <button>Comece aqui <img src='./seta.png'></img></button>
      </main>
      <Login></Login>
      <Register></Register>
    </Container>
  )
}

