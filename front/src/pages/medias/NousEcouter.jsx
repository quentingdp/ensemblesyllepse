//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import logoAppleMusic from "../../images/logo/Apple_Music_White.png"
import logoDeezer from "../../images/logo/Deezer_White.png"
import logoSpotify from "../../images/logo/Spotify_Green.png"
import logoYoutube from "../../images/logo/Youtube_White.png"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

export const StyleNousEcouter = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 30px;
    text-align: center;

    p {
        margin: 15px 0px;
        text-align: center;
    }

    .lien-linktree {
        text-decoration: underline;
        color: #e0c9aa;
    }

    .streaming-syllepse {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    img {
        margin: 20px;
        height: 50px;
    }
`

export default function NousEcouter() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <StyleNousEcouter>
                <Helmet>
                    <title>Ensemble Syllepse - Nous écouter</title>
                    <meta
                        name="description"
                        content="Pour écouter les réalisations de l'Ensemble Syllepse sur le web."
                    />
                </Helmet>
                <h1>Pour nous écouter :</h1>
                <p>
                    Vous pouvez retrouver nos oeuvres sur les plateformes de
                    streaming suivantes, qui sont également disponible via le{" "}
                    <a
                        className="lien-linktree"
                        href="https://linktr.ee/ensemblesyllepse"
                    >
                        lien linktree de l'Ensemble Syllepse
                    </a>
                    , disponible également dans le pied de page du site
                    internet.
                </p>
                <ul className="streaming-syllepse">
                    <li>
                        <a href="https://open.spotify.com/artist/1FQf4S0hug95xTOPEfLzUR">
                            <img src={logoSpotify} alt="Spotify" />
                        </a>
                    </li>
                    <li>
                        <a href="/error">
                            <img src={logoAppleMusic} alt="Apple Music" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC9NyQi1lmnafotxTAbdJHPA">
                            <img src={logoYoutube} alt="Youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="/error">
                            <img src={logoDeezer} alt="Deezer" />
                        </a>
                    </li>
                </ul>
            </StyleNousEcouter>
            <PiedDePage />
        </React.Fragment>
    )
}
