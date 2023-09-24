import { React } from 'react';
import {
    Container, DivRegister, MenuRegister, ImgClose, Register, TitleRegister, SubtitleRegister, RegisterInputs, Name, TextInput,
    Email, Input, Password, PasswordInput, LoginText, SpanLoginText, RegisterButtons, BtnDivRegister, NetworksRegister, ImgNetworks
} from './styles';

import { Controller, useForm } from "react-hook-form"
import { useAuth } from '../../Contexts/AuthContext';

export function ScreenRegister() {

    const { control, handleSubmit } = useForm()

    const { signup } = useAuth()

    async function handleSignup({ name, email, password }) {
        console.log(email, name, password)

        try {
            await signup(name, email, password)

        } catch (error) {
            alert("não foi possivel criar conta")
        }
    }
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

                            <Controller

                                name="name"
                                control={control}

                                render={({ field: { onChange, value } }) => (

                                    <Input
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}

                            />

                        </Name>
                        <Email>
                            <TextInput>E-mail</TextInput>

                            <Controller

                                name="email"
                                control={control}

                                render={({ field: { onChange, value } }) => (

                                    <Input
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}

                            />

                        </Email>
                    </RegisterInputs>
                    <RegisterInputs>
                        <Password>
                            <TextInput>Senha</TextInput>
                            <Controller

                                name="password"
                                control={control}

                                render={({ field: { onChange, value } }) => (

                                    <PasswordInput
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}

                            />
                        </Password>

                        <Password>
                            <TextInput>Senha Novamente</TextInput>

                            <Controller

                                name="passwordAgain"
                                control={control}

                                render={({ field: { onChange, value } }) => (

                                    <PasswordInput
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}

                            />

                        </Password>
                    </RegisterInputs>
                    <LoginText>Já possui uma conta? <SpanLoginText className='login-text'>Faça login</SpanLoginText></LoginText>
                    <RegisterButtons>
                        <BtnDivRegister
                            onClick={handleSubmit(handleSignup)}
                        >Cadastrar</BtnDivRegister>
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