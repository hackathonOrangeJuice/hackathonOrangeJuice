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

export function RegisterEvent() {
    return (
        <Container>
              <IconClose
                    src='./public/x-solid.svg'
                />
         
            <Text>Olá, admin! Que ótimo ter você por aqui</Text>
            <Title>CADASTRE UM EVENTO</Title>

            <BoxInput>
                <ContainerInput>
                    <Text>Nome do evento</Text>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <Text>Nome do evento</Text>
                    <Input />
                </ContainerInput>
            </BoxInput>

            <BoxInput>
                <ContainerInput>
                    <Text>Nome do evento</Text>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <Text>Nome do evento</Text>
                    <Input />
                </ContainerInput>
            </BoxInput>

            <ContainerInput>
                <Text>Descrição do evento</Text>
                <InputDescription />
            </ContainerInput>

            <ContainerButton>
                <Button>Cadastrar</Button>
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