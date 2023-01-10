//Import de librairies externes
import styled from "styled-components"

export const StyleCarte = styled.article`
    height: 45vh;
    width: 70%;
    border: 2px solid white;
    border-radius: 10px;
    padding: 5px;
    margin: 40px 0;
    display: flex;
    flex-direction: row;

    .image {
        width: 30%;
        object-fit: contain;
    }

    .description {
        width: 70%;
        padding: 10px;
        overflow: scroll;
    }

    .description::-webkit-scrollbar {
        width: 20px;
    }

    .description::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px darken(white, 30%);
        border-radius: 10px;
    }

    .description::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
    }

    .description::-webkit-scrollbar-thumb:hover {
        background: darken(white, 30%);
    }

    .nom {
        text-align: center;
        margin-bottom: 10px;
    }

    .detail {
        text-align: center;
        margin-top: 10px;
    }
`

export default function Carte({ photo, nom, biographie }) {
    return (
        <StyleCarte>
            <img className="image" src={photo} alt={nom} />
            <div className="description">
                <h2 className="nom">{nom}</h2>
                {biographie.map((paragraphe, index) => {
                    return (
                        <p key={`${index}`} className="detail">
                            {paragraphe}
                        </p>
                    )
                })}
            </div>
        </StyleCarte>
    )
}
