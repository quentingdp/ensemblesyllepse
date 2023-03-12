//Import de librairies externes
import styled from "styled-components"

//Dépendences internes
import Concert from "../components/Concert"
import { concerts } from "../data/concerts.js"
import { concertsProgrammeAVenir } from "../functions/triFiltreConcerts.js"

export const StyleProgramme = styled.main`
    padding: 15px;
    max-width: 1440px;
    min-height: 80vh;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h1 {
        width: 100%;
    }

    .sous-titre {
        width: 100%;
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 1em;
    }

    .introduction {
        width: 100%;
        margin: 20px 0;
    }

    .programme-desc {
        width: 35%;
    }

    picture {
        width: 65%;
    }

    img {
        width: 100%;
        height: 800px;
        margin-top: 50px;
        object-fit: cover;
    }

    h2 {
        width: 100%;
        margin-top: 60px;
        margin-bottom: 20px;
    }

    .chapitre {
        margin: 50px 0;
    }

    .titre-chapitre {
        color: #efa87b;
    }

    .oeuvre {
        margin: 15px 0;
    }

    .titre-oeuvre {
        color: #f3d6c3;
    }

    .soliste {
        color: #b2725b;
    }

    .absence-concert {
        margin: 40px 0;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 768px) {
        .programme-desc {
            width: 100%;
        }

        picture {
            width: 100%;
        }

        img {
            height: unset;
            margin-top: unset;
        }
    }
`

export default function Programme({
    titre,
    annee,
    introduction,
    programme,
    image,
    imageDefaut,
    alt,
}) {
    return (
        <StyleProgramme>
            <h1>{titre}</h1>
            <p className="sous-titre">{annee}</p>
            {introduction.map((paragraphe, index) => {
                return (
                    <p key={`${index}`} className="introduction">
                        {paragraphe}
                    </p>
                )
            })}
            <h2>Programme</h2>
            <article className="programme-desc">
                {programme.map((chapitre, index) => {
                    return (
                        <div key={`${index}`} className="chapitre">
                            {chapitre.titre ? (
                                <p className="titre-chapitre">
                                    {chapitre.titre}
                                </p>
                            ) : null}
                            {chapitre.auteur ? <p>{chapitre.auteur}</p> : null}
                            {chapitre.info ? <p>{chapitre.info}</p> : null}
                            {chapitre.oeuvres.map((oeuvre, index) => {
                                return (
                                    <div key={`${index}`} className="oeuvre">
                                        <p className="titre-oeuvre">
                                            {oeuvre.titre}
                                        </p>
                                        {oeuvre.soliste ? (
                                            <p className="soliste">
                                                {oeuvre.soliste}
                                            </p>
                                        ) : null}
                                        {oeuvre.auteur ? (
                                            <p>{oeuvre.auteur}</p>
                                        ) : null}
                                        {oeuvre.info ? (
                                            <p>{oeuvre.info}</p>
                                        ) : null}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </article>
            <picture>
                <source srcSet={image} />
                <img src={imageDefaut} alt={alt} />
            </picture>
            <h2>Concerts à venir</h2>
            {concertsProgrammeAVenir(concerts, titre).length === 0 ? (
                <p className="absence-concert">Pas de date prévue</p>
            ) : (
                concertsProgrammeAVenir(concerts, titre).map(
                    (concert, index) => {
                        return <Concert key={`${index}`} concert={concert} />
                    }
                )
            )}
        </StyleProgramme>
    )
}
