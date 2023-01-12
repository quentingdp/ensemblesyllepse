//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Carte from "../../components/Carte"
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoBernardMirabel from "../../images/photos/Bernard_Mirabel.jpg"
import photoYvesGosselin from "../../images/photos/Yves_Gosselin.jpg"
import photoOlivierWalter from "../../images/photos/Olivier_Walter.jpg"
import photoNansDeJesus from "../../images/photos/Nans_De_Jesus.png"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleAssociation = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 89vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function Association() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleAssociation>
                <Helmet>
                    <title>Ensemble Syllepse - L'association</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les membres de l'association permettant de faire vivre et rayonner l'ensemble."
                    />
                </Helmet>
                <h1>L'association</h1>
                <Carte
                    photo={photoBernardMirabel}
                    nom="Bernard Mirabel"
                    biographie={[
                        "Né en 1955, il vit à Chaponost dans l'ouest Lyonnais. Il est marié, a 4 enfants et 4 petits enfants. Retraité depuis janvier 2020, il a travaillé dans l'ingénierie industrielle en tant qu'ingénieur/chef de projets. Depuis son enfance il baigne dans la musique comme trompettiste d'abord, puis joueur d'euphonium tout en étant président d'une école de musique. Il s'est tourné ensuite vers le chant choral et a eu la joie de travailler avec Bernard Tétu aux Chœurs universitaires de Lyon, puis au Chœur Fidélia de Ste Foy-lès-Lyon, au Tourdion de Brignais dirigé par Ophélia (entre 2017 à 2019) et depuis 2019 au Chœur Harmonia Chorus à la Tour du Pin dirigé aussi par Ophélia. Ses autres passions sont la randonnée à pied ou en vélo, la course à pied et la gymnastique d'entretien, ainsi que les voyages. Il souhaite apporter un peu de son expérience et de sa passion pour le chant choral en aidant Ophélia à la création et au développement de l'association « Ensemble vocal Syllepse ».",
                    ]}
                />
                <Carte
                    photo={photoYvesGosselin}
                    nom="Yves Gosselin"
                    biographie={[
                        "Baroudeur, sportif et mélomane, Yves Gosselin est retraité depuis septembre 2020. Il a deux passions : la musique et le sport et plus précisément le jazz et l'escalade. Fortement marqué par ses trois années passées à New York dans les années 1980, il est bénévole au club de jazz de la « Clef de Voute » à Lyon de 2003 à 2014. En 2006, il participe à la création de l'association d'intérêt général VERRAMUSE dite « de solidarité et d'accompagnement musical » basée à Lyon dont l'objet est la démocratisation de la pratique musicale auprès des adolescents relevant de l'éducation prioritaire. Professeur d'EPS au Lycée Français de Tunis jusqu'en juin 2020, il Préside l'association Ahkili jazz qui, en mars 2019, a organisé le festival de Jazz « Nights in Tunisia ». De retour à Lyon, il souhaite découvrir un nouvel environnement, celui du chant choral, en apportant son expérience associative à la création et au développement de l'association « Ensemble vocal Syllepse ».",
                    ]}
                />
                <Carte
                    photo={photoOlivierWalter}
                    nom="Olivier Walter"
                    biographie={[
                        "Professeur de mathématiques retraité, il a grandi dans une famille nombreuse modeste mais au sein de laquelle la musique et le partage étaient des valeurs vivantes. Il a été ainsi au contact du chant choral et de la musique des grands compositeurs, au premier plan desquels BACH. Il a découvert la guitare enfant, et c'est devenu une compagne au fil des ans. Il pratique également le chant dans un chœur lyonnais (ROMANTICO). Parallèlement à cela, il est depuis très longtemps passionné d'informatique (scientifique, musicale, artistique, sites web). Ce qui l'a amené à se pencher vers la prise de son qu'il pratique maintenant régulièrement, entre autres pour SYLLEPSE. Il est également grand amateur de photo de nature. Et il fut un alpiniste assidu, reconverti, l'âge l'imposant, à la via ferrata.",
                    ]}
                />
                <Carte
                    photo={photoNansDeJesus}
                    nom="Dewy Besson"
                    biographie={[""]}
                />
                <Carte
                    photo={photoNansDeJesus}
                    nom="Isabelle Poirier-Coutansais"
                    biographie={[""]}
                />
            </StyleAssociation>
            <PiedDePage />
        </React.Fragment>
    )
}
