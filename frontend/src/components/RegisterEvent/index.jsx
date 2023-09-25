import {
    Container,
    IconClose,
    Title,
    Text,
    BoxInput,
    ContainerInput,
    Input,
    InputDescription,
    ContainerButton,
    Button,
    ContainerSocialNetworks,
    LogoSocialNetworks,

} from './style'

import { Controller, useForm } from "react-hook-form"
import { api } from '../../axios'

export function RegisterEvent({ date, showRegister, setShowRegister }) {
    const { control, handleSubmit, reset } = useForm()

    async function handleRegisterNewEvent({ name, description, modality }) {

        console.log(name, description, modality, date)
        try {
            await api.post("/events/", {

                name,
                description,
                modality,
                date

            });


        } catch (error) {
            alert("não foi possivel registrar um evento")
        }
    }
    return (
        <Container
            className={showRegister ? "RegisterEvent" : "RegisterEvent hide"}
        >
            <IconClose
                src='./x-solid.svg'
            alt='fechar'/>

            <Text>Olá, admin! Que ótimo ter você por aqui</Text>
            <Title>CADASTRE UM EVENTO</Title>

            <BoxInput>
                <ContainerInput>
                    <Text>Nome do evento</Text>

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

                </ContainerInput>
                <ContainerInput>
                    <Text>descrição</Text>

                    <Controller

                        name="descriptionA"
                        control={control}

                        render={({ field: { onChange, value } }) => (

                            <Input
                                onChange={onChange}
                                value={value}
                            />
                        )}

                    />
                </ContainerInput>
            </BoxInput>

            <BoxInput>
                <ContainerInput>
                    <Text>Modalidade</Text>

                    <Controller

                        name="modality"
                        control={control}

                        render={({ field: { onChange, value } }) => (

                            <Input
                                onChange={onChange}
                                value={value}
                            />
                        )}

                    />
                </ContainerInput>
                <ContainerInput>
                    <Text>Preço</Text>

                    <Controller

                        name="price"
                        control={control}

                        render={({ field: { onChange, value } }) => (

                            <Input
                                onChange={onChange}
                                value={value}
                            />
                        )}

                    />
                </ContainerInput>
            </BoxInput>

            <ContainerInput>
                <Text>Descrição do evento</Text>

                <Controller

                    name="description"
                    control={control}

                    render={({ field: { onChange, value } }) => (

                        <InputDescription
                            onChange={onChange}
                            value={value}
                        />
                    )}

                />

            </ContainerInput>

            <ContainerButton>
                <Button
                    onClick={handleSubmit(handleRegisterNewEvent)}
                >Cadastrar</Button>
                <Button
                    onClick={() => {
                        setShowRegister(false)
                        reset()
                        
                    }}
                >Voltar</Button>
            </ContainerButton>

            <ContainerSocialNetworks>
                <LogoSocialNetworks
                    src='./public/linkedin.svg'
                alt='logo do linkedin'/>

                <LogoSocialNetworks
                    src='./public/instagram.svg'
                alt='logo do instagram'/>
            </ContainerSocialNetworks>


        </Container>
    )
}