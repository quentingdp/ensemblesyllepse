import { jour, heure, moisDetaille, moisCompact } from "./date.js"

const dateClassique = new Date("2023-05-12T17:30:00.000")
const dateSansHeure = new Date("2023-05-12T00:00:00.000")
const dateSansDizainesDeMinutes = new Date("2023-05-12T03:01:00.000")
const dateMoisLong = new Date("2023-09-12T17:30:00.000")
const dateMars = new Date("2023-03-12T17:30:00.000")
const dateJuin = new Date("2023-06-12T17:30:00.000")
const dateJuillet = new Date("2023-07-12T17:30:00.000")

describe("La fonction jour", () => {
    test("renvoie correctement le jour du mois d'une date donnée", () => {
        const result = jour(dateClassique)
        expect(result).toBe(12)
    })
})

describe("La fonction heure", () => {
    test("renvoie l'heure en français d'une date donnée", () => {
        const result = heure(dateClassique)
        expect(result).toBe("17h30")
    })
    test("renvoie une chaîne vide si l'heure n'est pas renseignée, i.e. si c'est minuit", () => {
        const result = heure(dateSansHeure)
        expect(result).toBe("")
    })
    test("affiche les minutes sur 2 caractères, même si aucune dizaine de minutes n'existe sur la date", () => {
        const result = heure(dateSansDizainesDeMinutes)
        expect(result).toBe("3h01")
    })
})

describe("La fonction moisDetaille", () => {
    test("renvoie le mois et l'année d'une date donnée", () => {
        const result = moisDetaille(dateMoisLong)
        expect(result).toBe("Septembre 2023")
    })
})

describe("La fonction moisCompact", () => {
    test("renvoie le mois et l'année résumé d'une date donnée", () => {
        const result = moisCompact(dateMoisLong)
        expect(result).toBe("Sep 2023")
    })
    test("affiche une date en mars sur 4 caractères au lieu de 3", () => {
        const result = moisCompact(dateMars)
        expect(result).toBe("Mars 2023")
    })
    test("affiche une date en juin sur 4 caractères au lieu de 3", () => {
        const result = moisCompact(dateJuin)
        expect(result).toBe("Juin 2023")
    })
    test("affiche une date en juillet sur 4 caractères au lieu de 3", () => {
        const result = moisCompact(dateJuillet)
        expect(result).toBe("Juil 2023")
    })
})
