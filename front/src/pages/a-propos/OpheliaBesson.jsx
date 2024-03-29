//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoOphelia from "../../images/photos/DSCF1169.avif"
import photoOpheliaDefaut from "../../images/photos/DSCF1169.jpg"

export const StyleOpheliaBesson = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .titre {
        align-self: center;
        margin-top: 30px;
        margin-bottom: 100px;
    }

    .sous-titre {
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 1em;
    }

    .deux-colonnes {
        margin: 20px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        &-description {
            width: 40%;

            p {
                margin-top: 5px;
                margin-bottom: 20px;
            }
        }

        &-visuel {
            width: 55%;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    article {
        margin: auto;
        margin-top: 10px;
        margin-bottom: 30px;
        width: 60%;
        text-align: center;
    }

    h2 {
        margin-bottom: 50px;
    }

    .presentation-description {
        margin: 20px 0;
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

        article {
            width: unset;
        }
    }
`
export default function OpheliaBesson() {
    return (
        <React.Fragment>
            <Navigation />
            <StyleOpheliaBesson>
                <Helmet>
                    <title>Ensemble Syllepse - Ophélia Besson</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons Ophélia Besson, la cheffe de chœur et directrice artistique de l'ensemble."
                    />
                </Helmet>
                <div className="titre">
                    <h1>Ophélia Besson</h1>
                    <p className="sous-titre">Direction artistique</p>
                </div>
                <div className="deux-colonnes">
                    <article className="deux-colonnes-description">
                        <p className="presentation-description">
                            Ophélia Besson, directrice artistique et cheffe de chœur
                            de l'Ensemble Vocal Syllepse, est étudiante au CNSMD de
                            Lyon en double Master dans la classe de Direction de
                            Chœur de Lionel Sow et dans la classe de Pédagogie -
                            Formation au Certificat d'Aptitude (CA).
                        </p>
                        <p className="presentation-description">
                            Elle entre dès 2006 à la Maîtrise de l'Opéra de Lyon et
                            au CRR de Lyon. Elle obtient un Diplôme d'Études
                            Musicales de Violon, de Formation Musicale, ainsi qu'un
                            Certificat d'Études Musicales de Piano et d'Écriture.
                        </p>
                        <p className="presentation-description">
                            Depuis le début de ses études de direction de chœur,
                            Ophélia a eu l'opportunité d'étudier auprès de Lionel
                            Sow, Roland Hayrabedian, Nicole Corti, Régine
                            Théodoresco, Geoffroy Jourdain, Christophe Grapperon,
                            Robert Ingari, Leslie Peeters, Bernard Têtu… Elle a été
                            chanteuse et cheffe assistante de Mikrokosmos, dirigé
                            par Loïc Pierre.
                        </p>
                        <p className="presentation-description">
                            Cheffe déterminée, solaire, enjouée et chaleureuse,
                            cette déclaration d'Ophélia définit bien son action et
                            son idéal :
                        </p>
                        <p className="presentation-description">
                            « L'émotion, l'enthousiasme et la magie du spectacle
                            m'animent depuis toujours. Je suis convaincue que la
                            joie nous donne une force collective pour parvenir à une
                            exigence musicale, artistique et humaine. Voici ma quête
                            constante : allier exigence, plaisir, et partage! »
                        </p>
                    </article>
                    <div className="deux-colonnes-visuel">
                        <picture>
                            <source srcSet={photoOphelia} />
                            <img
                                src={photoOpheliaDefaut}
                                alt="Ophélia Besson"
                            />
                        </picture>
                    </div>
                </div>
                <article>
                    <h2>« Syllepse est un ensemble vocal collaboratif »</h2>
                    <p className="presentation-description">
                        Ophélia Besson fonde en 2020 l'Ensemble Vocal Syllepse
                        qui reflète le dynamisme et l'originalité de la jeune
                        cheffe. Son ambition est de faire rayonner l'art choral
                        avec son ensemble dans le paysage culturel régional,
                        puis, à terme au plan national et international, en le
                        diffusant auprès de tous les publics.
                    </p>
                    <p className="presentation-description">
                        Par son travail et son implication inlassables, elle a
                        été sélectionnée parmi plus de 50 candidats et a
                        participé au stage de direction de chœur avec l'Ensemble
                        AEDES auprès de Mathieu Romano et Grete Pedersen (Abbaye
                        de Reigny, lors des rencontres musicales de Vézelay en
                        août 2021).
                    </p>
                    <p className="presentation-description">
                        Remarquée lors du Florilège Vocal de Tours 2022, Ophélia
                        est invitée à collaborer avec Roland Hayrabedian à
                        Musicatreize. Elle est également invitée par Simon Kim
                        Phipps pour diriger le Svenska Kammarkören en Suède à
                        l'automne 2023.
                    </p>
                    <p className="presentation-description">
                        Au cours de la saison 2023, Ophélia a été retenue par
                        les Centres Nationaux d'Art Vocal pour participer à
                        l'académie itinérante de direction de Chœur auprès de
                        Musicatreize, Spirito, Les Éléments, Accentus et le
                        Jeune Chœur de Paris.
                    </p>
                </article>
            </StyleOpheliaBesson>
            <PiedDePage />
        </React.Fragment>
    )
}
