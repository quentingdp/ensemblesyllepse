//Import de librairies externes
import styled from "styled-components"

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

    .programme {
        width: 35%;
    }

    img {
        width: 65%;
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

    @media (max-width: 768px) {
        .programme {
            width: 100%;
        }

        img {
            width: 100%;
        }
    }
`

export default function Programme({
    titre,
    annee,
    introduction,
    programme,
    image,
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
            <article className="programme">
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
            <img src={image} alt={alt} />
        </StyleProgramme>
    )
}
