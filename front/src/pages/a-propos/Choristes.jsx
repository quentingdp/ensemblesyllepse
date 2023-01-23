//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import photoChoristes from "../../images/photos/photo_Syllepse_2.jpg"
import { choristes } from "../../data/choristes.js"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleChoristes = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
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
                {choristes.map((pupitre, index) => {
                    return (
                        <article key={`${index}`} className="bloc-choristes">
                            <h2>{pupitre.pupitre}</h2>
                            {pupitre.personnes.map((nom, index) => {
                                return <p key={`${index}`}>{nom}</p>
                            })}
                        </article>
                    )
                })}
                <img src={photoChoristes} alt="Les choristes de Syllepse" />
            </StyleChoristes>
            <PiedDePage />
        </React.Fragment>
    )
}
