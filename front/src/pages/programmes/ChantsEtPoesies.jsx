//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/Chants_et_poésies.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

const progChantsEtPoesies = [
    {
        oeuvres: [
            {
                titre: "Le Choix de Pandore",
                soliste: "Trombone : Sebastien Goulot-Martin",
                auteur: "Nans de Jésus (1990-)",
                info: "Commandé par Syllepse - Création mondiale",
            },
        ],
    },
    {
        titre: "Trois poèmes de Paul Valéry",
        auteur: "Jean Françaix (1912-1997)",
        oeuvres: [
            {
                titre: "I. Aurore",
            },
            {
                titre: "II. Cantique des Colonnes",
            },
            {
                titre: "III. Le Sylphe",
            },
        ],
    },
    {
        titre: "Le Cantique des Cantiques",
        auteur: "Daniel-Lesur (1908-2002)",
        oeuvres: [
            {
                titre: "I. Dialogue",
            },
            {
                titre: "III. Le songe",
            },
        ],
    },
    {
        titre: "Sept Chansons",
        auteur: "Francis Poulenc (1899-1963)",
        oeuvres: [
            {
                titre: "II. À peine défigurée",
            },
            {
                titre: "V. Belle et ressemblante",
            },
            {
                titre: "VI. Marie",
            },
        ],
    },
    {
        titre: "Fureur et Mystère",
        auteur: "Nans de Jésus (1990-), sur des poèmes de René Char",
        info: "Commandé par Syllepse - Création mondiale",
        oeuvres: [
            {
                titre: "I. Venez à nous",
            },
            {
                titre: "II. Le requin et la mouette",
                soliste: "(Alto solo : Zoé Cassard)",
            },
            {
                titre: "III. Amer avenir",
            },
            {
                titre: "IV. Assez creusé",
            },
        ],
    },
]

export default function ChantsEtPoesies() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <Helmet>
                <title>Ensemble Syllepse - Chants et poésies</title>
                <meta
                    name="description"
                    content="Programme Chants et Poésies créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Chants et poésies"
                annee="2022"
                introduction={[
                    "Syllepse s'est rendu à Lamure-sur-Azergues, village rural de 1000 habitants, en lien avec le Quartier Métisseur et le compositeur NANS DE JESUS pour créer son spectacle Chants et poésies. Son programme autour des poètes français (RENÉ CHAR, GUILLAUME APOLLINAIRE, PAUL ÉLUARD…) a été présenté au côté des œuvres de la plasticienne CÉLINE THOUÉ et d'artisans locaux.",
                    "Des ateliers de chant choral ont été proposés en libre accès aux habitants. L'objectif était double : monter un projet ambitieux, celui d'un répertoire vocal de qualité et tisser du lien artistique et social en milieu rural.",
                ]}
                programme={progChantsEtPoesies}
                image={photoConcert}
                alt="Concert à la salle Molière à Lyon"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
