//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import logoHelloasso from "../../images/logo/logo-helloasso.png"

export const StyleSoutien = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 30px;

    p {
        margin: 15px 0px;
        text-align: center;
    }

    img {
        margin-top: 70px;
        height: 100px;
    }
`
export default function Soutien() {
    return (
        <React.Fragment>
            <Navigation />
            <StyleSoutien>
                <Helmet>
                    <title>Ensemble Syllepse - Nous soutenir</title>
                    <meta
                        name="description"
                        content="Soutenir financièrement l'Ensemble Syllepse : pourquoi et comment?"
                    />
                </Helmet>
                <h1>Nous soutenir</h1>
                <p>
                    L'ensemble vocal a un objectif d'envergure : faire vivre
                    toutes les personnes y contribuant. Nous y sommes toutes et
                    tous très investis et avons la chance de recevoir des
                    subventions de divers organismes mais cela ne suffit pas
                    encore. Pour que l'ensemble aille plus loin, nous avons
                    besoin de vous.
                </p>
                <p>
                    Syllepse est une association à but non lucratif reconnue
                    d'intérêt général. Cela implique que vos dons peuvent être
                    exonérés de vos impôts à hauteur de 66% (Pour exemple, un
                    don de 100€ pour l'Ensemble Syllepse reviendra au final à
                    34€ pour la personne donatrice.). Chaque don est assurément
                    précieux pour nous et ce, peu importe le montant. Pour nous
                    soutenir, nous utilisons la plateforme HelloAsso, que vous
                    pouvez retrouver dans le lien ci-dessous, ainsi qu'en bas
                    des pages du site.
                </p>
                <a href="https://www.helloasso.com/associations/ensemble-vocal-syllepse/">
                    <img src={logoHelloasso} alt="Page HelloAsso de Syllepse" />
                </a>
            </StyleSoutien>
            <PiedDePage />
        </React.Fragment>
    )
}
