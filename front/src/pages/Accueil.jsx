//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import PiedDePage from "../components/PiedDePage"
import Navigation from "../components/Navigation"
import Concert from "../components/Concert"
import { concerts } from "../data/concerts.js"
import {
    prochainConcert,
    deuxiemeProchainConcert,
} from "../functions/triFiltreConcerts.js"
import logoSyllepse from "../images/logo/LogoSyllepseEnsembleVocal_blanc.png"
import photoPageAccueil from "../images/photos/IMG-20220419-WA0004.avif"
import logoCreditMutuel from "../images/logo/logo-part-credit-mutuel-enseignant.png"
import logoSaintFons from "../images/logo/logo-part-saint-fons.png"
import logoPassCulture from "../images/logo/logo-part-pass-culture.png"
import logoPrefetAura from "../images/logo/logo-part-prefet-aura.png"
import logoCentreDeLaVoix from "../images/logo/logo-part-centre-de-la-voix.png"
import logoSacem from "../images/logo/logo-part-sacem.png"
import logoFondationCestVousLavenir from "../images/logo/logo-part-fondation-cest-vous-lavenir.png"
import logoAdami from "../images/logo/logo-adami.png"
import logoCiteDeLaVoix from "../images/logo/logo-cite-de-la-voix.png"
import logoEcoleDeMusiqueVenissieux from "../images/logo/logo-ecole-de-musique-venissieux.png"
import logoPrintempsDesArts from "../images/logo/logo-printemps-des-arts.png"
import logoSpedidam from "../images/logo/logo-spedidam.png"
import logoVilleDeVenissieux from "../images/logo/logo-ville-de-venissieux.png"

const StyleEnteteAccueil = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background-image: url(${photoPageAccueil});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .menu-logo {
        height: 200px;
        max-height: 80vh;
        margin-top: 5vh;
    }
`

export const StyleAccueil = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    text-align: center;

    .sous-titre {
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 1em;
    }

    .presentation-texte {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        margin-bottom: 30px;

        &-description {
            margin: 15px 0px;
            text-align: center;
        }
    }

    .gallerie-logos {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        * {
            margin: 20px 30px;
            height: 80px;
        }
    }
`

export default function Accueil() {
    return (
        <React.Fragment>
            <StyleEnteteAccueil>
                <img
                    className="menu-logo"
                    src={logoSyllepse}
                    alt="Logo Ensemble Syllepse"
                />
            </StyleEnteteAccueil>
            <Navigation />
            <StyleAccueil>
                <Helmet>
                    <title>Ensemble Syllepse</title>
                    <meta
                        name="description"
                        content="Page de présentation de l'Ensemble Syllepse, un jeune chœur mixte a cappella lyonnais constitué de chanteurs aguerris et regroupés autour de la cheffe Ophélia Besson."
                    />
                </Helmet>
                <div className="presentation-texte">
                    <h1>Syllepse</h1>
                    <p className="sous-titre">
                        "prendre ensemble, comprendre, embrasser"
                    </p>
                </div>
                {deuxiemeProchainConcert(concerts).hasOwnProperty(
                    "programme"
                ) ? (
                    <article className="presentation-texte">
                        <h2>Nos prochains concerts</h2>
                        <Concert concert={prochainConcert(concerts)} />
                        <Concert concert={deuxiemeProchainConcert(concerts)} />
                    </article>
                ) : null}
                <div className="presentation-texte">
                    <h2>Partenaires</h2>
                    <div className="gallerie-logos">
                        <img
                            src={logoCreditMutuel}
                            alt="Crédit Mutuel Enseignant"
                        />
                        <img src={logoSaintFons} alt="Ville de Saint-Fons" />
                        <img src={logoPassCulture} alt="Pass Culture" />
                        <img
                            src={logoPrefetAura}
                            alt="Prefet de la région Auvergne-Rhône-Alpes"
                        />
                        <img
                            src={logoCentreDeLaVoix}
                            alt="Centre de la voix Rhône-Alpes"
                        />
                        <img src={logoSacem} alt="Sacem" />
                        <img
                            src={logoFondationCestVousLavenir}
                            alt="Fondation C'est vous l'avenir"
                        />
                        <img src={logoAdami} alt="Adami" />
                        <img src={logoCiteDeLaVoix} alt="Cité de la Voix" />
                        <img
                            src={logoEcoleDeMusiqueVenissieux}
                            alt="Ecole de Musique de Vénissieux"
                        />
                        <img
                            src={logoPrintempsDesArts}
                            alt="Printemps des Arts"
                        />
                        <img src={logoSpedidam} alt="Spedidam" />
                        <img
                            src={logoVilleDeVenissieux}
                            alt="Ville de Vénissieux"
                        />
                    </div>
                </div>
            </StyleAccueil>
            <PiedDePage />
        </React.Fragment>
    )
}
