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
<<<<<<< HEAD
                            <ButtonRemove><img src='./lixo.png' className='img-button' alt='remover'></img></ButtonRemove>
=======
                            <ButtonRemove
                            onClick={() => {
                                handleDeleteEvent(date)
                                reload();
                            }}
                            ><img src='./lixo.png' className='img-button'></img></ButtonRemove>
>>>>>>> 8f544daa91d0d9ce87cabc6ed4a8ff3e423da44c
                            : ""
                    }

                    {
                        !event ?
                            <ButtonRemove
                            onClick={handleShowRegister}

                            >
                                adicionar evento
                                <img src='./lixo.png' className='img-button' alt='remover'></img></ButtonRemove>
                            : ""
                    }


                </ContainerButton>

            </ContainerEvents>

        </Container>
    )
}