//Imports of external libraries
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Internal dependancies
import Temp from "./pages/Temp"

//Definition of the rooter. The currentPage state is defined here to be used in the Header : we underline the navigation link if we are in the corresponding route
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Temp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
