/*
Modèle d'un objet concert : programme (string), date (string contenant une date + heure au format ISO8601), lieu (string[]), lienReservation (string contenant une URL)
Les champs programme et date sont obligatoires. lieu est également obligatoire, mais peut contenir un tableau vide
*/

export const concerts = [
    {
        programme: "Ombres",
        date: "2023-04-16T20:30:00.000",
        lieu: ["Temple Lanterne", "10 rue Lanterne", "69001 LYON"],
        lienReservation:
            "https://www.helloasso.com/associations/ensemble-vocal-syllepse/evenements/ombres",
    },
    {
        programme: "Ombres",
        date: "2023-05-07T20:30:00.000",
        lieu: [
            "Église Saint-Laurent",
            "2 rue du Pré de la Danse",
            "74940 ANNECY-LE-VIEUX",
        ],
        lienReservation:
            "https://www.helloasso.com/associations/ensemble-vocal-syllepse/evenements/ombres-1",
    },
    {
        programme: "Ombres",
        date: "2023-05-08T20:30:00.000",
        lieu: [
            "Église St Symphorien",
            "171 rue Auguste Ravier",
            "38510 MORESTEL",
        ],
        lienReservation:
            "https://www.helloasso.com/associations/ensemble-vocal-syllepse/evenements/ombres-morestel",
    },
    {
        programme: "Ombres",
        date: "2023-07-25T21:00:00.000",
        lieu: [
            "Cathédrale Notre-Dame de Nazareth",
            "Esplanade Yves Meffre",
            "84110 VAISON-LA-ROMAINE",
        ],
    },
    {
        programme: "Ombres",
        date: "2023-07-27T21:00:00.000",
        lieu: ["Église Saint Vincent", "Rue de la Résistance", "26110 NYONS"],
    },
    {
        programme: "Ombres",
        date: "2023-07-28T21:00:00.000",
        lieu: [
            "Cathédrale Saint Apollinaire",
            "Place des Ormeaux",
            "26000 VALENCE",
        ],
    },
]
