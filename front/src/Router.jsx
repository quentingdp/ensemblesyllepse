//Import de librairies externes
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Dépendences internes
import Accueil from "./pages/Accueil"
import OpheliaBesson from "./pages/a-propos/OpheliaBesson"
import Chanteureuses from "./pages/a-propos/Chanteureuses"
import Compositeurices from "./pages/a-propos/Compositeurices"
import Association from "./pages/a-propos/Association"
import Contributeureuses from "./pages/a-propos/Contributeureuses"
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
                <Route
                    path="/a-propos/chanteureuses/"
                    element={<Chanteureuses />}
                />
                <Route
                    path="/a-propos/compositeurices/"
                    element={<Compositeurices />}
                />
                <Route
                    path="/a-propos/association/"
                    element={<Association />}
                />
                <Route
                    path="/a-propos/contributeureuses/"
                    element={<Contributeureuses />}
                />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
