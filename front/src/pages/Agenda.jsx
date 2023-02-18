//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../components/Navigation"
import Concert from "../components/Concert"
import PiedDePage from "../components/PiedDePage"
import { concerts } from "../data/concerts.js"
import { concertsAVenir } from "../functions/triFiltreConcerts.js"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleAgenda = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;
`
export default function Agenda() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleAgenda>
                <Helmet>
                    <title>Ensemble Syllepse - Agenda</title>
                    <meta
                        name="description"
                        content="Les dates de représentation de l'Ensemble Syllepse"
                    />
                </Helmet>
                <h1>Nos dates de représentation</h1>
                {concertsAVenir(concerts).map((concert, index) => {
                    return <Concert key={`${index}`} concert={concert} />
                })}
            </StyleAgenda>
            <PiedDePage />
        </React.Fragment>
    )
}
