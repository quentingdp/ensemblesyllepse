//Import de librairies externes
import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

//Dépendences internes
import Navigation from "../../components/Navigation"
import PiedDePage from "../../components/PiedDePage"
import Programme from "../../layouts/Programme"
import photoConcert from "../../images/photos/Nuits.avif"
import photoConcertDefaut from "../../images/photos/Nuits.avif"

const StyleNavigationReduit = styled.header`
    position: sticky;
    top: 0px;
`

const progNuits = [
    {
        titre: "Prologue",
        oeuvres: [],
    },
    {
        titre: "Veille 1 : Le crépuscule & le délice",
        oeuvres: [
            {
                titre: "Daylight Declines",
                auteur: "Paweł Łukaszewski",
            },
            {
                titre: "Come, Sable Night",
                auteur: "John Ward",
            },
        ],
    },
    {
        titre: "Veille 2 : Caresser le silence",
        oeuvres: [
            {
                titre: "Marias Vaggvisa",
                auteur: "Franz Gruber, arr. Fredrik Sixten",
            },
            {
                titre: "September",
                auteur: "Wilhelm Stenhammar",
            },
        ],
    },
    {
        titre: "Veille 3 : Le chemin de la connaissance",
        oeuvres: [
            {
                titre: "Tenebrae Factae Sunt",
                auteur: "Carlo Gesualdo",
            },
            {
                titre: "Darkness",
                auteur: "Ritz Rakotomalala",
            },
        ],
    },
    {
        titre: "Veille 4 : L'expérience des solitudes",
        oeuvres: [
            {
                titre: "Ay Luna que Reluzes",
                auteur: "Anonyme",
            },
            {
                titre: "Sfogava Con Le Stelle",
                auteur: "Claudio Monteverdi",
            },
        ],
    },
    {
        titre: "Veille 5 : Le concert des astres",
        oeuvres: [
            {
                titre: "Soneto De La Noche",
                auteur: "Morten Lauridsen",
            },
        ],
    },
    {
        titre: "Veille 6 : L'appartenir",
        oeuvres: [
            {
                titre: "Darà La Notte Il Sol",
                auteur: "Claudio Monteverdi",
            },
            {
                titre: "O Radiant Dawn",
                auteur: "James MacMillan",
            },
            {
                titre: "Good Night, Dear Heart",
                auteur: "Dan Forrest",
            },
        ],
    },
]

export default function Nuits() {
    return (
        <React.Fragment>
            <StyleNavigationReduit>
                <Navigation />
            </StyleNavigationReduit>
            <Helmet>
                <title>Ensemble Syllepse - Nuits</title>
                <meta
                    name="description"
                    content="Programme Nuits créé par l'Ensemble Syllepse"
                />
            </Helmet>
            <Programme
                titre="Nuits - Conte musical"
                annee="2021"
                effectif="Programme pour 17 chanteurs, 2 comédiens et chef.fe de coeur"
                introduction={[
                    "NUITS est le produit d'une rencontre entre 19 chanteurs, 2 comédiens et le poète JEAN-A. MASSARD dont le texte accompagne les spectateurs dans ce conte musical. Le chœur, personnage à part entière est lui aussi mis en scène. De la tombée de la nuit jusqu'à l'aube, ce voyage lie intimement art choral, dramaturgie et poésie. Ce spectacle a déjà été donné deux fois dans le Rhône en novembre 2021. Près de 320 personnes ont assisté avec enthousiasme à cette création. En partenariat avec Classical B. Studio, Syllepse a enregistré et édité ce conte sous forme de Livre-CD, disponible sur toutes les plateformes de streaming depuis juin 2022",
                    "Nuits est une fantaisie en six veilles, que nous décrit l'auteur de ses textes : JEAN-A. MASSARD",
                    "Comme de tous ceux que l'on appelle les Grands Sujets, il sembla d'abord devenir difficile d'écrire sur la nuit. D'écrire, d'élaborer des programmes : enfin, de susciter, encore, sur le grand territoire trop parcouru, trop cartographié de la nuit ; l'imaginaire. Et pourtant. Pourtant, maintenant face à l'élément obscur trop de fois convoqué, l'inspiration s'élève toujours, comme si l'événement premier de l'alternance du sombre au clair, de l'ombre au jour, du froid aux lueurs, depuis le début, avait encore cette volonté de nous reconnecter à nos émotions premières - peur quand l'imprévu pourrait de partout surgir, émerveillement, au premier soleil après le sommeil du paysage -, et nous-mêmes redevenus premiers, et chaque vie à bord du grand vaisseau terrestre. Voici soudain la nuit, elle contient, alors, de nouveau la magie de faire des hommes de petites choses fragiles, soumises à l'inconstance du monde : quelle chance pour les poètes...",
                    "Deux personnages s'enfoncent dans le sombre. À la lanterne de leur regard avide, au bruit résonné de leur pas, accourent les passagers que la nuit charrie : les solitaires et le royaume des ombres, les mendiants de toutes choses qui dorment enveloppés seulement de la lourde couverture noire du ciel, les astres que l'on peut observer, et qu'alors on contemple. Un chœur dans le torrent du silence. La liberté d'Ophélia, l'aventure du public assis dans une nef.",
                    "Fiat non lux !",
                ]}
                programme={progNuits}
                image={photoConcert}
                imageDefaut={photoConcertDefaut}
                alt="Concert Nuits"
            />
            <PiedDePage />
        </React.Fragment>
    )
}
