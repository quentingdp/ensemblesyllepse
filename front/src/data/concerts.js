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
        date: "2023-07-26T20:30:00.000",
        lieu: ["Église de Châteauneuf-du-Rhône", "Place de l'église", "26780 CHÂTEAUNEUF-DU-RHONE"],
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
    {
        programme: "Miroir",
        date: "2023-07-11T16:00:00.000",
        lieu: [
            "Basilique Sainte-Marie-Madelaine",
            "Rue des poichots",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-11T17:00:00.000",
        lieu: [
            "Cité de la voix",
            "4 rue de l'hôpital",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-12T16:00:00.000",
        lieu: [
            "Basilique Sainte-Marie-Madelaine",
            "Rue des poichots",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-12T17:00:00.000",
        lieu: [
            "Cité de la voix",
            "4 rue de l'hôpital",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-13T16:00:00.000",
        lieu: [
            "Basilique Sainte-Marie-Madelaine",
            "Rue des poichots",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-13T17:00:00.000",
        lieu: [
            "Cité de la voix",
            "4 rue de l'hôpital",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-14T16:00:00.000",
        lieu: [
            "Basilique Sainte-Marie-Madelaine",
            "Rue des poichots",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-14T17:00:00.000",
        lieu: [
            "Cité de la voix",
            "4 rue de l'hôpital",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-15T16:00:00.000",
        lieu: [
            "Basilique Sainte-Marie-Madelaine",
            "Rue des poichots",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-15T17:00:00.000",
        lieu: [
            "Cité de la voix",
            "4 rue de l'hôpital",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-16T16:00:00.000",
        lieu: [
            "Basilique Sainte-Marie-Madelaine",
            "Rue des poichots",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Miroir",
        date: "2023-07-16T17:00:00.000",
        lieu: [
            "Cité de la voix",
            "4 rue de l'hôpital",
            "89450 VÉZELAY",
        ],
    },
    {
        programme: "Ombres",
        date: "2023-09-17T17:00:00.000",
        lieu: [
            "Auditorium",
            "96 rue de la Sous-Préfecture",
            "69400 VILLEFRANCHE-SUR-SAÔNE",
        ],
    },
    {
        programme: "Ombres",
        date: "2023-09-18T14:30:00.000",
        lieu: [
            "Auditorium",
            "96 rue de la Sous-Préfecture",
            "69400 VILLEFRANCHE-SUR-SAÔNE",
        ],
    },
    {
        programme: "Chants et poésies",
        date: "2023-11-10T21:00:00.000",
        lieu: [
            "Festivocal",
            "Église Saint-Pierre - Le Corbusier",
            "Rue des Noyers",
            "42700 FIRMINY",
        ],
    },
]
