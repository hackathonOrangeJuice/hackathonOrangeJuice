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
                    src='./public/logo.png'
                    alt='logo da orange juice'
                />
                <TextFiler>Filtros</TextFiler>

                <TextMain>Modalidades</TextMain>

                <Text>Presencial</Text>
                <Text>Online</Text>

                <TextTheme>Mês</TextTheme>

                <Text>Janeiro</Text>
                <Text>Fevereiro</Text>
                <Text>Março</Text>
                <Text>Abril</Text>
                <Text>Maio</Text>
                <Text>Junho</Text>
                <Text>Julho</Text>
                <Text>Agosto</Text>
                <Text>Setembro</Text>
                <Text>Outubro</Text>
                <Text>Novembro</Text>
                <Text>Dezembro</Text>

            </ContainerInfoMenu>

            <ContainerSocialNetworks />
        </Container>
    )
}