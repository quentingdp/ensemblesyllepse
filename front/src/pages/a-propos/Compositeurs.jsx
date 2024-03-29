//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Carte from "../../components/Carte"
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoEmmanuelleDaCosta from "../../images/photos/Emmanuelle_Da_Costa.avif"
import photoEmmanuelleDaCostaDefaut from "../../images/photos/Emmanuelle_Da_Costa.avif"
import photoNansDeJesus from "../../images/photos/Nans_De_Jesus.avif"
import photoNansDeJesusDefaut from "../../images/photos/Nans_De_Jesus.avif"
import photoFilipeRodriguez from "../../images/photos/Filipe_Rodriguez.avif"
import photoFilipeRodriguezDefaut from "../../images/photos/Filipe_Rodriguez.avif"

export const StyleCompositeurs = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export default function Compositeurs() {
    return (
        <React.Fragment>
            <Navigation />
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
                    photoDefaut={photoEmmanuelleDaCostaDefaut}
                    nom="Emmanuelle Da Costa"
                    biographie={[
                        "Les échanges et collaborations avec les interprètes ont nourri l'écriture instrumentale et vocale d'Emmanuelle Da Costa, de même que les interactions de sa musique avec d'autres arts : aujourd'hui, elle s'intéresse particulièrement au spectacle vivant, et privilégie la rencontre avec d'autres créateurs : écrivains, performers, comédiens, artistes plasticiens, danseurs…",
                        "Elle a étudié la composition instrumentale et vocale auprès de Pascale Jakubowski ainsi que la direction de choeur avec Maëlle Defoin au CRR de Saint-Etienne. Elle obtient en parallèle un Master de Musicologie à l'Université Jean Monnet. Aujourd'hui, elle poursuit sa formation en composition au Conservatoire National Supérieur de Musique de Lyon avec David Chappuis et Luca Antignani, étudie la composition electroacoustique avec Diego Losa et prépare le Certificat d'Aptitude en composition instrumentale et vocale.",
                        "Elle a l'opportunité de collaborer à plusieurs reprises avec l'Institut Français d'Art Choral, avec la Maîtrise de Radio France, le Chœur et Orchestre des Jeunes - l'Orchestre des Champs-Élysées, la Maîtrise de la Loire, Voices 21C-Andre De Quadros, Canticum Novum, Festival Superspectives, l'EOC (Fabrique des sons) …",
                    ]}
                />
                <Carte
                    photo={photoNansDeJesus}
                    photoDefaut={photoNansDeJesusDefaut}
                    nom="Nans de Jesus"
                    biographie={[
                        "Compositeur aux multiples influences, Nans de Jesus s'est formé à diverses écoles : guitare flamenca, chanson, chant choral, musiques électroniques. Fasciné par les différentes expressions de la voix, des traditions vocales méditerranéennes aux harmonies du chant choral, par les musiques du XXème siècle et par l'arrivée de la synthèse sonore, il explore aujourd'hui diverses champs de compositions. La majorité de son travail se dirige vers l'image (courts métrages et jeux vidéos) où la musique électronique, le design sonore et l'expression vocale prennent une place centrale. Il réserve une partie de son travail à l'écriture chorale dans laquelle il livre une musique aux textures intenses et aux couleurs vives.",
                    ]}
                />
                <Carte
                    photo={photoFilipeRodriguez}
                    photoDefaut={photoFilipeRodriguezDefaut}
                    nom="Filipe Rodriguez"
                    biographie={[
                        "Filipe Rodriguez (1995) est un musicien suisse qui découvre la musique classique par le piano suivi de l'orgue à Payerne. Imprégné de l'art choral helvétique, il dirige, chante puis il suit ses premiers cours de composition en 2017 auprès du compositeur et organiste Valentin Villard. En 2019, Filipe est certifié facteur de pianos (réparateur et accordeur) à Lausanne et est admis au \"Conservatoire National Supérieur de Musique et Danse\" de Lyon (CNSMD) dans la classe de composition de David Chappuis.",
                        "Aujourd'hui, il est étudiant compositeur au CNSMD et travaille en tant qu'accordeur et réparateur de pianos professionnel. Sa musique mêle ses propres influences culturelles locales, tout en gardant le regard tourné vers l'actualité musicale. A Syllepse, Filipe chante en tant que ténor.",
                    ]}
                />
            </StyleCompositeurs>
            <PiedDePage />
        </React.Fragment>
    )
}
