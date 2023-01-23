import { effectif } from "./effectif.js"

const petitEffectif = [
    {
        pupitre: "Sopranes",
        personnes: ["Anne Onyme"],
    },
    {
        pupitre: "Basses",
        personnes: ["Jean Cianne", "Hervé Ridou", "Mehdi Diana"],
    },
]

const choraleVide = [
    {
        pupitre: "Mezzos",
        personnes: [],
    },
]

const petitEffectifSansNomDePupitre = [
    {
        personnes: ["Anne Onyme"],
    },
    {
        personnes: ["Jean Cianne", "Hervé Ridou", "Mehdi Diana"],
    },
]

describe("La fonction effectif", () => {
    test("compte correctement les choristes d'un petit effectif", () => {
        const result = effectif(petitEffectif)
        expect(result).toBe(4)
    })
    test("renvoie 0 si aucun choriste n'est dans aucun pupitre", () => {
        const result = effectif(choraleVide)
        expect(result).toBe(0)
    })
    test("fonctionne correctement si les noms des pupitres ne sont pas renseignés", () => {
        const result = effectif(petitEffectifSansNomDePupitre)
        expect(result).toBe(4)
    })
})
