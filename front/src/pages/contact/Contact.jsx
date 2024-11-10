//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import logoFacebook from "../../images/logo/logo-facebook.png"
import logoInstagram from "../../images/logo/logo-instagram.png"

export const StyleContact = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 30px;

    p {
        margin: 15px 0px;
        text-align: center;
    }

    img {
        margin: 20px;
        height: 50px;
    }

    .contact-syllepse {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
`
export default function Contact() {
    return (
        <React.Fragment>
            <Navigation />
            <StyleContact>
                <Helmet>
                    <title>Ensemble Syllepse - Nous contacter</title>
                    <meta
                        name="description"
                        content="Page pour contacter l'Ensemble Syllepse"
                    />
                </Helmet>
                <h1>Nous contacter</h1>
                <p>
                    Vous pouvez nous contacter par mail à l'adresse ci-dessous
                    ou en nous écrivant sur les réseaux sociaux.
                </p>
                <p>
                    Contact : <a href="mailto:contact@ensemblesyllepse.com">contact@ensemblesyllepse.com</a>
                </p>
                <p>
                    Administration : <a href="mailto:administration@ensemblesyllepse.com">administration@ensemblesyllepse.com</a>
                </p>
                <p>
                    Diffusion : <a href="mailto:marie.orset@ensemblesyllepse.com">marie.orset@ensemblesyllepse.com</a>
                </p>
                <p>
                    Direction artistique : <a href="mailto:ophelia.besson@ensemblesyllepse.com">ophelia.besson@ensemblesyllepse.com</a>
                </p>
                <p>
                    Trésorerie : <a href="mailto:finance@ensemblesyllepse.com">finance@ensemblesyllepse.com</a>
                </p>
                <ul className="contact-syllepse">
                    <li>
                        <a href="https://www.facebook.com/ensemblevocalsyllepse/">
                            <img src={logoFacebook} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ensemblesyllepse/">
                            <img src={logoInstagram} alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </StyleContact>
            <PiedDePage />
        </React.Fragment >
    )
}
