import { React } from "react";
import {
    Container, DivLogin, MenuLogin, ImgClose, Login, TitleLogin, SubtitleLogin, LoginInputs, TextEmail, TextPassword, Input, PasswordInput, RegisterText,
    SpanRegister, ButtonEnter, NetworksLogin, ImgNetworks
} from "./styles.js";

import { useForm, Controller } from "react-hook-form";
import { api } from "../../axios/"
import { useAuth } from "../../Contexts/AuthContext.jsx";



export function ScreenLogin() {

    const { setUser } = useAuth();

    async function handleSignln(data) {

        try {
            const response = await api.post("/sessions/signln", {
                email: data.email,
                password : data.password
            });

            console.log("cheguei aqui")

            setUser(response.data)
        } catch (error) {
            alert(error)
        }
    }

    const { control, handleSubmit } = useForm()

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


                        <TextPassword>Senha</TextPassword>
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


                        <RegisterText>Não possui uma conta? <SpanRegister className="register-text">Cadastre-se</SpanRegister></RegisterText>
                        <ButtonEnter
                            onClick={handleSubmit(handleSignln)}
                        >Entrar</ButtonEnter>
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