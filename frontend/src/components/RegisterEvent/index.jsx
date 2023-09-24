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

export function RegisterEvent() {
    const { control, handleSubmit } = useForm()

    async function handleRegisterNewEvent({name,description,modality}) {

        console.log(name,description,modality)
        try {
            await api.post("/events", {
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
        <Container className='RegisterEvent hideA'>
            <IconClose
                src='./public/x-solid.svg'
            />

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
                    <Text>PreÇo</Text>

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
                <Button>Voltar</Button>
            </ContainerButton>

            <ContainerSocialNetworks>
                <LogoSocialNetworks
                    src='./public/linkedin.svg'
                />

                <LogoSocialNetworks
                    src='./public/instagram.svg'
                />
            </ContainerSocialNetworks>


        </Container>
    )
}