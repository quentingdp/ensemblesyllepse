/*
Structure contenant les informations du menu de navigation : le label, le lien contenant l'url de destination (le cas échéant), et les sous-liens lorsque le label est un toggler pour afficher un sous-menu de liens
*/

export const navLiens = [
    {
        label: "Accueil",
        lien: "/",
    },
    {
        label: "À propos",
        sousLiens: [
            {
                label: "L'ensemble Syllepse",
                lien: "/a-propos/l-ensemble-syllepse/",
            },
            {
                label: "Ophélia Besson",
                lien: "/a-propos/ophelia-besson/",
            },
            {
                label: "Les choristes",
                lien: "/a-propos/choristes/",
            },
            {
                label: "Les compositeurs",
                lien: "/a-propos/compositeurs/",
            },
            {
                label: "L'association",
                lien: "/a-propos/association/",
            },
            {
                label: "Les contributeurs",
                lien: "/a-propos/contributeurs/",
            },
        ]
    },
    {
        label: "Agenda",
        lien: "/agenda/",
    },
    {
        label: "Programmes",
        sousLiens: [
            {
                label: "Shakespeare's songs",
                lien: "/programmes/2021-shakespeare-s-songs/",
            },
            {
                label: "Nuits",
                lien: "/programmes/2021-nuits/",
            },
            {
                label: "Entrelacs",
                lien: "/programmes/2022-entrelacs/",
            },
            {
                label: "Chants et poésies",
                lien: "/programmes/2022-chants-et-poesies/",
            },
            {
                label: "Ombres",
                lien: "/programmes/2023-ombres/",
            },
            {
                label: "Miroir",
                lien: "/programmes/2023-miroir/",
            },
            {
                label: "Kaléidoscope",
                lien: "/programmes/2022-kaleidoscope/",
            },
        ],
    },
    {
        label: "Médias",
        sousLiens: [
            {
                label: "Nous écouter",
                lien: "/medias/nous-ecouter/",
            },
        ],
    },
    {
        label: "Contacts",
        sousLiens: [
            {
                label: "Nous soutenir",
                lien: "/contact/nous-soutenir/",
            },
            {
                label: "Nous contacter",
                lien: "/contact/nous-contacter/",
            },
        ],
    },
]