//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../components/Navigation"
import Concert from "../components/Concert"
import PiedDePage from "../components/PiedDePage"
import { concerts } from "../data/concerts.js"
import {
    concertsAVenir,
    concertsPasses,
} from "../functions/triFiltreConcerts.js"

export const StyleAgenda = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;

    h2 {
        margin-top: 90px;
    }

    @media (min-width: 768px) and (max-width: 992px) {
        h2 {
            margin-top: 80px;
        }
    }

    @media (max-width: 768px) {
        h2 {
            margin-top: 60px;
        }
    }
`
export default function Agenda() {
    return (
        <React.Fragment>
            <Navigation />
            <StyleAgenda>
                <Helmet>
                    <title>Ensemble Syllepse - Agenda</title>
                    <meta
                        name="description"
                        content="Les dates de représentation de l'Ensemble Syllepse"
                    />
                </Helmet>
                <h1>Agenda</h1>
                <h2>A venir</h2>
                {concertsAVenir(concerts).map((concert, index) => {
                    return <Concert key={`${index}`} concert={concert} />
                })}
                <h2>Concerts passés</h2>
                {concertsPasses(concerts).map((concert, index) => {
                    return <Concert key={`${index}`} concert={concert} />
                })}
            </StyleAgenda>
            <PiedDePage />
        </React.Fragment>
    )
}
