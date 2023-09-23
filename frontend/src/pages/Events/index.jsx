import {
    Container,
    ContainerEvents,
} from "./style"

import { Menu } from "../../components/Menu"
import { CardEvents } from "../../components/CardEvents"

export function Events() {
    return (
        <Container>
            <Menu />

            <ContainerEvents>
                <CardEvents
                    title="Encontro com o Neymar"
                    description="Neymar nosso monstro"
                />
                <CardEvents
                    title="Encontro com o Neymar"
                    description="Neymar nosso monstro"
                />
                <CardEvents
                    title="Encontro com o Neymar"
                    description="Neymar nosso monstro"
                />
                  <CardEvents
                    title="Encontro com o Neymar"
                    description="Neymar nosso monstro"
                />
                  <CardEvents
                    title="Encontro com o Neymar"
                    description="Neymar nosso monstro"
                />
            </ContainerEvents>

        </Container>
    )
}