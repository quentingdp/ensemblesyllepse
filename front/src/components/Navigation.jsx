//Import de librairies externes
import styled from "styled-components"
import { useState, useEffect } from "react"

//Dépendences internes
import IconeSyllepse from "../images/logo/IconeSyllepseEnsembleVocal.png"
import IconeCollapse from "../images/logo/iconCollapse.png"
import NavSousMenu from "./NavSousMenu.jsx"
import { navLiens } from "../data/navLiens.js"

export const StyleNavigation = styled.header`
    position: sticky;
    top: 0;
    background-color: white;
    color: black;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .logo {
        margin: 0.2rem 0.5rem;
    }


    .toggler {
        cursor: pointer;
    }

    .collapse-icon {
        height: 2.5rem;
    }

    .main-navbar {
        width: 90%;
    }

    .navbar-0 {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }

    .navbar-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: rgb(221, 221, 221);
    }

    .nav-item {
        padding: 1.5rem 1rem;
    }

    .nav-item a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .nav-item:hover {
        color: red;
        cursor: pointer;
    }

    .focused {
        background-color: rgb(221, 221, 221);
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .main-navbar {
            width: 100%;
        }
    
        .navbar-0 {
            flex-direction: column;
            align-items: center;
        }
    
        .navbar-1 {
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
        }
    
        .nav-item {
            padding: 1rem 0.5rem;
        }

        .focused {
            background-color: unset;
        }
    }
`

export default function Navigation() {
    let [toggle, setToggle] = useState(false)
    let [navStatus, setNavStatus] = useState(-1)
    let [width, setWidth] = useState(window.innerWidth)
    let mobileBreakpoint = 768
    let isMobile = width <= mobileBreakpoint

    const changeNavStatus = (navKey) => {
        if (navKey === navStatus) {
            setNavStatus(-1)
        } else {
            setNavStatus(navKey)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }, [width])

    return (
        <StyleNavigation>
            {!isMobile ? <a className="logo display-desktop" href="/">
                <img className="img-fluid" src={IconeSyllepse} alt="Syllepse" />
            </a> : null}
            {isMobile ? <div className="toggler" onClick={() => { setToggle(!toggle); setNavStatus(-1) }}>
                <img className="collapse-icon" src={IconeCollapse} alt="Déployer" />
            </div> : null}
            {(!isMobile || toggle) ? <nav className="main-navbar">
                <ul className="navbar-0">
                    {navLiens.map((e, index) => {
                        if (e.hasOwnProperty('sousLiens')) {
                            return (
                                (!isMobile || navStatus === -1 || navStatus === index) ? <li key={`${index}`} className={navStatus === index ? "nav-item focused" : "nav-item"} onClick={() => changeNavStatus(index)}><span className="toggle-link">{e.label}</span></li> : null
                            )
                        } else {
                            return (
                                (!isMobile || navStatus === -1 || navStatus === index) ? <li key={`${index}`} className="nav-item" onClick={() => changeNavStatus(index)}><a href={e.lien}>{e.label}</a></li> : null
                            )
                        }   
                    })}
                </ul>
                {navLiens.map((e, index) => {
                    return (
                        (e.hasOwnProperty('sousLiens') && navStatus === index) ? <NavSousMenu key={`${index}`} tableauLiens={e.sousLiens} /> : null
                    )
                })}
            </nav> : null}
        </StyleNavigation>
    )
}
