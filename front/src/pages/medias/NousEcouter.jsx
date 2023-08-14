//Import de librairies externes
import React from "react"
import ReactPlayer from "react-player/youtube"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import logoAppleMusic from "../../images/logo/Apple_Music_White.png"
import logoDeezer from "../../images/logo/Deezer_White.png"
import logoSpotify from "../../images/logo/Spotify_Green.png"
import logoYoutube from "../../images/logo/Youtube_White.png"

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

    h2 {
        margin: 40px 0 15px 0;
        font-size: 43px;
    }

    .youtube-encapsule {
        display: flex;
        justify-content: center;
        height: 666px;
        width: 1000px;
        margin: auto;
    }

    @media (min-width: 768px) and (max-width: 992px) {
        .youtube-encapsule {
            height: 400px;
            width: 600px;
        }
    }

    @media (max-width: 768px) {
        .youtube-encapsule {
            height: 200px;
            width: 300px;
        }
    }
`

export default function NousEcouter() {
    return (
        <React.Fragment>
            <Navigation />
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
                    Vous pouvez retrouver nos œuvres sur les plateformes de
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
                        <a href="https://music.apple.com/fr/artist/ensemble-vocal-syllepse/1625294903">
                            <img src={logoAppleMusic} alt="Apple Music" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC9NyQi1lmnafotxTAbdJHPA">
                            <img src={logoYoutube} alt="Youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.deezer.com/fr/artist/170717337">
                            <img src={logoDeezer} alt="Deezer" />
                        </a>
                    </li>
                </ul>
                <h2>Teasers</h2>
                <div className="youtube-encapsule">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url="https://youtu.be/53pSVlkeBfM"
                        controls="true"
                    />
                </div>
                <div className="youtube-encapsule">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url="https://youtu.be/RL7P4vaCZ9k"
                        controls="true"
                    />
                </div>
            </StyleNousEcouter>
            <PiedDePage />
        </React.Fragment>
    )
}
