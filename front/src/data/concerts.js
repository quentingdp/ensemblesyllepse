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
    {
        programme: "Miroir",
        date: "2024-02-01T00:00:00.000",
        lieu: [
            "Collège Roger Poulnard",
            "Concert scolaire",
            "Rue de la Mairie",
            "01380 BÂGÉ-DOMMARTIN",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-02-05T00:00:00.000",
        lieu: [
            "Temple du Change",
            "Concert scolaire - Billetterie en fonction des places disponibles",
            "Place du Change",
            "69005 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-03-11T00:00:00.000",
        lieu: [
            "Collège du val de Saône",
            "Concert scolaire",
            "286 route de Francheleins",
            "01090 MONTCEAUX",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-04-16T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-04-26T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-05-30T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-07-13T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-08-06T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-08-16T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Kaléidoscope",
        date: "2024-08-26T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-01-28T16:00:00.000",
        lieu: [
            "Château de Vogüé",
            "2 impasse des marronniers",
            "07200 VOGÜÉ",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-02-02T18:30:00.000",
        lieu: [
            "Musée des Beaux-Arts",
            "Place des Terreaux",
            "69001 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-02-02T19:45:00.000",
        lieu: [
            "Musée des Beaux-Arts",
            "Place des Terreaux",
            "69001 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-02-02T21:00:00.000",
        lieu: [
            "Musée des Beaux-Arts",
            "Place des Terreaux",
            "69001 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-03-10T18:30:00.000",
        lieu: [
            "Festival l'Haÿ en choeur",
            "L'HAŸ LES ROSES",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-05-20T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-06-23T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-07-03T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-09-19T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-09-29T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-10-09T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-10-19T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
    {
        programme: "Miroir",
        date: "2024-10-29T20:15:00.000",
        lieu: [
            "Chapelle de la Trinité",
            "Concert privé - sur réservation",
            "31 rue de la Bourse",
            "69002 LYON",
        ],
    },
]
