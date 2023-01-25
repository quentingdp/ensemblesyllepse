//Import de librairies externes
import styled from "styled-components"

export const StyleCarte = styled.article`
    width: 70%;
    border: 2px solid white;
    border-radius: 10px;
    padding: 5px;
    margin: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .image {
        align-self: center;
        height: 300px;
        width: 30%;
        object-fit: contain;
    }

    .description {
        width: 65%;
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

    @media (min-width: 768px) and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        .image {
            height: 200px;
            width: unset;
        }

        .description {
            width: unset;
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
        align-items: center;
        .image {
            height: 120px;
            width: unset;
        }

        .description {
            width: unset;
        }
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
