//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import { effectif } from "../../functions/effectif.js"
import { choristes } from "../../data/choristes.js"
import photoDescriptionQuestSyllepse from "../../images/photos/DSCF1280.avif"
import photoDescriptionQuestSyllepseDefaut from "../../images/photos/DSCF1280.jpg"

export const StyleEnsembleSyllepse = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    text-align: center;

    .presentation-texte {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        margin-bottom: 30px;

        &-description {
            margin: 15px 0px;
            text-align: center;
        }
    }

    .deux-colonnes {
        margin: 20px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        &-description {
            width: 50%;

            p {
                margin-top: 5px;
                margin-bottom: 20px;
            }
        }

        &-visuel {
            width: 45%;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    @media (max-width: 768px) {
        .deux-colonnes {
            flex-direction: column;

            &-description {
                width: 100%;
            }

            &-visuel {
                width: 100%;
            }
        }
    }
`
export default function EnsembleSyllepse() {
    return (
        <React.Fragment>
            <Navigation />
            <StyleEnsembleSyllepse>
                <Helmet>
                    <title>
                        Ensemble Syllepse - Présentation de l'ensemble
                    </title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons l'ensemble."
                    />
                </Helmet>
                <h1>L'ensemble Syllepse</h1>
                <article className="presentation-texte">
                    <h2>Une identité forte</h2>
                    <p className="presentation-texte-description">
                        Créé par Ophélia Besson à Lyon au printemps 2020,
                        Syllepse est un ensemble vocal a cappella à géométrie
                        variable composé de {effectif(choristes)} jeunes
                        choristes originaires de toute la France. Il fait le
                        pari d'associer musiques anciennes et contemporaines à
                        destination d'un large public. Chaque projet est unique
                        dans sa formation allant du un par voix au grand choeur.
                    </p>
                    <p className="presentation-texte-description">
                        Le temps arrêté du confinement a permis au projet de
                        s'imaginer. C'est un ensemble collaboratif qui a fédéré
                        et rassemblé de jeunes artistes en quête de sens voulant
                        se professionnaliser.
                    </p>
                    <p className="presentation-texte-description">
                        Depuis son origine, le chœur s'inscrit dans une vision
                        moderne de l'art choral et cherche de nouveaux rapports
                        entre la scène, le public et les artistes, notamment
                        avec un travail de mise en scène et de fusion des arts.
                        Chaque choriste contribue au développement artistique et
                        créatif de l'ensemble. La place de la cheffe est
                        plurielle et ne tient pas nécessairement un rôle
                        central, ni frontal.
                    </p>
                    <p className="presentation-texte-description">
                        L'humain est au cœur du projet.
                    </p>
                </article>
                <div className="deux-colonnes">
                    <article className="deux-colonnes-description">
                        <ul>
                            <li>
                                <h3>Prendre ensemble</h3>
                                <p>
                                    Un chœur est avant tout un groupe
                                    d'individus qui s'unissent et qui s'emparent
                                    d'un projet artistique. Il s'agit de trouver
                                    une unité dans la diversité.
                                </p>
                            </li>
                            <li>
                                <h3>Comprendre</h3>
                                <p>
                                    Sans cesse chercher à comprendre. Comprendre
                                    un son, comprendre une résonance, un
                                    phénomène acoustique. Comprendre ce qui
                                    relie les différents styles de l'histoire de
                                    la musique entre eux. Chercher à comprendre
                                    ce qui nous anime, ce qui nous unit.
                                    Comprendre ce langage universel qu'est la
                                    musique.
                                </p>
                            </li>
                            <li>
                                <h3>Embrasser</h3>
                                <p>
                                    Embrasser un répertoire, un même désir, une
                                    exigence commune, pour s'élever ensemble.
                                    Adopter et choisir une musique pour la
                                    partager avec le public.
                                </p>
                            </li>
                        </ul>
                    </article>
                    <div className="deux-colonnes-visuel">
                        <picture>
                            <source srcSet={photoDescriptionQuestSyllepse} />
                            <img
                                src={photoDescriptionQuestSyllepseDefaut}
                                alt="Concert de Syllepse"
                            />
                        </picture>
                    </div>
                </div>
                <article className="presentation-texte">
                    <h2>Le talent au service de l'ambition</h2>
                    <p className="presentation-texte-description">
                        Ensemble vocal à visée internationale, moderne et
                        coopératif, Syllepse connait en moins de 2 ans une
                        rapide ascension avec déjà à son actif : 4 créations de
                        spectacles, plus de 40 concerts et des productions dans
                        5 festivals.
                    </p>
                    <p className="presentation-texte-description">
                        L'ensemble a édité un EP : Shakespeare's Songs ainsi
                        qu'un album : Nuits - Conte musical (Livre-CD). Suite à
                        son succès au Festival International du Florilège Vocal
                        de Tours en Juin 2022, Syllepse a reçu plusieurs
                        invitations de festivals (Vaison-la-Romaine, FestyVocal
                        - Firminy, etc.).
                    </p>
                    <p className="presentation-texte-description">
                        Afin de porter au plus haut l'exigence musicale et
                        artistique, Ophélia Besson invite à chaque projet des
                        personnalités reconnues : chefs de chœur (Lionel Sow,
                        Christophe Grapperon, Régine Théodoresco), metteur en
                        scène (Jean Lacornerie), poète (Jean-A. Massard),
                        comédiens, danseurs. Syllepse s'entoure de compositeurs
                        contemporains (Emmanuelle Da Costa, Ritz Rakotomalala,
                        Eric Lebrun, Filipe Rodriguez) en passant des commandes
                        et facilite l'essor d'œuvres originales.
                    </p>
                    <p className="presentation-texte-description">
                        Commandé par Syllepse auprès du compositeur Nans de
                        Jésus, le cycle Fureur et mystère a été créé en novembre
                        2022, lors des concerts “Chants et Poésies”,
                        subventionnés par la DRAC Auvergne-Rhône-Alpes.
                    </p>
                </article>
            </StyleEnsembleSyllepse>
            <PiedDePage />
        </React.Fragment>
    )
}
