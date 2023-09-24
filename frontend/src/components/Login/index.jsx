import { React } from "react";
import { Container, DivLogin, MenuLogin, ImgClose, Login, TitleLogin, SubtitleLogin, LoginInputs, TextEmail, TextPassword, Input, PasswordInput, RegisterText, 
SpanRegister, ButtonEnter, NetworksLogin, ImgNetworks } from "./styles.js";

export function ScreenLogin() {

    return (
    <Container>
        <DivLogin className="Div-Login hide">
            <MenuLogin>
            <ImgClose src="./x.png" className='close-login'></ImgClose>
            </MenuLogin>
            <Login>
            <TitleLogin>Login</TitleLogin>
            <SubtitleLogin>Seja bem vindo de volta!</SubtitleLogin>
            <LoginInputs>
                <TextEmail>E-mail</TextEmail>
                <Input></Input>
                <TextPassword>Senha</TextPassword>
                <PasswordInput></PasswordInput>
                <RegisterText>Não possui uma conta? <SpanRegister className="register-text">Cadastre-se</SpanRegister></RegisterText>
                <ButtonEnter>Entrar</ButtonEnter>
            </LoginInputs>
            </Login>
            <NetworksLogin>
            <ImgNetworks src='./linkedin.svg'></ImgNetworks>
            <ImgNetworks src='./instagram.svg'></ImgNetworks>
            </NetworksLogin>
        </DivLogin>
    </Container>
    )

}