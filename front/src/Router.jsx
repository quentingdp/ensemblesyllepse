//Import de librairies externes
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Dépendences internes
import Accueil from "./pages/Accueil"
import OpheliaBesson from "./pages/a-propos/OpheliaBesson"
import Choristes from "./pages/a-propos/Choristes"
import Compositeurs from "./pages/a-propos/Compositeurs"
import Association from "./pages/a-propos/Association"
import Contributeurs from "./pages/a-propos/Contributeurs"
import ShakespearesSongs from "./pages/programmes/ShakespearesSongs"
import Nuits from "./pages/programmes/Nuits"
import Entrelacs from "./pages/programmes/Entrelacs"
import ChantsEtPoesies from "./pages/programmes/ChantsEtPoesies"
import Soutien from "./pages/contact/Soutien"
import E404 from "./pages/E404"

//Définitions des routes du site internet
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route
                    path="/a-propos/ophelia-besson/"
                    element={<OpheliaBesson />}
                />
                <Route path="/a-propos/choristes/" element={<Choristes />} />
                <Route
                    path="/a-propos/compositeurs/"
                    element={<Compositeurs />}
                />
                <Route
                    path="/a-propos/association/"
                    element={<Association />}
                />
                <Route
                    path="/a-propos/contributeurs/"
                    element={<Contributeurs />}
                />
                <Route
                    path="/programmes/2021-shakespeare-s-songs/"
                    element={<ShakespearesSongs />}
                />
                <Route path="/programmes/2021-nuits/" element={<Nuits />} />
                <Route
                    path="/programmes/2022-entrelacs/"
                    element={<Entrelacs />}
                />
                <Route
                    path="/programmes/2022-chants-et-poesies/"
                    element={<ChantsEtPoesies />}
                />
                <Route path="/contact/nous-soutenir/" element={<Soutien />} />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
