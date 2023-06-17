//Import de librairies externes
import styled from "styled-components"

export const StyleNavSousMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: rgb(221, 221, 221);

    .nav-item {
        padding: 1.5rem 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    
        .nav-item {
            padding: 1rem 0.5rem;
        }
    }
`

export default function NavSousMenu({tableauLiens}) {
    return (
        <StyleNavSousMenu>
            {tableauLiens.map((elt, index) => {
                return (
                    <li key={`${index}`} className="nav-item"><a href={elt.lien}>{elt.label}</a></li>
                )
            })}
        </StyleNavSousMenu>
    )
}
