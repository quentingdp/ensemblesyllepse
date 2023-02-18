import { concertsAVenir } from "./triFiltreConcerts.js"

const concerts = [
    {
        programme: "Programme passé",
        date: "2005-01-01T17:30:00.000",
        lieu: [],
    },
    {
        programme: "Programme futur très éloigné",
        date: "2987-12-31T00:00:00.000",
        lieu: [],
    },
    {
        programme: "Programme futur plus proche dans le temps",
        date: "2701-06-15T12:12:00.000",
        lieu: [],
    },
]

//Pas de test sur le filtre supérieur à une semaine par rapport à la date système, car je n'ai pas trouvé le moyen de tester en remplaçant la date système par une date constante imposée
describe("La fonction concertsAVenir", () => {
    test("filtre les concerts futurs, et les trie par ordre croissant de date", () => {
        const result = concertsAVenir(concerts)
        expect(result).toEqual([
            {
                programme: "Programme futur plus proche dans le temps",
                date: "2701-06-15T12:12:00.000",
                lieu: [],
            },
            {
                programme: "Programme futur très éloigné",
                date: "2987-12-31T00:00:00.000",
                lieu: [],
            },
        ])
    })
})
