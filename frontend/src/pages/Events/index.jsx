import { useEffect, useState } from "react";
import {
    Container,
    ContainerEvents,
    ButtonAddEvent
} from "./style"



import { api } from "../../axios";
import { eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import { format, subMonths, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Menu } from "../../components/Menu"
import { CardEvents } from "../../components/CardEvents"
import { RegisterEvent } from "../../components/RegisterEvent";
import { AppError } from "../../utils/AppError";
import { useAuth } from "../../Contexts/AuthContext";

export function Events() {

    const [days, setDays] = useState([]);
    const [events, setEvents] = useState([]);
    const [monthSelected, setMonthSelected] = useState(new Date().getMonth());

    const getDaysInMonth = (year, month) => {
        const startDate = startOfMonth(new Date(year, month, 1));
        const endDate = endOfMonth(new Date(year, month, 1));
        const daysOfMonth = eachDayOfInterval({ start: startDate, end: endDate });
        return daysOfMonth;
    };
    
    function setCurrentDate() {

        const year = new Date().getFullYear();
        const month = new Date().getMonth();

        const allDays = getDaysInMonth(year, month);

        console.log("eu sou o all days => ", allDays)
        setDays(allDays)

    };

    async function fetchEvents() {
        const response = await api.get("/events");
        console.log(response.data)

        setEvents(response.data);

    }


    useEffect(() => {
        setCurrentDate();
        fetchEvents();
    }, [monthSelected])

    return (
        <Container>
            <Menu />
            <RegisterEvent className=""></RegisterEvent>
            <ContainerEvents>

                {
                    days.map((date, index) => {
                        try {
                            const dateFormatted = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });


                            const [dayWithEvent] = events.filter(event => event.date === dateFormatted);

                            return (


                                <CardEvents
                                    key={index}
                                    date={String(dateFormatted)}
                                    event={dayWithEvent}

                                />
                            );
                        } catch (error) {
                            console.error(error);
                        }
                    })

                }

            </ContainerEvents>

        </Container>
    )
};