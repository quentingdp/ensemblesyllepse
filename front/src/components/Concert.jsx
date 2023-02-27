//Import de librairies externes
import styled from "styled-components"

//Dépendences internes
import { jour, heure, moisCompact } from "../functions/date.js"

export const StyleConcert = styled.article`
    display: grid;
    grid-template-columns: 130px 100px 1fr 1fr 100px;
    grid-gap: 5px;
    border: 2px solid white;
    border-radius: 10px;
    padding: 5px;
    margin: 40px 0;
    width: 100%;
    align-items: center;
    text-align: center;

    .date {
        grid-column-start: 1;
        font-family: "Vidaloka";
    }

    .jour {
        font-size: 50px;
    }

    .mois {
        text-transform: uppercase;
        font-size: 18px;
    }

    .heure {
        grid-column-start: 2;
        padding: 0 5px;
        text-align: right;
        font-size: 30px;
    }

    .programme {
        grid-column-start: 3;
        margin: 0 5px;
        font-size: 30px;
        text-wrap: wrap;
    }

    .lieu {
        grid-column-start: 4;
        text-wrap: wrap;
    }

    .reservation {
        grid-column-start: 5;
        color: black;
        background-color: white;
        border-radius: 5px;
    }

    .reservation:hover {
        color: red;
    }

    @media (min-width: 768px) and (max-width: 992px) {
        grid-template-columns: 130px 100px 1fr;

        .date {
            grid-column-start: 1;
        }

        .heure {
            grid-column-start: 2;
        }

        .programme {
            grid-column: 3;
        }

        .lieu {
            grid-column: 1 / span 3;
            margin: 10px 0;
        }

        .reservation {
            grid-column: 1 / span 3;
            margin: 10px 30%;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;

        .date {
            grid-column-start: 1;
        }

        .heure {
            grid-column-start: 2;
            text-align: center;
        }

        .programme {
            grid-column: 1 / span 2;
            margin: 10px 5px;
        }

        .lieu {
            grid-column: 1 / span 2;
            margin-top: 10px;
        }

        .reservation {
            grid-column: 1 / span 2;
            margin: 10px 30%;
        }
    }
`

export default function Concert({ concert }) {
    return (
        <StyleConcert>
            <div className="date">
                <p className="jour">{jour(concert.date)}</p>
                <p className="mois">{moisCompact(concert.date)}</p>
            </div>
            <p className="heure">{heure(concert.date)}</p>
            <h3 className="programme">{concert.programme}</h3>
            {concert.lieu.length === 0 ? (
                <p className="lieu">LIEU A DEFINIR</p>
            ) : (
                <div className="lieu">
                    {concert.lieu.map((detailLieu, index) => {
                        return <p key={`${index}`}>{detailLieu}</p>
                    })}
                </div>
            )}
            {concert.lienReservation ? (
                <a className="reservation" href={concert.lienReservation}>
                    RÉSERVER ►
                </a>
            ) : null}
        </StyleConcert>
    )
}
