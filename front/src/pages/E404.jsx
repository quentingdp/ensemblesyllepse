//Import de librairies externes
import styled from "styled-components"
import { Helmet } from "react-helmet"

export const StyleE404 = styled.main`
    padding: 15px;
    max-width: 2000px;
    min-height: 89vh;
    text-align: center;

    h1 {
        margin: 100px 0;
    }
`
export default function E404() {
    return (
        <StyleE404>
            <Helmet>
                <title>Ensemble Syllepse - Page introuvable</title>
                <meta
                    name="description"
                    content="Page 404 de l'Ensemble Syllepse"
                />
            </Helmet>
            <h1>Erreur 404</h1>
            <p>
                La page que vous avez demandé n'existe pas. Vous pouvez utiliser
                la barre de navigation pour atteindre une des pages souhaitées.
            </p>
        </StyleE404>
    )
}
