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
    setDataSelected,
    setShowRegister,
    reload,
}) {

    const navigate = useNavigate();


    function handleToGoEvent(date) {
        navigate(`/event/${date}`)
    }

    function handleShowRegister(){
        setDataSelected(date);
        setShowRegister(true);
    }

    async function handleDeleteEvent(date){
        try {
            await api.delete(`/events/${date}`)
        } catch (error) {
            alert(error)
        }
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
                            <ButtonRemove><img src='./lixo.png' className='img-button' alt='remover'></img></ButtonRemove>
                            : ""
                    }

                    {
                        !event ?
                            <ButtonDetails
                            onClick={handleShowRegister}

                            >
                                Adicionar Evento
                                </ButtonDetails>
                            : ""
                    }


                </ContainerButton>

            </ContainerEvents>

        </Container>
    )
}