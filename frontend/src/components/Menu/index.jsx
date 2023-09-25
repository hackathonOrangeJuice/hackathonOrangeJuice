import {
    Container,
    ContainerInfoMenu,
    LogoImage,
    TextFiler,
    TextMain,
    Text,
    TextTheme

} from './style'

export function Menu() {
    return (
        <Container>

            <ContainerInfoMenu>
                <LogoImage
                    src='./logo.png'
                    alt='logo da orange juice'
                />
                <TextFiler>Filtros</TextFiler>

                <TextMain>Modalidades</TextMain>

                <Text>Presencial</Text>
                <Text>Online</Text>

                <TextMain>Entrada</TextMain>

                <Text>Gratuita</Text>
                <Text>Paga</Text>

            </ContainerInfoMenu>

        </Container>
    )
}