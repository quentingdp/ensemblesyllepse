/*
Modèle d'un objet concert : programme (string), date (string contenant une date + heure au format ISO8601), lieu (string[]), lienReservation (string contenant une URL)
Les champs programme et date sont obligatoires. lieu est également obligatoire, mais peut contenir un tableau vide
*/

export const concerts = [
    {
        programme: "Chants et poésies",
        date: "2023-05-12T17:30:00.000",
        lieu: [
            "Festival imaginaire des gônes musicales",
            "Théâtre de la lumière",
            "88 avenue de l'inconnue",
            "Feyzin",
        ],
        lienReservation:
            "https://jfkdslqmjfkdsqjfdkslqjfqskdlmkfjsqdmjfdsqkmjfqsd",
    },
    {
        programme: "Chants et poésies",
        date: "2023-12-31T00:00:00.000",
        lieu: [],
    },
    {
        programme: "Juin",
        date: "2023-06-15T12:12:00.000",
        lieu: [],
    },
    {
        programme: "Juillet",
        date: "2023-07-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-03-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-01-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-02-11T09:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-04-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2025-08-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-09-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-10-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
    {
        programme: "jfkdlsqm",
        date: "2023-11-15T12:12:00.000",
        lieu: ["Arènes de Vaison"],
    },
]
