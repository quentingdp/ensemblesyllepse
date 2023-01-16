//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/Kaleidoscope.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

const progKaleidoscope = [
    {
        oeuvres: [
            {
                titre: "O Radiant Dawn",
                auteur: "James McMillan",
            },
            {
                titre: "Shall I compare thee to a summer's day",
                auteur: "Nils Lindberg",
            },
            {
                titre: "Double, Double Toil and Trouble",
                auteur: "Jakko Mantyjarvi",
            },
            {
                titre: "De Profundis",
                auteur: "August Pamintuan",
            },
            {
                titre: "Sfogava con le stelle",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "Nerea Izango Zen",
                auteur: "Javier Busto",
            },
            {
                titre: "Nabucco - Va, pensiero",
                auteur: "G. Verdi",
            },
            {
                titre: "Ave Verum",
                auteur: "W.A. Mozart",
            },
            {
                titre: "Ay Luna",
                auteur: "Anonymous",
            },
            {
                titre: "Je parangonne au soleil que j'adore",
                auteur: "Anthoine de Bertrand",
            },
            {
                titre: "La foule",
                auteur: "Edith Piaf - Arr. Filipe Rodriguez",
            },
            {
                titre: "Famine Song",
                auteur: "VIDA - Arr. Matthew Culloton",
            },
            {
                titre: "Flow o my tears",
                auteur: "John Dowland",
            },
            {
                titre: "Weep, O mine eyes",
                auteur: "John Bennet",
            },
        ],
    },
]

export default function Kaleidoscope() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <Helmet>
                <title>Ensemble Syllepse - Kaléidoscope</title>
                <meta
                    name="description"
                    content="Programme Miroir créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Kaléidoscope"
                annee="2022"
                introduction={[
                    "Concert original interprété par huit chanteurs sous la direction d'Ophélia Besson. Présenté exclusivement en anglais, il est pensé comme un patchwork original à destination d'un public international. Explorant tout le répertoire vocal a cappella de la musique de la renaissance à la musique contemporaine en passant par les époques classique et romantique, l'Ensemble Vocal Syllepse fait participer le public et l'invite à intéragir.",
                    "Présenté 12 fois en 2022 et d'ores et déjà programmé jusqu'en 2024 à la Chapelle de la Trinité de Lyon en partenariat avec Alice Production, ce programme rencontre un grand succès et séduit le public anglophone !",
                ]}
                programme={progKaleidoscope}
                image={photoConcert}
                alt="Photo Syllepse Tours 2022"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
