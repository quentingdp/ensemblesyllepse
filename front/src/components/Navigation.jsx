//Import de librairies externes
import styled from "styled-components"

export const StyleNavigation = styled.nav`
    position: sticky;
    top: 0px;
    width: 100%;
    min-height: 5vh;
    padding-bottom: 5px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu-navigation {
        &-list {
            max-width: 2000px;
            width: 95%;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

        &-option {
            margin: 0px 10px;
            padding: 5px 0px;
            text-align: center;
            height: 20px;
            width: 12%;
        }
    }

    .menu-navigation-wrap {
        background-color: white;
        border: 1px solid black;
        overflow: hidden;
        transform: scale(0);
        transform-origin: top;
        transition: transform 200ms ease-in-out;
        width: 230px;

        &-title {
            text-align: center;

            &:hover {
                color: red;
                cursor: pointer;
            }
        }

        &-option {
            margin: 5px 10px;
            text-align: left;
        }
    }

    .wrap:hover {
        & > .menu-navigation-wrap {
            transform: scale(1);
        }
    }

    @media (min-width: 768px) and (max-width: 992px) {
        .menu-navigation-option {
            width: 23%;
        }
    }

    @media (max-width: 768px) {
        .menu-navigation-option {
            width: 45%;
        }
    }
`

export default function Navigation() {
    return (
        <StyleNavigation>
            <ul className="menu-navigation-list">
                <li className="menu-navigation-option page-accueil">
                    <a href="/">Accueil</a>
                </li>
                <li className="menu-navigation-option wrap">
                    <span className="menu-navigation-wrap-title">A propos</span>
                    <ul className="menu-navigation-wrap">
                        <li className="menu-navigation-wrap-option">
                            <a href="/a-propos/ophelia-besson/">
                                Ophélia Besson
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/a-propos/choristes/">Les choristes</a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/a-propos/compositeurs/">
                                Les compositeurs
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/a-propos/association/">L'association</a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/a-propos/contributeurs/">
                                Les contributeurs
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-navigation-option wrap">
                    <span className="menu-navigation-wrap-title">
                        Programmes
                    </span>
                    <ul className="menu-navigation-wrap">
                        <li className="menu-navigation-wrap-option">
                            <a href="/pages/programmes/2021-shakespeare-s-songs.html">
                                Shakespeare's songs
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/pages/programmes/2022-nuits.html">
                                Nuits
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/pages/programmes/2022-nuits.html">
                                Entrelacs
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/programmes/2022-chants-et-poesies/">
                                Chants et poésies
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/pages/programmes/2023-ombres.html">
                                Ombres
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/pages/programmes/2022-nuits.html">
                                Miroir
                            </a>
                        </li>
                        <li className="menu-navigation-wrap-option">
                            <a href="/pages/programmes/2022-nuits.html">
                                Kaléidoscope
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-navigation-option wrap">
                    <span className="menu-navigation-wrap-title">Médias</span>
                    <ul className="menu-navigation-wrap">
                        <li className="menu-navigation-wrap-option">
                            <a href="/fd">Nous écouter</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-navigation-option wrap">
                    <span className="menu-navigation-wrap-title">Contact</span>
                    <ul className="menu-navigation-wrap">
                        <li className="menu-navigation-wrap-option">
                            <a href="/contact/nous-soutenir/">Nous soutenir</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyleNavigation>
    )
}
