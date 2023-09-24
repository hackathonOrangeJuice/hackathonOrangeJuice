import { React } from "react";
import { Container } from "./styles.js";

export function Login() {

    return (
    <Container>
        <div className='Div-Login hide'>
            <div className='Menu-Login'>
            <img src='x.png' className='close-login'></img>
            </div>
            <div className='Login'>
            <h2>Login</h2>
            <p>Seja bem vindo de volta!</p>
            <div className='Login-Inputs'>
                <p>E-mail</p>
                <input type='text'></input>
                <p id='password'>Senha</p>
                <input type='password'></input>
                <p className='Register-Text'>Não possui uma conta? <span className='register-text'>Cadastre-se</span></p>
                <button>Entrar</button>
            </div>
            </div>
            <div className='Networks-Login'>
            <img src='./linkedin.svg'></img>
            <img className='insta' src='./instagram.svg'></img>
            </div>
        </div>
    </Container>
    )

}