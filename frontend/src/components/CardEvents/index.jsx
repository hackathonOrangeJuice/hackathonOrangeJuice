import { api } from '../../axios'
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

import { useNavigate } from "react-router-dom"


export function CardEvents({
    date,
    event,
}) {

    const navigate = useNavigate();


    function handleToGoEvent(date) {
        navigate(`/event/${date}`)
    }


    return (
        <Container>
            <ContainerDate>
                <Date>Dia {date}</Date>
            </ContainerDate>
            <ContainerEvents>
                <Title>{event ? event.name : "Sem eventos para esse dia"}</Title>
                <Description>{event ? event.description : ""}</Description>

                <ContainerButton>
                    {
                        event ?
                            <ButtonDetails
                                onClick={() => handleToGoEvent(date)}
                            >Detalhes</ButtonDetails>

                            : ""

                    }
                    {
                        event ?
                            <ButtonRemove><img src='./lixo.png' className='img-button'></img></ButtonRemove>
                            : ""
                    }

                    {
                        !event ?
                            <ButtonRemove>adicionar evento<img src='./lixo.png' className='img-button'></img></ButtonRemove>
                            : ""
                    }


                </ContainerButton>

            </ContainerEvents>

        </Container>
    )
}