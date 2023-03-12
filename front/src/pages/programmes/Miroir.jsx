//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/Miroir.avif"
import photoConcertDefaut from "../../images/photos/Miroir.avif"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

const progMiroir = [
    {
        titre: "Musique de la Renaissance",
        oeuvres: [
            {
                titre: "Hope of my heart",
                auteur: "John Ward",
            },
            {
                titre: "Madrigaux - Si ch'io vorrei morire",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "Madrigaux - Io mi son giovinetta",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "Madrigaux - Anima mia perdona",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "Le chant des oiseaux",
                auteur: "Clément Janequin",
            },
        ],
    },
    {
        titre: "Musique Contemporaine",
        oeuvres: [
            {
                titre: "Création",
                auteur: "Emmanuelle Da Costa",
                info: "Commande de l'Ensemble Vocal Syllepse qui sera livrée en avril 2023",
            },
            {
                titre: "La foule, Edith Piaf",
                auteur: "Réécriture de Anna Gallon",
                info: "Commande de l'Ensemble Vocal Syllepse, création mondiale",
            },
            {
                titre: "3 extraits des Musaïchœur",
                auteur: "Guy Reibel",
                info: "Poil à gratter - Astigmate - L'alouette (avec participation du public)",
            },
            {
                titre: "Lux ultima",
                auteur: "Nans de Jésus",
                info: "Commande de l'Ensemble Vocal Syllepse, création mondiale",
            },
            {
                titre: "Venez à Nous",
                auteur: "Nans de Jésus",
                info: "Commande de l'Ensemble Vocal Syllepse",
            },
            {
                titre: "Les cris de Paris",
                auteur: "Janequin",
                info: "Réécriture en français moderne par l'Ensemble Vocal Syllepse, création mondiale",
            },
            {
                titre: "Des myriades de gouttes",
                auteur: "Emmanuelle Da Costa",
                info: "Commande de l'Ensemble Vocal Syllepse",
            },
        ],
    },
]

export default function Miroir() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <Helmet>
                <title>Ensemble Syllepse - Miroir</title>
                <meta
                    name="description"
                    content="Programme Miroir créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Miroir"
                annee="2023"
                introduction={[
                    "Sélectionné par la Cité de la Voix pour participer aux résidences estivales destinées aux jeunes ensembles professionnels, l'Ensemble Vocal Syllepse présentera en juillet 2023 un programme mêlant musique de la renaissance et musique contemporaine.",
                    "Musique de la Renaissance : 20’",
                    "Fasciné par la musique de la Renaissance et sa capacité à être une musique moderne et innovante, l'Ensemble Vocal Syllepse vous présente un programme européen avec la musique de CLAUDIO MONTEVERDI (Italie), CLÉMENT JANEQUIN (France) et JOHN WARD (Angleterre). Ces trois compositeurs ont un même désir : Servir et mettre en valeur le texte par leur musique, quitte à faire fi des lois d'écriture !",
                    "Musique Contemporaine : 35’",
                    "Chanter la musique d'aujourd'hui et mettre en valeur sa diversité est un désir de l'Ensemble Vocal Syllepse. Découvrez les effets de textures d'EMMANUELLE DA COSTA, la recherche émotionnelle et poétique de NANS DE JESUS, les jeux vocaux de GUY REIBEL, une composition sur le thème de la foule d'ANNA GALLON et enfin une réécriture des Cris de Paris de JANEQUIN en collaboration avec un jeune Rappeur : TRISTAN GAILLARD !",
                ]}
                programme={progMiroir}
                image={photoConcert}
                imageDefaut={photoConcertDefaut}
                alt="Programme Miroir"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
