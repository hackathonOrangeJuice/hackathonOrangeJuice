import { React } from 'react';
import { Container, DivRegister, MenuRegister, ImgClose, Register, TitleRegister, SubtitleRegister, RegisterInputs, Name, TextInput,
Email, Input, Password, PasswordInput, LoginText, SpanLoginText, RegisterButtons, BtnDivRegister, NetworksRegister, ImgNetworks } from './styles';

export function ScreenRegister() {

    return (
        <Container>
        <DivRegister className='Div-Register hide'>
            <MenuRegister>
            <ImgClose src='x.png' className='close-register'></ImgClose>
            </MenuRegister>
            <Register>
            <TitleRegister>Cadastre-se</TitleRegister>
            <SubtitleRegister>Bem vindo a nossa plataforma de eventos! Vamos começar!</SubtitleRegister>
            <RegisterInputs>
                <Name>
                <TextInput>Nome</TextInput>
                <Input></Input>
                </Name>
                <Email>
                <TextInput>E-mail</TextInput>
                <Input></Input>
                </Email>
            </RegisterInputs>
            <RegisterInputs>
                <Password>
                <TextInput>Senha</TextInput>
                <PasswordInput></PasswordInput>
                </Password>
                <Password>
                <TextInput>Senha Novamente</TextInput>
                <PasswordInput></PasswordInput>
                </Password>
            </RegisterInputs>
            <LoginText>Já possui uma conta? <SpanLoginText className='login-text'>Faça login</SpanLoginText></LoginText>
            <RegisterButtons>
                <BtnDivRegister>Cadastrar</BtnDivRegister>
                <BtnDivRegister className='btn-back'>Voltar</BtnDivRegister>
            </RegisterButtons>
            <NetworksRegister>
                <ImgNetworks src='./linkedin.svg'></ImgNetworks>
                <ImgNetworks className='insta' src='./instagram.svg'></ImgNetworks>
            </NetworksRegister>
            </Register>
        </DivRegister>
        </Container>
    )
}