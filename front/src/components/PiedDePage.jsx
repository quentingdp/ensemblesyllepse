//Import de librairies externes
import styled from "styled-components"

//Dépendences internes
import logoLinktree from "../images/logo/logo-linktree.png"
import logoFacebook from "../images/logo/logo-facebook.png"
import logoYoutube from "../images/logo/logo-youtube.png"
import logoInstagram from "../images/logo/logo-instagram.png"
import logoHelloasso from "../images/logo/logo-helloasso.png"

export const StylePiedDePage = styled.footer`
    padding: 2px 15px;
    min-height: 5vh;
    background-color: white;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .reseaux-navigation {
        display: flex;
        align-items: center;

        &-option {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            overflow: hidden;
            margin: 5px 10px;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .medias-navigation {
        margin: 5px 30px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;

        &-option {
            margin: 0px 5px;
        }
    }

    @media (min-width: 768px) and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export default function PiedDePage() {
    return (
        <StylePiedDePage>
            <ul className="reseaux-navigation">
                <li className="reseaux-navigation-option">
                    <a href="https://linktr.ee/ensemblesyllepse">
                        <img src={logoLinktree} alt="Linktree de Syllepse" />
                    </a>
                </li>
                <li className="reseaux-navigation-option">
                    <a href="https://www.facebook.com/ensemblevocalsyllepse/">
                        <img
                            src={logoFacebook}
                            alt="Page Facebook de Syllepse"
                        />
                    </a>
                </li>
                <li className="reseaux-navigation-option">
                    <a href="https://www.youtube.com/channel/UC9NyQi1lmnafotxTAbdJHPA?">
                        <img
                            src={logoYoutube}
                            alt="Chaîne Youtube de Syllepse"
                        />
                    </a>
                </li>
                <li className="reseaux-navigation-option">
                    <a href="https://www.instagram.com/ensemblesyllepse/">
                        <img
                            src={logoInstagram}
                            alt="Page Instagram de Syllepse"
                        />
                    </a>
                </li>
                <li className="reseaux-navigation-option">
                    <a href="https://www.helloasso.com/associations/ensemble-vocal-syllepse/">
                        <img
                            src={logoHelloasso}
                            alt="Page HelloAsso de Syllepse"
                        />
                    </a>
                </li>
            </ul>
        </StylePiedDePage>
    )
}
