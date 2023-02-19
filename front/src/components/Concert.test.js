import Concert from "./Concert"
import { render } from "@testing-library/react"

describe("Le composant de Concert", () => {
    test("doit s'afficher sans erreur", async () => {
        render(
            <Concert
                concert={{
                    programme: "Chants et poésies",
                    date: "2023-05-12T17:30:00.000",
                    lieu: [
                        "Festival imaginaire des gônes musicales",
                        "Théâtre de la lumière",
                        "88 avenue de l'inconnue",
                        "Feyzin",
                    ],
                    lienReservation: "https://lienpipo.pipo.pipo/contact",
                }}
            />
        )
    })
})
