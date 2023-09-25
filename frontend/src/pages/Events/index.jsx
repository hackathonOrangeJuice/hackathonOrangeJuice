import { useEffect, useState } from "react";
import {
    Container,
    ContainerEvents,
    ButtonAddEvent,
    BtnLogout
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

    const { logout } = useAuth();
    const [days, setDays] = useState([]);
    const [events, setEvents] = useState([]);
    const [monthSelected, setMonthSelected] = useState(new Date().getMonth());
    const [dateSelected, setDateSelected] = useState();
    const [showRegister, setShowRegister] = useState(false)
    const [reload, setReload] = useState(false)

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

    };

    async function fetchEvents() {
        const response = await api.get("/events");
        console.log(response.data)

        setEvents(response.data);

    };

    function reloadPage() {
        if (reload) setReload(false)
        else setReload(true)
    };

    function handleLogout() {
        logout();
    }

    useEffect(() => {
        setCurrentDate();
        fetchEvents();
    }, [monthSelected, dateSelected, showRegister, reload])

    return (
        <Container>
            <Menu />

            <RegisterEvent
                date={dateSelected}
                showRegister={showRegister}
                setShowRegister={setShowRegister}
            />
            <ContainerEvents>

                <BtnLogout
                    onClick={handleLogout}>
                    <img src="./desligar.png"
                        className="logout"

                    >
                    </img>Logout</BtnLogout>
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
                                    setDataSelected={setDateSelected}
                                    setShowRegister={setShowRegister}
                                    reload={reloadPage}

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