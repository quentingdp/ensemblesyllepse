//Import de librairies externes
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Dépendences internes
import Accueil from "./pages/Accueil"
import OpheliaBesson from "./pages/a-propos/OpheliaBesson"
import Choristes from "./pages/a-propos/Choristes"
import Compositeurs from "./pages/a-propos/Compositeurs"
import Association from "./pages/a-propos/Association"
import Contributeurs from "./pages/a-propos/Contributeurs"
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
                <Route path="/contact/nous-soutenir/" element={<Soutien />} />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
