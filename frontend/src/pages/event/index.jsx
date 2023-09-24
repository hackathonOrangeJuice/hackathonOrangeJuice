import { React } from 'react';
import { Container } from './styles';

export function Event() {

    return (
        <Container>
            <header>
                <img src='./seta-voltar.png' className='seta-voltar'></img>
                <img src='./logo.png'></img>
            </header>
            <main>
                <p className='Date'>Dia 08 de agosto</p>
                <h2>Evento 1</h2>
                <div className='Location'>
                    <img src='./globo.png'></img>
                    <p>Presencial</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p><span>R$ 0,00</span></p>
            </main>
            <footer>
                <div className='Buttons'>
                    <button><img src='coracao.png'></img></button>
                    <div className='Button-Check'>
                        <input type='checkbox' className='check'></input>
                        <p>Marcar presença</p>
                    </div>    
                </div>
                <div className='Networks'>
                    <img src='linkedin.svg'></img>
                    <img src='instagram.svg' className='insta'></img>
                </div>
            </footer>


        </Container>
    )

}