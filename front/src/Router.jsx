//Import de librairies externes
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Dépendences internes
import Accueil from "./pages/Accueil"
import E404 from "./pages/E404"

//Définitions des routes du site internet
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
