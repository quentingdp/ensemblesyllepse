//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Carte from "../../components/Carte"
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoOlivierBizot from "../../images/photos/Olivier_Bizot.jpg"
import photoMichelBasset from "../../images/photos/Michel_Basset.jpg"
import photoBenoitMorros from "../../images/photos/Benoit_Morros.jpg"
import photoNansDeJesus from "../../images/photos/Nans_De_Jesus.png"
import photoPaulineHervouet from "../../images/photos/Pauline_Hervouet.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleContributeureuses = styled.main`
    padding: 15px;
    max-width: 2000px;
    min-height: 89vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function Contributeureuses() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleContributeureuses>
                <Helmet>
                    <title>Ensemble Syllepse - Les contributeureuses</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les personnes contribuant à faire grandir l'ensemble par d'autres moyens."
                    />
                </Helmet>
                <h1>Les contributeureuses</h1>
                <h2>Création site internet</h2>
                <Carte
                    photo={photoOlivierBizot}
                    nom="Olivier Bizot"
                    biographie={[
                        "Olivier Bizot est un chanteur nantais. Il débute le chant en 2014 au sein d'un groupe vocal, Babel Canto, pendant ses études de physique-chimie. Il envisageait d'enseigner en collège-lycée mais c'est en 2017, lorsqu'il arrête son Master 1 de Physique-Chimie, qu'il auditionne en chant lyrique au conservatoire de Nantes.",
                        "C'est après quelques mois de travail avec Natascha Siehoff, professeure de chant au CRR de Nantes, qu'il intègre la classe de chant en cycle 2 et commence à vraiment travailler sa voix.",
                        "Il a pratiqué la flûte traversière pendant 5 ans à son adolescence, puis commencé la guitare et la batterie avec un ami d'enfance. Pendant 3 ans, il est aussi bassiste d'un groupe de pop-rock, The Flooding Drops, enregistrant avec eux 2 EP.",
                        "Il décide donc de prendre des cours de guitare puis de piano avec Ronan le Lay, un professeur de musique multi-instrumentiste qui sera un élément déterminant dans son développement en tant que musicien. Il valide son cycle 2 et obtient l'admission au CNSMD de Lyon dans la classe de Mireille Delunsch en 2019.",
                        "Profitant d'un confinement lié à une épidémie de COVID-19, il s'intéresse à la création de sites internet. Voici donc la genèse de ce site qui est, nous l'espérons, esthétique et fonctionnel.",
                    ]}
                />
                <h2>
                    Photos, vidéos, prises de son et création des plaquettes
                </h2>
                <Carte
                    photo={photoMichelBasset}
                    nom="Michel Basset"
                    biographie={[
                        "Après un baccalauréat scientifique, Michel Basset entreprend des études de musique et musicologie à l'Université Lumière Lyon 2. Il y obtient une licence en 2016 et un master en musicologie fondamentale et appliquée en 2019.",
                        "Parallèlement à ses études universitaires, il entre en 2014 à l'ENM de Villeurbanne dans les classes de basse jazz de Jean-Noël Bériat et d'harmonie jazz de Pierre Baldy et de Gilbert Dojat. Il quitte le conservatoire en 2017 afin de se consacrer entièrement à la musicologie, non sans un CEM de formation musicale et un BEM d'écriture musicale.",
                        "Son intérêt pour la photographie et la vidéo se développe pendant son master et sa pratique de l'image occupe une place de plus en plus importante dans sa vie, jusqu'à le décider en avril 2019 à en faire sa profession.",
                        "De par sa formation, il est naturellement attiré par la photographie de concert et les reportages musicaux. Sa pratique photographique mêle l'argentique et le numérique, lui faisant ainsi passer à peu près autant de temps devant un écran que dans une chambre noire.",
                        "Parallèlement à ses travaux photo et vidéo visibles sur son site https://michelbasset.fr/, il garde contact avec la musique en donnant des cours de basse électrique et en gérant des ateliers musicaux au sein de l'association Tous à la musique ! (https://tousalamusique.com/) et joue de la basse et du synthétiseur dans le groupe de reprises de musiques de jeu vidéo Hollow Nest Orchestra.",
                    ]}
                />
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
                <h2>Maintenance du site internet</h2>
                <Carte
                    photo={photoNansDeJesus}
                    nom="Quentin Guillon de Princé"
                    biographie={[
                        "Quentin Guillon de Princé, Maintenance du site internet",
                    ]}
                />
            </StyleContributeureuses>
            <PiedDePage />
        </React.Fragment>
    )
}
