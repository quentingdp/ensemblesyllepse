//Import de librairies externes
import React from "react"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/entrelacs.avif"
import photoConcertDefaut from "../../images/photos/entrelacs.avif"

const progEntrelacs = [
    {
        oeuvres: [
            {
                titre: "Tenebrae Factae Sunt",
                auteur: "Carlo Gesualdo (1566-1613)",
            },
            {
                titre: "Ay Luna que Reluzes",
                auteur: "Anonyme (1556)",
            },
            {
                titre: "Je Parangonne au Soleil",
                auteur: "Antoine de Bertrand (1540-1580)",
            },
            {
                titre: "Voulez ouïr les Cris de Paris",
                auteur: "Clément Janequin (1485 - 1558)",
            },
        ],
    },
    {
        oeuvres: [
            {
                titre: "Single Universal Production",
                auteur: "Arr. Filipe Rodriguez (Syllepse)",
                info: "Création mondiale",
            },
            {
                titre: "De Profundis",
                auteur: "John A. Pamintuan",
            },
            {
                titre: "Nerea Izango Zen",
                auteur: "Javier Busto (1949 - )",
            },
            {
                titre: "Si notre vie est plus courte",
                auteur: "Eric Lebrun (1967-)",
                info: "Création mondiale",
            },
            {
                titre: "Double, Double Toil and Trouble",
                auteur: "Jakko Mäntyjärvi (1963 -)",
            },
            {
                titre: "Des Myriades de Gouttes",
                auteur: "Emmanuelle Da Costa (1988-)",
                info: "Création mondiale",
            },
            {
                titre: "Le Jour m'étonne - “Figure humaine”",
                auteur: "Francis Poulenc (1899-1963)",
            },
            {
                titre: "I Seraillet Have",
                auteur: "Vaughan Williams (1872-1958)",
            },
            {
                titre: "Dara la Notte",
                auteur: "Claudio Monteverdi (1567-1643)",
            },
            {
                titre: "La foule, Édith Piaf (1915-1963)",
                auteur: "Arr. Filipe Rodriguez (Syllepse)",
                info: "Création mondiale",
            },
            {
                titre: "Famine Song",
                auteur: "Matthew Culloton (1976 -)",
            },
            {
                titre: "O Radiant Dawn",
                auteur: "James Mc Millan (1959-)",
            },
        ],
    },
]

export default function Entrelacs() {
    return (
        <React.Fragment>
            <Navigation />
            <Helmet>
                <title>Ensemble Syllepse - Entrelacs</title>
                <meta
                    name="description"
                    content="Programme Entrelacs créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Entrelacs"
                annee="2022"
                effectif="Programme pour 16 chanteurs et cheffe de chœur"
                introduction={[
                    "Une véritable mosaïque musicale à travers les styles et les époques. Quatre mini-concerts en un, appelant à la participation des spectateurs. Spectacle mis en scène et spatialisé par JEAN LACORNERIE, incluant deux créations d'ÉRIC LEBRUN et d'EMMANUELLE DA COSTA. Ce programme a été présenté avec succès entre février et juin 2022, notamment au Festival International de Nancy “Voix du monde” puis au Festival International du Florilège Vocal de Tours.",
                ]}
                programme={progEntrelacs}
                image={photoConcert}
                imageDefaut={photoConcertDefaut}
                alt="Concert Entrelacs à Tours"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
