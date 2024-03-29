//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Carte from "../../components/Carte"
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoBenoitMorros from "../../images/photos/Benoit_Morros.avif"
import photoBenoitMorrosDefaut from "../../images/photos/Benoit_Morros.jpg"
import photoPaulineHervouet from "../../images/photos/Pauline_Hervouet.avif"
import photoPaulineHervouetDefaut from "../../images/photos/Pauline_Hervouet.jpg"
import photoQuentinGuillon from "../../images/photos/Quentin_Guillon_de_Prince.avif"
import photoQuentinGuillonDefaut from "../../images/photos/Quentin_Guillon_de_Prince.jpg"
import photoSarahBordes from "../../images/photos/Sarah_Bordes.avif"
import photoSarahBordesDefaut from "../../images/photos/Sarah_Bordes.jpg"
import photoDefaut from "../../images/logo/image_par_defaut.jpg"

export const StyleContributeurs = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        margin-bottom: 50px;
    }
`
export default function Contributeurs() {
    return (
        <React.Fragment>
            <Navigation />
            <StyleContributeurs>
                <Helmet>
                    <title>Ensemble Syllepse - Les contributeurs</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les personnes contribuant à faire grandir l'ensemble par d'autres moyens."
                    />
                </Helmet>
                <h1>Les contributeurs</h1>
                <h2>Chef assistant</h2>
                <Carte
                    photo={photoDefaut}
                    photoDefaut={photoDefaut}
                    nom="Jean Fortunier-Cateland"
                    biographie={[
                        "Jean Fortunier-Cateland découvre le chœur lors de sa scolarité à la Maîtrise de la Loire où il étudie la technique vocale, le chant choral, l’accompagnement au piano, la composition et la direction de chœur. Parallèlement à des études littéraires en classe préparatoire puis à l’Ecole normale supérieure de la rue d'Ulm, il poursuit sa formation musicale au CRR de Boulogne-Billancourt puis au CNSMD de Lyon dans la classe de Christophe Grapperon.",
                        "Il est le fondateur et chef de l’Ensemble vocal de l’ENS, composé d’une vingtaine de chanteur·euses, qui a pour ambition d’explorer la recherche-création appliquée au domaine choral.",
                        "Il a eu l’opportunité de travailler avec des chef·fes tel·les que Mathieu Romano, Martina Batič, Marianne Guengard, Nils Schweckendiek ou Régine Théodoresco. Soucieux de toujours élargir sa pratique artistique, il s’engage régulièrement dans des projets interdisciplinaires aux côtés de comédien·nes, de metteur·euses en scène et de danseur·euses.",
                    ]}
                />
                <h2>Création site internet</h2>
                <Carte
                    photo={photoQuentinGuillon}
                    photoDefaut={photoQuentinGuillonDefaut}
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
                    photoDefaut={photoBenoitMorrosDefaut}
                    nom="Benoit Morros"
                    biographie={[
                        "Chanteur Lyrique soliste, Benoit Morros s'occupe pour l'ensemble Syllepse de la prise de son, de la régie lumière sur les programmes mis en scène, en supplément de son investissement dans l'association.",
                    ]}
                />
                <h2>Création des visuels pour les concerts</h2>
                <Carte
                    photo={photoSarahBordes}
                    photoDefaut={photoSarahBordesDefaut}
                    nom="Sarah Bordes"
                    biographie={[
                        "En parallèle de ses formations et explorations variées dans les arts du chant, du piano, du théâtre, de la mise en scène, du conte, de la littérature ou encore de la danse contemporain, Sarah s'exerce depuis l'enfance en autodidacte aux arts graphiques.",
                        "Elle explore diverses techniques, calligraphie peinture ou dessin, craie, aquarelle, stylo à encre de chine, acrylique, mais également différents supports : papiers variés, carton, tissus, bois, fresque murales, mais également peau à travers le maquillage, le body painting ou encore l'art du tatouage auquel elle commence tout juste à s'initier. Son style s'attache généralement à un univers de figures clownesques mi humaines mi végétales.",
                        "Ayant à cœur dans son expression artistique de mettre en valeur la porosité des formes d'expression artistique, qui se nourrissent et s'enrichissent toutes les unes des autres dans son parcours, elle utilise son amour des arts plastiques graphiques lors de projets transversaux, comme la mise en scène de son spectacle musical et théâtral autour de la poésie de Jacques Prévert avec la compagnie sur qui Conter, la réalisation d'affiches et de visuels pour cette même compagnie ainsi que pour l'ensemble vocal Syllepse dans lequel elle chante, ou encore la participation à un clip de l'artiste Llimace.",
                    ]}
                />
                <h2>Création du logo</h2>
                <Carte
                    photo={photoPaulineHervouet}
                    photoDefaut={photoPaulineHervouetDefaut}
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
