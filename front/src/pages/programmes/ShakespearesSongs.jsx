//Import de librairies externes
import React from "react"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/DSCF1280.avif"
import photoConcertDefaut from "../../images/photos/DSCF1280.avif"

const progShakespearesSongs = [
    {
        oeuvres: [
            {
                titre: "Flow my Tears",
                auteur: "John Dowland (1563-1626)",
            },
            {
                titre: "Shall I compare thee to a summer's day ?",
                auteur: "John Rutter (1945-)",
            },
            {
                titre: "Death hath deprived me",
                auteur: "Thomas Weelkes (1576-1623)",
            },
            {
                titre: "When Daisies Pied",
                auteur: "George Macfarren (1813-1887)",
            },
            {
                titre: "A new Groud",
                soliste: "Clavecin : Claire Meusnier",
                auteur: "Henry Purcell (1659-1695)",
            },
            {
                titre: "One Charming Night",
                soliste:
                    "Mezzo-soprano : Malo Cosset-Chéneau, Clavecin : Claire Meusnier",
                auteur: "Henry Purcell (1659-1695)",
            },
            {
                titre: "Though Amayllis Dance in green",
                auteur: "William Byrd (1539-1623)",
            },
            {
                titre: '"Full fathom Five" in Four Shakespeare Songs',
                auteur: "Jaakko Mantyjarvi (1963-)",
            },
            {
                titre: "Music for a While",
                soliste:
                    "Contre-ténor : Etienne Goulot-Martin, Clavecin : Claire Meusnier",
                auteur: "Henry Purcell (1659-1695)",
            },
            {
                titre: "Pavane Lord Lumley",
                soliste: "Clavecin : Claire Meusnier",
                auteur: "John Bull (1562-1628)",
            },
            {
                titre: "“Behold and see”, in Messiah",
                soliste: "Ténor : Benoit Morros, Clavecin : Claire Meusnier",
                auteur: "Georg Friedrich Haendel (1685-1759)",
            },
            {
                titre: "Fyer Fyer !",
                auteur: "Thomas Morley (1557-1602)",
            },
            {
                titre: "Weep O mine Eyes",
                auteur: "John Bennet (1575-1614)",
            },
            {
                titre: '"O Mistress mine" Sonnets XVIII, Shakespeare',
                auteur: "Nils Lindberg (1933-)",
            },
            {
                titre: "Chœurs finaux et air When I am Laid, in Didon et Énée",
                soliste:
                    "Soprano : Marilou Rolland, Clavecin : Claire Meusnier",
                auteur: "Henry Purcell (1659-1695)",
            },
        ],
    },
]

export default function ShakespearesSongs() {
    return (
        <React.Fragment>
            <Navigation />
            <Helmet>
                <title>Ensemble Syllepse - Shakespeare's songs</title>
                <meta
                    name="description"
                    content="Programme Shakespeare's songs créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Shakespeare's songs"
                annee="2021"
                effectif="Programme pour 12 chanteurs et cheffe de chœur"
                introduction={[
                    "Centré sur les mélodieux vers de WILLIAM SHAKESPEARE, Syllepse vous propose un voyage éclectique et poétique dans le temps, en réunissant des compositeurs d'aujourd'hui inspirés de son œuvre et des compositeurs ayant vécu à l'époque shakespearienne : DOWLAND, WEELKES, PURCELL, BIRD, JOHN BULL, HAENDEL et MORLEY côtoient le répertoire moderne de MACFARREN, LINDBERG et MANTYJARVI.",
                ]}
                programme={progShakespearesSongs}
                image={photoConcert}
                imageDefaut={photoConcertDefaut}
                alt="Concert Shakespeare's songs"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
