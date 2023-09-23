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
    </Container>
  )
}

