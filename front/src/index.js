//Import de librairies externes
import React from "react"
import ReactDOM from "react-dom/client"

//Dépendences internes
import Router from "./Router"
import PiedDePage from "./components/PiedDePage"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router />
        <PiedDePage />
    </React.StrictMode>
)
