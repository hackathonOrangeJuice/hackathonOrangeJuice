import {
    Container,
    ContainerDate,
    ContainerEvents,
    ContainerButton,
    Date,
    Title,
    Description,
    ButtonDetails,
    ButtonRemove,
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
                    <ButtonRemove><img src='./lixo.png' className='img-button'></img></ButtonRemove>
                </ContainerButton>

            </ContainerEvents>

        </Container>
    )
}