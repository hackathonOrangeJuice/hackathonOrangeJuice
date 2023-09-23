import {
    Container,
    ContainerInfoMenu,
    LogoImage,
    TextFiler,
    TextMain,
    Text,
    TextTheme,
    ContainerSocialNetworks,

} from './style'

export function Menu() {
    return (
        <Container>

            <ContainerInfoMenu>
                <LogoImage
                    src='../../../public/logo.png'
                    alt='logo da orange juice'
                />
                <TextFiler>Filtros</TextFiler>

                <TextMain>Modalidades</TextMain>

                <Text>Presencial</Text>
                <Text>Online</Text>

                <TextTheme>Tema</TextTheme>

            </ContainerInfoMenu>

            <ContainerSocialNetworks />
        </Container>
    )
}