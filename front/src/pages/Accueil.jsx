//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import PiedDePage from "../components/PiedDePage"
import Navigation from "../components/Navigation"
import logoSyllepse from "../images/logo/LogoSyllepseEnsembleVocal_blanc.png"
import photoPageAccueil from "../images/photos/Syllepse-page-d-accueil.jpg"
import photoPresentationSyllepse from "../images/photos/photo-presentation-syllepse.jpg"
import photoDescriptionQuestSyllepse from "../images/photos/photo-description-qu-est-ce-qu-est-syllepse.jpg"

const StyleEnteteAccueil = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background-image: url(${photoPageAccueil});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .menu-logo {
        height: 200px;
        max-height: 80vh;
        margin-top: 5vh;
    }
`

export const StyleAccueil = styled.main`
    padding: 15px;
    max-width: 2000px;
    min-height: 89vh;
    margin: auto;

    .presentation-avec-photo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px 0px;

        &-image {
            width: 100%;
            object-fit: cover;
            margin: 15px 0px;
        }

        &-description {
            padding: 0px 20px;
        }
    }

    .presentation-texte {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        margin-bottom: 30px;

        &-description {
            margin: 15px 0px;
        }

        &-deux-colonnes {
            margin: 20px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            @include pour-mobile {
                flex-direction: column;
            }
        }

        &-colonne-description {
            width: 55%;

            p {
                margin-top: 5px;
                margin-bottom: 20px;
            }

            @include pour-mobile {
                width: 100%;
            }
        }

        &-colonne-visuel {
            width: 35%;

            @include pour-mobile {
                width: 100%;
            }

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .presentation-cartes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .presentation-portrait {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 20%;
        }

        article {
            width: 80%;
            text-align: center;
            padding: 0 200px;
        }

        .presentation-description {
            margin: 20px 0;
        }
    }
`
export default function Accueil() {
    return (
        <React.Fragment>
            <StyleEnteteAccueil>
                <img
                    className="menu-logo"
                    src={logoSyllepse}
                    alt="Logo Ensemble Syllepse"
                />
            </StyleEnteteAccueil>
            <Navigation />
            <StyleAccueil>
                <Helmet>
                    <title>Ensemble Syllepse</title>
                    <meta
                        name="description"
                        content="Page de présentation de l'Ensemble Syllepse, un jeune chœur mixte a cappella lyonnais constitué de chanteurs aguerris et regroupés autour de la cheffe Ophélia Besson."
                    />
                </Helmet>
                <article className="presentation-avec-photo">
                    <h1 className="presentation-avec-photo-titre">Syllepse</h1>
                    <img
                        className="presentation-avec-photo-image"
                        src={photoPresentationSyllepse}
                        alt="Présentation de l'Ensemble Syllepse"
                    />
                    <p className="presentation-avec-photo-description">
                        Syllepse est un jeune ensemble vocal lyonnais constitué
                        de 30 chanteurs aguerris, regroupés autour de la cheffe
                        Ophélia Besson. Chœur mixte a cappella, il fait le pari
                        d'associer musiques anciennes et contemporaines à
                        destination d'un large public. Réuni pour la première
                        fois en 2020 pour un programme Shakespearien, le chœur
                        Syllepse fait résonner la musique d'antan et celle
                        d'aujourd'hui. Le plaisir, la beauté alliés à l'exigence
                        sont les lignes de force de l'ensemble vocal Syllepse.
                        L'ensemble vocal est géré par une association d'intérêt
                        général de promotion culturelle du même nom (voir
                        l'onglet « nous soutenir »)
                    </p>
                </article>
                <article className="presentation-texte">
                    <h2 className="presentation-texte-titre">Signification</h2>
                    <p className="presentation-texte-description">
                        Syllepse, qui nous vient du grec ancien : σύλληψις, qui
                        signifie littéralement : « action de prendre ensemble,
                        de comprendre, d'embrasser ».
                    </p>
                    <ul className="presentation-texte-deux-colonnes">
                        <li className="presentation-texte-colonne-description">
                            <ul>
                                <li>
                                    <h3>Prendre ensemble</h3>
                                    <p>
                                        Un chœur c'est avant tout une multitude
                                        d'individus qui s'unissent et qui
                                        s'emparent d'un projet artistique. C'est
                                        trouver une unité dans la diversité.
                                    </p>
                                </li>
                                <li>
                                    <h3>Comprendre</h3>
                                    <p>
                                        Sans cesse chercher à comprendre.
                                        Comprendre un son, comprendre une
                                        résonance, un phénomène acoustique.
                                        Comprendre ce qui relie deux époques
                                        opposées dans l'histoire de la musique.
                                        Chercher à comprendre ce qui nous anime,
                                        ce qui nous unit. Comprendre ce langage
                                        universel qu'est la musique.
                                    </p>
                                </li>
                                <li>
                                    <h3>Embrasser</h3>
                                    <p>
                                        Embrasser un répertoire, un même désir,
                                        une exigence commune, pour s'élever
                                        ensemble. Adopter et choisir une musique
                                        pour la partager avec le public.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li className="presentation-texte-colonne-visuel">
                            <img
                                src={photoDescriptionQuestSyllepse}
                                alt="Concert de Syllepse"
                            />
                        </li>
                    </ul>
                </article>
            </StyleAccueil>
            <PiedDePage />
        </React.Fragment>
    )
}
