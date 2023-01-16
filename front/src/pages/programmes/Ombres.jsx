//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/DSCF1280.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

const progOmbres = [
    {
        titre: "TABLEAU n°1 : APPARITION",
        oeuvres: [
            {
                titre: "Child's Prayer",
                auteur: "James MacMillan",
            },
            {
                titre: "O Magnum Mysterium",
                auteur: "Palestrina",
            },
            {
                titre: "Lux Aurumque",
                auteur: "Eric Whitacre",
            },
        ],
    },
    {
        titre: "TABLEAU n°2 : ROYAUME DES OMBRES",
        oeuvres: [
            {
                titre: "Lamentation n°1",
                auteur: "Paweł Łukaszewski",
            },
            {
                titre: "O vos omnes",
                auteur: "Robert Ramsey",
            },
            {
                titre: "Armottoman Osa",
                auteur: "Mia Makarof",
            },
        ],
    },
    {
        titre: "TABLEAU n°3 : MÉTAMORPHOSE",
        oeuvres: [
            {
                titre: "Resignation",
                auteur: "Hugo Wolf",
            },
            {
                titre: "Ecco mormorar l'onde",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "Des Myriades de Gouttes",
                auteur: "Emmanuelle Da Costa",
            },
            {
                titre: "Le Chant des Oiseaux",
                auteur: "Jannequin",
            },
        ],
    },
    {
        titre: "TABLEAU n°4 : REFLETS",
        oeuvres: [
            {
                titre: "Tyger",
                auteur: "Andrew Miller",
            },
            {
                titre: "Non si leva'ancora",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "Tjak!",
                auteur: "Stephen Hatfield",
            },
        ],
    },
    {
        titre: "TABLEAU n°5 : ENCHANTEMENT",
        oeuvres: [
            {
                titre: "Allsang : Likesang",
                auteur: "Eivind Buene",
            },
            {
                titre: "Allsang : Fragment",
                auteur: "Eivind Buene",
            },
            {
                titre: "Och Glädjen Den Dansar",
                auteur: "E. Rautavaara",
            },
            {
                titre: "Ihr Brüder, Lieben Brüder",
                auteur: "J.H. Schein",
            },
        ],
    },
]

export default function Ombres() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <Helmet>
                <title>Ensemble Syllepse - Ombres</title>
                <meta
                    name="description"
                    content="Programme Ombres créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Ombres"
                annee="2023"
                introduction={[
                    "Le spectacle OMBRES est une création artistique qui réunit 18 choristes et 2 danseurs (JADE LOGMO et RAUL GABRIEL CALIN), empruntant au répertoire des musiques anciennes et contemporaines. Ce spectacle, pensé comme un théâtre d'ombres, est un métissage entre la danse, la scénographie et la musique.",
                    "La mise en scène de JEAN LACORNERIE s'articulant autour d'un immense rideau de fil au centre de la scène permettra aux artistes d'être tour à tour personnages, ombres, récits et décors. 2 danseurs apparaissent, disparaissent et interagissent avec les chanteurs. La création lumière de BENOIT MORROS donnera vie aux ombres des musiciens.",
                ]}
                programme={progOmbres}
                image={photoConcert}
                alt="Concert à la salle Molière à Lyon"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
