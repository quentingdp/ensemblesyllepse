//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Carte from "../../components/Carte"
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoBenoitMorros from "../../images/photos/Benoit_Morros.jpg"
import photoNansDeJesus from "../../images/photos/Nans_De_Jesus.png"
import photoPaulineHervouet from "../../images/photos/Pauline_Hervouet.jpg"
import photoQuentinGuillon from "../../images/photos/Quentin_Guillon_de_Prince.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleContributeurs = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 89vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 50px;
    }
`
export default function Contributeurs() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleContributeurs>
                <Helmet>
                    <title>Ensemble Syllepse - Les contributeurs</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les personnes contribuant à faire grandir l'ensemble par d'autres moyens."
                    />
                </Helmet>
                <h1>Les contributeurs</h1>
                <h2>Création site internet</h2>
                <Carte
                    photo={photoQuentinGuillon}
                    nom="Quentin Guillon de Princé"
                    biographie={[
                        "Musicien depuis l'âge de 4 ans, jouant de la flûte traversière et du cor d'harmonie, Quentin poursuit également des études et une carrière d'ingénieur dans l'informatique de traitement des données.",
                        "Se professionnalisant dans le chant choral à partir de 2019 dans le pupitre de Ténor, et rejoignant l'ensemble Syllepse à sa création, il profite d'une reconversion professionnelle vers le développement web pour proposer à Syllepse de reprende la création et la maintenance de son site internet.",
                    ]}
                />
                <h2>
                    Photos, vidéos, prises de son et création des plaquettes
                </h2>
                <Carte
                    photo={photoBenoitMorros}
                    nom="Benoît Morros"
                    biographie={["Benoit MORROS, Photos et prises de sons"]}
                />
                <h2>Création des visuels pour les concerts</h2>
                <Carte
                    photo={photoNansDeJesus}
                    nom="Sarah Bordes"
                    biographie={[
                        "Sarah BORDES, création des visuels pour les concerts",
                    ]}
                />
                <h2>Création du logo</h2>
                <Carte
                    photo={photoPaulineHervouet}
                    nom="Pauline Hervouet"
                    biographie={[
                        "Artiste interprète alliant musique, théâtre et costume, Pauline Hervouet se forme très jeune aux métiers de la scène. Elle débute l'apprentissage des flûtes à bec auprès de Gwénaël Bihan au conservatoire de Saint-Étienne, puis avec Clémence Comte au CRR de Besançon.",
                        "Parallèlement à son cursus musical, elle explore le monde du théâtre dès le lycée, puis se forme au jeu d'acteur et à la mise en scène avec un DEUST suivi d'une licence en arts du spectacle à l'université de Franche-Comté. Son intérêt se resserre alors sur les questions du corps et du mouvement, ce qui l'amène à se former au métier de costumière. Elle obtient son Diplôme des Métiers d'Art à la Martinière Diderot de Lyon en 2017. Conjointement, Pauline approfondit sa pratique des flûtes à bec, et elle intègre la classe de Pierre Hamon au CNSMD de Lyon en 2019.",
                        "Ses différentes activités menées de front se recoupent et se nourrissent mutuellement. En costume comme en musique, il s'agit d'explorer une palette de couleurs, de chercher le geste, de saisir la structure. L'ensemble Les Æquinoxes, qu'elle fonde avec Clémentine Leduque au printemps 2020, lui permet d'approfondir son travail dans les deux disciplines. Depuis qu'elle sait écrire ou presque, Pauline Hervouet est également fascinée par la calligraphie, portée par son goût pour la précision et le mouvement, ainsi que sa curiosité des époques passées. Ainsi, elle a eu l'occasion de développer un style graphique personnel qui a attiré l'attention d'Ophélia Besson, qui la sollicite alors pour élaborer le logo de Syllepse.",
                    ]}
                />
            </StyleContributeurs>
            <PiedDePage />
        </React.Fragment>
    )
}
