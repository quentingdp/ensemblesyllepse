//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Carte from "../../components/Carte"
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoEmmanuelleDaCosta from "../../images/photos/Emmanuelle_Da_Costa.avif"
import photoNansDeJesus from "../../images/photos/Nans_De_Jesus.png"
import photoInconnue from "../../images/logo/image_par_defaut.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleCompositeurs = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function Compositeurs() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleCompositeurs>
                <Helmet>
                    <title>Ensemble Syllepse - Les compositeurs</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les compositrices et compositeurs ayant créé des oeuvres interprétées par l'ensemble."
                    />
                </Helmet>
                <h1>Les compositeurs</h1>
                <Carte
                    photo={photoEmmanuelleDaCosta}
                    nom="Emmanuelle Da Costa"
                    biographie={[
                        "Les échanges et collaborations avec les interprètes ont nourri l'écriture instrumentale et vocale d'Emmanuelle Da Costa, de même que les interactions de sa musique avec d'autres arts : aujourd'hui, elle s'intéresse particulièrement au spectacle vivant, et privilégie la rencontre avec d'autres créateurs : écrivains, performers, comédiens, artistes plasticiens, danseurs…",
                        "Elle a étudié la composition instrumentale et vocale auprès de Pascale Jakubowski ainsi que la direction de choeur avec Maëlle Defoin au CRR de Saint-Etienne. Elle obtient en parallèle un Master de Musicologie à l'Université Jean Monnet. Aujourd'hui, elle poursuit sa formation en composition au Conservatoire National Supérieur de Musique de Lyon avec David Chappuis et Luca Antignani, étudie la composition electroacoustique avec Diego Losa et prépare le Certificat d'Aptitude en composition instrumentale et vocale.",
                        "Elle a l'opportunité de collaborer à plusieurs reprises avec l'Institut Français d'Art Choral, avec la Maîtrise de Radio France, le Chœur et Orchestre des Jeunes - l'Orchestre des Champs-Élysées, la Maîtrise de la Loire, Voices 21C-Andre De Quadros, Canticum Novum, Festival Superspectives, l'EOC (Fabrique des sons) …",
                    ]}
                />
                <Carte
                    photo={photoNansDeJesus}
                    nom="Nans de Jesus"
                    biographie={[""]}
                />
                <Carte
                    photo={photoInconnue}
                    nom="Filipe Rodriguez"
                    biographie={[""]}
                />
            </StyleCompositeurs>
            <PiedDePage />
        </React.Fragment>
    )
}
