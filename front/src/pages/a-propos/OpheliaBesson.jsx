//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoDirectionOphelia from "../../images/photos/Ophelia_direction.png"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleOpheliaBesson = styled.main`
    padding: 15px;
    max-width: 2000px;
    min-height: 89vh;
    margin: auto;
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
`
export default function OpheliaBesson() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleOpheliaBesson>
                <Helmet>
                    <title>Ensemble Syllepse - Ophélia Besson</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons Ophélia Besson, la cheffe de coeur et directrice artistique de l'ensemble."
                    />
                </Helmet>
                <img
                    src={photoDirectionOphelia}
                    alt="Direction d'Ophélia Besson"
                />
                <article>
                    <h1>Ophélia Besson</h1>
                    <p className="sous-titre">Direction artistique</p>
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
                        Depuis le début de ses études de direction de choeur,
                        Ophélia a eu l'opportunité d'étudier auprès de Lionel
                        Sow, Roland Hayrabedian, Nicole Corti, Régine
                        Théodoresco, Geoffroy Jourdain, Christophe Grapperon,
                        Robert Ingari, Leslie Peeters, Bernard Têtu… Elle a été
                        chanteuse et cheffe assistante de Mikrokosmos, dirigé
                        par Loïc Pierre.
                    </p>
                </article>
            </StyleOpheliaBesson>
            <PiedDePage />
        </React.Fragment>
    )
}
