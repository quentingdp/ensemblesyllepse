import PiedDePage from "./PiedDePage"
import { render } from "@testing-library/react"

describe("Le composant de Pied de Page", () => {
    test("doit s'afficher sans erreur", async () => {
        render(<PiedDePage />)
    })
})
