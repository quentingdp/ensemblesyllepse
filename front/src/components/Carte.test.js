import Carte from "./Carte"
import { render } from "@testing-library/react"
import photoInconnue from "../images/logo/image_par_defaut.jpg"

describe("Le composant de Carte", () => {
    test("doit s'afficher sans erreur", async () => {
        render(
            <Carte
                photo={photoInconnue}
                nom="Anne O'nyme"
                biographie={[
                    "Depuis tout petite, cette personne est discrète",
                    "Elle a cependant une longue carrière devant elle",
                ]}
            />
        )
    })
})
