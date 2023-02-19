import Navigation from "./Navigation"
import { render } from "@testing-library/react"

describe("Le composant de Navigation", () => {
    test("doit s'afficher sans erreur", async () => {
        render(<Navigation />)
    })
})
