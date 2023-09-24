import { React } from 'react';
import { Container } from './styles';

export function Register() {

    return (
        <Container>
        <div className='Div-Register hide'>
            <div className='Menu-Register'>
            <img src='x.png' className='close-register'></img>
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
                <img src='./linkedin.svg'></img>
                <img className='insta' src='./instagram.svg'></img>
            </div>
            </div>
        </div>
        </Container>
    )
}