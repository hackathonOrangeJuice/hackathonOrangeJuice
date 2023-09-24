import { useEffect, useState } from "react";
import {
    Container,
    ContainerEvents,
} from "./style"

import { eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import { format, subMonths, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Menu } from "../../components/Menu"
import { CardEvents } from "../../components/CardEvents"

export function Events() {

    const [days, setDays] = useState([]);
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
        setDays(allDays)
    }

    useEffect(() => {
        setCurrentDate();
    }, [monthSelected])

    return (
        <Container>
            <Menu />
            <ContainerEvents>

                {
                    days.map((date, index) => {

                        const dateFormatted = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

                        return (
                            <CardEvents
                                key={index}
                                date={String(dateFormatted)}
                                title="Encontro com o Neymar"
                                description="Neymar nosso monstro"
                            />
                        )

                    })
                }

            </ContainerEvents>

        </Container>
    )
};