//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleChantsEtPoesies = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 89vh;
    margin: auto;
    text-align: center;

    .sous-titre {
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 1em;
    }

    .presentation-description {
        margin: 20px 0;
    }
`
export default function ChantsEtPoesies() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleChantsEtPoesies>
                <Helmet>
                    <title>Ensemble Syllepse - Chants et poésies</title>
                    <meta
                        name="description"
                        content="Programme Chants et Poésies créé par l'Ensemble Syllepse"
                    />
                </Helmet>
                <h1>Chants et poésies</h1>
                <p className="sous-titre">2022</p>
                <p className="presentation-description">
                    Syllepse s'est rendu à Lamure-sur-Azergues, village rural de
                    1000 habitants, en lien avec le Quartier Métisseur et le
                    compositeur Nans de Jésus pour créer son spectacle Chants et
                    poésies. Son programme autour des poètes français (René
                    Char, Guillaume Apollinaire, Paul Éluard…) a été présenté au
                    côté des œuvres de la plasticienne Céline Thoué et
                    d'artisans locaux.
                </p>
                <p className="presentation-description">
                    Des ateliers de chant choral ont été proposés en libre accès
                    aux habitants. L'objectif était double : monter un projet
                    ambitieux, celui d'un répertoire vocal de qualité et tisser
                    du lien artistique et social en milieu rural.
                </p>
                <h2>Programme</h2>
                <p>Morceau de programme</p>
            </StyleChantsEtPoesies>
            <PiedDePage />
        </React.Fragment>
    )
}
