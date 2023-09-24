import { React } from 'react'
import { Container } from './styles'

export function Home() {

  return (
    <Container>
      <div class="background-container"></div>
      <header>
        <div className='Logo-Menu'>
          <img src='./menu.png'></img>
          <img src='./logo.png' id='logo'></img>
        </div>
        <div className='Enter'>
          <p>Inscreva-se</p>
          <button>Login</button>
        </div>
      </header>
      <main>
        <h1>Orange Juice</h1>
        <h1><span>Hackathon</span></h1>
        <p>Esse é um projeto desenvolvido em react e node.js para organizar eventos 
          em calendário e marcar presença nos principais e diversos eventos do ano!</p>
        <button>Comece aqui <img src='./seta.png'></img></button>
      </main>
      <div className='Div-Login'>
        <div className='Menu-Login'>
          <img src='x.png'></img>
        </div>
        <div className='Login'>
          <h2>Login</h2>
          <p>Seja bem vindo de volta!</p>
          <div className='Login-Inputs'>
            <p>E-mail</p>
            <input type='text'></input>
            <p id='password'>Senha</p>
            <input type='password'></input>
            <p className='Register-Text'>Não possui uma conta? <span>Cadastre-se</span></p>
            <button>Entrar</button>
          </div>
        </div>
        <div className='Networks-Login'>
          <img src='./linkedin.png'></img>
          <img className='insta' src='./insta.png'></img>
        </div>
      </div>
      <div className='Div-Register hide'>
        <div className='Menu-Register'>
          <img src='x.png'></img>
        </div>
        <div className='Register'>
          <h2>Cadastre-se</h2>
          <p>Bem vindo a nossa plataforma de eventos! Vamos começar!</p>
          <div className='Register-Inputs'>
            <div className='Name'>
              <p>Nome</p>
              <input type='text'></input>
            </div>
            <div className='Email'>
              <p>E-mail</p>
              <input type='text'></input>
            </div>
          </div>
          <div className='Register-Inputs'>
            <div className='Password'>
              <p>Senha</p>
              <input type='password'></input>
            </div>
            <div className='Password'>
              <p>Senha Novamente</p>
              <input type='password'></input>
            </div>
          </div>
          <p className='Login-Text'>Já possui uma conta? <span>Faça login</span></p>
          <div className='Register-Buttons'>
            <button>Cadastrar</button>
            <button>Voltar</button>
          </div>
          <div className='Networks-Register'>
            <img src='./linkedin.png'></img>
            <img className='insta' src='./insta.png'></img>
        </div>
        </div>
      </div>
    </Container>
  )
}

