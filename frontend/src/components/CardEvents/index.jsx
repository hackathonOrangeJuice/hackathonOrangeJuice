import {
    Container,
    ContainerDate,
    ContainerEvents,
    ContainerButton,
    Date,
    Title,
    Description,
    ButtonDetails,
    ButtonPresence,
} from './style'

export function CardEvents({
    title,
    description,

}) {

    return (
        <Container>
            <ContainerDate>
                <Date>18 de Agosto de 2023</Date>
            </ContainerDate>
            <ContainerEvents>
                <Title>{ title }</Title>
                <Description>{ description }</Description>

                <ContainerButton>
                    <ButtonDetails>Detalhes</ButtonDetails>
                    <ButtonPresence>Marcar presença</ButtonPresence>
                </ContainerButton>

            </ContainerEvents>

        </Container>
    )
}