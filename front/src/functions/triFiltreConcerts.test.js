import {
    concertsAVenir,
    concertsPasses,
    concertsProgrammeAVenir,
} from "./triFiltreConcerts.js"

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
        programme: "Programme moins passé",
        date: "2012-01-01T17:30:00.000",
        lieu: [],
    },
    {
        programme: "Programme futur plus proche dans le temps",
        date: "2701-06-15T12:12:00.000",
        lieu: [],
    },
    {
        programme: "Le temps d'un songe",
        date: "2703-11-02T18:01:00.000",
        lieu: [],
    },
    {
        programme: "Le temps d'un songe",
        date: "1984-04-27T18:01:00.000",
        lieu: [],
    },
    {
        programme: "Le temps d'un songe",
        date: "2458-12-28T18:01:00.000",
        lieu: [],
    },
]

//Pas de test sur le filtre supérieur à une semaine par rapport à la date système, car je n'ai pas trouvé le moyen de tester en remplaçant la date système par une date constante imposée
describe("La fonction concertsAVenir", () => {
    test("filtre les concerts futurs, et les trie par ordre croissant de date", () => {
        const result = concertsAVenir(concerts)
        expect(result).toEqual([
            {
                programme: "Le temps d'un songe",
                date: "2458-12-28T18:01:00.000",
                lieu: [],
            },
            {
                programme: "Programme futur plus proche dans le temps",
                date: "2701-06-15T12:12:00.000",
                lieu: [],
            },
            {
                programme: "Le temps d'un songe",
                date: "2703-11-02T18:01:00.000",
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

describe("La fonction concertsPasses", () => {
    test("filtre les concerts passés, et les trie par ordre décroissant de date", () => {
        const result = concertsPasses(concerts)
        expect(result).toEqual([
            {
                programme: "Programme moins passé",
                date: "2012-01-01T17:30:00.000",
                lieu: [],
            },
            {
                programme: "Programme passé",
                date: "2005-01-01T17:30:00.000",
                lieu: [],
            },
            {
                programme: "Le temps d'un songe",
                date: "1984-04-27T18:01:00.000",
                lieu: [],
            },
        ])
    })
})

describe("La fonction concertsProgrammeAVenir", () => {
    test("filtre les concerts futurs du programme donné en argument, et les trie par ordre croissant de date", () => {
        const result = concertsProgrammeAVenir(concerts, "Le temps d'un songe")
        expect(result).toEqual([
            {
                programme: "Le temps d'un songe",
                date: "2458-12-28T18:01:00.000",
                lieu: [],
            },
            {
                programme: "Le temps d'un songe",
                date: "2703-11-02T18:01:00.000",
                lieu: [],
            },
        ])
    })
})
