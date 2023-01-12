//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoChoristes from "../../images/photos/photo_Syllepse_2.jpg"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleChoristes = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 89vh;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;

    h1 {
        width: 100%;
        margin-bottom: 50px;
    }

    .bloc-choristes {
        margin: 0 10px;

        h2 {
            margin-bottom: 15px;
        }
    }

    img {
        width: 100%;
        margin: 30px 0;
    }
`
export default function Choristes() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleChoristes>
                <Helmet>
                    <title>Ensemble Syllepse - Les choristes</title>
                    <meta
                        name="description"
                        content="A propos de l'Ensemble Syllepse, présentons les choristes constituant l'ensemble."
                    />
                </Helmet>
                <h1>Les choristes</h1>
                <article className="bloc-choristes">
                    <h2>Sopranes</h2>
                    <p>Camille Caradeuc</p>
                    <p>Ludivine Clodong-Berger</p>
                    <p>Mélanie Gavand</p>
                    <p>Béatrice Grinfeld</p>
                    <p>Adèle Hubert</p>
                    <p>Katelyn Isaacson</p>
                    <p>Camille Martin</p>
                    <p>Mathilde Pianfetti</p>
                    <p>Suzie Ripoche</p>
                    <p>Alice Widmer</p>
                </article>
                <article className="bloc-choristes">
                    <h2>Mezzos</h2>
                    <p>Sarah Bordes</p>
                    <p>Zoé Cassard</p>
                    <p>Luce Courceulles</p>
                    <p>Céleste Lejeune</p>
                    <p>Anémone Robic</p>
                    <p>Marilou Rolland</p>
                    <p>Magalie Vallin</p>
                    <p>Claire Violle</p>
                </article>
                <article className="bloc-choristes">
                    <h2>Altos</h2>
                    <p>Malo Cosset-Chéneau</p>
                    <p>Lucie Damianthe</p>
                    <p>Etienne Goulot-Martin</p>
                    <p>Sébastien Goulot-Martin</p>
                    <p>Ariane Le Fournis</p>
                    <p>Jeanne Monville</p>
                    <p>Laure-Alice Poulain</p>
                    <p>Audrey Vollerin</p>
                </article>
                <article className="bloc-choristes">
                    <h2>Ténors</h2>
                    <p>Aurel Barré</p>
                    <p>Paul Campana</p>
                    <p>Antoine Dizier</p>
                    <p>Quentin Guillon de Princé</p>
                    <p>Martin Laskawiec</p>
                    <p>Olivier Merlin</p>
                    <p>Benoit Morros</p>
                    <p>Filipe Rodriguez</p>
                    <p>Oscar Sajous</p>
                </article>
                <article className="bloc-choristes">
                    <h2>Basses</h2>
                    <p>Olivier Bizot</p>
                    <p>Arthur Bourcigaux</p>
                    <p>Antonin Boutinaud</p>
                    <p>Thomas Crouigneau</p>
                    <p>Nans De Jésus</p>
                    <p>Milan Faure</p>
                    <p>Nicolas Forin</p>
                    <p>Victor Requier</p>
                </article>
                <img src={photoChoristes} alt="Les choristes de Syllepse" />
            </StyleChoristes>
            <PiedDePage />
        </React.Fragment>
    )
}
