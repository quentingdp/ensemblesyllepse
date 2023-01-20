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
import Ombres from "./pages/programmes/Ombres"
import Miroir from "./pages/programmes/Miroir"
import Kaleidoscope from "./pages/programmes/Kaleidoscope"
import NousEcouter from "./pages/medias/NousEcouter"
import Soutien from "./pages/contact/Soutien"
import Contact from "./pages/contact/Contact"
import E404 from "./pages/E404"

//Définitions des routes du site internet
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/index.html" element={<Accueil />} />
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
                <Route path="/programmes/2023-ombres/" element={<Ombres />} />
                <Route path="/programmes/2023-miroir/" element={<Miroir />} />
                <Route
                    path="/programmes/2022-kaleidoscope/"
                    element={<Kaleidoscope />}
                />
                <Route path="/medias/nous-ecouter/" element={<NousEcouter />} />
                <Route path="/contact/nous-soutenir/" element={<Soutien />} />
                <Route path="/contact/nous-contacter/" element={<Contact />} />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
