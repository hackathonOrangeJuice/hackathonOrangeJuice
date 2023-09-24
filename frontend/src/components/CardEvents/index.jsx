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
    date,
    title,
    description,

}) {

    return (
        <Container>
            <ContainerDate>
                <Date>Dia {date}</Date>
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