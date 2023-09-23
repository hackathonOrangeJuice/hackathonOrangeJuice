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
                    title="Encontro com o Cristiano Ronaldo"
                    description="Cristiano Ronaldo é o milior"
                />
                <CardEvents
                    title="Encontro com o Messi"
                    description="Ankara Messi, Ankara Messi, Ankara Messi"
                />
                  <CardEvents
                    title="Encontro com o Vinicius Júnior"
                    description="Vinicius Júnior a taça não merece tirar o seu batom"
                />
                  <CardEvents
                    title="Encontro com o Haaland"
                    description="Haaland Haaland, o menino é um titã"
                />
            </ContainerEvents>

        </Container>
    )
}