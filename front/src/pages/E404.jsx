//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../components/Navigation"
import PiedDePage from "../components/PiedDePage"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleE404 = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 90vh;
    margin: auto;
    text-align: center;

    h1 {
        margin: 100px 0;
    }

    .menu-reduit {
        position: sticky;
        top: 0px;
    }
`
export default function E404() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleE404>
                <Helmet>
                    <title>Ensemble Syllepse - Page introuvable</title>
                    <meta
                        name="description"
                        content="Page 404 de l'Ensemble Syllepse"
                    />
                </Helmet>
                <h1>Erreur 404</h1>
                <p>
                    La page que vous avez demandé n'existe pas. Vous pouvez
                    utiliser la barre de navigation pour atteindre une des pages
                    souhaitées.
                </p>
            </StyleE404>
            <PiedDePage />
        </React.Fragment>
    )
}
