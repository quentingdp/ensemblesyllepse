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

export const StyleChanteureuses = styled.main`
    padding: 15px;
    max-width: 2000px;
    min-height: 89vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    .bloc-titre {
        width: 100%;
    }

    .bloc-chanteureuses {
        width: 50%;
    }
`
export default function Chanteureuses() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleChanteureuses>
                <Helmet>
                    <title>Ensemble Syllepse - Les chanteureuses</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les chanteuses et chanteurs constituant l'ensemble."
                    />
                </Helmet>
                <h1 className="bloc-titre">Les chanteureuses</h1>
                <article className="bloc-chanteureuses">
                    <h2>Sopranes</h2>
                    <p>Ludivine Clodong-Berger</p>
                    <p>Luce Courceulles</p>
                    <p>Mélanie Gavand</p>
                    <p>Béatrice Grinfeld</p>
                    <p>Adèle Hubert</p>
                    <p>Rolland Marilou</p>
                    <p>Mathilde Pianfetti</p>
                    <p>Suzie Ripoche</p>
                    <p>Claire Violle</p>
                    <p>Alice Widmer</p>
                </article>
                <article className="bloc-chanteureuses">
                    <h2>Altos</h2>
                    <p>Sarah Bordes</p>
                    <p>Zoé Cassard</p>
                    <p>Malo Cosset-Chéneau</p>
                    <p>Lucie Damianthe</p>
                    <p>Céleste Lejeune</p>
                    <p>Jeanne Monville</p>
                    <p>Laure-Alice Poulain</p>
                    <p>Anémone Robic</p>
                    <p>Audrey Vollerin</p>
                </article>
                <article className="bloc-chanteureuses">
                    <h2>Ténors</h2>
                    <p>Aurel Barré</p>
                    <p>Antoine Dizier</p>
                    <p>Quentin Guillon de Princé</p>
                    <p>Olivier Merlin</p>
                    <p>Benoit Morros</p>
                    <p>Victor Requier</p>
                    <p>Filipe Rodriguez</p>
                    <p>Oscar Sajous</p>
                </article>
                <article className="bloc-chanteureuses">
                    <h2>Basses</h2>
                    <p>Olivier Bizot</p>
                    <p>Arthur Bourcigaux</p>
                    <p>Antonin Boutinaud</p>
                    <p>Thomas Crouigneau</p>
                    <p>Nans De Jésus</p>
                    <p>Milan Faure</p>
                    <p>Nicolas Forin</p>
                </article>
            </StyleChanteureuses>
            <PiedDePage />
        </React.Fragment>
    )
}
